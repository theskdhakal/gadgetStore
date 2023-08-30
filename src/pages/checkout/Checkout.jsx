import React, { useEffect, useState } from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { AiFillInfoCircle } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import checkout from "../../component/assets/image/promo/checkout.jpg";

import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import { AddOrderAction } from "./CheckoutAction";
import { resetCart } from "../../component/system/cartSlice";
import { Popup } from "../../component/pop-up/Popup";
import { OrderSummary } from "./OrderSummary";
import { setPopupShow } from "../../component/system/systemSlice";
import { Link } from "react-router-dom";
import logo from "../../component/assets/image/logo.JPG";

const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);
  const [form, setForm] = useState();
  const dispatch = useDispatch();

  const subTotal = cart.reduce((accumulator, item) => {
    return accumulator + +(item.price * item.quantity);
  }, 0);

  const totalAmount = Math.round(1.13 * subTotal);

  // useEffect(() => {
  //   window.onload = function () {
  //     const addressInput = document.getElementById("address");
  //     const autocomplete = new window.google.maps.places.Autocomplete(
  //       addressInput,
  //       {
  //         // apikey: process.env.REACT_APP_GOOGLE_API_KEY,
  //         apikey: "AIzaSyBDdU7haDdZ7HzfRTFohB5E6BcpB07zbdY",
  //       }
  //     );

  //     autocomplete.setTypes(["geocode"]);
  //   };
  // }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnPlaceOrder = (e) => {
    e.preventDefault();

    const orderData = {
      ...form,
      cart,
      orderDate: Date.now(),
    };

    console.log(orderData);

    dispatch(AddOrderAction(orderData));
    dispatch(setPopupShow(true));
  };

  return (
    <>
      <div className="bg-mycolor shadow">
        <Link
          to="/"
          aria-label="Company"
          title="Company"
          class="inline-flex  mm-auto lg:ml-10"
        >
          <img src={logo} alt="" style={{ width: "115px" }} />
        </Link>
      </div>
      <Popup isOrderConfirmation={true}>
        <OrderSummary totalAmount={totalAmount} />
      </Popup>
      <div className="relative mx-auto w-full max-w-7xl bg-white py-5">
        <div className="grid grid-cols-10">
          {/* :CHECKOUT FORM CONTAINER */}
          <div className="col-span-full lg:col-span-6 py-6 sm:py-12 lg:py-24 px-4">
            <div className="mx-auto w-full max-w-lg">
              <form action="" onSubmit={handleOnPlaceOrder}>
                {/* ::Title */}
                <h1 className="relative text-2xl sm:text-3xl text-gray-700 font-medium">
                  Secure Checkout
                  <span className="mt-2 w-10 sm:w-20 h-1 block bg-indigo-600" />
                </h1>

                <div>
                  {/* ::::label */}
                  <label
                    htmlFor="email"
                    className="text-xs text-gray-500 font-semibold "
                  >
                    Email
                  </label>
                  {/* ::::input */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required={true}
                    placeholder="myaddress@example.com"
                    className="form-input px-1 mt-1 w-full block shadow-sm rounded border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    onChange={handleOnChange}
                  />
                </div>
                <div>
                  {/* ::::label */}
                  <label
                    htmlFor="address"
                    className="text-xs text-gray-500 font-semibold"
                  >
                    Address
                  </label>
                  {/* ::::input */}
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required={true}
                    placeholder="1/2 mystreet, there"
                    className="form-input px-1 mt-1 w-full block shadow-sm rounded border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    onChange={handleOnChange}
                  />
                </div>
                {/* :::Card number */}
                <div className="relative">
                  {/* ::::label */}
                  <label
                    htmlFor="card-number"
                    className="text-xs text-gray-500 font-semibold"
                  >
                    Card number
                  </label>
                  {/* ::::input */}
                  <input
                    type="text"
                    id="card-number"
                    name="card-number"
                    placeholder="1234-5678-XXXX-XXXX"
                    className="form-input px-1 pr-10 w-full block shadow-sm rounded border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                  {/* ::::visa logo */}
                  <img
                    src="https://fancytailwind.com/static/visa-icon-5282a8660b2ad42cbdcf817d51129c0a.png"
                    alt=""
                    className="absolute bottom-3 right-3 max-h-4"
                  />
                </div>
                {/* :::Expiration date */}
                <div>
                  {/* ::::title */}
                  <p className="text-xs text-gray-500 font-semibold">
                    Expiration date
                  </p>
                  <div className="mr-6 flex flex-wrap">
                    {/* ::::select month */}
                    <div className="my-1">
                      <label htmlFor="month" className="sr-only">
                        Select expiration month
                      </label>
                      <select
                        name="month"
                        id="month"
                        className={`form-select shadow-sm rounded border-gray-300 bg-gray-50 text-sm cursor-pointer focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
                      >
                        <option value="">Month</option>
                        {/* <option value="">Jan.</option>
                      <option value="">Feb.</option>
                      <option value="">Mar.</option>
                      <option value="">April</option>
                      <option value="">May</option>
                      <option value="">Jun.</option>
                      <option value="">Jul.</option>
                      <option value="">Aug.</option>
                      <option value="">Sept.</option>
                      <option value="">Oct.</option>
                      <option value="">Nov.</option>
                      <option value="">Dec.</option> */}
                      </select>
                    </div>
                    {/* ::::select year */}
                    <div className="my-1 ml-3 mr-6">
                      <label htmlFor="year" className="sr-only">
                        Select expiration year
                      </label>
                      <select
                        name="year"
                        id="year"
                        className={`form-select shadow-sm rounded border-gray-300 bg-gray-50 text-sm cursor-pointer focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
                      >
                        <option value="">Year</option>
                      </select>
                    </div>
                    {/* ::::security code */}
                    <div className="my-1 relative">
                      <label htmlFor="security-code" className="sr-only">
                        Security code
                      </label>
                      <input
                        type="text"
                        id="security-code"
                        name="security-code"
                        placeholder="Security code"
                        className="form-input px-1  w-36 block shadow-sm rounded border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                      <button className="absolute top-1/2 -right-6 inline-flex justify-center items-center text-gray-400 hover:text-indigo-600 transform -translate-y-1/2">
                        <AiFillInfoCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* :::Card name */}
                <div>
                  {/* ::::label */}
                  <label htmlFor="card-name" className="sr-only">
                    Card name
                  </label>
                  {/* ::::input */}
                  <input
                    type="text"
                    id="card-name"
                    name="card-name"
                    placeholder="Name on the card"
                    className="form-input px-1 mt-1 w-full block shadow-sm rounded border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                {/* ::Info */}
                <p className="mt-10 text-center text-sm text-gray-500 font-semibold">
                  By placing this order you agree to the{" "}
                  <a
                    href="#link"
                    className="text-indigo-400 underline hover:text-indigo-600 whitespace-nowrap"
                  >
                    Terms and Conditions
                  </a>
                </p>

                {/* ::Submit Button */}
                <button
                  type="submit"
                  className="mt-4 py-2.5 px-4 w-full inline-flex justify-center items-center rounded bg-indigo-600 text-base sm:text-lg text-white text-opacity-80 font-semibold tracking-wide hover:text-opacity-100"
                >
                  <AiFillLock className="mr-3 w-5 h-5" />
                  Place Order
                </button>
              </form>
            </div>
          </div>

          {/* :RECAP CONTAINER */}
          <div className="col-span-full lg:col-span-4 relative py-6 sm:py-12 lg:py-24 pl-8 pr-4 flex flex-col">
            {/* ::Title */}
            <h2 className="sr-only">Order summary</h2>

            {/* ::Background Image */}
            <div>
              <img
                src={checkout}
                alt=""
                className="absolute top-0 right-0 object-cover  h-full"
              />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-orange-800 to-green-600 opacity-75" />
            </div>

            {/* ::Order Summary */}
            <div className="relative">
              {/* :::Item list */}
              <ul className="space-y-5">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    {/* ::::item infos */}
                    <div className="inline-flex">
                      <img src={item.image} alt="" className="max-h-16" />
                      <div className="ml-3">
                        <p className="text-base text-white font-semibold">
                          {item.name}
                        </p>
                        <p className="text-sm text-white text-opacity-80 font-medium">
                          {item.details}
                        </p>
                      </div>
                    </div>
                    {/* ::::item price */}
                    <p className="text-sm text-white font-semibold">{`$${item.price}`}</p>
                  </li>
                ))}
              </ul>
              {/* :::Separation */}
              <div className="my-5 w-full h-0.5 bg-white bg-opacity-30" />
              {/* :::Total */}
              <div className="space-y-2">
                {/* ::::total price */}
                <p className="flex justify-between text-lg text-white font-bold">
                  <span>SubTotal:&nbsp; ${subTotal}</span>
                </p>
                {/* ::::vat */}
                <p className="flex justify-between text-sm text-white font-medium">
                  <span>Gst: 13%</span>
                </p>
                <p className="flex justify-between text-lg text-white font-bold">
                  <span>
                    Total price:&nbsp; $ <span>{totalAmount}</span>
                  </span>
                </p>
              </div>
            </div>

            {/* ::Contact Infos */}
            <div className="relative mt-10 text-white">
              <h3 className="mb-5 text-lg font-bold">Hotline</h3>
              <p className="text-sm font-semibold">
                +01 23 456 789{" "}
                <span className="font-light">(International)</span>
              </p>
              <p className="mt-1 text-sm font-semibold">
                +9(876) 543 210{" "}
                <span className="font-light">(USA / Canada)</span>
              </p>
              <p className="mt-2 text-xs font-medium">
                (24/7 English phone support for online payment related issues)
              </p>
            </div>

            {/* ::Guarantee */}
            <div className="relative mt-10 flex">
              <HiBadgeCheck className="mr-3 w-10 h-10 text-green-900" />
              <p className="flex flex-col">
                <span className="text-sm text-white font-bold">
                  Money Back Guarantee
                </span>
                <span className="text-xs text-white font-medium">
                  within 30 days of purchase
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
