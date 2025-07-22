"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Inquiry } from "@/type/product";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 10;

export default function Board() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const [inquiry, setInquiry] = useState<Inquiry[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/board", {
          params: {
            page: currentPage,
            pageSize: ITEMS_PER_PAGE,
          },
        });
        setInquiry(res.data.items || []);
        setTotalCount(res.data.totalCount || 0);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center border-b pb-6 mb-10">문의 게시판</h1>

      <div className="w-full border rounded-lg overflow-hidden">
        <table className="table-fixed w-full text-left text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3 w-[10%]">번호</th>
              <th className="px-4 py-3 w-[60%] text-center">제목</th>
              <th className="px-4 py-3 w-[15%]">작성자</th>
              <th className="px-4 py-3 w-[15%]">작성일</th>
            </tr>
          </thead>
          <tbody>
            {inquiry.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-500">
                  등록된 문의가 없습니다.
                </td>
              </tr>
            ) : (
              inquiry.map((post, index) => (
                <tr key={post.id} className="border-b hover:bg-gray-50 cursor-pointer" onClick={() => router.push(`/board/${post.id}`)}>
                  <td className="px-4 py-3">{totalCount - ((currentPage - 1) * ITEMS_PER_PAGE + index)}</td>
                  <td className="px-4 py-3 truncate text-center hover:underline">{post.title}</td>
                  <td className="px-4 py-3">{post.name}</td>
                  <td className="px-4 py-3">
                    {new Date(post.created_at).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {inquiry.length > 0 && (
        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href={`?page=${Math.max(currentPage - 1, 1)}`} aria-disabled={currentPage === 1} />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <PaginationItem key={idx}>
                <PaginationLink href={`?page=${idx + 1}`} isActive={currentPage === idx + 1}>
                  {idx + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href={`?page=${Math.min(currentPage + 1, totalPages)}`} aria-disabled={currentPage === totalPages} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      <div className="text-right mt-6">
        <Link href="/board/write" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          글쓰기
        </Link>
      </div>
    </div>
  );
}
