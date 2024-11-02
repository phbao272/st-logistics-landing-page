'use client';

import React from 'react';
import { Image } from '@mantine/core';
import { Rubik } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const Right = () => {
  return (
    <div className="relative flex flex-col gap-5 px-3 pt-4">
      <p className="text-[18px] font-semibold uppercase text-primary">Hợp tác doanh nghiệp trong nước</p>
      <div className="flex flex-col gap-0">
        <h2 className="text-[40px] leading-none text-primary md:text-[4rem] lg:text-7xl">
          <b>Chúng tôi</b> là đối tác tin cậy.
        </h2>
      </div>
      <p className={twMerge('mb-4 text-justify font-rubik', rubik.className)}>
      Chúng tôi cung cấp dịch vụ vận chuyển uy tín, an toàn và nhanh chóng nhất. Với sự tận tâm và am hiểu thị trường, 
      chúng tôi đồng hành cùng bạn, đưa hàng hóa đến tay bạn một cách hiệu quả với chi phí tối ưu nhất, góp phần vào sự phát 
      triển bền vững của cả hai bên.
      </p>

      <Image
        srcSet={
          'https://yourbestpartner.eu/wp-content/uploads/2024/05/design-element-2-1-1-6634b76e5b69c.webp 726w, https://yourbestpartner.eu/wp-content/uploads/2024/05/design-element-2-1-1-6634b76e5b69c-300x74.webp 300w'
        }
        alt="Our philosophy"
        className="absolute bottom-0 right-0 h-[110px] translate-y-[80%] object-contain"
      />
    </div>
  );
};
