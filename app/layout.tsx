import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Gnb from "./components/common/Gnb";
import Footer from "./components/common/Footer";
import CallBtn from "./components/common/CallBtn";
import TopButton from "./components/common/TopBtn";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.labelmc.co.kr/"),
  title: {
    default: "씨엘엠(CLM) | 산업용 기계 · 설비 전문 제조",
    template: "%s | 씨엘엠(CLM)",
  },
  description: "자동라벨러, 인쇄라벨러, 특주형 라벨러 전문 제조사 씨엘엠. CAD-150, CAU&PAU, CASS-150 등 제품 정보와 시공/적용 영상을 확인하세요.",
  keywords: ["씨엘엠", "CLM", "자동라벨러", "인쇄라벨러", "라벨러", "특주라벨러"],
  alternates: {
    canonical: "https://www.labelmc.co.kr",
  },
  openGraph: {
    title: "씨엘엠",
    description: "씨엘엠(CLM)은 산업 현장의 효율성과 안전성을 극대화하는 산업용 기계 및 설비 전문 제조 기업입니다.",
    // url: "https://www.daechanggc.com",
    siteName: "씨엘엠",
    // images: [
    //   {
    //     // url: 'https://www.daechanggc.com/images/og_image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: "씨엘엠 미리보기 이미지",
    //   },
    // ],
    locale: "ko_KR",
    type: "website",
  },
  // other: {
  //   "naver-site-verification": "46a50af1b9c801b2cc676d523ffb4ec2b96300d7",
  // },
  icons: {
    icon: "/favicon.png",
  },
  other: {
    // "google-site-verification": "구글_콘솔에서_받은_코드", // e.g. abcdefg...
    "naver-site-verification": "de252da3fda86051c3d46e36eb89c14dcc58e851", // e.g. 1234567...
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TopButton />
        <CallBtn />
        <Gnb />
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
                <p className="mt-4 text-gray-600">페이지를 불러오는 중...</p>
              </div>
            </div>
          }
        >
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
