import React from "react";
import { useSelector } from "react-redux";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import dontMiss from "../../component/assets/image/promo/dontMiss.png";

export const NewArrivalProduct = () => {
  const { product } = useSelector((state) => state.product);

  //create a shallow copy of the product array
  const sortedProducts = [...product];

  //sort the product array based on timestamp in descending order
  sortedProducts.sort((a, b) => b.addedDate - a.addedDate);

  //get the first 5 items from the sorted array
  const lastSevenAddedItems = sortedProducts.slice(0, 7);
  console.log(lastSevenAddedItems);

  return (
    <MainLayout>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="bg-[#f44236] flex mb-5 justify-center">
            <span>
              <img src={dontMiss} clasName="" style={{ height: "165px" }} />
            </span>
            <h1 className="text-center text-white py-5 underline mb-5">
              NEW ARRIVALS
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {lastSevenAddedItems.map((item) => (
              <a key={item.slug} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={item.thumbnail}
                    alt="image loading soon"
                    className="h-full w-full border object-cover object-center group-hover:opacity-75"
                    style={{ width: "450px", height: "150px" }}
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  {item.productName}-${item.price}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
