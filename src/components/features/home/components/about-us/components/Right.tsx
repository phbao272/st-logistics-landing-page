'use client';

import { ButtonCustom } from '@/components/shared/buttons';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';
import PhilosophySvg from '@/assets/svgs/philosophy.svg';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="flex flex-col gap-5 px-3 pt-4">
      <p className="text-[18px] font-semibold uppercase text-primary">about us</p>
      <div className="flex flex-col gap-0">
        <b className="text-4xl text-[#3E3F41]">Logistics with passion,</b>
        <span className="text-4xl font-medium text-[#3E3F41]">partnership with commitment.</span>
      </div>
      <p className="mb-4 text-justify">
        Partnership – this is the key word when it comes to our company and everything we do within
        it. Existing clients have already realized that it is possible to act differently, on
        transparent and fair principles, while taking care of our contractors. If you are also
        looking for a trusted partner in logistics, you are in the right place.
      </p>

      <ButtonCustom className="w-fit" size="xl" rightSection={<IconArrowRight size={20} />}>
        GET TO KNOW US BETTER
      </ButtonCustom>

      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        ref={ref}
      >
        <motion.div
          variants={itemVariants}
          className="rounded-[30px] border-r-[8px] border-solid border-r-[#455589] bg-white p-[10px] shadow-[0px_0px_31px_-12px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center gap-3">
            <Image width={100} height={100} src={PhilosophySvg.src} alt="Our philosophy" />

            <div className="flex flex-col gap-1">
              <p className="text-2xl font-bold uppercase">Our philosophy</p>
              <p className="text-justify font-serif">
                We believe in business with a human face. You can run a business on a partnership
                basis, taking care of relationships with both clients and employees. We are
                convinced that together everything is possible.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
