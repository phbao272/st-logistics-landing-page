'use client';

import { ButtonCustom } from '@/components/shared/buttons';
import { Container } from '@mantine/core';
import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CARDS = [
  {
    title: 'Transport OF CAT 3 BY-PRODUCT',
    description:
      'We know everything about the broadly understood transport of CAT OF CAT 3 BY-PRODUCT. We have many years of experience, developed know-how, a team of experts and the necessary knowledge.',
  },
  {
    title: 'Transport OF CAT 3 BY-PRODUCT',
    description:
      'We know everything about the broadly understood transport of CAT OF CAT 3 BY-PRODUCT. We have many years of experience, developed know-how, a team of experts and the necessary knowledge.',
  },
  {
    title: 'Transport OF CAT 3 BY-PRODUCT',
    description:
      'We know everything about the broadly understood transport of CAT OF CAT 3 BY-PRODUCT. We have many years of experience, developed know-how, a team of experts and the necessary knowledge.',
  },
];

export const Offer = () => {
  return (
    <>
      <div className="relative bg-primary pb-[100px] pt-[80px]">
        <Container
          size={'xl'}
          className="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0"
        >
          <div className="flex flex-col items-start text-white">
            <h2 className="text-base font-semibold">OFFER</h2>
            <h1 className="mt-2 text-6xl font-bold">Get to know our offer</h1>
            <p className="mt-4 text-base">
              Let us be your strategic partner in providing efficient logistics tailored to your
              needs.
            </p>
          </div>

          <ButtonCustom
            variant="transparent"
            className="w-fit self-end"
            size="xl"
            rightSection={<IconArrowUpRight size={20} />}
          >
            CHECK FULL OFFER
          </ButtonCustom>

          <Container
            size={'xl'}
            className="absolute bottom-[-40%] left-1/2 mt-12 grid w-full -translate-x-1/2 translate-y-[82%] grid-cols-1 gap-8 md:bottom-0 md:grid-cols-3"
          >
            {CARDS.map((card, index) => (
              <MotionCard key={index} {...card} index={index} />
            ))}
          </Container>
        </Container>
      </div>
      <div className="xl:h[300px] h-[1250px] w-full md:h-[400px] lg:h-[400px]" />
    </>
  );
};

interface CardProps {
  title: string;
  description: string;
  index: number;
}

const MotionCard = ({ description, title, index }: CardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 * index }}
      className="flex flex-col items-center gap-5 rounded-[30px] bg-white p-8 text-primary shadow-lg"
    >
      <div className="flex h-[96px] w-[96px] items-center justify-center rounded-full bg-primary p-4 text-white">
        <i className="fas fa-paw text-2xl" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-justify text-base font-medium">{description}</p>
      <ButtonCustom
        variant="outline"
        className="w-fit"
        size="lg"
        rightSection={<IconArrowRight size={20} />}
      >
        CHECK OFFER
      </ButtonCustom>
    </motion.div>
  );
};
