import { Container } from '@mantine/core';
import React from 'react';
import { Left } from './components/Left';
import { Right } from './components/Right';

export const AboutUs = () => {
  return (
    <Container size={'xl'} className="flex w-full flex-1 gap-5 pb-[80px]">
      <div className="w-[50%]">
        <Left />
      </div>
      <div className="w-[50%]">
        <Right />
      </div>
    </Container>
  );
};
