import React from 'react';
import { Introduction } from './components/introduction';
import { AboutUs } from './components/about-us';

export const HomePage = () => {
  return (
    <>
      <Introduction />
      <div className="h-[200px]" />
      <AboutUs />
    </>
  );
};
