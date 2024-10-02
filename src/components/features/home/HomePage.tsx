import React from 'react';
import { Introduction, Slide, AboutUs, Offer, WhyUs, BackgroundIntro } from './components';

export const HomePage = () => {
  return (
    <>
      <Introduction />
      <div className="h-[200px]" />
      <AboutUs />
      <Offer />
      <Slide />
      <WhyUs />
      <BackgroundIntro />
    </>
  );
};
