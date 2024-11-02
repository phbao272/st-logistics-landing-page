import { Image } from '@mantine/core';
import React from 'react';
import BoxSvg from '@assets/svgs/why-us/box.svg';
import TruckSvg from '@assets/svgs/why-us/truck.svg';
import WorldSvg from '@assets/svgs/why-us/world.svg';

export const WhyUs = () => {
  return (
    <div className="px-4 pb-16 text-center">
      <h2 className="mb-4 text-4xl font-medium">
        <b>Tại sao</b> nên chọn chúng tôi?
      </h2>
      <p className="mb-12 text-lg">
      Cam kết hoàn toàn bất kể quy mô đơn hàng. Cách tiếp cận này cho phép chúng tôi đáp ứng được kỳ vọng của ngay cả những khách hàng khó tính nhất.
      </p>
      <div className="flex-responsive justify-center gap-10 md:gap-8">
        <div className="basis-4/12">
          <div className="relative mb-8">
            <Image
              src={WorldSvg.src}
              alt="Globe icon representing extensive resources"
              className="mx-auto max-h-[100px] max-w-[100px]"
            />
          </div>
          <h3 className="mb-2 text-[22px] font-bold">TÀI NGUYÊN RỘNG RÃI</h3>
          <p className="text-justify">
          Mạng lưới đối tác của chúng tôi trải dài từ các công ty vận tải, cơ quan hải quan, đối tác CNTT đến các nhà máy sản xuất và kho bãi.
          </p>
        </div>
        <div className="basis-4/12">
          <div className="relative mb-8">
            <Image
              src={BoxSvg.src}
              alt="Box icon representing tailor-made solutions"
              className="mx-auto max-h-[100px] max-w-[100px]"
            />
          </div>
          <h3 className="mb-2 text-[22px] font-bold">GIẢI PHÁP LINH HOẠT</h3>
          <p className="text-justify">
          Chúng tôi luôn đồng hành và linh hoạt theo nhu cầu của khách hàng, 
          không áp đặt những khuôn mẫu sẵn có. Mỗi giải pháp chúng tôi tạo ra 
          đều được "may đo" riêng biệt, phù hợp nhất với doanh nghiệp của khách hàng, 
          chứ không phải vì sự tiện lợi của chúng tôi.
          </p>
        </div>
        <div className="basis-4/12">
          <div className="relative mb-8">
            <Image
              src={TruckSvg.src}
              alt="Truck icon representing supply chain design"
              className="mx-auto max-h-[100px] max-w-[100px]"
            />
          </div>
          <h3 className="mb-2 text-[22px] font-bold">CHUỖI CUNG ỨNG</h3>
          <p className="text-justify">
          Chúng tôi cung cấp giải pháp thiết kế chuỗi cung ứng toàn diện, 
          tùy chỉnh theo từng nhu cầu của khách hàng. Chúng tôi lựa chọn 
          phương thức vận chuyển, nhà vận tải tối ưu nhất, đảm bảo hiệu quả và chất lượng.
          </p>
        </div>
      </div>
    </div>
  );
};
