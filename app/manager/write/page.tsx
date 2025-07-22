"use client";

import React, { useState } from "react";
import axios from "axios";
import { routeModule } from "next/dist/build/templates/app-page";
import { useRouter } from "next/navigation";

export default function AdminPostPage() {
  const router = useRouter();
  const [type, setType] = useState("product_intro");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) return alert("파일을 선택해주세요.");

    const formData = new FormData();
    formData.append("type", type);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("file", file);

    setLoading(true);

    try {
      const res = await axios.post("/api/admin/upload", formData);
      alert("등록 완료!");
      router.push("/manager");
    } catch (err) {
      alert("등록 실패");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mb-20">
      <h1 className="text-2xl font-bold mb-6">게시글 업로드</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 타입 선택 */}
        <div>
          <label className="block mb-1 font-semibold">게시판 타입</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="w-full border px-3 py-2 rounded">
            <option value="product_intro">제품소개</option>
            <option value="product_option">옵션제품</option>
            <option value="product_video">제품영상</option>
          </select>
        </div>

        {/* 제목 */}
        <div>
          <label className="block mb-1 font-semibold">제목</label>
          <input type="text" value={title} placeholder="제목을 입력하세요." onChange={(e) => setTitle(e.target.value)} className="w-full border px-3 py-2 rounded" required />
        </div>

        {/* 설명 */}
        <div>
          <label className="block mb-1 font-semibold">내용</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full border px-3 py-2 rounded" rows={4} placeholder="게시글 내용을 입력하세요."></textarea>
        </div>

        {/* 파일 업로드 */}
        <div>
          <label className="block mb-1 font-semibold">{type === "product_video" ? "영상 파일" : "이미지 파일"}</label>
          <input type="file" accept={type === "product_video" ? "video/*" : "image/*"} onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="w-full" />
        </div>

        <button type="submit" className={`w-full bg-black text-white py-2 rounded hover:bg-gray-800 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}>
          {loading === true ? "..." : "등록하기"}
        </button>
      </form>
    </div>
  );
}
