import { Container } from '@mantine/core';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Cooperation = () => {
  return (
    <div className="container mx-auto w-full rounded-[30px] bg-primary">
      <Container
        size={'lg'}
        className={twMerge('flex w-full items-center justify-between gap-[62px] py-10')}
      >
        <div className={twMerge('flex flex-col text-[#f5f5f5]')}>
          <h1 className="mt-2 text-6xl font-bold">Cooperation</h1>
          <p className="font-rubik mt-4 text-base font-semibold">
            Local cooperation is not only about business.
          </p>
        </div>

        <p className="font-rubik mt-4 text-justify text-[clamp(0.875rem,0.5887rem+0.4469vw,1.125rem)] text-[#f5f5f5]">
          We are part of our community, proud of where we come from and what values we stand for,
          and that our company actively supports the local community through charity initiatives and
          social programs. We give a chance to others because someone also gave us a chance.
        </p>
      </Container>
    </div>
  );
};
