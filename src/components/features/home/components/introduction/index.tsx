import React from 'react';
import styles from './styles.module.css';
import { ListServiceCard } from './components/IntroCard';
import { ButtonCustom } from '@/components/shared/buttons';
import { IconArrowRight } from '@tabler/icons-react';
import { AnimatedText } from '@/components/shared/animations';

export const Introduction = () => {
  return (
    <div className={styles.background}>
      <main className="flex flex-col items-center gap-5 text-center text-white">
        <AnimatedText
          className="w-full text-center text-2xl"
          text="WE DON'T WANT TO BE ANOTHER LOGISTICS COMPANY."
        />
        <h1 className="font-outfit text-[clamp(4.75rem,3.3184rem+2.2346vw,6rem)] font-extrabold capitalize leading-none text-white">
          We Want To Be
          <br />
          Your Best Partner.
        </h1>

        <ButtonCustom className="w-fit" size="xl" rightSection={<IconArrowRight size={20} />}>
          CHECK OFFER
        </ButtonCustom>
      </main>

      <ListServiceCard />
    </div>
  );
};
