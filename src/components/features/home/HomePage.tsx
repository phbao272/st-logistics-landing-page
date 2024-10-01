import React from 'react';
import { Introduction, Slide, AboutUs, Offer } from './components';

export const HomePage = () => {
  return (
    <>
      <Introduction />
      <div className="h-[200px]" />
      <AboutUs />
      <Offer />
      <Slide />
    </>
  );
};
