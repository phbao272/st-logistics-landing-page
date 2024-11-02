import { IOptionTab, TabsCustom } from '@/components/shared/tabs';
import React from 'react';
import { PetFoodContent } from './components/PetFoodContent';
import { TableCustomProps } from '@/components/shared/tables';

interface IData {
  tab: string;
  subtitle: string;
  title: string;
  description: string;
  tableProps: TableCustomProps<any>;
}

const DATA: IData[] = [
  {
    tab: 'LINE THƯƠNG MẠI ĐIỆN TỬ',
    subtitle: 'Tính chất',
    title: 'Thương mại điện tử',
    description:
      'trong điều kiện bình thường có thể đi được các mặt hàng nhạy cảm như hóa chất, đồ ăn, mỹ phẩm, điện tử (không phải linh kiện, vi mạch) và hàng thương hiệu. Nhưng trong trường hợp hải quan kiểm tra nghiêm ngặt thì các mặt hàng này sẽ tạm thời không được ưu tiên và phải tạm lưu lại kho Trung Quốc để chờ xếp xe sang vào thời điểm dễ hơn. Và những hàng hóa có cân nặng >50kg/kiện, kích thước >100cm/cạnh không thể đóng bao thì cũng sẽ không thể vận chuyển về được. Quý khách cân nhắc khi đặt những mặt hàng này về kho này để vận chuyển hàng hóa được thuận lợi nhất.',
    tableProps: {
      columns: [
        {
          title: 'Số KG/ngày',
          key: 'kg',
        },
        {
          title: 'Giá',
          key: 'price',
        },
      ],
      data: [
        {
          kg: '0',
          price: '23.000',
        },
        {
          kg: '10',
          price: '22.000',
        },
        {
          kg: '20',
          price: '21.000',
        },
        {
          kg: '30',
          price: '20.000',
        },
        {
          kg: '40',
          price: '19.000',
        },
        {
          kg: '50',
          price: '18.000',
        },
        {
          kg: '100',
          price: '17.000',
        },
      ],
    },
  },
  {
    tab: 'LINE CHÍNH NGẠCH',
    subtitle: 'Tính chất',
    title: 'Chính ngạch',
    description:
      'Hàng hóa vận chuyển qua đường chính ngạch phải tuân thủ các quy định pháp luật, đảm bảo chất lượng và tiêu chuẩn an toàn theo quy định của Việt Nam và quốc tế. Mỗi lô hàng cần có hồ sơ chứng từ đầy đủ, bao gồm hóa đơn, hợp đồng và giấy tờ hải quan để được thông quan. Quy trình này giúp giảm thiểu rủi ro về mất mát và hư hỏng, đồng thời đảm bảo tính minh bạch trong các giao dịch. Hàng hóa cũng phải phù hợp với các điều khoản trong hợp đồng thương mại quốc tế đã ký kết, từ đó tạo ra một chuỗi cung ứng an toàn và hiệu quả.',
    tableProps: {
      columns: [
        {
          title: 'Số KG/ngày',
          key: 'kg',
        },
        {
          title: 'Giá',
          key: 'price',
        },
      ],
      data: [
        {
          kg: '0',
          price: '23.000',
        },
        {
          kg: '10',
          price: '22.000',
        },
        {
          kg: '20',
          price: '21.000',
        },
        {
          kg: '30',
          price: '20.000',
        },
        {
          kg: '40',
          price: '19.000',
        },
        {
          kg: '50',
          price: '18.000',
        },
      ],
    },
  },
  {
    tab: 'LINE TIỂU NGẠCH',
    subtitle: 'Tính chất',
    title: 'Tiểu ngạch',
    description:
      'Vận chuyển hàng hóa qua đường tiểu ngạch thường linh hoạt và có chi phí thấp hơn so với đường chính ngạch, với thủ tục thông quan đơn giản hơn. Tuy nhiên, nó cũng tiềm ẩn nhiều rủi ro như mất mát, hư hỏng. Hàng hóa thường có khối lượng nhỏ và không đáp ứng được tiêu chuẩn chất lượng như hàng hóa vận chuyển chính ngạch sẽ phải vận chuyển bằng đường này.',
    tableProps: {
      columns: [
        {
          title: 'TIỂU NGẠCH',
          key: 'tieu_ngach',
        },
        {
          title: 'Giá KG',
          key: 'price_kg',
        },
        {
          title: 'Giá M3',
          key: 'price_m3',
        },
      ],
      data: [
        {
          tieu_ngach: 'Dưới 5m3 hoặc dưới 200kg',
          price_kg: '12.000 - 18.000',
          price_m3: '2.000.000 - 2.100.000',
        },
        {
          tieu_ngach: 'Từ 5m3 - 10m3 hoặc trên 200kg',
          price_kg: '9.000 - 11.000',
          price_m3: '1.800.000 - 1.900.000',
        },
        {
          tieu_ngach: 'Trên 10m3 hoặc trên 1 tấn',
          price_kg: '6.000 - 8.000',
          price_m3: '1.600.000 - 1.700.000',
        },
      ],
      header: 'TÙY THUỘC VÀO TỪNG LOẠI MẶT HÀNG',
      footer: 'Có thể đàm phán để cân đối hơn về mức giá',
    },
  },
];

export const PetFoodTabs = () => {
  const transformData: IOptionTab[] = DATA.map(({ tab, ...content }) => ({
    title: tab,
    content: <PetFoodContent {...content} />,
  }));

  return (
    <div className="container mx-auto" id="tmdt">
      <TabsCustom options={transformData} />
    </div>
  );
};
