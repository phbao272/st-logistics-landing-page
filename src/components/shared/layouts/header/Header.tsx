'use client';

import { useState, useEffect } from 'react';
import { Burger, Flex, Group, Image } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tss } from '@libs/utils/tss-style';
import { MainContainer } from '@shared/layouts';
import React from 'react';
import { ButtonCustom } from '../../buttons';
import { IconBrandFacebookFilled, IconPhone } from '@tabler/icons-react';
import { DrawerHeader } from './components';
import { twMerge } from 'tailwind-merge';

export const HEADER = [
  { title: 'Trang chủ', href: '/' },
  { title: 'Bảng giá', href: '/bang-gia' },
  { title: 'Check vận đơn', href: '/check-van-don' },
  { title: 'Chính sách', href: '/chinh-sach' },
];

const isActiveHeader = (pathname: string, href: string[]) =>
  href.some((h) => pathname === `${h}/` || pathname === `${h}`);

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(false);
  const { classes, cx } = useStyles({
    headerScrolled: scrolled,
    hasBackgroundHeader: isActiveHeader(pathname, ['/check-van-don', '/chinh-sach']),
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => setDrawerOpened((o) => !o);

  return (
    <>
      <header className={cx(classes.header, { [classes.headerScrolled]: scrolled })}>
        <MainContainer>
          <Group h="100%" px="md" className={classes.headerContent}>
            <Link href={'/'}>
              <Image
                src={'/images/logo-white-remove-bg.png'}
                alt="logo"
                className={twMerge(classes.logo)}
              />
            </Link>

            <Flex className={classes.desktopMenu}>
              {HEADER.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  prefetch
                  className={`${classes.headerNavLink} ${pathname === `${item.href}/` || pathname === `${item.href}` ? 'active' : ''}`}
                >
                  {item.title}
                </Link>
              ))}

              <Link href={'https://kh.sota.onl'} target="_blank" className={classes.headerNavLink}>
                Web theo dõi
              </Link>

              <ButtonCustom variant="outline" className="w-fit px-4" size="lg">
                <Link href="tel:+84989559828" target="_blank">
                  <IconPhone size={20} />
                </Link>
              </ButtonCustom>
              <Link href="https://www.facebook.com/sotalogistics" target="_blank">
                <ButtonCustom
                  className="w-fit"
                  size="lg"
                  leftSection={<IconBrandFacebookFilled size={20} />}
                >
                  Fanpage
                </ButtonCustom>
              </Link>
            </Flex>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className={classes.burger}
              size="sm"
            />
          </Group>
        </MainContainer>
      </header>

      <DrawerHeader drawerOpened={drawerOpened} toggleDrawer={toggleDrawer} />
    </>
  );
}

const useStyles = tss
  .withParams<{ headerScrolled: boolean; hasBackgroundHeader: boolean }>()
  .create(({ headerScrolled, hasBackgroundHeader }) => ({
    header: {
      padding: '8px 0px',
      zIndex: 1000,
      transition: 'background-color 0.3s ease',
      height: 90,
      backgroundColor: hasBackgroundHeader ? '#1B264A' : 'transparent',
    },

    headerScrolled: {
      backgroundColor: '#1B264A',
    },

    headerContent: {
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    desktopMenu: {
      gap: 40,
      alignItems: 'center',

      '@media (max-width: 1024px)': {
        display: 'none',
      },
    },

    headerNavLink: {
      color: '#FFFFFF',
      fontSize: 'clamp(0.75rem, 0.6068rem + 0.2235vw, 0.875rem)',
      fontWeight: 600,
      textDecoration: 'none',
      position: 'relative',
      transition: 'color 0.3s ease',
      letterSpacing: 0.7,
      padding: '15px 0px',
      textTransform: 'uppercase',

      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 10,
        opacity: 0,
        left: 0,
        width: '100%',
        height: 2,
        backgroundColor: 'white',
        transition: 'all 0.25s ease',
      },

      '&:hover::after': {
        bottom: 0,
        opacity: 1,
      },

      '&.active': {
        '&::after': {
          bottom: '0 !important',
          opacity: '1 !important',
        },
      },
    },

    logo: {
      height: headerScrolled ? 55 : 70,
      transition: 'height 0.3s ease',
      objectFit: 'contain',
      width: 'auto',
    },

    burger: {
      display: 'none',

      '@media (max-width: 1024px)': {
        backgroundColor: 'white',
        borderRadius: 12,
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      },
    },
  }));
