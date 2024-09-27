'use client';

import { useState, useEffect } from 'react';
import { Burger, Flex, Group, Image } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tss } from '@libs/utils/tss-style';
import { MainContainer } from '@shared/layouts';
import React from 'react';
import LogoSvg from '@/assets/svgs/logo.svg';

interface Props {
  toggle?: () => void;
  opened?: boolean;
}

const HEADER = [
  {
    title: 'Trang chủ',
    href: '/',
  },
  {
    title: 'Đặt hàng',
    href: '/dat-hang',
  },
  {
    title: 'Mã vận đơn',
    href: '/ma-van-don',
  },
  {
    title: 'Chính sách',
    href: '/chinh-sach',
  },
];

export function Header({ opened, toggle }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { classes, cx } = useStyles({
    headerScrolled: scrolled,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cx(classes.header, { [classes.headerScrolled]: scrolled })}>
      <MainContainer>
        <Group
          h="100%"
          px="md"
          style={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Image src={LogoSvg.src} alt="logo" className={classes.logo} />

          <Flex
            style={{
              gap: 40,
              alignItems: 'center',
            }}
          >
            {HEADER.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={`${classes.headerNavLink} ${pathname === `${item.href}/` ? 'active' : ''}`}
              >
                {item.title}
              </Link>
            ))}
          </Flex>

          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </MainContainer>
    </header>
  );
}

const useStyles = tss.withParams<{ headerScrolled: boolean }>().create(({ headerScrolled }) => ({
  header: {
    padding: '8px 0px',
    zIndex: 1000,
    transition: 'background-color 0.3s ease',
    height: '100%',
    backgroundColor: '#8f9ca3',
  },

  headerScrolled: {
    backgroundColor: '#1B264A',
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
      bottom: 14,
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
    height: headerScrolled ? 60 : 40,
    transition: 'height 0.3s ease',
  },
}));
