"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function BoardWritePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !title || !contact || !content || !password) {
      return alert("모든 내용을 입력해주세요.");
    }

    try {
      const res = await fetch("/api/board", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, title, contact, content, password }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "등록 실패");
      }

      alert("문의가 등록되었습니다.");
      router.push("/board");
    } catch (err) {
      console.error(err);
      alert("오류가 발생했습니다.");
    }
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

        {/* contact */}
        <div>
          <label htmlFor="contact" className="block font-semibold mb-1">
            연락처
          </label>
          <input id="contact" type="text" required value={contact} onChange={(e) => setContact(e.target.value)} className="w-full border rounded px-3 py-2" />
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
