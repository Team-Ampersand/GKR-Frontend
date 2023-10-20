import Providers from './provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div id="__next">
          <Providers>
            <main>{children}</main>
          </Providers>
        </div>
      </body>
    </html>
  );
}
