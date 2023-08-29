import React from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import { useSelector } from "react-redux";

export const OrderHistory = () => {
  const { order } = useSelector((state) => state.order);

  const { email, address, cart } = order;
  console.log(order);

  return (
    <MainLayout>
      <div className="mt-5 shadow-lg w-3/4 m-auto border">
        <h4 className="text-center text-orange-600 underline">Order History</h4>
        <p>Email:{email}</p>
        <p>Address:{address}</p>
        {/* 
        <div>
          {cart.map((item, i) => (
            <div key={i} className-="bg-black shadow-lg text-white">
              <div>
                <img src={item.image} />
              </div>
              <p>{item.name}</p>
            </div>
          ))}
        </div> */}
      </div>
    </MainLayout>
  );
};
