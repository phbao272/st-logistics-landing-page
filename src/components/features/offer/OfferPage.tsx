import React from 'react';
import { Slide, SectionOffer, Cooperation, ContactUsOffer, LocalBusiness } from './components';
import { ContactUs } from '../home/components';
import { LocalBusinessTabs, PriceTabs } from './components/tabs';

export const OfferPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Slide />

      {/* <PetFood /> */}
      <SectionOffer rtl />
      <PriceTabs />
      <ContactUsOffer bgUrl="https://yourbestpartner.eu/wp-content/uploads/2024/05/img-6-6635e9409b19a.webp" />

      {/* <Food />
      <SectionOffer />
      <FoodTabs />
      <ContactUsOffer bgUrl="https://yourbestpartner.eu/wp-content/uploads/2024/05/img-66698-66462d09b8d4b.webp" /> */}

      <LocalBusiness />
      <p className="px-10 pb-10 text-center text-[clamp(3.375rem,2.6592rem+1.1173vw,4rem)] font-bold text-primary">
        Quy trình của chúng tôi
      </p>
      <LocalBusinessTabs />
      <Cooperation />

      <ContactUs />
    </div>
  );
};
