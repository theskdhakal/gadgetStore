import React, { useEffect, useState } from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import checkout from "../../component/assets/image/promo/checkout.jpg";

import { useDispatch, useSelector } from "react-redux";

import { Popup } from "../../component/pop-up/Popup";
import { OrderSummary } from "./OrderSummary";
import { Link } from "react-router-dom";
import logo from "../../component/assets/image/logo.JPG";
import { PaymentForm } from "../../component/checkout/PaymentForm";

const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const subTotal = cart.reduce((accumulator, item) => {
    return accumulator + +(item.price * item.quantity);
  }, 0);

  const totalAmount = Math.round(1.13 * subTotal);

  const publishableKey = process.env.REACT_APP_STRIPE_PK;

  const stripePromise = loadStripe(publishableKey);

  const options = {
    mode: "payment",
    currency: "aud",
    amount: 30000,
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
            <Elements stripe={stripePromise} options={options}>
              <PaymentForm />
            </Elements>
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
