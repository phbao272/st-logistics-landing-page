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
  title: '...',
  description: '...',
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
