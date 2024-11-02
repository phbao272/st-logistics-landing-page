import React from 'react';
import { Introduction, ListServices } from './components';
import { ContactUs } from '../home/components';

export const PolicyPage = () => {
  return (
    <div className="flex flex-col gap-5 bg-white">
      <Introduction />
      <ListServices />

      {/* <Problem />
      
      <ServicePrice /> */}
      <ContactUs />
    </div>
  );
};
