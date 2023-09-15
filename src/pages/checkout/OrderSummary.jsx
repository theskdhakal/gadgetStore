import React from "react";
import { resetCart, setCart } from "../../component/system/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setIsCartOpen,
  setPopupShow,
} from "../../component/system/SystemSlice";

export const OrderSummary = ({ totalAmount }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);

  const handleonClosingConfirmationPage = () => {
    navigate("/");
    dispatch(setPopupShow(false));
    dispatch(setIsCartOpen(false));

    dispatch(resetCart());
  };

  return (
    <div>
      <div className="thankYou  ">
        <div>
          <img
            className=""
            src="https://static.vecteezy.com/system/resources/previews/007/653/495/non_2x/thank-you-for-your-order-simple-hand-drawn-lettering-text-illustration-logo-label-design-for-business-marketing-etc-letter-template-design-vector.jpg"
            alt=""
          />
        </div>
        <div>
          <h4>Order Summary: </h4>
          <ul className="space-y-5">
            {cart.map((item) => (
              <li key={item.id}>
                {item.name}&nbsp;-
                <span className="text-red-400">{`$${item.price}`}</span>
              </li>
            ))}
          </ul>
          <hr />
          <h5>Total Amount:${totalAmount}</h5>
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
