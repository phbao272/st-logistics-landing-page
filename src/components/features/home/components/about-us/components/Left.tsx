'use client';

import React from 'react';
import { CountUpExperience } from './CountUpExperience';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Image } from '@mantine/core';

export const Left = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="flex gap-5" ref={ref}>
      <motion.div
        className="flex basis-4/12 flex-col justify-center gap-5"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Image
            src={'https://yourbestpartner.eu/wp-content/uploads/2024/05/img-3-1-6634b4fa3faff.webp'}
            alt="About us"
            className="max-h-[500px] w-full"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image
            src={'https://yourbestpartner.eu/wp-content/uploads/2024/05/img-5-1-6634b4fa488d8.webp'}
            alt="About us"
            className="max-h-[500px] w-full"
          />
        </motion.div>
      </motion.div>
      <div className="relative basis-8/12">
        <Image
          src={
            'https://yourbestpartner.eu/wp-content/uploads/2024/05/rectangle-7-6634b4fb5d4f0.webp'
          }
          alt="About us"
          className="h-auto w-full max-w-[500px] object-contain"
        />
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-primary p-5 text-white">
          <div className="flex items-center justify-center text-[64px] font-bold text-white">
            <CountUpExperience />
            <span>+</span>
          </div>
          <p className="text-nowrap text-[18px]">Years experience</p>
        </div>
      </div>
    </div>
  );
};
