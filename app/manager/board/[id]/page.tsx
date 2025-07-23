"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { Inquiry } from "@/type/product";

import { User } from "@supabase/supabase-js";

interface PageProps {
  params: { id: string };
}

export default function BoardDetailPage({ params }: PageProps) {
  const [inquiry, setInquiry] = useState<Inquiry | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  // 게시글 불러오기
  useEffect(() => {
    const fetchInquiry = async () => {
      try {
        const res = await axios.get(`/api/board/${params.id}`);
        setInquiry(res.data);
      } catch (err) {
        console.error("❌ 게시글 불러오기 실패:", err);
      }
    };

    fetchInquiry();
  }, [params.id]);

  if (!inquiry) {
    return <p className="text-center py-20">게시글을 불러오는 중입니다...</p>;
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-12">
      <div className="border rounded-xl px-6 py-10 shadow">
        <h1 className="text-2xl font-bold mb-6 border-b pb-4">{inquiry.title}</h1>

        <div className="mb-4 text-sm text-gray-500 flex justify-between">
          <span>작성자: {inquiry.name}</span>
          <span>연락처: {inquiry.content}</span>
          <span>
            작성일:
            {new Date(inquiry.created_at).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </span>
        </div>

        <div className="text-base whitespace-pre-line leading-relaxed pt-6">{inquiry.content}</div>

        <div className="mt-10 text-right">
          <button onClick={() => router.push("/manager?type=board")} className="inline-block px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700">
            목록으로
          </button>
        </div>
      </div>
    </div>
  );
}
