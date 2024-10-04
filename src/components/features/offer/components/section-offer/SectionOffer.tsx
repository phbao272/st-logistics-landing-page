import { ButtonCustom } from '@/components/shared/buttons';
import { Container } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  rtl?: boolean;
}

export const SectionOffer = ({ rtl }: Props) => {
  return (
    <div className="container mx-auto w-full rounded-[30px] bg-primary">
      <Container
        size={'lg'}
        className={twMerge(
          'flex w-full items-center justify-between py-10',
          rtl ? 'flex-row-reverse' : 'flex-row',
        )}
      >
        <div className={twMerge('flex flex-col text-white', rtl ? 'items-end' : 'items-start')}>
          <h2 className="text-base font-semibold">OFFER</h2>
          <h1 className="mt-2 text-6xl font-bold">Get to know our offer</h1>
          <p className="font-rubik mt-4 text-base">
            Let us be your strategic partner in providing efficient logistics tailored to your
            needs.
          </p>
        </div>

        <ButtonCustom
          variant="transparent"
          className="w-fit"
          size="xl"
          rightSection={<IconArrowUpRight size={20} />}
        >
          CONTACT US
        </ButtonCustom>
      </Container>
    </div>
  );
};
