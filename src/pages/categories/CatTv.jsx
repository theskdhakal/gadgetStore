import { useState } from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import tv from "../../component/assets/video/tv.gif";
import { useSelector } from "react-redux";
import { ProductsCard } from "../../component/products/ProductsCard";

export const CatTv = () => {
  const { product } = useSelector((state) => state.product);
  const filteredProduct = product.filter((item) => item.parentCat === "tv");

  const features = [
    {
      name: "Trusted",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Superior video quality",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "100 ratings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const attribute = [
    {
      title: "Ultra HD Resolution",
      desc: " Enjoy breathtaking clarity with Ultra HD (4K) resolution, delivering four times the pixels of Full HD for stunningly detailed visuals.",
    },
    {
      title: "Smart Connectivity",
      desc: "Seamlessly access streaming platforms, apps, and the internet directly from your TV, offering a world of entertainment at your fingertips",
    },
    {
      title: "High Dynamic Range (HDR)",
      desc: "Witness lifelike contrasts and vibrant colors with HDR technology, enhancing both bright and dark scenes for a more immersive viewing experience.",
    },
    {
      title: "Voice Control",
      desc: "Navigate effortlessly using voice commands, allowing you to search for content, change channels, and control settings without lifting a finger.",
    },
    {
      title: "Multiple Ports",
      desc: "Connect various devices like gaming consoles, soundbars, and Blu-ray players through multiple HDMI and USB ports, expanding your entertainment possibilities.",
    },
    {
      title: "Slim Design and Minimal Bezels",
      desc: "Enjoy a sleek and stylish look with slim designs and thin bezels, maximizing the screen space and seamlessly blending into your living space.",
    },
  ];

  return (
    <MainLayout>
      <section className="mt-5">
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 shadow md:px-8 xl:flex">
          <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
            <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-start">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-x-2 text-gray-500 text-sm"
                >
                  {item.icon}
                  {item.name}
                </div>
              ))}
            </div>
            <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
              TVs that Define Spectacular: Unveil the Beauty of Entertainment!{" "}
            </h1>
            <p className="max-w-xl mx-auto xl:mx-0">
              Experience the epitome of entertainment with our exceptional range
              of TVs. From stunning visuals to immersive sound, our collection
              sets the standard for home viewing.iscover a variety of sizes,
              technologies, and features that redefine how you enjoy your
              favorite shows, movies, and games.
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
              <a
                href="javascript:void(0)"
                className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex"
              >
                Browse TVs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="javascript:void(0)"
                className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
            <div className="relative">
              <img src={tv} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 mt-5">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-xl space-y-3">
            <h3 className="text-indigo-600 font-semibold">Features</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              What Sets Our TV Apart as the Ultimate Choice!
            </p>
            <p>
              Discover the Pinnacle of Entertainment: What Makes Our TV the Best
              Fit!
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {attribute.map((item, idx) => (
                <li key={idx} className="space-y-3">
                  <div className="w-12 h-12 border text-indigo-600 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
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

      <hr />
      <div id="productTv">
        <h2 className="text-center underline text-red-500">Television</h2>

        <ProductsCard filteredProduct={filteredProduct} />
      </div>
    </MainLayout>
  );
};
