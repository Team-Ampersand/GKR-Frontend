import GlobalStyle from '@/style/global';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import { Fraunces } from 'next/font/google';

const FrauncesFont = Fraunces({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={FrauncesFont.className}>
        <RecoilRoot>
          <GlobalStyle />
          {children}
          <ToastContainer />
        </RecoilRoot>
      </body>
    </html>
  );
}
