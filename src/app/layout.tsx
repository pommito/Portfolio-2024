import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

import Header from '@/components/layout/Header';
import SmoothScroll from '@/components/ui/SmoothScroll';

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
  metadataBase: new URL('https://victorlebecq.fr'),
  keywords: ['frontend developer', 'développeur frontend grenoble', 'victor lebecq'],
  title: {
    default: 'Victor Lebecq Frontend Developer',
    template: '%s - Victor Lebecq Frontend Developer',
  },
  openGraph: {
    description:
      'Victor is a french frontend developer based in Grenoble, France. Working with React, Wordpress, and NextJS.',
    images: [
      {
        url: 'https://victorlebecq.fr/og-image.webp',
        width: 1080,
        height: 690,
        alt: 'Victor Lebecq Frontend Developer',
      },
    ],
    siteName: 'Victor Lebecq Frontend Developer',
  },
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
          className={`${ppNeueMontreal.variable} antialiased font-pp relative h-auto min-h-[100dvh] sm:h-[100dvh] w-screen mx-auto p-4`}
        >
          <SmoothScroll>
            <Header />
            {children}
            <Analytics />
          </SmoothScroll>
        </body>
      </html>
    </ViewTransitions>
  );
}
