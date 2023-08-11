import React from "react";
import { useSelector } from "react-redux";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import dontMiss from "../../component/assets/image/promo/dontMiss.png";
import { Link } from "react-router-dom";
import { ProductsCard } from "../../component/products/ProductsCard";

export const NewArrivalProduct = () => {
  const { product } = useSelector((state) => state.product);
  const { category } = useSelector((state) => state.category);
  console.log(category);

  //create a shallow copy of the product array
  const sortedProducts = [...product];

  //sort the product array based on timestamp in descending order
  sortedProducts.sort((a, b) => b.addedDate - a.addedDate);

  //get the first 5 items from the sorted array
  const filteredProduct = sortedProducts.slice(0, 7);

  console.log(filteredProduct);

  return (
    <MainLayout>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="bg-[#f44236] flex mb-5  justify-center">
            <span>
              <img src={dontMiss} style={{ height: "165px" }} />
            </span>
            <h1 className="text-center py-5 ml-5 text-white new-arrival mb-5">
              NEW ARRIVALS
            </h1>
          </div>

          <div className="categories-name grid grid-cols-3 gap-4 my-5  ">
            {category.map((item) => (
              <button className="border p-3 border-black bg-[#a5f3fc] rounded">
                <Link to="/" className="no-underline text-black font-bold">
                  {item.name}
                </Link>
              </button>
            ))}
          </div>
        </div>
        <hr />
        <div>
          <ProductsCard filteredProduct={filteredProduct} />
        </div>
      </div>
    </MainLayout>
  );
};
