import React, { useState } from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import { CustomInput } from "../../component/custom-input/CustomInput";
import logo from "../../component/assets/image/logo.JPG";

export const ContactUs = () => {
  const [form, setForm] = useState();

  const input = [
    {
      label: "Full Name",
      type: "text",
      name: "name",
      placeholder: "Rey Mysterio",
      required: true,
    },
    {
      label: "E-mail",
      type: "email",
      name: "email",
      placeholder: "rey@mysterio.com",
      required: true,
    },
    {
      label: "Message",
      type: "text",
      name: "message",
      placeholder: "lorem ipsum",
      as: "textarea",
      rows: 10,
      required: true,
      style: { height: "100px" },
    },
  ];
  return (
    <MainLayout>
      <div className="flex  justify-center items-center mt-5 ">
        <div className="w-full lg:w-3/4 mx-auto p-5  rounded-lg lg:flex">
          <section className="w-full lg:w-1/2 ">
            <img src={logo} alt="" />
          </section>
          <section className="w-full mt-5  mx-auto rounded shadow-sm  p-3">
            <h3>Contact Us</h3>
            <hr />
            {input.map((item, i) => (
              <CustomInput key={i} {...item} className="y-space-5" />
            ))}
            <button className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-stone-700 rounded shadow-lg focus:outline-none hover:bg-gray-900">
              Send Message
            </button>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};
