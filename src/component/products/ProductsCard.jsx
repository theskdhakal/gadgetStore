import React from "react";
import { Link } from "react-router-dom";

export const ProductsCard = ({ filteredProduct }) => {
  return (
    // <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    //   <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    //     <Link to={`/products/${slug}`}>
    //       <div key={slug} className="p-1 border bg-black border-black rounded">
    //         <img
    //           src={thumbnail}
    //           alt=""
    //           class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
    //         />
    //         <div className="relative border border-black bg-white p-6">
    //           <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
    //             New
    //           </span>

    //           <h3 class="mt-4 text-lg font-medium text-gray-900">
    //             {productName}
    //           </h3>

    //           <p class="mt-1.5 text-sm text-gray-700">{price}</p>

    //           <form class="mt-4">
    //             <button class="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
    //               Add to Cart
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </Link>
    //   </div>
    // </div>

    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {filteredProduct.map((product) => (
          <div
            key={product.slug}
            className="p-1 border bg-black border-black rounded"
          >
            <Link to={`/products/${product.slug}`} className="block">
              <img
                src={product.thumbnail}
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-black bg-white p-6">
                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                  New
                </span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {product.productName}
                </h3>
                <p className="mt-1.5 text-sm text-gray-700">{product.price}</p>
                <form className="mt-4">
                  <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                    Add to Cart
                  </button>
                </form>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
