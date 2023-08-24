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
  // const { latestProducts } = useSelector((state) => state.featured);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const salesProduct = product.filter(
    (item) => item.salesPrice !== undefined && item.salesPrice !== ""
  );
  console.log(salesProduct);

  useEffect(() => {
    if (salesProduct?.length) {
      setFilteredProduct([...salesProduct].slice(0, 3));
    }
  }, [salesProduct?.length]);

  console.log(filteredProduct);

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

      <div className="mt-5 pt-5 w-3/5 mx-auto">
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

      {/* <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {product.map((product) => (
              <div key={product.slug} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.thumbnail}
                    alt="no image"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={"#"}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.productName}
                      </a>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p> */}
      {/* </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.salesPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </MainLayout>
  );
};
