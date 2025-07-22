// app/api/board/[id]/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET(req: Request, context: { params: { id: string } }) {
  const { id } = context.params;

  if (!id) {
    return NextResponse.json({ message: "잘못된 요청입니다." }, { status: 400 });
  }

  try {
    const { data, error } = await supabase.from("customer_inquiry").select("*").eq("id", id).single();

    if (error || !data) {
      return NextResponse.json({ message: "게시글을 찾을 수 없습니다." }, { status: 404 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error("❌ 게시글 조회 중 오류:", err);
    return NextResponse.json({ message: "서버 오류입니다." }, { status: 500 });
  }
}

export async function PUT(req: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  const body = await req.json();
  const { title, content, password } = body;

  const { data: existing, error: fetchError } = await supabase.from("customer_inquiry").select("password").eq("id", id).single();

  if (fetchError || !existing) {
    return NextResponse.json({ message: "게시글을 찾을 수 없습니다." }, { status: 404 });
  }

  if (existing.password !== password) {
    return NextResponse.json({ message: "비밀번호가 일치하지 않습니다." }, { status: 403 });
  }

  const { error } = await supabase.from("customer_inquiry").update({ title, content }).eq("id", id);

  if (error) {
    return NextResponse.json({ message: "수정 실패" }, { status: 500 });
  }

  return NextResponse.json({ message: "수정 완료" }, { status: 200 });
}
