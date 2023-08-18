import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopupShow } from "../system/systemSlice";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export const Popup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { popupShow } = useSelector((state) => state.system);

  const handleOnClose = () => {
    dispatch(setPopupShow(false));
  };

  if (!popupShow) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-700">
      <div className="bg-white w-96 p-5 rounded shadow-md">
        <div className="flex col-span-2 lg:col-span-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
              alt=""
            />
          </div>

          <div>
            <h5>
              <TiTick /> Added to Cart
            </h5>
            <p>Cart Total:</p>
          </div>
        </div>
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleOnClose}
          >
            close
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded"
            onClick={() => {
              navigate("/cart");
            }}
          >
            View Cart And CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};
