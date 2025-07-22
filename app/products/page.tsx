"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Product } from "@/type/product";
import { supabase } from "@/lib/supabase";
import { useRouter, useSearchParams } from "next/navigation";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 8;

export default function Products() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const [products, setProducts] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState(0); // 전체 아이템 수
  const [user, setUser] = useState<any>(null);

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  // 로그인 유저 확인
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    fetchUser();
  }, []);

  // 제품 목록 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/product_intro`, {
          params: {
            page: currentPage,
            pageSize: ITEMS_PER_PAGE,
          },
        });

        setProducts(res.data.items || []);
        setTotalCount(res.data.totalCount); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <div className="my-20 flex flex-col justify-center items-center w-full max-w-[1440px] pb-20 px-4 mx-auto">
      <h1 className="text-3xl font-bold text-center w-full border-b mb-6 pb-6">제품 사진</h1>

      {products.length === 0 ? (
        <p className="text-gray-500 text-lg py-20">상품 준비중입니다.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {products.map((item, index) => (
              <div key={item.id ?? index} className="item text-center p-4 rounded-lg shadow border h-[370px] flex flex-col justify-between">
                <div className="relative w-full h-[300px] mb-2">
                  <Image src={item.file_url} alt={item.title} fill className="object-contain" />
                </div>
                <div>
                  <p className="font-bold text-sm">{item.title}</p>
                  {item.content && <p className="text-zinc-500 text-xs">{item.content}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <Pagination>
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
        </>
      )}
    </div>
  );
}
