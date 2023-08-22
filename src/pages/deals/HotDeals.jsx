import React, { useEffect, useState } from "react";
import deal from "../../component/assets/image/promo/deal.jpg";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductsCard } from "../../component/products/ProductsCard";

export const HotDeals = () => {
  const { category } = useSelector((state) => state.category);
  const { product } = useSelector((state) => state.product);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const salesProduct = product.filter(
    (item) => item.salesPrice !== undefined && item.salesPrice !== ""
  );
  console.log(salesProduct);

  useEffect(() => {
    if (salesProduct?.length) {
      setFilteredProduct([...salesProduct]);
    }
  }, [salesProduct?.length]);

  const handleEachCategoryDeal = (catSlug) => {
    if (catSlug) {
      setFilteredProduct(
        salesProduct.filter((prod) => prod.parentCat === catSlug)
      );
    }
  };
  return (
    <MainLayout>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="bg-[#f44236] flex mb-5  justify-center">
            <img src={deal} alt="" />
          </div>

          <div className="categories-name grid grid-cols-3 gap-4 my-5  ">
            {category.map((item) => (
              <button
                className="border p-3 border-black bg-[#a5f3fc] rounded"
                onClick={() => handleEachCategoryDeal(item.slug)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"></div>
        </div>
        <hr />
        <div>
          <h2 className="text-center underline text-red-500">Hot-Deals</h2>

          <ProductsCard filteredProduct={filteredProduct} />
        </div>
      </div>
    </MainLayout>
  );
};
