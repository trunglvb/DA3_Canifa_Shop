/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';

const HeaderMenu = ({
  setIsMenuActive,
  options,
  isChildren,
  dataBoyList,
  dataGirlList,
  path,
  pathGirl,
  pathBoy,
}) => {
  const [optionsData, setOptionsData] = useState([]);
  const [optionsGirlList, setOptionsGirlList] = useState([]);
  const [optionsBoyList, setOptionsBoyList] = useState([]);
  const [optionActive, setOptionActive] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (options?.length > 0) {
      setOptionsData(options[0]?.optionList);
    }
  }, [options]);

  useEffect(() => {
    if (isChildren) {
      setOptionsGirlList(dataGirlList[0]?.optionList);
      setOptionsBoyList(dataBoyList[0]?.optionList);
    }
  }, [isChildren]);

  const handleClickOptions = (item, state) => {
    navigate(`${path}/${item?.slug}`, {
      state: state,
    });

    setIsMenuActive(false);
  };

  const setOptionActiveId = (slug) => {
    setOptionActive(slug);
  };

  return (
    <div
      className="header-menu py-6 px-10 w-[100vw] bg-white/95 fixed top-[80px] z-[100]"
      onMouseLeave={() => setIsMenuActive(false)}
      onMouseEnter={() => setIsMenuActive(true)}
    >
      {!isChildren ? (
        <div className="flex">
          <div className="w-[240px] cursor-pointer">
            <div className="font-semibold mb-2">Sản phẩm mới</div>
            <div className="font-semibold">Giá tốt</div>
          </div>
          <div className="w-[240px] cursor-pointer">
            {options?.map((item) => (
              <div
                key={item?.slug}
                className="font-semibold mb-2 w-[200px]"
                onMouseEnter={() => {
                  setOptionsData(item?.optionList);
                  setOptionActiveId(item?.slug);
                }}
                onClick={() => handleClickOptions(item)}
              >
                <div className="flex justify-between">
                  <span>{item?.option}</span>
                  {optionActive === item?.slug && (
                    <BsChevronRight className="mb-1 flex justify-center items-center" />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="w-[240px] cursor-pointer">
            {optionsData?.map((item) => (
              <div
                key={item?.slug}
                className="mb-2 "
                onClick={() => {
                  const state = options?.find((option) => option?.slug === item?.type);
                  handleClickOptions(item, state);
                }}
              >
                {item?.option}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="flex text-[#6c757b] font-semibold text-xl mb-3">
            <span className="w-[229px] ml-[229px] ">BÉ GÁI</span>
            <span className="ml-[229px]">BÉ TRAI</span>
          </div>
          <div className="flex">
            <div className="w-[240px] cursor-pointer">
              <div className="font-semibold mb-2">Sản phẩm mới bé gái</div>
              <div className="font-semibold">Sản phẩm mới bé trai</div>
            </div>
            <div className="w-[240px] cursor-pointer">
              {dataGirlList?.map((item) => (
                <div
                  key={item?.slug}
                  className="font-semibold mb-2 w-[200px]"
                  onMouseEnter={() => {
                    setOptionsGirlList(item?.optionList);
                    setOptionActiveId(item?.slug);
                  }}
                  onClick={() => {
                    navigate(`/tre/${pathGirl}/${item?.slug}`);
                  }}
                >
                  <div className="flex justify-between">
                    <span>{item?.option}</span>
                    {optionActive === item?.slug && (
                      <BsChevronRight className="mb-1 flex justify-center items-center" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[240px] cursor-pointer">
              {optionsGirlList?.map((item) => (
                <div
                  key={item?.slug}
                  className="mb-2 "
                  onClick={() => {
                    navigate(`/tre/${pathGirl}/${item?.slug}`);
                  }}
                >
                  {item?.option}
                </div>
              ))}
            </div>
            <div
              className="w-[240px] cursor-pointer"
              onMouseEnter={() => {
                setOptionsGirlList(dataGirlList[0]?.optionList);
              }}
              onMouseLeave={() => setOptionsBoyList(dataBoyList[0]?.optionList)}
            >
              {dataBoyList?.map((item) => (
                <div
                  key={item?.slug}
                  className="font-semibold mb-2 w-[200px]"
                  onMouseEnter={() => {
                    setOptionsBoyList(item?.optionList);
                    setOptionActiveId(`boy/${item?.slug}`);
                  }}
                  onClick={() => {
                    navigate(`/tre/${pathBoy}/${item?.slug}`);
                  }}
                >
                  <div className="flex justify-between">
                    <span>{item?.option}</span>
                    {optionActive === `boy/${item?.slug}` && (
                      <BsChevronRight className="mb-1 flex justify-center items-center" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[240px] cursor-pointer">
              {optionsBoyList?.map((item) => (
                <div
                  key={item?.slug}
                  className="mb-2"
                  onClick={() => {
                    navigate(`/tre/${pathBoy}/${item?.slug}`);
                  }}
                >
                  {item?.option}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HeaderMenu;
