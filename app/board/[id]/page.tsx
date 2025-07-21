"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";

const dummyPosts = [
  {
    id: 1,
    title: "제품 문의드립니다.",
    writer: "홍길동",
    date: "2025-07-21",
    content: "제품 관련하여 견적을 요청드립니다. 자세한 내용을 보내주세요.",
    password: "1234",
  },
  {
    id: 2,
    title: "납품 일정 확인 요청",
    writer: "김영희",
    date: "2025-07-20",
    content: "납품 예상 일정과 준비 사항 알려주세요.",
    password: "5678",
  },
  {
    id: 3,
    title: "A/S 관련 문의",
    writer: "이철수",
    date: "2025-07-19",
    content: "사용 중 문제가 발생했습니다. A/S 절차 안내 부탁드립니다.",
    password: "0000",
  },
];

export default function BoardDetailPage({ params }: { params: { id: string } }) {
  const post = dummyPosts.find((p) => p.id === Number(params.id));
  const [inputPassword, setInputPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  if (!post) {
    return notFound();
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === post.password) {
      setIsVerified(true);
      setError("");
    } else {
      setError("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="max-w-[800px] mx-auto px-4 py-12">
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
          <h1 className="text-2xl font-bold mb-6 border-b pb-4">{post.title}</h1>

          <div className="mb-4 text-sm text-gray-500 flex justify-between">
            <span>작성자: {post.writer}</span>
            <span>작성일: {post.date}</span>
          </div>

          <div className="text-base whitespace-pre-line leading-relaxed pt-6">{post.content}</div>

          <div className="mt-10 text-right">
            <a href="/board" className="inline-block px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700">
              목록으로
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
