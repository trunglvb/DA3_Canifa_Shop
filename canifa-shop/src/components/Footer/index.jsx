import React from 'react';
import qrcode from '../../assets/images/qrcode.png';
import appstore from '../../assets/images/appstore.png';
import googleplay from '../../assets/images/googleplay.png';

const Footer = () => {
  return (
    <div className="p-10 grid bg-[#333f48] grid-cols-7 gap-6">
      <div className="col-span-2">
        <div className="text-sm font-semibold text-white mb-5">CÔNG TY CỔ PHẦN CANIFA</div>
        <div className="text-white text-sm mb-4">
          Số ĐKKD: 0107574310, ngày cấp: 23/09/2016, nơi cấp: Sở Kế hoạch và đầu tư Hà Nội
        </div>
        <div className="text-white text-sm mb-4">
          Trụ sở chính: Số 688, Đường Quang Trung, Phường La Khê, Quận Hà Đông, Hà Nội, Việt Nam
        </div>
        <div className="text-white text-sm mb-4">
          Địa chỉ liên hệ: Phòng 301 Tòa nhà GP Invest, 170 La Thành, P. Ô Chợ Dừa, Q. Đống Đa, Hà
          Nội
        </div>
        <div className="text-white text-sm mb-4">Số điện thoại: +8424 - 7303.0222</div>
        <div className="text-white text-sm mb-4">Fax: +8424 - 6277.6419</div>
        <div className="text-white text-sm mb-4">Địa chỉ email: hello@canifa.com</div>
      </div>
      <div className="col-span-1">
        <div className="text-sm font-semibold text-white mb-5">THƯƠNG HIỆU</div>
        <div className="text-white text-sm mb-4">Giới thiệu</div>
        <div className="text-white text-sm mb-4">Tin tức</div>
        <div className="text-white text-sm mb-4">Tuyển dụng</div>
        <div className="text-white text-sm mb-4">Với cộng đồng</div>
        <div className="text-white text-sm mb-4">Hệ thống cửa hàng</div>
        <div className="text-white text-sm mb-4">Liên hệ</div>
      </div>
      <div className="col-span-2">
        <div className="text-sm font-semibold text-white mb-5">HỖ TRỢ</div>
        <div className="text-white text-sm mb-4">Chính sách KHTT</div>
        <div className="text-white text-sm mb-4">Điều kiện - Điều khoản Chính sách KHTT</div>
        <div className="text-white text-sm mb-4">Chương trình dành cho KH mới</div>
        <div className="text-white text-sm mb-4">Chính sách vận chuyển</div>
        <div className="text-white text-sm mb-4">Hướng dẫn chọn size</div>
        <div className="text-white text-sm mb-4">Kiểm tra đơn hàng</div>
        <div className="text-white text-sm mb-4">Tra cứu điểm thẻ</div>
        <div className="text-white text-sm mb-4">Chính sách bảo mật thông tin KH</div>
      </div>
      <div className="col-span-2">
        <div className="text-sm font-semibold text-white mb-5">TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</div>
        <div className="flex gap-3">
          <img src={qrcode} alt="" />
          <img src={googleplay} alt="" />
          <img src={appstore} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
