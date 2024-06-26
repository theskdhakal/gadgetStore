import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CustomInput } from "../../component/custom-input/CustomInput";
import { addNewReviewAction } from "../checkout/CheckoutAction";

export const ReviewForm = ({ itemForReview }) => {
  const [form, setForm] = useState({});

  const dispatch = useDispatch();

  const { orderId, clientId, clientName, id, name } = itemForReview;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const reviewObj = {
      ...form,
      prodId: id,
      orderId,
      uid: clientId,
      clientName,
      prodName: name,
    };
    dispatch(addNewReviewAction(reviewObj));
  };

  const inputs = [
    {
      label: "Review Title",
      name: "title",
      type: "text",
      required: true,
      placeholder: "amazingly nice",
      value: form.title,
    },
    {
      label: "Ratings",
      name: "rating",
      type: "number",
      required: true,
      min: 1,
      max: 5,
      placeholder: "5",
      value: form.ratings,
    },
    {
      label: "Feedback",
      name: "feedback",
      type: "text",
      required: true,
      placeholder: "Enter your feedback",
      className: "resize-y w-full px-3 py-2 border rounded-lg ",

      value: form.feedback,
    },
  ];

  return (
    <div className="w-3/4 m-auto ">
      <h3 clasName="text-center">Review Form</h3>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <h4>
          <span className="text-red-500">{name}</span>
        </h4>
        {inputs.map((item, i) => (
          <CustomInput
            key={i}
            {...item}
            className="mb-2"
            onChange={handleOnChange}
          />
        ))}

        <button
          className="bg-blue-700 text-white mt-4 flex mx-auto p-2 border rounded"
          type="submit"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};
