import React from 'react';
import productsData from '../../assets/data/product';
import Slider from 'react-slick';
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import Banner from '../../components/Banner';
import ProductCard from '../../components/ProductCard';
import banner1 from '../../assets/images/banner1.webp';
import banner_2 from '../../assets/images/banner_2.webp';
import banner_home1 from '../../assets/images/banner_home1.webp';
import banner_home2 from '../../assets/images/banner_home2.webp';
import banner_home3 from '../../assets/images/banner_home3.webp';
import bannerPrice1 from '../../assets/images/bannerPrice1.webp';
import bannerPrice2 from '../../assets/images/bannerPrice2.webp';
import bannerProduct3 from '../../assets/images/bannerProduct3.webp';
import familyBanner1 from '../../assets/images/familyBanner1.webp';
import familyBanner2 from '../../assets/images/familyBanner1.webp';
import familyBanner3 from '../../assets/images/familyBanner1.webp';
import familyProduct from '../../assets/data/familyProduct';
import './index.scss';
const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: 'linear',
  };

  return (
    <>
      <Banner slidesToShow={1} slidesToScroll={1} img1={banner1} img2={banner_2} />
      <div className="px-10 mt-10 mb-12">
        <div className="text-2xl font-semibold mb-5">Sản phẩm mới</div>
        <div className="grid grid-cols-4 gap-5 h-full">
          <div className="col-span-1 h-full">
            <Banner
              dots={true}
              slidesToShow={1}
              slidesToScroll={1}
              img1={banner_home1}
              img2={banner_home2}
              img3={banner_home3}
            />
          </div>
          <div className="col-span-3 a-home-product">
            <Slider {...settings}>
              {productsData?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="px-10 mt-10 mb-12">
        <div className="text-2xl font-semibold mb-5">Sản phẩm giá tốt</div>
        <div className="grid grid-cols-4 gap-5 h-full">
          <div className="col-span-1 h-full">
            <Banner
              dots={true}
              slidesToShow={1}
              slidesToScroll={1}
              img1={bannerPrice1}
              img2={bannerPrice2}
              img3={bannerProduct3}
            />
          </div>
          <div className="col-span-3 a-home-product">
            <Slider {...settings}>
              {productsData?.reverse()?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="px-10 mt-10 mb-12">
        <div className="text-2xl font-semibold mb-5">BST FAMILY</div>
        <div className="grid grid-cols-4 gap-5 h-full">
          <div className="col-span-1 h-full">
            <Banner
              dots={true}
              slidesToShow={1}
              slidesToScroll={1}
              img1={familyBanner1}
              img2={familyBanner2}
              img3={familyBanner3}
            />
          </div>
          <div className="col-span-3 a-home-product">
            <Slider {...settings}>
              {familyProduct?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="px-10 flex gap-5 mb-10 w-full">
        <div className="h-[120px] bg-[#f6f6f6] px-10 flex items-center w-full">
          <div className="flex justify-center gap-6 items-center w-full">
            <span className="text-[20px] font-semibold min-w-max">Đăng ký nhận bản tin</span>
            <div className="relative flex items-center w-full">
              <input
                type="text"
                placeholder="Email"
                className="flex flex-1 w-full h-[50px] outline-none bg-white rounded border-none font-medium text-[#333f48] pl-5"
              />
              <button className="button-send  bg-center bg-no-repeat border-none bg-transparent cursor-pointer"></button>
            </div>
          </div>
        </div>
        <div className="h-[120px] bg-[#f6f6f6] px-10 flex items-center w-full">
          <div className="flex justify-center gap-5 items-center">
            <span className="text-[20px] font-semibold min-w-max">Kết nối ngay</span>
            <FaFacebookSquare className="ml-5 text-3xl" />
            <FaInstagramSquare className="ml-5 text-3xl" />
            <FaYoutube className="ml-5 text-3xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
