import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "인증된 관리자만 접근 가능합니다." }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const type = formData.get("type") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const rawFile = formData.get("file");

    if (!type || !title || !rawFile || typeof rawFile === "string") {
      return NextResponse.json({ error: "필수 항목 누락" }, { status: 400 });
    }

    // ✅ 허용된 테이블만 통과
    const allowedTables = ["product_intro", "product_option", "product_video"];
    if (!allowedTables.includes(type)) {
      return NextResponse.json({ error: "유효하지 않은 type 값입니다." }, { status: 400 });
    }

    const tableName = type;

    const file = rawFile as Blob;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const fileName = (rawFile as File).name || `upload_${Date.now()}`;
    const safeFileName = encodeURIComponent(fileName).replace(/%/g, "_");
    const filePath = `${type}/${Date.now()}/${safeFileName}`;
    const contentType = (rawFile as File).type || "application/octet-stream";

    const { error: uploadError } = await supabase.storage.from("media").upload(filePath, buffer, {
      contentType,
    });

    if (uploadError) {
      console.error("❌ 업로드 실패:", uploadError);
      return NextResponse.json({ error: "파일 업로드 실패" }, { status: 500 });
    }

    const publicUrl = supabase.storage.from("media").getPublicUrl(filePath).data.publicUrl;

    const { error: insertError } = await supabase.from(tableName).insert([
      {
        title,
        content,
        file_url: publicUrl,
      },
    ]);

    if (insertError) {
      console.error("❌ DB 저장 실패:", insertError);
      return NextResponse.json({ error: "DB 저장 실패" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("❌ 서버 처리 실패:", error);
    return NextResponse.json({ error: "서버 내부 오류" }, { status: 500 });
  }
}
