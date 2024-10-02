'use client';

import { SwiperSlide } from 'swiper/react';
import { Swiper } from '@/components/shared/slides';
import { PaginationOptions } from 'swiper/types';
import { LatestNewsCard } from './LatestNewsCard';

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

export const LatestNewsSlide = () => {
  const pagination: PaginationOptions = {
    clickable: true,
  };

  return (
    <Swiper
      style={{
        width: '100%',
        height: '100%',
      }}
      pagination={pagination}
      className="p-[40px]"
      loop={true}
      autoplay={{
        delay: 5000,
      }}
      breakpoints={{
        900: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
    >
      {DATA?.map((data, index) => (
        <SwiperSlide key={index} className="h-full overflow-hidden rounded-[30px]">
          <LatestNewsCard {...data} key={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
