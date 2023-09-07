import React, { useEffect, useState } from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { deleteReviewAction, getAllOrderACtion } from "./CheckoutAction";
import { setPopupShow } from "../../component/system/systemSlice";
import { Popup } from "../../component/pop-up/Popup";
import { ReviewForm } from "../review/ReviewForm";
import { Rating } from "../../component/rating/Rating";

export const OrderHistory = (Uid) => {
  const { client } = useSelector((state) => state.client);
  const { order } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrderACtion(client.uid));
  }, [client?.uid]);

  const [itemForReview, setItemForReview] = useState({});

  const handleOnGiveReview = (item, orderId, clientId, clientName) => {
    setItemForReview({ ...item, orderId, clientId, clientName });
    dispatch(setPopupShow(true));
  };

  const handleOnDeleteReview = (item, orderId, uid) => {
    const deleteObj = {
      prodId: item.id,
      uid,
      orderId,
      reviewId: item.reviewId,
    };

    if (window.confirm("Are you sure you want to delete this review")) {
      dispatch(deleteReviewAction(deleteObj));
    }
  };

  return (
    <MainLayout>
      <Popup>
        <ReviewForm itemForReview={itemForReview} />
      </Popup>
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
                      {item.feedback && (
                        <p className="text-gray-700">
                          Your Feedback: {item.feedback}
                        </p>
                      )}
                    </div>

                    {item?.rating ? (
                      <div className="flex flex-column gap-2">
                        <Rating rate={item.rating} />
                        <button
                          className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600"
                          onClick={() =>
                            handleOnDeleteReview(item, eachOrder.id, client.uid)
                          }
                        >
                          Delete Review
                        </button>
                      </div>
                    ) : (
                      <button
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                        onClick={() =>
                          handleOnGiveReview(
                            item,
                            eachOrder.id,
                            client.uid,
                            client.fName
                          )
                        }
                      >
                        Review
                      </button>
                    )}
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
