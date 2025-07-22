import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// 목록 조회
export async function GET() {
  const supabase = createRouteHandlerClient({ cookies });

  const { data, error } = await supabase.from("product_option").select("*").order("id", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// 항목 삭제
export async function DELETE(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "삭제할 ID가 없습니다." }, { status: 400 });
  }

  const { error } = await supabase.from("product_option").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

// 항목 수정
export async function PATCH(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { id, ...rest } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "수정할 ID가 없습니다." }, { status: 400 });
  }

  const { error } = await supabase.from("product_option").update(rest).eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
