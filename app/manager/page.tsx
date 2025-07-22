// app/manager/page.tsx
import dynamic from "next/dynamic";
import { Suspense } from "react";

// 동적으로 불러오기 (클라이언트 컴포넌트)
const Manager = dynamic(() => import("../components/Manager"), {
  ssr: false,
});

export default function Page() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Manager />
    </Suspense>
  );
}
