import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// 게시글 단건 조회
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const supabase = createRouteHandlerClient({ cookies });

  const { data, error } = await supabase.from("product_option").select("*").eq("id", params.id).single();

  if (error || !data) {
    return NextResponse.json({ error: "게시글을 찾을 수 없습니다." }, { status: 404 });
  }

  return NextResponse.json(data);
}

// 게시글 수정
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const supabase = createRouteHandlerClient({ cookies });

  const body = await req.json(); // { title, content }

  const { title, content } = body;

  if (!title || !content) {
    return NextResponse.json({ error: "필수 항목 누락" }, { status: 400 });
  }

  const { error } = await supabase.from("product_option").update({ title, content }).eq("id", params.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

// 항목 삭제
export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const supabase = createRouteHandlerClient({ cookies });

  if (!params.id) {
    return NextResponse.json({ error: "삭제할 ID가 없습니다." }, { status: 400 });
  }

  const { error } = await supabase.from("product_option").delete().eq("id", params.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
