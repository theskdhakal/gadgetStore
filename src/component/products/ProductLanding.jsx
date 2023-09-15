import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { MainLayout } from "../layout/main-layout/MainLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  resetCart,
  setCart,
  updateCartItemQuantity,
} from "../system/cartSlice";
import { IoIosArrowBack } from "react-icons/io";
import { setPopupShow } from "../../component/system/SystemSlice";
import { Popup } from "../../component/pop-up/Popup";
import { CartConfirmation } from "./CartConfirmation";
import {
  getAllProductReview,
  getSelectedProductReview,
} from "../../pages/checkout/CheckoutAction";
import { Rating } from "../rating/Rating";
import { ReviewBox } from "../rating/ReviewBox";
import { setReview } from "../../pages/checkout/OrderSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const ProductLanding = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();

  const { product } = useSelector((state) => state.product);
  const { cart } = useSelector((state) => state.cart);
  const { review } = useSelector((state) => state.order);

  const selectedProduct = product.find((item) => item.slug === slug) || {};

  useEffect(() => {
    if (!product) {
      navigate("/");
    }

    dispatch(getSelectedProductReview(slug));

    return () => {
      dispatch(setReview([]));
    };
  }, [dispatch, navigate, product.length, slug]);

  // const thisProduct = review.filter((item) => item.prodId === slug);

  const rate = review?.length
    ? review.reduce((acc, { rating }) => acc + +rating, 0) / review.length
    : 5;

  const {
    productName,
    price,
    thumbnail,
    salesPrice,
    description,
    imgUrlList,
    parentCat,
  } = selectedProduct;

  const handleOnAddToCart = (e) => {
    const newItem = {
      image: thumbnail,
      name: productName,
      id: slug,
      price: price,
      category: parentCat,
      quantity: 1,
    };

    if (salesPrice) {
      newItem.salesPrice = salesPrice;
    }

    const existingCartItemIndex = cart.findIndex((item) => item.id === slug);

    if (existingCartItemIndex !== -1) {
      // if the item is already in the cart, update its quantity

      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex] = {
        ...updatedCart[existingCartItemIndex],
        quantity: updatedCart[existingCartItemIndex].quantity + 1,
      };
      dispatch(setCart(updatedCart));
    } else {
      const updatedCart = [...cart, newItem];
      dispatch(setCart(updatedCart));
    }

    toast.success("product has been added to cart");
    dispatch(setPopupShow(true));
  };

  const handleOnArrowClick = () => {
    navigate(`/categories/${parentCat}`);
  };

  return (
    <MainLayout>
      <Popup>
        <CartConfirmation image={thumbnail} />
      </Popup>
      <div className="bg-white">
        <div key={slug} className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li className="text-sm">
                <div
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600 flex gap-2"
                >
                  <IoIosArrowBack
                    className="text-xl cursor-pointer"
                    onClick={handleOnArrowClick}
                  />
                  {productName}
                </div>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={thumbnail}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                {imgUrlList && imgUrlList[1] ? (
                  <img
                    src={imgUrlList[1]}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <div>No image available</div>
                )}
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                {imgUrlList && imgUrlList[2] ? (
                  <img
                    src={imgUrlList[2]}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <div>No image available</div>
                )}
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              {imgUrlList && imgUrlList[3] ? (
                <img
                  src={imgUrlList[3]}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div>No image available</div>
              )}
            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {productName}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="bg-[#dc2626] rounded w-2/5 border border-2 border-black  relative">
                {salesPrice ? (
                  <>
                    <p className="text-3xl tracking-tight px-3 text-center text-white ">
                      <span className="text-lg text-center absolute top-0 left-5">
                        $
                      </span>
                      {salesPrice}
                    </p>
                  </>
                ) : (
                  <p className="text-3xl tracking-tight px-3 text-center text-white space-x-5">
                    <span className="text-lg  text-center absolute left-5 top-0 ">
                      $
                    </span>

                    {price}
                  </p>
                )}
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center gap-2">
                  {" "}
                  <Rating rate={rate} />
                  <p className="pt-3">({review.length} reviews)</p>
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="button"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => handleOnAddToCart(selectedProduct)}
                >
                  Add to bag
                </button>
              </div>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <li key={slug} className="text-gray-400">
                      <span className="text-gray-600">{description}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ReviewBox />
      </div>
    </MainLayout>
  );
};
