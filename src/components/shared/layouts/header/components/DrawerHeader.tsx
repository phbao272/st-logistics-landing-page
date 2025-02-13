'use client';

import { tss } from '@/libs/utils/tss-style';
import { Box, Divider, Drawer, Text } from '@mantine/core';
import React from 'react';

import { Flex, Image } from '@mantine/core';
import Link from 'next/link';

import { IconBrandFacebook, IconPhone, IconX } from '@tabler/icons-react';
import { ButtonCustom } from '@/components/shared/buttons';
import { HEADER } from '../Header';
import { usePathname } from 'next/navigation';

interface Props {
  drawerOpened: boolean;
  toggleDrawer: () => void;
}

export const DrawerHeader = ({ drawerOpened, toggleDrawer }: Props) => {
  const { classes } = useStyles();
  const pathname = usePathname();

  return (
    <Drawer
      opened={drawerOpened}
      onClose={toggleDrawer}
      position="right"
      size="md"
      padding="xl"
      className={classes.drawer}
      withCloseButton={false}
      overlayProps={{ opacity: 0.5, blur: 4 }}
      transitionProps={{
        duration: 700,
        transition: 'fade-left',
      }}
      maw={300}
    >
      <Box className={classes.drawerContent}>
        <IconX onClick={toggleDrawer} size={24} className="absolute right-5 top-5 cursor-pointer" />

        <Flex justify="space-between" align="center" className="mb-4 pt-12">
          <Image
            src={'/images/logo-white-remove-bg.png'}
            alt="logo"
            className={classes.drawerLogo}
          />
        </Flex>

        <Text className={classes.drawerTagline}>
          Không chỉ giao hàng, chúng tôi giao cả niềm tin.
        </Text>

        <Divider color="#414c6e" className="my-8" />

        <Text className={classes.drawerMenuTitle}>MENU</Text>

        <Flex direction="column" gap="md">
          {HEADER.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              onClick={toggleDrawer}
              className={`${classes.drawerNavLink} ${pathname === `${item.href}/` || pathname === `${item.href}` ? 'active' : ''}`}
            >
              {item.title}
            </Link>
          ))}
          <Link
            href={'https://kh.sota.onl'}
            onClick={toggleDrawer}
            className={classes.drawerNavLink}
          >
            Web theo dõi
          </Link>
        </Flex>

        <Divider color="#414c6e" className="my-8" />

        <Text className={classes.drawerMenuTitle}>Liên hệ</Text>

        <Flex gap="md" mt="md">
          <Link href="tel:+84989559828" target="_blank">
            <ButtonCustom variant="outline" size="lg">
              <IconPhone size={20} />
            </ButtonCustom>
          </Link>
          <ButtonCustom
            variant="outline"
            size="lg"
            onClick={() => window.open('https://www.facebook.com/sotalogistics', '_blank')}
          >
            <IconBrandFacebook size={20} />
          </ButtonCustom>
        </Flex>
      </Box>
    </Drawer>
  );
};

const useStyles = tss.create(() => ({
  drawer: {
    '& .mantine-Drawer-content': {
      backgroundColor: '#1B264A',
      borderLeftWidth: '10px',
      borderRadius: '50px 0 0 50px',
      boxShadow: '2px 8px 23px 3px rgba(0,0,0,0.2)',
      borderColor: '#F7F8FF',
      borderStyle: 'double',
    },
  },

  drawerContent: {
    color: '#FFFFFF',
  },

  drawerLogo: {
    width: 150,
  },

  drawerTagline: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 30,
  },

  drawerMenuTitle: {
    fontSize: 18,
    fontWeight: 300,
    marginBottom: 15,
  },

  drawerNavLink: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 300,
    textDecoration: 'none',
    transition: 'opacity 0.3s ease',

    '&:hover': {
      opacity: 0.7,
    },

    '&.active': {
      fontWeight: 700,
    },
  },
}));
