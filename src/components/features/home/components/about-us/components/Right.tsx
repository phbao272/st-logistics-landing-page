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
      <p className="text-base font-semibold uppercase text-primary md:text-[18px]">về chúng tôi</p>
      <div className="flex flex-col gap-0">
        <b className="text-4xl text-[#3E3F41]">Logistics bằng cả nhiệt huyết</b>
        <span className="text-4xl font-medium text-[#3E3F41]">hợp tác và cam kết.</span>
      </div>
      <p className="mb-4 text-justify">
      Hợp tác – chính là giá trị cốt lõi của chúng tôi trong mọi hoạt động. 
      Khách hàng của chúng tôi đã cảm nhận sự khác biệt khi cùng hợp tác trên 
      nền tảng minh bạch và công bằng, với sự tận tâm đến từng đối tác. Nếu bạn 
      đang tìm kiếm một đối tác logistics đáng tin cậy, chúc mừng bạn đã đến đúng nơi.
      </p>

      <ButtonCustom className="w-fit" size="xl" rightSection={<IconArrowRight size={20} />}>
        TÌM HIỂU THÊM VỀ CHÚNG TÔI
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
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <Image width={100} height={100} src={PhilosophySvg.src} alt="Our philosophy" />

            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold uppercase text-[#455589] md:text-2xl">
              Triết lý của chúng tôi
              </p>
              <p className="text-justify: auto">
              Chúng tôi tin vào kinh doanh gắn kết với giá trị nhân văn. 
              Một doanh nghiệp bền vững không chỉ dựa trên lợi nhuận mà 
              còn trên sự hợp tác chân thành, tôn trọng từng mối quan hệ 
              với khách hàng và nhân viên. Chúng tôi vững tin rằng, khi 
              cùng nhau đồng hành, không có giới hạn nào là không thể vượt qua.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
