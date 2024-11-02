import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
// import "dayjs/locale/vi";
import 'dayjs/locale/ru';

import './globals.css';
import 'mantine-react-table/styles.css';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import { theme } from '@libs/theme';

import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import {
  Provider,
  QueryClientProvider,
  ModalProvider,
  ToastProvider,
  JotaiProvider,
} from '@/providers';
import { DatesProvider } from '@mantine/dates';
import WebVitals from '@/components/shared/web-vitals';
import React from 'react';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Sota Logistics',
  description: 'Sota Logistics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link rel="preload" as="video" href="https://vimeo.com/942971586?share=copy" />
        <link
          rel="preload"
          as="image"
          href="https://yourbestpartner.eu/wp-content/uploads/2024/05/bg-video-6639c7b0520cd.webp"
        />
        <link
          rel="preload"
          as="image"
          href="https://yourbestpartner.eu/wp-content/uploads/2024/05/img-66698-66462d09b8d4b.webp"
        />
        <link
          rel="preload"
          as="image"
          href="https://yourbestpartner.eu/wp-content/uploads/2024/05/img-022-6645f1e5d22f5.webp"
        />
        <link
          rel="preload"
          as="image"
          href="https://yourbestpartner.eu/wp-content/uploads/2024/05/img-9-66437d05d04c5.webp"
        />
        <link rel="preload" as="video" href="/videos/bg-1.mp4" />
        <link
          rel="preload"
          as="document"
          type="application/pdf"
          href="https://drive.google.com/file/d/1fBLSzRT6_uUato-W6aBNohmlm2NDuqfy/preview"
        />
      </head>
      <body className={outfit.className}>
        <WebVitals />
        <JotaiProvider>
          <QueryClientProvider>
            <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
              <MantineProvider defaultColorScheme="light" theme={theme}>
                <DatesProvider
                  settings={{
                    locale: 'ru',
                    firstDayOfWeek: 0,
                    weekendDays: [0],
                    timezone: 'UTC',
                  }}
                >
                  <ModalProvider>
                    <ToastProvider />
                    <Provider>{children}</Provider>
                  </ModalProvider>
                </DatesProvider>
              </MantineProvider>
            </NextAppDirEmotionCacheProvider>
          </QueryClientProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
