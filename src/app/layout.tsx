import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import localFont from 'next/font/local';
import './globals.css';

import Header from '@/components/layout/Header';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Grid from '@/components/ui/Grid';

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
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${ppNeueMontreal.variable} bg-white antialiased font-pp relative h-auto min-h-[100dvh] sm:h-[100dvh] w-screen mx-auto p-4 overflow-hidden`}
        >
          <Grid />
          <SmoothScroll>
            <Header />
            {children}
          </SmoothScroll>
        </body>
      </html>
    </ViewTransitions>
  );
}
