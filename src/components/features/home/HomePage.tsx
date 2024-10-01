import React from 'react';
import { Introduction } from './components/introduction';
import { AboutUs } from './components/about-us';
import { Offer } from './components/offer';

export const HomePage = () => {
  return (
    <>
      <Introduction />
      <div className="h-[200px]" />
      <AboutUs />
      <Offer />
    </>
  );
};
