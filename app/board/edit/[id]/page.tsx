"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Inquiry } from "@/type/product";

interface PageProps {
  params: { id: string };
}

export default function EditPage({ params }: PageProps) {
  const [inquiry, setInquiry] = useState<Inquiry | null>(null);
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchInquiry = async () => {
      try {
        const res = await axios.get(`/api/board/${params.id}`);
        setInquiry(res.data);
        setTitle(res.data.title);
        setContact(res.data.contact);
        setContent(res.data.content);
      } catch (err) {
        console.error("❌ 게시글 불러오기 실패:", err);
      }
    };

    fetchInquiry();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/api/board/${params.id}`, {
        title,
        contact,
        content,
        password,
      });
      alert("수정이 완료되었습니다.");
      router.push(`/board/${params.id}`);
    } catch (err) {
      alert("수정에 실패했습니다.");
      console.error(err);
    }
  };

  if (!inquiry) return <p className="text-center py-20">로딩 중...</p>;

  return (
    <div className="max-w-[700px] mx-auto py-12">
      <h1 className="text-2xl font-bold mb-6">게시글 수정</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block font-semibold mb-1">제목</label>
        <input className="w-full border px-4 py-2 rounded" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label className="block font-semibold mb-1">연락처</label>
        <input className="w-full border px-4 py-2 rounded" placeholder="연락처" value={contact} onChange={(e) => setTitle(e.target.value)} required />

        <label className="block font-semibold mb-1">내용</label>
        <textarea className="w-full border px-4 py-2 rounded h-40" placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} required />
        <input className="w-full border px-4 py-2 rounded" type="password" placeholder="작성 시 설정한 비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <div className="text-right">
          <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            수정 완료
          </button>
        </div>
      </form>
    </div>
  );
}
