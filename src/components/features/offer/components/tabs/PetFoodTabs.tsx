import { IOptionTab, TabsCustom } from '@/components/shared/tabs';
import React from 'react';
import { PetFoodContent } from './components/PetFoodContent';

const DATA = [
  {
    tab: 'LINE THƯƠNG MẠI ĐIỆN TỬ',
    subtitle: 'Tính chất',
    title: 'Thương mại điện tử',
    description:
      'trong điều kiện bình thường có thể đi được các mặt hàng nhạy cảm như hóa chất, đồ ăn, mỹ phẩm, điện tử (không phải linh kiện, vi mạch) và hàng thương hiệu. Nhưng trong trường hợp hải quan kiểm tra nghiêm ngặt thì các mặt hàng này sẽ tạm thời không được ưu tiên và phải tạm lưu lại kho Trung Quốc để chờ xếp xe sang vào thời điểm dễ hơn. Và những hàng hóa có cân nặng >50kg/kiện, kích thước >100cm/cạnh không thể đóng bao thì cũng sẽ không thể vận chuyển về được. Quý khách cân nhắc khi đặt những mặt hàng này về kho này để vận chuyển hàng hóa được thuận lợi nhất.',
    image:
      'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/img-666-6645f8b149d6f-qo8u2gvtu3a28z6wvfdg05kq03n5cx96s5wmndh55g.webp',
  },
  {
    tab: 'LINE CHÍNH NGẠCH',
    subtitle: 'Tính chất',
    title: 'Chính ngạch',
    description:
      'Hàng hóa vận chuyển qua đường chính ngạch phải tuân thủ các quy định pháp luật, đảm bảo chất lượng và tiêu chuẩn an toàn theo quy định của Việt Nam và quốc tế. Mỗi lô hàng cần có hồ sơ chứng từ đầy đủ, bao gồm hóa đơn, hợp đồng và giấy tờ hải quan để được thông quan. Quy trình này giúp giảm thiểu rủi ro về mất mát và hư hỏng, đồng thời đảm bảo tính minh bạch trong các giao dịch. Hàng hóa cũng phải phù hợp với các điều khoản trong hợp đồng thương mại quốc tế đã ký kết, từ đó tạo ra một chuỗi cung ứng an toàn và hiệu quả.',
    image:
      'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/6-66466d58f24a5-1-qo9fqvdy19lbhzm2v9dknq0x5r4x28ef2ssbmqd55g.webp',
  },
  {
    tab: 'LINE TIỂU NGẠCH',
    subtitle: 'Tính chất',
    title: 'Tiểu ngạch',
    description:
      'Vận chuyển hàng hóa qua đường tiểu ngạch thường linh hoạt và có chi phí thấp hơn so với đường chính ngạch, với thủ tục thông quan đơn giản hơn. Tuy nhiên, nó cũng tiềm ẩn nhiều rủi ro như mất mát, hư hỏng. Hàng hóa thường có khối lượng nhỏ và không đáp ứng được tiêu chuẩn chất lượng như hàng hóa vận chuyển chính ngạch sẽ phải vận chuyển bằng đường này.',
    image:
      'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/img-666-6645f8b149d6f-qo8u2gvtu3a28z6wvfdg05kq03n5cx96s5wmndh55g.webp',
  },
  // {
  //   tab: 'Tailor-made solutions',
  //   subtitle: 'Supply chain design',
  //   title: 'Transport',
  //   description:
  //     'We offer comprehensive creation of supply chains, designed to meet the requirements of specific customers. We select optimal forms of transport, carriers and subcontractors. We set pickup and delivery times. We deal with documentation issues. We create procedures and take care of the turnover and management of containers and pallets. We create settlement methods with carriers, subcontractors, algorithms and methods for adjusting transport rates. We analyze all receipts, creating periodic reports and summaries for our clients. We monitor processes and propose changes so that the created supply chain can be constantly improved.',
  //   image:
  //     'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/6-66466d58f24a5-1-qo9fqvdy19lbhzm2v9dknq0x5r4x28ef2ssbmqd55g.webp',
  // },
  // {
  //   tab: 'Consultations and Training',
  //   subtitle: 'Transport of PETFOOD',
  //   title: 'Transport',
  //   description:
  //     'We offer transport of semi-finished products, CAT 3 animal by-products, their remaining ingredients, as well as final products from manufacturers of animal food, dry and wet food and chews. We transport loose, fresh, frozen and liquid materials. We select the type of transport and vehicle fleet according to the client’s specific order. All transports have the necessary certificates and veterinary permits. Additionally, we help our clients transport other products, including neutral materials, to provide them with the greatest possible support in terms of transport and logistics.',
  //   image:
  //     'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/img-666-6645f8b149d6f-qo8u2gvtu3a28z6wvfdg05kq03n5cx96s5wmndh55g.webp',
  // },
  // {
  //   tab: 'Container economy',
  //   subtitle: 'Transport of PETFOOD',
  //   title: 'Transport',
  //   description:
  //     'We offer transport of semi-finished products, CAT 3 animal by-products, their remaining ingredients, as well as final products from manufacturers of animal food, dry and wet food and chews. We transport loose, fresh, frozen and liquid materials. We select the type of transport and vehicle fleet according to the client’s specific order. All transports have the necessary certificates and veterinary permits. Additionally, we help our clients transport other products, including neutral materials, to provide them with the greatest possible support in terms of transport and logistics.',
  //   image:
  //     'https://yourbestpartner.eu/wp-content/uploads/elementor/thumbs/img-666-6645f8b149d6f-qo8u2gvtu3a28z6wvfdg05kq03n5cx96s5wmndh55g.webp',
  // },
];

export const PetFoodTabs = () => {
  const transformData: IOptionTab[] = DATA.map(({ tab, ...content }) => ({
    title: tab,
    content: <PetFoodContent {...content} />,
  }));

  return (
    <div className="container mx-auto">
      <TabsCustom options={transformData} />
    </div>
  );
};
