import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "./Rating";
import { getSelectedProductReview } from "../../pages/checkout/CheckoutAction";

export const ReviewBox = () => {
  const { review } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto py-8 px-4 w-full max-w-7xl bg-white">
      <div className="mx-auto max-w-4xl flex flex-col">
        {/* :HEADER */}
        <div className="pb-5 w-full flex justify-center border-b-2 border-gray-200">
          <h3 className="text-xl sm:text-2xl text-gray-700 font-bold">
            Customer Reviews
          </h3>
        </div>

        {/* :REVIEWS */}
        <div className="mt-5">
          {review.map((review, index) => (
            <article
              key={review.id}
              className={`py-5 flex items-start ${
                index !== 0 && "border-t-2 border-gray-100"
              }`}
            >
              {/* ::Avatar */}
              <span
                className="flex-shrink-0 inline-block border-2 border-gray-50 rounded-full overflow-hidden"
                aria-label="avatar"
              >
                <img
                  src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3BmLWljb240LWppcjIwNjItcG9yLWwtam9iNzg4LnBuZw.png"
                  alt=""
                  className="w-12 h-12"
                />
              </span>
              {/* ::Review Content */}
              <div className="ml-3">
                {/* :::author */}
                <p className="text-sm text-gray-700 font-semibold">
                  {review.clientName}
                </p>

                {/* :::rating */}
                <div className="my-4">
                  <Rating rate={review.rating} />
                </div>
                {/* :::title */}
                <p className="text-base text-gray-700 font-semibold">
                  {review.title}
                </p>
                {/* :::text */}
                <p className="text-sm text-gray-500 font-medium">
                  {review.feedback}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
