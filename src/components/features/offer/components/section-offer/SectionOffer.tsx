'use client';

import { ButtonCustom } from '@/components/shared/buttons';
import { Container } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { scrollToElement } from '../slide/components/ListOfferCard';

interface Props {
  rtl?: boolean;
}

export const SectionOffer = ({ rtl }: Props) => {
  return (
    <div className="container mx-auto w-full rounded-[30px] bg-primary">
      <Container
        size={'lg'}
        className={twMerge(
          'flex w-full flex-col items-center pb-14 pt-10 lg:justify-between',
          rtl ? 'items-end lg:flex-row-reverse' : 'items-start lg:flex-row',
        )}
      >
        <div className={twMerge('flex flex-col text-white', rtl ? 'items-end' : 'items-start')}>
          <h2 className="text-base font-semibold">BẢNG GIÁ</h2>
          <h1
            className={twMerge(
              'mt-2 text-[40px] font-bold leading-none md:text-6xl',
              rtl ? 'text-right' : 'text-left',
            )}
          >
            Ưu đãi vận chuyển
          </h1>
          <p
            className={twMerge(
              'mt-4 text-justify font-rubik text-base leading-relaxed',
              rtl ? 'text-right' : 'text-left',
            )}
          >
            Hãy để chúng tôi trở thành đối tác của bạn trong việc cung cấp dịch vụ vận chuyển hiệu
            quả phù hợp với nhu cầu của bạn. Bao gồm cả việc cung cấp nguồn tệ sạch và thanh toán hộ
            cho các shop, xưởng Trung Quốc.
          </p>
        </div>

        <ButtonCustom
          variant="transparent"
          className="w-fit"
          size="xl"
          rightSection={<IconArrowUpRight size={20} />}
          onClick={() => scrollToElement('tmdt')}
        >
          XEM NGAY
        </ButtonCustom>
      </Container>
    </div>
  );
};
