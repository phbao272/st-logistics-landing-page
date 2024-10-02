'use client';

import { tss } from '@/libs/utils/tss-style';
import { Container, Image } from '@mantine/core';
import { IconMail, IconPhone } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  const { classes } = useStyles();

  return (
    <div>
      <div className="bg-primary">
        <Container size={'lg'} className="flex gap-12 py-20">
          <div className="text-white">
            <Link href={'/'}>
              <Image
                src={
                  'https://yourbestpartner.eu/wp-content/uploads/2024/04/logo_Y_B_PARTNER_light-1024x157.png'
                }
                alt="logo"
                className={'h-[50px]'}
              />
            </Link>
            <p className="text-lg font-bold">YOUR PROVEN PARTNER IN LOGISTICS</p>
            <hr className="my-4 border-gray-500" />
            <p>Your Best Partner Sp. z o.o.</p>
            <p>NIP: 5588774411 KRS: 4444555222</p>
            <div className="mt-4 flex items-center">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <p>Poland — Ul. Osiedlowa 1/6, 64-316 Kuślin</p>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-3 gap-8 text-white">
            <div>
              <p className="mb-4 text-lg font-bold">Menu</p>
              <hr className="my-4 w-[4rem] border-gray-500" />
              <ul>
                <li className={classes.item}>
                  <Link className={classes.item} href="#">
                    Home
                  </Link>
                </li>
                <li className={classes.item}>
                  <Link className={classes.item} href="#">
                    Offer
                  </Link>
                </li>
                <li className={classes.item}>
                  <Link className={classes.item} href="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-lg font-bold">Other</p>
              <hr className="my-4 w-[4rem] border-gray-500" />
              <ul>
                <li className={classes.item}>
                  <Link className={classes.item} href="#">
                    Privacy policy
                  </Link>
                </li>
                <li className={classes.item}>
                  <Link className={classes.item} href="#">
                    Cookies policy
                  </Link>
                </li>
                <li className={classes.item}>
                  <Link className={classes.item} href="#">
                    Transport Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-lg font-bold">Fast contact</p>
              <hr className="my-4 w-[4rem] border-gray-500" />
              <div className="mb-4 flex items-center justify-start gap-2">
                <IconPhone size={40} />
                <div className="flex flex-col">
                  <p>Call us</p>
                  <p>+48 660-177-549</p>
                </div>
              </div>
              <div className="mb-4 flex items-center justify-start gap-2">
                <IconMail size={40} />
                <div className="flex flex-col">
                  <p>Send email</p>
                  <p>office@sota.com</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-white">
        <Container size={'lg'} className="flex justify-between py-4 text-primary">
          <p className="text-center text-xs">
            © 2021 Your Best Partner Sp. z o.o. All rights reserved.
          </p>

          <p className="text-center text-xs">
            Made by{' '}
            <a href="https://t.me/Donki_hote" target="_blank">
              <b>Donkihote</b>
            </a>
          </p>
        </Container>
      </div>
    </div>
  );
};

const useStyles = tss.create({
  item: {
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    transform: 'translateY(0px)',
    marginTop: '0.5rem',
    padding: '0.5rem 0',

    '&:hover': {
      transform: 'translateY(8px)',
      color: '#455589',
    },
  },
});
