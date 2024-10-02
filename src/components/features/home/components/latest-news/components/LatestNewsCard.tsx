import { ButtonCustom } from '@/components/shared/buttons';
import { Image } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import React from 'react';

interface Props {
  image: string;
  date: string;
  title: string;
}

export const LatestNewsCard = ({ date, image, title }: Props) => {
  return (
    <div className="h-fit rounded-[33px] bg-[#FFFFFF00] shadow-lg">
      <div className="relative overflow-hidden rounded-[33px] pt-[50%] transition-all duration-500 ease-in-out hover:translate-y-2">
        <Image
          alt="A globe surrounded by packages and a plane flying over it, representing global transport"
          className="absolute left-0 top-0 h-full w-full rounded-[33px] shadow-[0_0_28px_-8px_rgba(0,0,0,0.5)]"
          src={image}
        />
      </div>
      <div className="mt-4 flex flex-col items-center justify-center gap-2 px-8 py-5">
        <p className="text-base text-gray-500">{date}</p>
        <h2 className="mt-2 text-xl font-semibold text-primary">{title}</h2>
        <ButtonCustom
          className="mt-4 w-fit"
          variant="outline"
          size="lg"
          rightSection={<IconArrowRight size={20} />}
        >
          read more
        </ButtonCustom>
      </div>
    </div>
  );
};
