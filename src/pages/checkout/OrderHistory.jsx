import React from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import { useSelector } from "react-redux";
import { format } from "date-fns";

export const OrderHistory = () => {
  const { order } = useSelector((state) => state.order);

  return (
    <MainLayout>
      <div className="mt-5 w-3/4 m-auto">
        <h2 className="text-center text-3xl font-semibold mb-4 text-gray-800">
          Order History
        </h2>

        <div className="space-y-6">
          {order.map((eachOrder, eachOrderIndex) => (
            <div
              key={eachOrder.id}
              className="bg-white shadow-md p-6 border border-gray-300 rounded-lg"
            >
              <h3 className="text-lg font-semibold mb-2">
                Order {eachOrderIndex + 1}
              </h3>
              <p className="text-gray-600 mb-1">
                Date:{format(new Date(eachOrder.orderDate), "MM/dd/yyyy")}
              </p>
              <p className="text-gray-600 mb-1">Email: {eachOrder.email}</p>
              <p className="text-gray-600 mb-1">Address: {eachOrder.address}</p>

              <h4 className="mt-3 text-lg font-semibold">Ordered Items:</h4>
              <ul className="space-y-2">
                {eachOrder.cart.map((item, i) => (
                  <li
                    key={i}
                    className="bg-gray-100 flex items-center justify-between p-2 rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="text-gray-700">{item.name}</p>
                      <p className="text-gray-700">Price: ${item.price}</p>
                      <p className="text-gray-700">Quantity: {item.quantity}</p>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                      Review
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
