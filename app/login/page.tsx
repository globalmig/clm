"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error("세션 확인 에러:", error.message);
        }

        if (data.session?.user) {
          console.log("이미 로그인 상태입니다.");
          router.push("/manager");
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("세션 확인 중 오류 발생:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        throw error;
      }

      router.push("/manager");
    } catch (err: any) {
      setError(err.message || "로그인 중 오류가 발생했습니다");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-32 space-y-4 mb-32">
      <h1 className="text-2xl font-bold">관리자 로그인</h1>
      <input type="email" placeholder="이메일" className="w-full border p-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="비밀번호" className="w-full border p-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" disabled={loading} className={`w-full py-2 rounded ${loading ? "bg-gray-500" : "bg-black"} text-white`}>
        {loading ? "로그인 중..." : "로그인"}
      </button>
    </form>
  );
}
