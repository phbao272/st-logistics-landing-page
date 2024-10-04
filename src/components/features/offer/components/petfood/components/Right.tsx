'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CountUpCountries } from './CountUpCountries';

export const Right = () => {
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
        className="flex flex-col justify-center gap-5"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Image
            src={
              'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/img-695-66462d9919472-qo93usplrm5772m1rns01tac9xks72yvz54w4dew8k.webp'
            }
            alt="About us"
            width={500}
            height={500}
            priority
            className="w-full max-w-[220px] rounded-[30px] object-cover"
          />
        </motion.div>

        <CountUpCountries />
      </motion.div>
      <div className="relative">
        <Image
          src={'https://yourbestpartner.eu/wp-content/uploads/2024/05/img-69-664629c54befc.webp'}
          alt="About us"
          width={500}
          height={500}
          priority
          className="h-full max-w-[320px] rounded-[30px] object-cover"
        />

        <div className="absolute left-1/2 top-[73%] flex w-[90%] -translate-x-1/2 items-center justify-center rounded-[30px] bg-[#F7F8FF8A] p-4">
          <Image
            src={
              'https://yourbestpartner.eu/wp-content/uploads/2024/05/logo-pets-dark-cmyk-664629c564430-1024x422.webp'
            }
            alt="About us"
            width={500}
            height={500}
            priority
            className="h-full w-[90%] rounded-[30px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
