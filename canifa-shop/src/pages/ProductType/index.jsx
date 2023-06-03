import React from 'react';
import BreadCrumbs from '../../components/Breadcrumbs';
import { useParams } from 'react-router-dom';
import nav_links from '../../assets/data/navLink';
import productsData from '../../assets/data/product';
import Slider from 'react-slick';
import imgBanner from '../../assets/images/banner_type.webp';
import imgBanner2 from '../../assets/images/banner_type2.webp';
import ProductCard from '../../components/ProductCard';
import banner_nam from '../../assets/images/banner_nam.webp';
import { v4 as uuidv4 } from 'uuid';

const ProductType = () => {
  const params = useParams();
  const typeOfProduct = nav_links.find((option) => option.path === `/${params.type}`);
  const slugOption = {
    aoPhong: 'ao-phong',
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: 'linear',
  };

  const filterProduct = productsData.filter(
    (product) => product?.sex === params.type && product.slug === slugOption.aoPhong,
  );

  return (
    <div className="px-10">
      <div className="pt-5">
        <BreadCrumbs type={typeOfProduct} />
      </div>
      <div className="my-5">
        {params.type === 'nu' && <img src={imgBanner} alt="" />}
        {params.type === 'nam' && <img src={imgBanner2} alt="" />}
      </div>
      <div className="mt-10">
        <div className="text-2xl font-semibold mb-5">Áo Phông</div>
        <div className="a-home-product w-full">
          <Slider {...settings}>
            {filterProduct.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="my-10">{params.type === 'nam' && <img src={banner_nam} alt="" />}</div>
    </div>
  );
};

export default ProductType;
