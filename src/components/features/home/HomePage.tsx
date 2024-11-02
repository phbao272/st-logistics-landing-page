import React from 'react';
import { AboutUs, BackgroundIntro, ContactUs, Introduction, Slide, WhyUs } from './components';

export const HomePage = () => {
  return (
    <>
      <Introduction />
      <div className="h-[600px] w-full md:h-[300px] lg:h-[200px]" />
      <AboutUs />
      {/* <Offer /> */}
      <Slide />
      <WhyUs />
      <BackgroundIntro />
      {/* <LatestNews /> */}
      <ContactUs />
    </>
  );
};
