import { Container } from '@mantine/core';
import React from 'react';
import { Left } from './components/Left';
import { Right } from './components/Right';

export const AboutUs = () => {
  return (
    <Container size={'xl'} className="flex w-full flex-1 flex-col gap-5 pb-[80px] lg:flex-row">
      <div className="basis-6/12">
        <Left />
      </div>
      <div className="basis-6/12">
        <Right />
      </div>
    </Container>
  );
};
