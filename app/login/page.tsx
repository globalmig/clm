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

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        alert("로그인 상태입니다");
        router.push("/manager");
      } else {
        setUser(data.user);
      }
    };

    fetchUser();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } else {
      router.push("/manager");
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-32 space-y-4 mb-32">
      <h1 className="text-2xl font-bold">관리자 로그인</h1>
      <input type="email" placeholder="이메일" className="w-full border p-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="비밀번호" className="w-full border p-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p className="text-red-500">{error}</p>}
      <button className="w-full bg-black text-white py-2 rounded">로그인</button>
    </form>
  );
}
