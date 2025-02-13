import { Container } from '@mantine/core';
import React from 'react';
import { Left } from './components/Left';
import { Right } from './components/Right';

export const Food = () => {
  return (
    <Container
      size={'xl'}
      className="flex w-full flex-1 flex-col-reverse gap-5 pb-[80px] pt-[100px] lg:flex-row"
    >
      <div className="mt-8 basis-6/12 lg:mt-0">
        <Left />
      </div>
      <div className="basis-6/12">
        <Right />
      </div>
    </Container>
  );
};
