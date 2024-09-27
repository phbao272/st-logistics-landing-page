'use client';

import { AppShell, AppShellMain } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { MainPaper } from './main-paper';
import { Header } from './header';
import classes from '@/components/shared/layouts/Layout.module.css';
import { Footer } from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const LayoutWithHeaderFooter = ({ children }: LayoutProps) => {
  const [opened, { toggle, close: closeNavbar }] = useDisclosure(false);

  return (
    <AppShell header={{ height: 90 }} layout="alt">
      <AppShell.Header>
        <Header toggle={toggle} opened={opened} />
      </AppShell.Header>

      <AppShellMain className={classes.layout}>
        <MainPaper>{children}</MainPaper>
      </AppShellMain>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};
