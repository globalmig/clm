import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Gnb from "./components/common/Gnb";
import Footer from "./components/common/Footer";
import CallBtn from "./components/common/CallBtn";
import TopButton from "./components/common/TopBtn";

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
  title: "대창강건",
  description: "가설방음벽, EGI 휀스, 홀딩도어, 각종 울타리, 휀스, 방음벽, 가드레일 및 다양한 시공 및 해체를 주 사업분야로 운영 중인 가설울타리 전문 기업 사이트",
  openGraph: {
    title: "대창강건",
    description: '가설방음벽, EGI 휀스, 홀딩도어, 각종 울타리, 휀스, 방음벽, 가드레일 및 다양한 시공 및 해체를 주 사업분야로 운영 중인 가설울타리 전문 기업 사이트',
    url: 'https://www.daechanggc.com',
    siteName: '대창강건',
    images: [
      {
        url: 'https://www.daechanggc.com/images/og_image.png',
        width: 1200,
        height: 630,
        alt: '대창강건 미리보기 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  other: {
    'naver-site-verification': '46a50af1b9c801b2cc676d523ffb4ec2b96300d7',
  },
  icons: {
    icon: '/favicon.ico',
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
