import React from 'react';
import { Banner, ListServices, Problem } from './components';

export const PolicyPage = () => {
  return (
    <div className="flex flex-col gap-5 bg-white">
      <Banner />
      <Problem />
      <ListServices />
    </div>
  );
};
