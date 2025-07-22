"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { Product } from "@/type/product";

const BOARD_TYPES = [
  { label: "제품소개", value: "product_intro" },
  { label: "옵션제품", value: "option_product" },
  { label: "제품영상", value: "product_video" },
];

export default function Manager() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "product_intro";
  const [type, setType] = useState(initialType);
  const [user, setUser] = useState<any>(null);
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
        const res = await axios.get<Product[]>(`/api/${type}`);
        setProduct(res.data);
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
  };

  const handleEdit = (id: string) => {
    router.push(`/manager/edit/${id}`);
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
    <div className="p-8">
      <div className="max-w-[1440px] mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center border-b pb-6 mb-10">관리자페이지</h1>
        <div className="flex justify-center items-center mb-6 gap-2">
          {BOARD_TYPES.map((item) => (
            <button key={item.value} className={`border rounded px-2 py-1 ${type === item.value ? "bg-black text-white" : ""}`} onClick={() => handleTypeChange(item.value)}>
              {item.label}
            </button>
          ))}
          <button className={`border rounded px-2 py-1 ${type === "board" ? "bg-black text-white" : ""}`} onClick={() => handleTypeChange("board")}>
            고객 게시판
          </button>
        </div>
        <div className="w-full border rounded-lg overflow-hidden">
          {loading ? (
            <p className="text-center py-6">데이터 로딩 중입니다</p>
          ) : product.length === 0 ? (
            <p className="text-center py-6 text-gray-500">등록된 게시물이 없습니다.</p>
          ) : (
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
                      <Link href={type === "customer_board" ? `/manager/board/${item.id}` : "#"}>{item.title}</Link>
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
                        // <span className="text-gray-400">상세보기</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="flex gap-4 justify-between mt-4">
          <button onClick={handleLogout} className="text-red-500  border rounded px-2 py-1">
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
