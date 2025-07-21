"use client";

import React, { useState } from "react";
import axios from "axios";

export default function AdminPostPage() {
  const [type, setType] = useState("intro"); // intro | option | video
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) return alert("파일을 선택해주세요.");

    const formData = new FormData();
    formData.append("type", type);
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("file", file);

    try {
      const res = await axios.post("/api/admin/upload", formData);
      alert("등록 완료!");
    } catch (err) {
      alert("등록 실패");
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">게시글 업로드</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 타입 선택 */}
        <div>
          <label className="block mb-1 font-semibold">게시판 타입</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="w-full border px-3 py-2 rounded">
            <option value="intro">제품소개</option>
            <option value="option">옵션제품</option>
            <option value="video">제품영상</option>
          </select>
        </div>

        {/* 제목 */}
        <div>
          <label className="block mb-1 font-semibold">제목</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border px-3 py-2 rounded" required />
        </div>

        {/* 설명 */}
        <div>
          <label className="block mb-1 font-semibold">내용</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border px-3 py-2 rounded" required />
        </div>

        {/* 파일 업로드 */}
        <div>
          <label className="block mb-1 font-semibold">{type === "video" ? "영상 파일" : "이미지 파일"}</label>
          <input type="file" accept={type === "video" ? "video/*" : "image/*"} onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="w-full" />
        </div>

        <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          등록하기
        </button>
      </form>
    </div>
  );
}
