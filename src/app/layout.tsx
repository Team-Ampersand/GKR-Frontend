import { Fraunces } from 'next/font/google';
import Providers from './provider';
import Head from 'next/head';

const FrauncesFont = Fraunces({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={FrauncesFont.className}>
        <div id="__next">
          <Providers>
            <main>{children}</main>
          </Providers>
        </div>
      </body>
    </html>
  );
}
