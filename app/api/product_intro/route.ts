import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// 목록 조회
export async function GET(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });

  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 8;

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, count, error } = await supabase.from("product_intro").select("*", { count: "exact" }).range(from, to).order("id", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    items: data || [],
    totalCount: count || 0,
  });
}

// 항목 삭제
export async function DELETE(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "삭제할 ID가 없습니다." }, { status: 400 });
  }

  const { error } = await supabase.from("product_intro").delete().eq("id", id);

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

  const { error } = await supabase.from("product_intro").update(rest).eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
