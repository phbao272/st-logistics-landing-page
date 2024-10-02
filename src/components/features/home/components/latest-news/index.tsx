import { ButtonCustom } from '@/components/shared/buttons';
import { Container } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import React from 'react';
import { LatestNewsSlide } from './components/LatestNewsSlide';

export const LatestNews = () => {
  return (
    <Container size="lg" className="flex w-full flex-col gap-8">
      <div className="flex items-center justify-between pt-[80px]">
        <div>
          <h2 className="text-[clamp(3.375rem,2.6592rem_+_1.1173vw,4rem)] font-medium text-[#3E3F41]">
            <b>Latest</b> news
          </h2>
          <p>Find out about current information in the field of logistics.</p>
        </div>

        <ButtonCustom size="xl" rightSection={<IconArrowRight size={20} />}>
          Read more
        </ButtonCustom>
      </div>

      <div>
        <LatestNewsSlide />
      </div>
    </Container>
  );
};
