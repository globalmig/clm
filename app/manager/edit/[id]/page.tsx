"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";

export default function AdminEditPage() {
  const { id } = useParams();
  const router = useRouter();

  const [type, setType] = useState("product_intro");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        alert("로그인이 필요합니다.");
        router.push("/login");
      } else {
        setUser(data.user);
      }
    };
    checkUser();
  }, [router]);

  // 기존 데이터 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/product_intro/${id}`);
        const data = res.data;

        setTitle(data.title);
        setContent(data.content);
        setType("product_intro"); // or data.type if available
        // 이미지는 미리보기만 보여주고 수정은 새 파일 선택 시에만
      } catch (err) {
        console.error("수정용 데이터 로딩 실패", err);
        alert("게시글 정보를 불러오지 못했습니다.");
        router.push("/manager");
      }
    };

    if (id) fetchData();
  }, [id]);

  // 제출
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (file) formData.append("file", file);

    setLoading(true);

    try {
      await axios.patch(`/api/product_intro/${id}`, formData);
      alert("수정 완료!");
      router.push("/manager");
    } catch (err) {
      console.error("수정 실패", err);
      alert("수정에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mb-20">
      <h1 className="text-2xl font-bold mb-6">게시글 수정</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">제목</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">내용</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full border px-3 py-2 rounded" rows={4} />
        </div>

        <div>
          <label className="block mb-1 font-semibold">이미지/영상 파일 변경 (선택)</label>
          <input type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
        </div>

        <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800" disabled={loading}>
          {loading ? "수정 중..." : "수정하기"}
        </button>
      </form>
    </div>
  );
}
