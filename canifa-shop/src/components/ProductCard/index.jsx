import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/reducer/cartSlice';
import './index.scss';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [indexOfColors, setIndexOfColor] = useState(0);
  const [activeFavoriteId, setActiveFavoriteId] = useState(null);
  const [activeSizeOptions, setActiveSizeOptions] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleActiveFavoriteId = (id) => {
    if (activeFavoriteId === id) {
      setActiveFavoriteId(null);
    } else {
      setActiveFavoriteId(id);
    }
  };

  return (
    <div
      className="product-card"
      onMouseLeave={() => {
        setActiveSizeOptions(false);
      }}
    >
      <div className="relative">
        <img src={product?.images[indexOfColors]} alt="" className="product-card-img" />
        {product?.discount && (
          <span className="text-[10px] font-semibold bg-red-600 text-white p-1 absolute top-2 left-2">
            {product?.discount}
          </span>
        )}
        <button
          className={`absolute top-2 right-2 z-10 bg-white h-10 w-auto flex justify-center flex-nowrap flex-row items-center p-0 transition duration-500 ease-in-out ${
            activeFavoriteId === product.id ? 'product-item-action active' : 'product-item-action'
          }`}
          onClick={() => handleActiveFavoriteId(product?.id)}
        >
          <span className="font-medium text-xs p-0 text-white overflow-hidden transition duration-300 ease-in-out w-0">
            Yêu thích
          </span>
        </button>
        <button
          className="button-add absolute top-[70%] left-[50%] translate-x-[-50%] w-max font-semibold text-xs py-4 px-8 bg-white hidden hover:block"
          onClick={() => {
            setActiveSizeOptions(true);
          }}
        >
          THÊM VÀO GIỎ HÀNG
        </button>
        {activeSizeOptions && (
          <div className="absolute bg-white bottom-[10px] left-[50%] translate-x-[-50%] w-[95%] min-h-[50%] px-5 pt-8 pb-5 text-center">
            <div className="font-semibold text-xs">VUI LÒNG CHỌN SIZE</div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {product?.sizes.map((size) => (
                <div
                  key={uuidv4()}
                  className={`w-10 h-10 p-2 border flex items-center justify-center border-gray-500 cursor-pointer ${
                    selectedSize === size ? 'bg-red-400 text-white' : ''
                  }`}
                  onClick={() => {
                    setSelectedSize(size);
                  }}
                >
                  {size}
                </div>
              ))}
            </div>
            <button
              disabled={selectedSize === null}
              className={`p-3 text-xs mt-2 ${
                selectedSize === null
                  ? 'bg-gray-100 cursor-not-allowed opacity-60'
                  : 'bg-[#333f48] text-white cursor-pointer'
              }`}
              onClick={() => {
                setActiveSizeOptions(false);
                dispatch(
                  addProduct({
                    ...product,
                    selectedColor: selectedColor,
                    selectedSize: selectedSize,
                    selectedImage: product?.images[indexOfColors],
                    totalQuantity: 1,
                    totalPrice: product?.price,
                  }),
                );
              }}
            >
              Thêm vào giỏ
            </button>
          </div>
        )}
      </div>
      <div className="flex gap-3 mt-3">
        {product?.colors?.map((color) => (
          <div
            key={uuidv4()}
            onClick={() => {
              const index = product?.colors?.indexOf(color);
              setIndexOfColor(index);
            }}
            className={`w-6 h-6 border border-[1px] flex justify-center items-center rounded-[50%] cursor-pointer ${
              indexOfColors === product?.colors?.indexOf(color) ? 'border-blue-600' : ''
            }`}
          >
            <div
              className={`w-4 h-4 rounded-[50%]`}
              style={{
                backgroundColor: color,
              }}
              onClick={() => {
                setSelectedColor(color);
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className="text-[#333f48] mt-2 text-sm cursor-pointer hover:text-red-600">
        {product?.title}
      </div>
      <div className="font-medium text-sm mt-2">{product.price.toLocaleString('en-US')} ₫</div>
      <div className="font-medium text-sm mt-2 text-[#FDAD69]">{product.description}</div>
    </div>
  );
};

export default ProductCard;
