"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Inquiry } from "@/type/product";

interface PageProps {
  params: { id: string };
}

export default function BoardDetailPage({ params }: PageProps) {
  const [inquiry, setInquiry] = useState<Inquiry | null>(null);
  const [inputPassword, setInputPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
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

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inquiry && inputPassword === inquiry.password) {
      setIsVerified(true);
      setError("");
    } else {
      setError("비밀번호가 일치하지 않습니다.");
    }
  };

  if (!inquiry) {
    return <p className="text-center py-20">게시글을 불러오는 중입니다...</p>;
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-12">
      {!isVerified ? (
        <form onSubmit={handlePasswordSubmit} className="border rounded-lg p-8 shadow max-w-[500px] mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-center">비밀번호 확인</h2>
          <p className="text-sm text-gray-500 mb-4 text-center">이 글은 보호되어 있습니다. 비밀번호를 입력해주세요.</p>
          <input type="password" value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} placeholder="비밀번호 입력" className="w-full border rounded px-4 py-2 mb-4" required />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            확인
          </button>
        </form>
      ) : (
        <div className="border rounded-xl px-6 py-10 shadow">
          <h1 className="text-2xl font-bold mb-6 border-b pb-4">{inquiry.title}</h1>

          <div className="mb-4 text-sm text-gray-500 flex justify-between">
            <span>작성자: {inquiry.name}</span>
            <span>연락처: {inquiry.content}</span>
            <span>
              작성일:{" "}
              {new Date(inquiry.created_at).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </span>
          </div>

          <div className="text-base whitespace-pre-line leading-relaxed pt-6">{inquiry.content}</div>

          <div className="mt-10 text-right">
            <button onClick={() => router.push(`/board/edit/${inquiry.id}`)} className="inline-block px-4 py-2 rounded border mr-4  text-zinc-800 hover:bg-gray-700 hover:text-white">
              수정하기
            </button>
            <button onClick={() => router.push("/board")} className="inline-block px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700">
              목록으로
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
