/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import nav_links from '../../assets/data/navLink';
import { v4 as uuidv4 } from 'uuid';
import filterImg from '../../assets/images/filter.svg';
import sortImg from '../../assets/images/sort.svg';
import productsData from '../../assets/data/product';
import ProductCard from '../../components/ProductCard';
import { filterPrice } from '../../assets/data/filterPrice';

const ProductTypeOption = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isActiveOption, setIsActiveOption] = useState();
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [checkedId, setCheckedId] = useState();
  const [sortPrice, setSortPrice] = useState({
    minPrice: null,
    maxPrice: null,
  });
  const dataProductDependSex = productsData.filter(
    (product) => product?.sex === location.pathname.split('/')[1],
  );
  const dataProduct = dataProductDependSex?.filter(
    (product) =>
      product.option === location.pathname.split('/')[2] ||
      product.slug === location.pathname.split('/')[2],
  );

  const [dataFilter, setDataFilter] = useState(dataProduct);

  const type = nav_links.find((item) => item.path === `/${location.pathname.split('/')[1]}`);
  const handleNavigate = (item) => {
    navigate(`/${location.pathname.split('/')[1]}/${item?.slug}`);
  };

  useEffect(() => {
    setIsActiveOption(location.pathname.split('/')[2]);
    setIsSort(false);
    setCheckedId(null);
    setSortPrice({
      minPrice: null,
      maxPrice: null,
    });
    setDataFilter(dataProduct);
  }, [location.pathname]);

  useEffect(() => {
    const sortData = isSort
      ? dataFilter.sort((a, b) => a.price - b.price)
      : dataFilter.sort((a, b) => b.price - a.price);
    setDataFilter(sortData);
  }, [isSort]);

  console.log('render');
  return (
    <div className="px-10 mb-10">
      <div className="mt-5 grid grid-cols-6 gap-3">
        <div className="col-span-1">
          <ul>
            {type?.list.map((category) => (
              <div key={uuidv4()}>
                <li
                  key={category.slug}
                  className={`text-base font-semibold mt-5 cursor-pointer ${
                    isActiveOption === category.slug ? 'text-red-500 font-medium' : ''
                  }`}
                  onClick={() => {
                    setIsActiveOption(category.slug);
                    handleNavigate(category);
                  }}
                >
                  {category.option}
                </li>
                <ul>
                  {category.optionList.map((option) => (
                    <li
                      key={option.slug}
                      className={`font-normal mt-3 cursor-pointer ${
                        isActiveOption === option.slug ? 'text-red-500 font-medium' : ''
                      }`}
                      onClick={() => {
                        setIsActiveOption(option.slug);
                        handleNavigate(option);
                      }}
                    >
                      {option.option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>
        <div className="col-span-5 p-5 relative">
          <div className="pb-8 flex gap-4 justify-end">
            <div className="bg-[#f6f6f6] h-10 px-4 inline-flex justify-center items-center gap-2 py-2 hover:bg-slate-100 cursor-pointer">
              <div className="text-[14px]" onClick={() => setIsShowFilter(true)}>
                Bộ lọc
              </div>
              <img className="text-[14px]" src={filterImg} alt="" />
            </div>
            <div
              className="bg-[#f6f6f6] text-[#da291c] h-10 px-4 inline-flex justify-center items-center gap-2 py-2 hover:bg-slate-100 cursor-pointer"
              onClick={() => setIsSort(!isSort)}
            >
              <div className="text-[14px]">Sắp xếp</div>
              <img className="text-[14px]" src={sortImg} alt="" />
            </div>
          </div>
          {isShowFilter && (
            <div className="absolute w-full z-[10000] pr-5">
              <div className="bg-white w-full px-5 py-8 shadow-lg rounded-md">
                <div className="grid grid-cols-3 border-b border-gray-200 pb-5">
                  <div className="border-r border[#f3f4f6] border-solid px-4">
                    <div className="flex items-center justify-between ">
                      <span className="font-semibold text-[14px]">Khoảng giá</span>
                      <span className="text-[14px]">Mặc định</span>
                    </div>
                    <ul className="w-full mt-5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                      {filterPrice.map((price) => (
                        <li
                          className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                          key={price.id}
                        >
                          <div className="flex items-center pl-3">
                            <input
                              id={price.id}
                              type="radio"
                              name={price.id}
                              checked={checkedId === price.id}
                              onChange={(_) => {
                                setCheckedId(price.id);
                                setSortPrice({
                                  minPrice: price.min,
                                  maxPrice: price.max,
                                });
                              }}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            />
                            {price.max !== null ? (
                              <label
                                htmlFor={price.id}
                                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                {price.min}₫ - {price.max}₫
                              </label>
                            ) : (
                              <label
                                htmlFor={price.id}
                                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                {`> ${price.min}`}₫
                              </label>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex justify-end mt-5 gap-4">
                  <button
                    className="bg-[#f6f6f6] text-base text-[#333f48] px-10 py-3 font-semibold cursor-pointer hover:bg-slate-200"
                    onClick={() => {
                      setCheckedId(null);
                      setSortPrice({
                        minPrice: null,
                        maxPrice: null,
                      });
                      setDataFilter(dataProduct);
                    }}
                  >
                    Xóa tất cả
                  </button>
                  <button
                    className="bg-[#333f48] text-base text-slate-100 px-10 py-3 font-semibold cursor-pointer"
                    onClick={() => {
                      const filterData = dataProduct?.filter(
                        (product) =>
                          product.price >= sortPrice.minPrice &&
                          product.price <= sortPrice.maxPrice,
                      );
                      if (sortPrice.minPrice !== null && sortPrice.maxPrice !== null) {
                        setDataFilter(filterData);
                      }
                      setIsShowFilter(false);
                    }}
                  >
                    Áp dụng
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="grid grid-cols-4 gap-4">
            {dataFilter?.map((product) => (
              <ProductCard product={product} key={uuidv4()} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTypeOption;
