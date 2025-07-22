import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// 목록 조회
export async function GET(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });

  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 10;

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, count, error } = await supabase.from("customer_inquiry").select("*", { count: "exact" }).range(from, to).order("id", { ascending: false }); // 최신 글이 위로

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    items: data || [],
    totalCount: count || 0,
  });
}

// 글 등록
export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { name, contact, title, content, password } = await req.json();

  if (!name || !contact || !title || !content || !password) {
    return NextResponse.json({ error: "필수 항목 누락" }, { status: 400 });
  }

  const { error } = await supabase.from("customer_inquiry").insert([{ name, contact, title, content, password }]);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true }, { status: 200 });
}

// 글 수정
export async function PATCH(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { id, title, content, password } = await req.json();

  if (!id || !title || !content || !password) {
    return NextResponse.json({ error: "필수 항목 누락" }, { status: 400 });
  }

  // 비밀번호 일치 확인
  const { data: existing, error: fetchError } = await supabase.from("customer_inquiry").select("password").eq("id", id).single();

  if (fetchError || !existing || existing.password !== password) {
    return NextResponse.json({ error: "비밀번호가 일치하지 않거나 존재하지 않는 글입니다." }, { status: 401 });
  }

  const { error } = await supabase.from("customer_inquiry").update({ title, content }).eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true }, { status: 200 });
}

// 글 삭제
export async function DELETE(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { id, password } = await req.json();

  if (!id || !password) {
    return NextResponse.json({ error: "필수 항목 누락" }, { status: 400 });
  }

  // 비밀번호 확인
  const { data: existing, error: fetchError } = await supabase.from("customer_inquiry").select("password").eq("id", id).single();

  if (fetchError || !existing || existing.password !== password) {
    return NextResponse.json({ error: "비밀번호가 일치하지 않거나 존재하지 않는 글입니다." }, { status: 401 });
  }

  const { error } = await supabase.from("customer_inquiry").delete().eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true }, { status: 200 });
}
