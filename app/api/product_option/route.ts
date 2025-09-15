import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });

  // 쿼리 읽기
  const { searchParams } = new URL(req.url);
  const page = Math.max(1, Number(searchParams.get("page") ?? "1"));
  const pageSize = Math.max(1, Number(searchParams.get("pageSize") ?? "8"));

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  // 전체 개수
  const { count, error: countErr } = await supabase.from("product_option").select("*", { count: "exact", head: true });

  if (countErr) {
    return NextResponse.json({ error: countErr.message }, { status: 500 });
  }

  // 최신순 정렬(새 글이 위로)
  const { data, error } = await supabase
    .from("product_option")
    .select("*")
    .order("created_at", { ascending: false, nullsFirst: false }) // created_at이 없다면 id desc로 변경
    .range(from, to);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ items: data ?? [], totalCount: count ?? 0 }, { headers: { "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate" } });
}

// 항목 삭제
export async function DELETE(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "삭제할 ID가 없습니다." }, { status: 400 });

  const { error } = await supabase.from("product_option").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true }, { status: 200 });
}

// 항목 수정
export async function PATCH(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { id, ...rest } = await req.json();
  if (!id) return NextResponse.json({ error: "수정할 ID가 없습니다." }, { status: 400 });

  const { error } = await supabase.from("product_option").update(rest).eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true }, { status: 200 });
}
