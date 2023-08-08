import React from "react";
import { useSelector } from "react-redux";

export const Mobile = () => {
  const { product } = useSelector((state) => state.product);

  const productMobile = product.filter((item) => item.parentCat === "mobile");
  console.log(productMobile);
  return (
    <div className="bg-white p-5">
      <h2 className="text-center underline text-red-500">Mobile-Phones</h2>
      <div className="mx-auto  max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productMobile.map((item) => (
            <a
              key={item.slug}
              href={item.href}
              className="group bg-[#475569] p-1 border rounded "
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={item.thumbnail}
                  alt="image loading soon"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                  style={{ height: "200px" }}
                />
              </div>
              <h3 className="mt-4 text-sm text-white">{item.productName}</h3>
              <p className="mt-1 text-lg font-medium text-white">
                ${item.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
