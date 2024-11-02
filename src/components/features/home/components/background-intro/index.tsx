import { ButtonCustom } from '@/components/shared/buttons';
import { IconArrowUpRight } from '@tabler/icons-react';
import React from 'react';
import { NumberCountUp } from './NumberCountUp';

const DATA = [
  {
    number: 8,
    text: 'NĂM KINH NGHIỆM',
  },
  {
    number: 22042,
    text: 'GÓI HÀNG MỖI NGÀY',
  },
  {
    number: 5072709,
    text: 'CÂN NẶNG MỖI THÁNG',
  },
];

export const BackgroundIntro = () => {
  return (
    <div className="relative min-h-[50rem] bg-[url('https://yourbestpartner.eu/wp-content/uploads/2024/05/img-6-6635e9409b19a.webp')] bg-cover bg-center bg-no-repeat md:bg-fixed lg:min-h-[46.188rem]">
      <div className="absolute inset-0 bg-primary opacity-30" />
      <div className="max-w-[clamp(62.5rem, 41.7423rem + 32.4022vw, 80.625rem)] z-10 flex h-full min-h-[50rem] flex-col items-center justify-center px-4 py-8 text-[#F5F5F5] lg:min-h-[46.188rem]">
        <h1 className="z-10 mb-4 text-4xl font-bold md:text-6xl">
          Đây là lý do tại sao bạn nên chọn chúng tôi
        </h1>
        <p className="z-10 mb-8 text-lg md:text-xl">
        Nếu bạn đang tìm kiếm một đối tác đáng tin cậy trong lĩnh vực vận chuyển hàng TQ-VN, bạn đã đến đúng nơi rồi
        </p>
        <div className="z-10 flex w-full max-w-6xl flex-col justify-around gap-10 lg:flex-row">
          {DATA.map((item, index) => (
            <div key={index} className="mb-8 flex flex-1 flex-col items-center md:mb-0">
              <NumberCountUp number={item.number} />
              <hr className="mx-auto my-2 w-[80%] border-t-2 border-white lg:w-[360px]" />
              <p className="text-wrap text-xl font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
        {/* <div className="mt-8">
          <ButtonCustom
            variant="transparent"
            className="w-fit"
            size="xl"
            rightSection={<IconArrowUpRight size={20} />}
          >
            CONTACT US
          </ButtonCustom>
        </div> */}
      </div>
    </div>
  );
};
