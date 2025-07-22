// app/manager/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { Product } from "@/type/product";
import { User } from "@supabase/supabase-js";

const BOARD_TYPES = [
  { label: "제품소개", value: "product_intro" },
  { label: "옵션제품", value: "product_option" },
  { label: "제품영상", value: "product_video" },
];

export default function Manager() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "product_intro";
  const [type, setType] = useState(initialType);
  const [user, setUser] = useState<User | null>(null);
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        alert("로그인이 필요합니다.");
        router.push("/login");
      } else {
        setUser(data.user);
      }
    };
    checkUser();
  }, [router]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/${type}`);
        const data = res.data;

        if (Array.isArray(data)) {
          setProduct(data);
        } else if (Array.isArray(data.items)) {
          setProduct(data.items);
        } else {
          setProduct([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    alert("로그아웃되었습니다.");
    router.push("/login");
    return;
  };

  const handleEdit = (id: string) => {
    router.push(`/manager/edit/${id}?type=${type}`);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    try {
      await axios.delete(`/api/${type}/${id}`);
      setProduct((prev) => prev.filter((item) => item.id !== id));
      alert("삭제 완료되었습니다");
      router.refresh();
    } catch (err) {
      console.error("삭제 실패", err);
      alert("삭제 실패");
    }
  };

  useEffect(() => {
    const newType = searchParams.get("type") || "product_intro";
    setType(newType);
  }, [searchParams]);

  const handleTypeChange = (newType: string) => {
    router.push(`/manager?type=${newType}`);
  };

  return (
    <div className="px-4">
      <div className="max-w-[1440px] mx-auto py-12">
        <h1 className="text-3xl font-bold text-center border-b pb-6 mb-10">관리자페이지</h1>
        {/* 모바일: 드롭다운 (sm 이하) */}
        <div className="block sm:hidden mb-6">
          <select value={type} onChange={(e) => handleTypeChange(e.target.value)} className="w-full border rounded px-4 py-2">
            {[...BOARD_TYPES, { label: "고객 게시판", value: "board" }].map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        {/* 데스크탑: 버튼 리스트 (sm 이상) */}
        <div className="hidden sm:flex justify-center items-center gap-2 mb-6">
          {[...BOARD_TYPES, { label: "고객 게시판", value: "board" }].map((item) => (
            <button key={item.value} className={`border rounded px-4 py-2 ${type === item.value ? "bg-black text-white" : ""}`} onClick={() => handleTypeChange(item.value)}>
              {item.label}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center py-6">데이터 로딩 중입니다</p>
        ) : product.length === 0 ? (
          <p className="text-center py-6 text-gray-500">등록된 게시물이 없습니다.</p>
        ) : (
          <>
            {/* ✅ 데스크탑 테이블 (md 이상) */}
            <div className="hidden md:block w-full border rounded-lg overflow-hidden">
              <table className="table-fixed w-full text-left text-sm">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-4 py-3 w-[10%]">번호</th>
                    <th className="px-4 py-3 w-[60%] text-center">제목</th>
                    <th className="px-4 py-3 w-[15%]">작성일</th>
                    <th className="px-4 py-3 w-[15%] text-center">관리</th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((item, index) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">{product.length - index}</td>
                      <td className="px-4 py-3 text-center truncate hover:underline">
                        <Link href={type === "board" ? `/manager/board/${item.id}` : "#"}>{item.title}</Link>
                      </td>
                      <td className="px-4 py-3">
                        {new Date(item.created_at).toLocaleDateString("ko-KR", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })}
                      </td>
                      <td className="px-4 py-3 flex gap-2 justify-center">
                        {type !== "board" ? (
                          <>
                            <button onClick={() => handleEdit(item.id)} className="border px-2 py-1 rounded bg-black text-white">
                              수정
                            </button>
                            <button onClick={() => handleDelete(item.id)} className="border px-2 py-1 rounded bg-red-500 text-white">
                              삭제
                            </button>
                          </>
                        ) : (
                          <Link href={`/manager/board/${item.id}`} className="border px-2 py-1 rounded bg-blue-500 text-white">
                            상세보기
                          </Link>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ✅ 모바일 카드형 (md 이하) */}
            <div className="md:hidden flex flex-col gap-4">
              {product.map((item, index) => (
                <div key={item.id} className="border rounded-lg p-4 shadow-sm">
                  <div className="text-xs text-gray-400 mb-1">No. {product.length - index}</div>
                  <div className="font-semibold text-base mb-1">{item.title}</div>
                  <div className="text-sm text-gray-600 mb-2">
                    {new Date(item.created_at).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </div>
                  <div className="flex flex-col gap-2">
                    {type !== "board" ? (
                      <>
                        <button onClick={() => handleEdit(item.id)} className="w-full border px-4 py-2 rounded bg-black text-white text-sm">
                          수정
                        </button>
                        <button onClick={() => handleDelete(item.id)} className="w-full border px-4 py-2 rounded bg-red-500 text-white text-sm">
                          삭제
                        </button>
                      </>
                    ) : (
                      <Link href={`/manager/board/${item.id}`} className="w-full border px-4 py-2 rounded bg-blue-500 text-white text-sm text-center">
                        상세보기
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="flex gap-4 justify-between mt-4 flex-wrap">
          <button onClick={handleLogout} className="text-red-500 border rounded px-2 py-1">
            로그아웃
          </button>
          <Link href="/manager/write" className="bg-black text-white rounded px-2 py-1 border">
            게시글 작성
          </Link>
        </div>
      </div>
    </div>
  );
}
