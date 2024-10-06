'use client';

import { AppShell, AppShellMain } from '@mantine/core';
import React from 'react';
import { MainPaper } from './main-paper';
import { Header } from './header';
import classes from '@/components/shared/layouts/Layout.module.css';
import { Footer } from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const LayoutWithHeaderFooter = ({ children }: LayoutProps) => {
  return (
    <>
      <AppShell header={{ height: 90 }} layout="alt" className="overflow-hidden">
        <AppShell.Header className="border-none bg-transparent">
          <Header />
        </AppShell.Header>

        <AppShellMain className={classes.layout}>
          <MainPaper>{children}</MainPaper>
        </AppShellMain>
      </AppShell>
      <Footer />
    </>
  );
};
