import React from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import { useSelector } from "react-redux";
import { ProductsCard } from "../../component/products/ProductsCard";

export const CatLaptop = () => {
  const { product } = useSelector((state) => state.product);
  const filteredProduct = product.filter(
    (item) => item.parentCat === "laptops"
  );
  return (
    <MainLayout>
      <section className="py-28">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-indigo-600 font-medium">
              Over 10 popular brands
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
              Unleash Boundless Possibilities: Your Laptop, Your Story.{" "}
            </h2>
            <p>
              Step into the world of modern computing at our Laptop Shop.
              Discover a curated selection of laptops that seamlessly blend
              power, portability, and style.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="javascript:void(0)"
                className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Browse Laptops{" "}
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
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img
              src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
              className=" md:rounded-tl-[108px]"
              alt=""
            />
          </div>
        </div>
        <div className="mt-14 px-4 md:px-8">
          <p className="text-center text-sm text-gray-700 font-semibold">
            Some of our most popular Brands
          </p>
          <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/800px-Samsung_Logo.svg.png?20221128191222"
              alt=""
              width="290"
              height="33"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png?20220821121934"
              alt=""
              width="190"
              height="33"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/600px-HP_New_Logo_2D.svg.png?20220530172232"
              alt=""
              width="190"
              height="33"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png?20210729021049"
              alt=""
              width="190"
              height="33"
            />
          </div>
        </div>
      </section>

      <hr />
      <div id="productMobile">
        <h2 className="text-center underline text-red-500">Laptops</h2>

        <ProductsCard filteredProduct={filteredProduct} />
      </div>
    </MainLayout>
  );
};
