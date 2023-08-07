import React from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";

export const CatMobile = () => {
  const features = [
    {
      icon: (
        <img src="https://images.samsung.com/is/image/samsung/p6pim/au/2302/gallery/au-galaxy-s23-s918-sm-s918bzgfats-thumb-534849288?$252_252_PNG$" />
      ),
      title: "Design",
      desc: "Big yet compact. In your pocket",
    },
    {
      icon: (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrL31BDEIDJndY3B5cWvFMij5_b87Dp2iOOXj98kI2ehmPyxOqnij_8dKlwEaG5wRnUgI&usqp=CAU" />
      ),
      title: "Big Screen",
      desc: "Immersive viewing experience",
    },
    {
      icon: (
        <img src="https://lh3.googleusercontent.com/oJPozDOTKzyRGttTgvHZuDYASAi3-lF3r6CO22BcgcrRHeA1xPQyJhYTv362UXzFpdtlctUnxL-zypZv2mw-3TWXlgAMW4r8wA=rw-e365-nu-w1950" />
      ),
      title: "Amazing photography, made simple",
      desc: "With Real Tone, Magic Eraser, and Night Sight, Pixel’s camera captures any moment beautifully",
    },
  ];
  return (
    <MainLayout>
      <section>
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-sm text-indigo-600 font-medium">
              Your Mobile Haven: Where Devices Make Magic Happen!{" "}
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
              Welcome to Your Mobile Haven,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                the ultimate destination for cell phone devices that make magic
                happen!
              </span>
            </h2>
            <p className="max-w-2xl mx-auto">
              Embrace the enchanting blend of sleek aesthetics and powerful
              performance, and discover devices that transform the way you
              communicate, work, and play.
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="javascript:void(0)"
                className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Browse Mobile phones
              </a>
              <a
                href="javascript:void(0)"
                className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="mt-14">
            <img
              src="https://res.cloudinary.com/floatui/image/upload/v1670150563/desktop_dte2ar.png"
              className="w-full shadow-lg rounded-lg border"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-xl space-y-3">
            <h3 className="text-indigo-600 font-semibold">Features</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Get more from your cell phone
            </p>
            <p>
              Level Up Your Cell Phone: Discover an array of accessories and
              services that take your mobile experience to new heights!
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className={`feature-${
                    idx + 1
                  } space-y-3 py-8 lg:px-12 sm:py-0`}
                >
                  <div className="w-100 h-100 border text-indigo-600 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
