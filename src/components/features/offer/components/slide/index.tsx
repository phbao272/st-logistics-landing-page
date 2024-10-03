'use client';

import { PaginationOptions } from 'swiper/types';

import 'swiper/css/effect-fade';
import { Image } from '@mantine/core';
import { ListServiceCard } from '@/components/features/home/components/introduction/components/IntroCard';

import styles from './styles.module.css';

const DATA = [
  {
    image:
      'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/img-55-2-663601dfc2c45-qnnr8tf825bpv2iky65b12xqa1cgp8a78vyc5rk1fm.webp',
    date: 'May 12, 2021 / News',
    title: 'Transport of Animal By-Products: Key Aspects and Requirements',
  },
  {
    image:
      'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/img-55-1-663601dfd9805-qnnr8ud28zd06oh7sojxlkp6vf7twxdxl0ltn1in9e.webp',
    date: 'May 12, 2021',
    title: 'Category 3 Animal By-Products: What You Need to Know',
  },
  {
    image:
      'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/img-55-3-663601e19d508-qnnr8shdvbafjgjy3nqogl69onh3hj6gwrauohlflu.webp',
    date: 'May 12, 2021',
    title: 'Paradoxes of Animal By-Products Transport',
  },
  {
    image:
      'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/img-55-1-663601dfd9805-qnnr8ud28zd06oh7sojxlkp6vf7twxdxl0ltn1in9e.webp',
    date: 'May 12, 2021',
    title: 'Category 3 Animal By-Products: What You Need to Know',
  },
];

export const Slide = () => {
  const pagination: PaginationOptions = {
    clickable: true,
  };

  return DATA.map((item, index) => (
    <>
      <Image src={item.image} alt={item.title} className="w-full" />

      <div className={styles.background}>
        <main className="flex flex-col items-center gap-5 text-center text-white">
          <h1 className="text-[clamp(4.75rem,3.3184rem+2.2346vw,6rem)] font-extrabold capitalize leading-none text-white">
            We Want To Be
            <br />
            Your Best Partner.
          </h1>
        </main>
        <ListServiceCard />
      </div>
    </>
  ));
};
