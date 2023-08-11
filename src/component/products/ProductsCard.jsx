import React from "react";
import { Link } from "react-router-dom";

export const ProductsCard = ({ filteredProduct }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {filteredProduct.map((product) => (
          <div
            key={product.slug}
            className="bg-white p-4 border border-gray-200 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            <Link to={`/products/${product.slug}`} className="block">
              <img
                src={product.thumbnail}
                alt={product.productName}
                className="h-64 w-full object-cover object-center"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.productName}
                </h3>
                <p className="mt-2 text-sm text-gray-700">${product.price}</p>
              </div>
            </Link>
            <form className="mt-4">
              <button className="block w-full py-2 px-4 mt-2 rounded-md bg-green-500 text-white font-semibold shadow-md transition duration-300 transform hover:scale-105">
                Add to Cart
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};
