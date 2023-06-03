import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai';
import { addProduct, deleteProduct, decreaseProduct } from '../../redux/reducer/cartSlice';
import { useOutsideAlerter } from '../../hooks/useOutsideAlerter';
import nocart from '../../assets/images/nocart.svg';
import './index.scss';

const Cart = ({ isShowCart, setIsShowCart, bagRef }) => {
  const dispatch = useDispatch();
  const wrapperRef = React.useRef(null);
  const { totalQuantity, cartProducts, totalAmount } = useSelector((state) => state.cartReducer);

  //hooks
  useOutsideAlerter(wrapperRef, setIsShowCart, false, bagRef);

  return (
    <div ref={wrapperRef}>
      {isShowCart && (
        <>
          <div className="fixed right-10 bg-white z-[99] p-5 w-[360px] top-[80px]">
            <span
              className="inline float-right text-lg cursor-pointer"
              onClick={() => setIsShowCart(false)}
            >
              x
            </span>
            {cartProducts?.length > 0 ? (
              <>
                <div className="font-semibold pb-4 border-b border-[#e8e8ea] mb-4">
                  ({totalQuantity}) sản phẩm trong giỏ hàng
                </div>
                <div className="cart-list border-b border-[#e8e8ea] overflow-y-auto max-h-[350px]">
                  {cartProducts.map((product) => (
                    <div className="grid grid-cols-5 gap-3 mb-4" key={uuidv4()}>
                      <div className="col-span-1">
                        <img src={product?.selectedImage} alt="" />
                      </div>
                      <div className="col-span-4">
                        <div className="flex justify-between items-center mr-2">
                          <div className="text-sm">{product?.title}</div>
                          <AiFillCloseCircle
                            className="cursor-pointer"
                            onClick={() =>
                              dispatch(
                                deleteProduct({
                                  ...product,
                                }),
                              )
                            }
                          />
                        </div>
                        <div className="mt-1 flex gap-4">
                          <div className="font-semibold text-sm">{product?.selectedSize}</div>
                          <div className="minicart-size"></div>
                          <div
                            style={{
                              backgroundColor: product?.selectedColor,
                            }}
                            className={`w-4 h-4 rounded-[50%] mt-[2px] ml-[-5px]`}
                          ></div>
                        </div>
                        <div className="flex justify-between mr-2">
                          <div className="font-semibold text-xs mt-1">
                            {product?.totalPrice.toLocaleString('en-US')} ₫
                          </div>
                          <div className="flex gap-3">
                            <button
                              className="w-5 h-5 border border-gray-200 flex justify-center items-center"
                              onClick={() => {
                                dispatch(
                                  decreaseProduct({
                                    ...product,
                                  }),
                                );
                              }}
                            >
                              -
                            </button>
                            <span className="text-sm font-semibold">{product?.totalQuantity}</span>
                            <button
                              className="w-5 h-5 border border-gray-200 flex justify-center items-center font-semibold"
                              onClick={() => {
                                dispatch(
                                  addProduct({
                                    ...product,
                                  }),
                                );
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <button className="w-full p-3 mt-4 text-white font-semibold text-base bg-[#333f48]">
                    XEM GIỎ HÀNG
                  </button>
                </div>
                <div className="mt-5 text-center text-sm">
                  Tổng tạm tính:
                  <span className="font-semibold ml-2">{totalAmount.toLocaleString('en-US')}₫</span>
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center flex-col min-h-[250px]">
                <img src={nocart} alt="" />
                <div className="mt-4 flex justify-center text-center">
                  Chưa có sản phẩm trong giỏ hàng của bạn.
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
