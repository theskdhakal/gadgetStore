import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen, setPopupShow } from "../system/systemSlice";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../system/cartSlice";

export const Popup = ({ children, isOrderConfirmation }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { popupShow } = useSelector((state) => state.system);

  const handleOnClose = () => {
    if (isOrderConfirmation) {
      navigate("/");
      dispatch(setPopupShow(false));
      dispatch(setIsCartOpen(false));

      setTimeout(() => {
        dispatch(resetCart());
      }, 1000);
    }
    dispatch(setPopupShow(false));
  };

  if (!popupShow) return null;

  return (
    <div className="fixed inset-0 flex items-center  justify-center z-50 bg-opacity-50 bg-gray-700">
      <div className="bg-white w-full md:w-3/4 lg:w-1/2 p-5 rounded shadow-md relative">
        <button onClick={() => handleOnClose()}>
          <RxCross2 className="absolute top-2 right-2 border" />
        </button>
        {children}
      </div>
    </div>
  );
};
