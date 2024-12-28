import type { Metadata } from 'next';

import Header from '@/layouts/Header';
import { ThemeProvider } from '@/layouts/theme/Provider';
import '@/lib/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='flex min-h-screen flex-col font-pretendard'>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
