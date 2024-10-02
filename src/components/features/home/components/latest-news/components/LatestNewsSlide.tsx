'use client';

import { SwiperSlide } from 'swiper/react';
import { Swiper } from '@/components/shared/slides';
import { Image } from '@mantine/core';

const DATA = [
  'https://yourbestpartner.eu/wp-content/uploads/2024/05/img-10-66446120e979f.webp',
  'https://yourbestpartner.eu/wp-content/uploads/2024/05/2635-6634c84550363.webp',
  'https://yourbestpartner.eu/wp-content/uploads/2024/05/img-022-6645f1e5d22f5.webp',
  'https://yourbestpartner.eu/wp-content/uploads/2024/05/img-68-6634c847e2f3d.webp',
  'https://yourbestpartner.eu/wp-content/uploads/2024/05/img-3-6634c8454a9e7.webp',
];

export const LatestNewsSlide = () => {
  return (
    <div className="p-[80px]">
      <Swiper
        hideNavigation={true}
        style={{
          width: '100%',
          height: '100%',
        }}
        loop={true}
        breakpoints={{
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
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
        {DATA?.map((image, index) => (
          <SwiperSlide key={index} className="h-full overflow-hidden rounded-[30px]">
            <Image
              src={image}
              alt="image"
              className="!h-[380px] w-full overflow-hidden rounded-[30px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
