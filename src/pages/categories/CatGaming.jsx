import React from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import gaming from "../../component/assets/image/categories/gaming.png";
import { FaGamepad } from "react-icons/fa";
import { SiAmazongames } from "react-icons/si";
import { ProductsCard } from "../../component/products/ProductsCard";
import { useSelector } from "react-redux";

export const CatGaming = () => {
  const { product } = useSelector((state) => state.product);
  const filteredProduct = product.filter((item) => item.parentCat === "gaming");
  const features = [
    {
      icon: <SiAmazongames />,
      title: "Diverse Gaming Selection",
      desc: "Immerse yourself in a vast array of gaming wonders spanning across genres, platforms, and generations. From action-packed adventures to immersive RPGs, our curated selection ensures that every gamer finds their perfect match. ",
    },
    {
      icon: <FaGamepad />,
      title: "Cutting-Edge Gaming Gear",
      desc: " Elevate your gaming experience with top-tier gear and accessories designed to enhance every moment of play. Discover ergonomic controllers, immersive headsets, and responsive gaming mice that provide a competitive edge.",
    },
  ];

  return (
    <MainLayout>
      <div>
        <section className="px-4 py-24 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              Game On with Greatness:{" "}
              <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                Discover the Gaming Wonders
              </span>{" "}
              at Our Store!
            </h1>
            <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
              Step into a world of exhilarating possibilities with our
              collection focused on gaming excellence.Embark on a journey where
              the only limit is your imagination. Reveal the thrilling gaming
              wonders that promise endless excitement and entertainment.
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <a
                className="inline-flex items-center justify-center w-full mb-2 btn btn-primary btn-lg sm:w-auto sm:mb-0"
                href="#productGaming"
              >
                Browse Gaming
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="inline-flex items-center justify-center w-full mb-2 btn btn-light btn-lg sm:w-auto sm:mb-0"
                href="#"
              >
                Contact US
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <img
              src={gaming}
              alt="Hellonext feedback boards software screenshot"
              className="w-full rounded-lg "
            />
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 shadow justify-between md:px-8 lg:flex">
            <div>
              <div className="max-w-xl space-y-3">
                <h3 className="text-indigo-600 font-semibold">Features</h3>
                <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                  Empowering Gaming Excellence{" "}
                </p>
                <p>
                  Experience gaming like never before with our exceptional
                  features that redefine entertainment.
                </p>
              </div>
              <div className="mt-12 max-w-lg lg:max-w-none">
                <ul className="space-y-8">
                  {features.map((item, idx) => (
                    <li key={idx} className="flex gap-x-4">
                      <div className="flex-none w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg text-gray-800 font-semibold">
                          {item.title}
                        </h4>
                        <p className="mt-3">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr />
        <div id="productGaming">
          <h2 className="text-center underline text-red-500">Gaming</h2>

          <ProductsCard filteredProduct={filteredProduct} />
        </div>
      </div>
    </MainLayout>
  );
};
