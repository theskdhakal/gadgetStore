import React from "react";
import { resetCart, setCart } from "../../component/system/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setIsCartOpen,
  setPopupShow,
} from "../../component/system/systemSlice";

export const OrderSummary = ({ totalAmount }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);

  const handleonClosingConfirmationPage = () => {
    navigate("/");
    dispatch(setPopupShow(false));
    dispatch(setIsCartOpen(false));

    setTimeout(() => {
      dispatch(resetCart());
    }, 2000);
  };
  return (
    <div>
      <div className="thankYou  ">
        <div>
          <img
            className=""
            src="https://www.pngkey.com/png/detail/174-1749808_thank-you-for-your-order-oval-stickers-thank.png"
            alt=""
          />
        </div>
        <div>
          <h4>Order Summary: </h4>
          <ul className="space-y-5">
            {cart.map((item) => (
              <li key={item.id}>
                {item.name}&nbsp;{item.price}
              </li>
            ))}
          </ul>
          <hr />
          <h5>Total Amount:{1.13 * totalAmount}</h5>
          <button
            className="bg-blue-500 w-full text-white px-4 py-2 rounded"
            onClick={() => {
              handleonClosingConfirmationPage();
            }}
          >
            Explore more items!
          </button>
        </div>
      </div>
    </div>
  );
};
