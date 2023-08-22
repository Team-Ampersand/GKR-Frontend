import './globals.css';
import type { Metadata } from 'next';
import { Fraunces } from 'next/font/google';

const FrauncesFont = Fraunces({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '홈페이지',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={FrauncesFont.className}>{children}</body>
    </html>
  );
}
