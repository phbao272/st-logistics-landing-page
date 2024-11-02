import { IOptionTab, TabsCustom } from '@/components/shared/tabs';
import React from 'react';
import { LocalBusinessContent } from './components/LocalBusinessContent';

const DATA = [
  {
    tab: 'Tiếp nhận',
    subtitle: 'Bước 1',
    title: 'Nhận hàng, phân loại',
    description:
      'Trong bước đầu tiên, hàng hóa được nhận tại kho và kiểm tra số lượng cũng như tình trạng để đảm bảo chính xác. Nhân viên sẽ phân loại hàng theo loại sản phẩm, kích thước,... nhằm tối ưu hóa không gian lưu trữ. Đồng thời, thông tin chi tiết về từng loại hàng hóa, bao gồm mã hàng và vị trí lưu trữ, sẽ được ghi chép lại để dễ dàng theo dõi. Quy trình này giúp giảm thiểu rủi ro mất mát và hư hỏng, nâng cao hiệu quả logistics.',
    image: 'https://yourbestpartner.eu/wp-content/uploads/2024/05/15-66468d4a152fa.webp',
  },
  {
    tab: 'Vận chuyển',
    subtitle: 'Bước 2',
    title: 'Khai báo, vận chuyển',
    description:
      'Tiếp nhận thông tin chi tiết về lô hàng và chuẩn bị đầy đủ các hồ sơ khai báo hải quan, bao gồm hóa đơn, hợp đồng và chứng từ liên quan. Sau khi nộp hồ sơ và hoàn tất thủ tục kiểm tra, chúng tôi sắp xếp phương tiện vận chuyển phù hợp và theo dõi hành trình để cập nhật tình trạng hàng hóa cho khách hàng.',
    image: 'https://yourbestpartner.eu/wp-content/uploads/2024/05/15-66468d4a152fa.webp',
  },
  {
    tab: 'Hạ kiểm',
    subtitle: 'Bước 3',
    title: 'Hạ hàng, kiểm đếm',
    description:
      'Quy trình hạ container hàng và kiểm đếm bắt đầu khi container được đưa đến bãi hạ. Tại đây, container sẽ được đặt xuống khu vực quy định và niêm phong được kiểm tra để đảm bảo tính nguyên vẹn của hàng hóa. Sau khi niêm phong được xác nhận, nhân viên tiến hành mở container và thực hiện kiểm đếm hàng hóa, so sánh với các giấy tờ để đảm bảo khớp đúng về số lượng và tình trạng hàng. Mọi sai lệch sẽ được ghi nhận và báo cáo ngay lập tức',
    image: 'https://yourbestpartner.eu/wp-content/uploads/2024/05/15-66468d4a152fa.webp',
  },
  {
    tab: 'Giao nhận',
    subtitle: 'Bước cuối',
    title: 'Giao hàng, ký nhận',
    description:
      'Nhân viên giao hàng sẽ liên hệ khách hàng để xác nhận thời gian và địa điểm giao nhận. Tại điểm giao, hàng hóa được kiểm tra tình trạng, số lượng, và ký xác nhận từ khách hàng để đảm bảo tính chính xác và an toàn. Sau khi hoàn tất việc giao hàng, chúng tôi cập nhật trạng thái và lưu trữ thông tin để hỗ trợ khách hàng theo dõi và phản hồi khi cần thiết, đảm bảo sự hài lòng và tin tưởng cho mỗi lần giao nhận.',
    image: 'https://yourbestpartner.eu/wp-content/uploads/2024/05/15-66468d4a152fa.webp',
  },
];

export const LocalBusinessTabs = () => {
  const transformData: IOptionTab[] = DATA.map(({ tab, ...content }) => ({
    title: tab,
    content: <LocalBusinessContent {...content} />,
  }));

  return (
    <div className="container mx-auto">
      <TabsCustom placement="top" options={transformData} />
    </div>
  );
};
