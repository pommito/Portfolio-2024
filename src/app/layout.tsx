import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import Header from '@/components/layout/Header';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Grid from '@/components/ui/Grid';

const dotemp8bit = localFont({
  src: './fonts/Dotemp-8bit.woff',
  variable: '--font-dotemp-bit',
  weight: '500',
});
const ppNeueMontrealBook = localFont({
  src: './fonts/ppneuemontreal-book.woff',
  variable: '--font-pp-book',
  weight: '400',
});

const ppNeueMontreal = localFont({
  src: [
    {
      path: './fonts/ppneuemontreal-thin.woff',
      weight: '200',
      style: 'thin',
    },
    {
      path: './fonts/ppneuemontreal-book.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ppneuemontreal-medium.woff',
      weight: '500',
      style: 'medium',
    },
  ],
  variable: '--font-pp-neue-montreal',
});

export const metadata: Metadata = {
  title: 'Victor Lebecq',
  description: 'Freelance frontend developer',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dotemp8bit.variable} ${ppNeueMontrealBook.variable} ${ppNeueMontreal.variable} antialiased font-pp relative h-[100dvh] w-screen max-w-[1920px] mx-auto p-2`}
      >
        <div className="relative bg-white h-full w-full border rounded-md px-6 py-6">
          <Grid />
          <SmoothScroll>
            <Header />
            {children}
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
