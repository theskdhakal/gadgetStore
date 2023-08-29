import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CustomInput } from "../../component/custom-input/CustomInput";

export const ReviewForm = ({ itemForReview }) => {
  const [form, setForm] = useState({});

  const dispatch = useDispatch();

  const { cart, email } = itemForReview;

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
      name: "ratings",
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
      as: "textarea",
      rows: "3",
      value: form.feedback,
    },
  ];

  return (
    <div className="w-1/2">
      <form>
        <h3>Review for:{cart.slug}</h3>
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} className="mb-2" />
        ))}

        <button className="bg-blue-400" type="submit">
          Submit Review
        </button>
      </form>
    </div>
  );
};
1;
