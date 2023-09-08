import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileAction } from "./UserAction";
import { CustomInput } from "../../component/custom-input/CustomInput";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import moomin from "../../component/assets/image/moomin.png";
import { useMediaQuery } from "react-responsive";

export const Profile = () => {
  const [form, setForm] = useState();
  const dispatch = useDispatch();
  const { client } = useSelector((state) => state.client);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    setForm(client);
  }, [client]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    dispatch(updateProfileAction(form));
  };

  const isMobile = useMediaQuery({ maxWidth: 450 });

  const InputFields = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Frodo",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "Baggins",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "frodo@baggins.com",
      required: true,
      disabled: true,
    },
  ];
  return (
    <MainLayout>
      <div className="flex justify-center items-center lg:h-screen ">
        <div className="w-3/4 mx-0 lg:mx-auto lg:p-5 shadow-lg rounded-lg">
          <div className="lg:flex mt-4">
            <div className="w-full lg:w-1/4  ">
              <img
                src={moomin}
                alt="Profile Image"
                className="w-full rounded"
                style={{ height: isMobile ? "250px" : "550px" }}
              />
            </div>

            <div className="w-full p-0 mt-5 lg:w-3/4 lg:pl-4">
              <h5 className="text-center text-xl font-semibold mb-4">
                Update Your Profile Information
              </h5>
              <hr />
              <form onSubmit={handleOnSubmit} className="p-2">
                {InputFields.map((item, i) => (
                  <CustomInput
                    key={i}
                    {...item}
                    className="mb-2 "
                    onChange={handleOnChange}
                  />
                ))}
                <button
                  type="submit"
                  className="w-full py-3 mt-6 font-semibold text-white uppercase bg-green-600 rounded-lg shadow-lg focus:outline-none hover:bg-orange-900"
                >
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
