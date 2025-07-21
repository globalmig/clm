import Link from "next/link";
import React from "react";

const dummyPosts = [
  {
    id: 1,
    title: "제품 문의드립니다.",
    writer: "홍길동",
    date: "2025-07-21",
  },
  {
    id: 2,
    title: "납품 일정 확인 요청",
    writer: "김영희",
    date: "2025-07-20",
  },
  {
    id: 3,
    title: "A/S 관련 문의",
    writer: "이철수",
    date: "2025-07-19",
  },
];

export default function Board() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center border-b pb-6 mb-10">문의 게시판</h1>

      <div className="w-full border rounded-lg overflow-hidden">
        <table className="table-fixed w-full text-left text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3 w-[10%]">번호</th>
              <th className="px-4 py-3 w-[60%] text-center">제목</th>
              <th className="px-4 py-3 w-[15%]">작성자</th>
              <th className="px-4 py-3 w-[15%]">작성일</th>
            </tr>
          </thead>
          <tbody>
            {dummyPosts.map((post, index) => (
              <tr key={post.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{dummyPosts.length - index}</td>
                <td className="px-4 py-3 truncate text-center">
                  <Link href={`/board/${post.id}`} className=" hover:underline">
                    {post.title}
                  </Link>
                </td>
                <td className="px-4 py-3">{post.writer}</td>
                <td className="px-4 py-3">{post.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-right mt-6">
        <Link href="/board/write" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          글쓰기
        </Link>
      </div>
    </div>
  );
}
