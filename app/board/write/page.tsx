"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function BoardWritePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: 서버에 데이터 전송 처리
    console.log("작성된 글:", { name, title, content, password });

    // 작성 후 리스트로 이동
    router.push("/board");
  };

  return (
    <div className="max-w-[800px] mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6 border-b pb-4">문의글 작성</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 이름 */}
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            이름
          </label>
          <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>

        {/* 제목 */}
        <div>
          <label htmlFor="title" className="block font-semibold mb-1">
            제목
          </label>
          <input id="title" type="text" required value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>

        {/* 비밀번호 */}
        <div>
          <label htmlFor="password" className="block font-semibold mb-1">
            비밀번호 (글 수정/삭제 시 필요)
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="4자리 이상 입력"
            minLength={4}
          />
        </div>

        {/* 내용 */}
        <div>
          <label htmlFor="content" className="block font-semibold mb-1">
            내용
          </label>
          <textarea id="content" required value={content} onChange={(e) => setContent(e.target.value)} rows={8} className="w-full border rounded px-3 py-2" />
        </div>

        {/* 버튼 */}
        <div className="flex justify-end gap-3">
          <button type="button" onClick={() => router.back()} className="px-4 py-2 rounded border hover:bg-gray-100">
            취소
          </button>
          <button type="submit" className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800">
            작성하기
          </button>
        </div>
      </form>
    </div>
  );
}
