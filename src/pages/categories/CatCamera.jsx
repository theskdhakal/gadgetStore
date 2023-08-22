import React from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import camera from "../../component/assets/image/categories/camera.png";
import { ProductsCard } from "../../component/products/ProductsCard";
import { useSelector } from "react-redux";

export const CatCamera = () => {
  const { product } = useSelector((state) => state.product);
  const filteredProduct = product.filter((item) => item.parentCat === "camera");
  console.log(filteredProduct);
  const features = [
    {
      icon: (
        <img
          src="https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-90782693/90782693.jpg"
          alt=""
        />
      ),
      title: "Intelligent Auto Modes",
    },
    {
      icon: (
        <img
          src="https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Best-Travel-Camera.jpg"
          alt=""
        />
      ),

      title: "Versatile Lens Options",
    },
    {
      icon: (
        <img
          src="https://www.thinkingtech.in/wp-content/uploads/2017/04/photography-camera-wallpaper-hd-resolution-1024x640.jpg"
          alt=""
        />
      ),

      title: "Advanced Sensor Technology",
    },
  ];
  return (
    <MainLayout>
      <div className="bg-white">
        <section>
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
            <div className="flex flex-wrap items-center mx-auto max-w-7xl">
              <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                <div>
                  <div className="relative w-full max-w-lg">
                    <div className="relative">
                      <img
                        className="object-cover object-center mx-auto rounded-lg "
                        alt="hero"
                        src={camera}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                  {" "}
                  Capture Life's Moments: Discover Our Camera Shop's Visual
                  Delights!
                </span>
                <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                  Focus. Capture. Create.
                </h1>
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
                  Embark on a journey of visual storytelling with our curated
                  collection of cameras. From capturing cherished moments to
                  crafting artistic compositions, our cameras empower you to
                  express your unique perspective and create lasting memories.
                  Elevate your photography experience and seize every
                  opportunity to freeze time and preserve beauty.
                </p>
                <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
                  <div className="mt-3 rounded-lg sm:mt-0">
                    <button className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Browse Cameras
                    </button>
                  </div>
                  <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                    <button className="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div className="max-w-xl mx-auto space-y-3 sm:text-center">
              <h3 className="text-indigo-600 font-semibold">Features</h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Do more with less complexity
              </p>
              <p>
                Explore the world through your lens and unlock the magic of
                storytelling through pixels.
              </p>
            </div>
            <div className="mt-12">
              <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((item, idx) => (
                  <li key={idx} className="flex gap-x-4">
                    <div className="flex-none w-1/2 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center ">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-800 font-semibold">
                        {item.title}
                      </h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <hr />
        <div id="productCamera">
          <h2 className="text-center underline text-red-500">camera</h2>

          <ProductsCard filteredProduct={filteredProduct} />
        </div>
      </div>
    </MainLayout>
  );
};
