import type { Metadata } from 'next';

import { Toaster } from '@/components/ui/toaster';
import { blogName } from '@/config/const';
import '@/config/globals.css';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { ThemeProvider } from '@/layouts/theme/Provider';
import { findLatestDates, getSortedPostList } from '@/lib/post';

export const metadata: Metadata = {
  title: blogName,
  description: 'BOBcost(밥코)의 개발블로그',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = await getSortedPostList();

  const result = findLatestDates(posts);
  return (
    <html
      lang='en'
      className='h-full scroll-my-20 scroll-smooth'
      suppressHydrationWarning
    >
      <body
        className='flex min-h-screen flex-col bg-background font-pretendard'
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme='dark'>
          <Header update={result.update} create={result.create} />
          <main className='relative block pt-header'>{children}</main>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
