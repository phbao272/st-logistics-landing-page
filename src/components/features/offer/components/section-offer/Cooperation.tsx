import { Container } from '@mantine/core';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Cooperation = () => {
  return (
    <div className="container mx-auto w-full rounded-[30px] bg-primary">
      <Container
        size={'lg'}
        className={twMerge(
          'flex-responsive w-full items-start justify-center gap-0 py-10 md:items-center md:justify-between md:gap-[62px]',
        )}
      >
        {/* <div className={twMerge('flex flex-col text-[#f5f5f5]')}>
          <h1 className="mt-2 text-[40px] font-bold md:text-[3rem] lg:text-[clamp(3.375rem,2.6592rem+1.1173vw,4rem)]">
            Cooperation
          </h1>
          <p className="mt-4 font-rubik text-base font-semibold">
            Local cooperation is not only about business.
          </p>
        </div> */}

        <p className="mt-4 text-justify font-rubik text-[clamp(0.875rem,0.5887rem+0.4469vw,1.125rem)] text-[#f5f5f5]">
        Chúng tôi mang đến giải pháp vận chuyển tối ưu từ Trung Quốc về Việt Nam, cam kết an toàn và nhanh chóng. 
        Với dịch vụ chuyên nghiệp và chính xác trong từng bước, chúng tôi kết nối doanh nghiệp với thị trường, 
        đảm bảo mỗi lô hàng là một bước tiến vững chắc cho sự thành công của bạn.
        </p>
      </Container>
    </div>
  );
};
