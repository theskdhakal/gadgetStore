import React from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import { Caroussel } from "../../component/caroussel/Caroussel";
import { useSelector } from "react-redux";
import { Banner } from "../../component/banner/Banner";
import OpeningSoon from "../../component/assets/image/openingSoon.jpg";

export const Home = () => {
  const { product } = useSelector((state) => state.product);
  console.log(product);

  return (
    <MainLayout>
      {/* <Banner /> */}

      <div className="py-3">
        <Caroussel />
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {product.map((product) => (
              <div key={product.slug} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.thumbnail}
                    alt="no image"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={"#"}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.productName}
                      </a>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p> */}
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.salesPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl bg-gray-100 mx-auto px-4 py-1 gap-12 shadow text-gray-600  md:px-8 xl:flex">
        <div className=" min-h-screen flex flex-col">
          {/* first row  */}

          <div className="flex flex-col lg:flex-row lg:h-1/2">
            <div className="lg:w-1/2 p-8">
              <img
                src="https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-90782693/90782693.jpg"
                alt="First Image"
                className="w-full h-auto rounded-lg shadow"
              />
            </div>
            <div className="lg:w-1/2 p-8 flex  items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Intelligent Auto Modes
                </h2>
                <p className="text-gray-600">
                  Streamline your photography experience with intelligent auto
                  modes that optimize settings like exposure, focus, and white
                  balance, ensuring great results even for beginners.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col-reverse lg:flex-row lg:h-1/2">
            <div className="lg:w-1/2 p-8 flex items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Advanced Sensor Technology
                </h2>
                <p className="text-gray-600">
                  Capture stunning images with precision and clarity thanks to
                  advanced sensor technology, which enhances low-light
                  performance and detail in every shot.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 p-8">
              <img
                src="https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Best-Travel-Camera.jpg"
                alt="Second Image"
                className="w-full h-auto rounded-lg shadow"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="flex flex-col lg:flex-row lg:h-1/2">
            <div className="lg:w-1/2 p-8">
              <img
                src="https://www.thinkingtech.in/wp-content/uploads/2017/04/photography-camera-wallpaper-hd-resolution-1024x640.jpg"
                alt="Third Image"
                className="w-full h-auto rounded-lg shadow"
              />
            </div>
            <div className="lg:w-1/2 p-8 flex items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Versatile Lens Options
                </h2>
                <p className="text-gray-600">
                  Enjoy creative freedom with interchangeable lenses that cater
                  to different photography styles, from wide-angle landscapes to
                  close-up portraits, making them ideal for wildlife
                  photography.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
