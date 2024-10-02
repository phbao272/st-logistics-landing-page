import { ButtonCustom } from '@/components/shared/buttons';
import { IconArrowUpRight } from '@tabler/icons-react';
import React from 'react';

export const ContactUs = () => {
  return (
    <div className="relative min-h-[33.688rem] bg-[url('https://yourbestpartner.eu/wp-content/uploads/2024/05/img-1554-6635efca100fa.webp')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-primary opacity-[0.48] mix-blend-normal" />
      <div className="max-w-[clamp(62.5rem, 41.7423rem + 32.4022vw, 80.625rem)] z-10 flex h-full min-h-[33.688rem] flex-col items-center justify-center text-[#F5F5F5]">
        <h1 className="z-10 mb-4 text-xl font-bold md:text-6xl">Do you need a trusted partner?</h1>
        <p className="z-10 mb-8 text-lg md:text-xl">
          Don’t hesitate to contact us to find out what we can offer you.
        </p>

        <ButtonCustom
          variant="transparent"
          className="w-fit"
          size="xl"
          rightSection={<IconArrowUpRight size={20} />}
        >
          CONTACT US
        </ButtonCustom>
      </div>
    </div>
  );
};
