'use client';

import { Container } from '@mantine/core';
import React from 'react';
import TransportSvg from '@/assets/svgs/transport.svg';
import AdviceSvg from '@/assets/svgs/advice.svg';
import SettlingSvg from '@/assets/svgs/settling.svg';
import Image from 'next/image';

interface Props {
  icon: any;
  title: string;
  description: string;
}

const CARDS = [
  {
    icon: TransportSvg,
    title: 'WE TRANSPORT',
    description:
      'We provide comprehensive transport solutions, ensuring efficient and safe delivery of your products.',
  },
  {
    icon: AdviceSvg,
    title: 'WE ADVICE',
    description:
      'For over 10 years, we have been gaining knowledge and solving the biggest logistics problems so that we can now support you.',
  },
  {
    icon: SettlingSvg,
    title: 'WE SETTLING',
    description:
      'We know how important packaging management is. We deal with the turnover and settlement of packaging and pallets.',
  },
];

export const IntroCard = ({ description, icon, title }: Props) => {
  return (
    <div className="transition-background flex flex-col gap-4 bg-[#fbfbfb] p-5 text-center shadow-[0px_0px_52.2px_-17px_rgba(0,0,0,0.5)] duration-300 md:p-10 md:shadow-lg">
      <div className="flex h-[75px] w-[75px] items-center justify-center self-center">
        <Image src={icon.src} alt={title} width={72} height={72} priority />
      </div>
      <div className="text-xl font-semibold text-primary">{title}</div>
      <div className="text-justify text-base text-black">{description}</div>
    </div>
  );
};

export const ListServiceCard = () => {
  return (
    <Container
      size={'xl'}
      className="absolute bottom-[-55%] left-0 right-0 flex flex-col justify-center px-5 shadow-sm md:bottom-0 md:translate-y-1/2 md:flex-row"
    >
      {CARDS.map((service) => (
        <IntroCard key={service.title} {...service} />
      ))}
    </Container>
  );
};
