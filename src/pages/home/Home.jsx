import React, { useEffect, useState } from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import { Caroussel } from "../../component/caroussel/Caroussel";
import { useDispatch, useSelector } from "react-redux";
import { Banner } from "../../component/banner/Banner";
import games from "../../component/assets/image/games.webp";
import laptops from "../../component/assets/image/laptops.webp";
import phones from "../../component/assets/image/phones.avif";
import tv from "../../component/assets/image/tv.jpg";
import { ProductsCard } from "../../component/products/ProductsCard";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.product);
  const { category } = useSelector((state) => state.category);
  const [latestProds, setLatestProds] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const salesProduct = product.filter(
    (item) => item.salesPrice !== undefined && item.salesPrice !== ""
  );

  useEffect(() => {
    if (salesProduct?.length) {
      setFilteredProduct([...salesProduct].slice(0, 3));
    }
  }, [salesProduct?.length]);

  //create a shallow copy of the product array
  const sortedProducts = [...product];

  //sort the product array based on timestamp in descending order
  sortedProducts.sort((a, b) => b.addedDate - a.addedDate);

  useEffect(() => {
    if (sortedProducts?.length) {
      setLatestProds(sortedProducts.slice(0, 3));
    }
  }, [sortedProducts?.length]);

  const customCarouselHeight = { height: "60vh" };

  const carouselSlides = [
    {
      style: {
        height: "60vh",
        background: `url(${phones})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },

    {
      style: {
        height: "60vh",
        background: `url(${laptops})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },

    {
      style: {
        height: "60vh",
        background: `url(${tv})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },

    {
      style: {
        height: "60vh",
        background: `url(${games})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },
  ];

  return (
    <MainLayout>
      <Banner />

      <div>
        <Caroussel
          carouselStyle={customCarouselHeight}
          slides={carouselSlides}
        />
      </div>

      <div className="mt-5 pt-5 lg:w-4/5 mx-auto">
        <span>
          <hr className="w-full mx-auto" />
        </span>

        <div className="space-y-5">
          <h4 className="text-center">DEALS</h4>
          <p
            className="flex  justify-end  mx-3 cursor-pointer"
            onClick={() => {
              navigate("/deal");
            }}
          >
            Show More{" "}
            <span>
              <FiArrowRight className="m-1" />
            </span>
          </p>
        </div>
        <ProductsCard filteredProduct={filteredProduct} isDeal={true} />
      </div>

      <div className="mt-5 pt-5 lg:w-4/5 mx-auto">
        <span>
          <hr className="w-full mx-auto" />
        </span>

        <div className="space-y-5">
          <h4 className="text-center">NEW ARRIVALS</h4>
          <p
            className="flex  justify-end  mx-3 cursor-pointer"
            onClick={() => {
              navigate("/newProduct");
            }}
          >
            Show More{" "}
            <span>
              <FiArrowRight className="m-1" />
            </span>
          </p>
        </div>
        <ProductsCard filteredProduct={latestProds} isNew={true} />
      </div>
    </MainLayout>
  );
};
