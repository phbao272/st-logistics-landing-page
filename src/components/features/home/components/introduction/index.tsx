import React from 'react';
import styles from './styles.module.css';
import { ListServiceCard } from './components/IntroCard';
import { ButtonCustom } from '@/components/shared/buttons';
import { IconArrowRight } from '@tabler/icons-react';
import { AnimatedText } from '@/components/shared/animations';

export const Introduction = () => {
  return (
    <div className={styles.background}>
      <div className="absolute inset-0 h-full w-full">
        <div className="absolute inset-0 z-[1] bg-black/50" />
        <video
          id="background-video"
          loop
          autoPlay
          muted
          className="h-full w-full object-cover"
          poster="https://yourbestpartner.eu/wp-content/uploads/2024/05/bg-video-6639c7b0520cd.webp"
        >
          <source src="/videos/bg-1.mp4" type="video/mp4" />
          <source src="/videos/bg-1.mp4" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>

      <main className="z-10 flex flex-col items-center gap-5 p-4 text-center text-white sm:p-8">
        <AnimatedText
          className="w-[80%] flex-wrap text-center text-[15px] sm:text-xl md:w-full md:text-2xl"
          text="HƠN CẢ LOGISTICS, SỨ MỆNH CỦA CHÚNG TÔI LÀ"
        />
        <h1 className="text-4xl font-extrabold capitalize leading-none text-white md:text-[clamp(4.75rem,3.3184rem+2.2346vw,6rem)]">
          Không chỉ giao hàng
          <br />
          chúng tôi giao cả niềm tin
        </h1>

        <ButtonCustom className="w-fit" size="xl" rightSection={<IconArrowRight size={20} />}>
          GIỚI THIỆU DỊCH VỤ
        </ButtonCustom>
      </main>
      <ListServiceCard />
    </div>
  );
};
