import React from "react";
import { InputFields } from "../../component/input-fields/InputFields";
import { CustomInput } from "../../component/custom-input/CustomInput";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";

export const Register = () => {
  return (
    <MainLayout>
      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 border shadow bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            Hello there ?,{" "}
            <span className="font-normal">
              please fill in your information to continue
            </span>
          </h1>
          <form className="mt-6">
            {InputFields.map((item, i) => (
              <CustomInput key={i} {...item} className="mb-2" />
            ))}
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              Sign up
            </button>
            <p className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
              Already registered?
            </p>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

//   if (existingCartItem) {
//
//   } else {
//     //if the product is not in the cart, add it with quantity 1
//     state.cart.push({ name, id, quantity: 1 });
//   }
// },

// updateCartItemQuantity: (state, action) => {
//   const { id, newQuantity } = action.payload;

//   const cartItemToUpdate = state.cart.find((item) => item.id === id);

//   if (cartItemToUpdate) {
//     cartItemToUpdate.quantity = newQuantity;
//   }
// },

// removeFromCart: (state, action) => {
//   const id = action.payload;

//   state.cart = state.cart.filter((item) => item.id !== id);
// },
