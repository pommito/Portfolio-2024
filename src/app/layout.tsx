import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import Header from '@/components/Header';
// import Grid from '@/components/Grid';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/animations/SmoothScroll';

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
        className={`${dotemp8bit.variable} ${ppNeueMontrealBook.variable} ${ppNeueMontreal.variable} antialiased relative mx-auto max-w-[1920px] `}
      >
        <SmoothScroll>
          {/* <Grid /> */}
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
