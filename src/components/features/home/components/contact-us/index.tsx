import { ButtonCustom } from '@/components/shared/buttons';
import { IconArrowUpRight } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

export const ContactUs = () => {
  return (
    <div className="relative min-h-[33.688rem] bg-[url('https://yourbestpartner.eu/wp-content/uploads/2024/05/img-1554-6635efca100fa.webp')] bg-cover bg-center bg-no-repeat md:bg-fixed">
      <div className="absolute inset-0 bg-primary opacity-[0.48] mix-blend-normal" />
      <div className="max-w-[clamp(62.5rem, 41.7423rem + 32.4022vw, 80.625rem)] z-10 flex h-full min-h-[33.688rem] flex-col items-center justify-center p-4 text-[#F5F5F5]">
        <h1 className="z-10 mb-4 text-center text-4xl font-bold md:text-6xl">
          Nếu bạn cần 1 đối tác vận chuyển đáng tin cậy !
        </h1>
        <p className="z-10 mb-8 text-center text-lg md:text-xl">
          Đừng ngần ngại liên hệ với chúng tôi, chắc chắn chúng tôi có thể giúp được bạn
        </p>

        <Link href="https://zalo.me/84989559828" target="_blank">
          <ButtonCustom
            variant="transparent"
            className="w-fit"
            size="xl"
            rightSection={<IconArrowUpRight size={20} />}
          >
            LIÊN HỆ NGAY
          </ButtonCustom>
        </Link>
      </div>
    </div>
  );
};
