import React from "react";
import { useSelector } from "react-redux";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import { ProductsCard } from "../../component/products/ProductsCard";

export const Product = () => {
  const { product } = useSelector((state) => state.product);
  const { searchValue } = useSelector((state) => state.searchValue);
  let filteredProduct = [];

  if (!searchValue) {
    filteredProduct = product;
  } else {
    filteredProduct = product.filter((item) =>
      item.productName.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  return (
    <MainLayout>
      <ProductsCard filteredProduct={filteredProduct} />
    </MainLayout>
  );
};
