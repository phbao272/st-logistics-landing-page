import React from 'react';
import { Slide, PetFood, SectionOffer, Cooperation, ContactUsOffer } from './components';
import { ContactUs } from '../home/components';
import { PetFoodTabs } from './components/tabs/PetFoodTabs';

export const OfferPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Slide />

      <PetFood />
      <SectionOffer rtl />
      <PetFoodTabs />
      <ContactUsOffer bgUrl="https://yourbestpartner.eu/wp-content/uploads/2024/05/img-6-6635e9409b19a.webp" />

      <PetFood />
      <SectionOffer />
      <PetFoodTabs />
      <ContactUsOffer bgUrl="https://yourbestpartner.eu/wp-content/uploads/2024/05/img-66698-66462d09b8d4b.webp" />

      <Cooperation />
      <ContactUs />
    </div>
  );
};
