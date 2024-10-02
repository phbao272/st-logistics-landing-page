import { ButtonCustom } from '@/components/shared/buttons';
import { IconArrowUpRight } from '@tabler/icons-react';
import React from 'react';
import { NumberCountUp } from './NumberCountUp';

export const BackgroundIntro = () => {
  return (
    <div className="relative min-h-[46.188rem] bg-[url('https://yourbestpartner.eu/wp-content/uploads/2024/05/img-6-6635e9409b19a.webp')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-primary opacity-30" />
      <div className="max-w-[clamp(62.5rem, 41.7423rem + 32.4022vw, 80.625rem)] z-10 flex h-full min-h-[46.188rem] flex-col items-center justify-center text-[#F5F5F5]">
        <h1 className="z-10 mb-4 text-xl font-bold md:text-6xl">
          Here&apos;s why it&apos;s worth choosing us
        </h1>
        <p className="z-10 mb-8 text-lg md:text-xl">
          If you are looking for a trusted partner in logistics, you are in the right place.
          Let&apos;s get to know each other better.
        </p>
        <div className="z-10 flex w-full max-w-6xl flex-col justify-around gap-10 md:flex-row">
          <div className="mb-8 flex-1 text-center md:mb-0">
            <NumberCountUp number={10} />
            <hr className="mx-auto my-2 w-full border-t-2 border-white" />
            <p className="text-wrap text-xl font-semibold">YEARS OF EXPERIENCE</p>
          </div>
          <div className="mb-8 flex-1 text-center md:mb-0">
            <NumberCountUp number={10000} />
            <hr className="mx-auto my-2 w-full border-t-2 border-white" />
            <p className="text-wrap text-xl font-semibold">ORGANIZED TRANSPORTATION</p>
          </div>
          <div className="mb-8 flex-1 text-center md:mb-0">
            <NumberCountUp number={600000} />
            <hr className="mx-auto my-2 w-full border-t-2 border-white" />
            <p className="text-wrap text-xl font-semibold">TONS OF PRODUCTS DELIVERED</p>
          </div>
        </div>
        <div className="mt-8">
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
    </div>
  );
};
