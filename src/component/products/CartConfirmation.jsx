import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen, setPopupShow } from "../system/SystemSlice";
import { TiTick } from "react-icons/ti";

export const CartConfirmation = ({ image }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const openCart = () => {
    dispatch(setIsCartOpen(true));
    dispatch(setPopupShow(false));
  };
  const handleOnClose = () => {
    dispatch(setPopupShow(false));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center  gap-3">
        <div className="w-1/2">
          <img src={image} alt="" className="w-full h-auto" />
        </div>

        <div>
          <h5 className="flex items-center justify-center">
            <TiTick className="text-green-500 text-2xl mr-2" /> Added to Cart
          </h5>
          <p>
            Cart Total ({cart.length} items):{" "}
            <span className="font-bold text-green-800">
              $
              {cart.reduce((accumulator, item) => {
                return accumulator + +(item.price * item.quantity);
              }, 0)}
            </span>
          </p>
        </div>
      </div>
      <div className="mt-2 space-y-4">
        <button
          className="bg-red-600 w-full text-white px-4 py-2 rounded"
          onClick={openCart}
        >
          View Cart And CheckOut
        </button>
        <button
          className="bg-blue-500 w-full text-white px-4 py-2 rounded"
          onClick={handleOnClose}
        >
          Continue Shopping
        </button>
      </div>
    </>
  );
};
