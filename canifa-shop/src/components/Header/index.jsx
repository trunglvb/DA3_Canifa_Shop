import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import nav_links from '../../assets/data/navLink';
import logo from '../../assets/images/logo.svg';
import { AiOutlineShop, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { BsBag } from 'react-icons/bs';
import HeaderMenu from '../HeaderMenu';
import Cart from '../Cart/Cart';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import './index.scss';

const Header = () => {
  const [dataList, setDataList] = useState([]);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isChildren, setIsChildren] = useState(false);
  const [dataBoyList, setDataBoyList] = useState([]);
  const [dataGirlList, setDataGirlList] = useState([]);
  const [pathGirl, setPathGirl] = useState();
  const [pathBoy, setPathBoy] = useState();
  const [isShowCart, setIsShowCart] = useState(false);
  const [path, setPath] = useState('');
  const bagRef = React.useRef(null);

  //redux
  const { totalQuantity } = useSelector((state) => state.cartReducer);

  return (
    <>
      {isMenuActive && (
        <HeaderMenu
          setIsMenuActive={setIsMenuActive}
          options={dataList}
          isChildren={isChildren}
          dataBoyList={dataBoyList}
          dataGirlList={dataGirlList}
          path={path}
          pathGirl={pathGirl}
          pathBoy={pathBoy}
        />
      )}

      <div className="fixed h-[80px] top-0 left-0 right-0 z-[102] bg-gray-100">
        <div className="flex px-10 py-3 h-full">
          <div className="logo mr-5">
            <Link to="/home">
              <img src={logo} alt="logo" className="h-14" />
            </Link>
          </div>
          <div className="flex justify-between w-full">
            <div
              className="header-menu-list flex items-center relative"
              onMouseLeave={() => setIsMenuActive(false)}
            >
              {nav_links.map((item) => (
                <NavLink
                  to={item.path}
                  key={uuidv4()}
                  className={(navClass) =>
                    navClass.isActive
                      ? 'text-red-500 px-4 font-semibold text-xl hover:border-b-2 hover:border-b-red-500'
                      : 'px-4 text-[#6c757b] font-semibold text-xl hover:border-b-2 hover:border-b-red-500'
                  }
                  onMouseEnter={() => {
                    setPath(item?.path);
                    if (item?.path === '/tre') {
                      setIsChildren(true);
                      setDataBoyList(item?.boy.listBoy);
                      setDataGirlList(item?.girl.listGirl);
                      setPathGirl(item?.girl.path);
                      setPathBoy(item?.boy.path);
                    } else {
                      setIsChildren(false);
                      setDataList(item?.list);
                      setPathGirl(undefined);
                      setPathBoy(undefined);
                    }
                    if (item?.list?.length !== 0) {
                      setIsMenuActive(true);
                    } else {
                      setIsMenuActive(false);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item?.path === 'tre') {
                      setIsChildren(false);
                    }
                  }}
                  onClick={() => {
                    setIsMenuActive(false);
                  }}
                >
                  {item.display.toLocaleUpperCase()}
                </NavLink>
              ))}
            </div>
            <div className="flex">
              <div className="relative w-[300px] flex items-center mr-5">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="outline-none block w-full h-10 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bạn tìm gì..."
                  required
                />
              </div>
              <div className="flex items-center gap-5">
                <AiOutlineShop className="h-6 w-6" />
                <MdOutlineFavoriteBorder className="h-6 w-6" />
                <AiOutlineUser className="h-6 w-6" />
                <div className="relative">
                  <div
                    ref={bagRef}
                    onClick={() => {
                      setIsShowCart(!isShowCart);
                    }}
                  >
                    <BsBag className={`h-6 w-6 cursor-pointer`} />
                  </div>
                  {totalQuantity > 0 && (
                    <div className="absolute top-[-5px] left-[12px] text-white text-[10px] bg-red-600 w-[15px] h-[15px] rounded-[50%] flex justify-center items-center">
                      {totalQuantity}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-10 bg-green-700 mt-[80px]">
        <div className="slogan-2 flex justify-center items-center h-full font-medium text-white">
          ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 30 ngày.
        </div>
      </div>

      <Cart isShowCart={isShowCart} setIsShowCart={setIsShowCart} bagRef={bagRef} />
    </>
  );
};

export default Header;
