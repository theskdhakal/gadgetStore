import React, { useState } from "react";
import { Link } from "react-router-dom";
import special from "../assets/image/promo/special.png";
import newArrival from "../assets/image/promo/newArrival.png";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../system/cartSlice";
import { toast } from "react-toastify";
import { setPopupShow } from "../system/systemSlice";
import { Popup } from "../pop-up/Popup";
import { CartConfirmation } from "./CartConfirmation";

export const ProductsCard = ({ filteredProduct, isDeal, isNew }) => {
  const { cart } = useSelector((state) => state.cart);
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  const handleAddToCart = ({
    thumbnail,
    productName,
    slug,
    price,
    salesPrice,
    parentCat,
  }) => {
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
    setImage(thumbnail);
    toast.success("product has been added to cart");
    dispatch(setPopupShow(true));
  };

  return (
    <>
      <Popup>
        <CartConfirmation image={image} />
      </Popup>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 relative">
          {filteredProduct.map((product) => (
            <div
              key={product.slug}
              className="bg-white p-4 border border-gray-200 rounded-lg shadow-md transition duration-300 transform hover:scale-105 relative"
            >
              {isDeal && (
                <img src={special} alt="deal" className="absolute -top-11 " />
              )}
              {isNew && (
                <img
                  src={newArrival}
                  alt="deal"
                  className="w-1/4 absolute -top-2 -left-2 "
                />
              )}
              <Link
                to={`/${product.parentCat}/${product.slug}`}
                className="block"
              >
                <img
                  src={product.thumbnail}
                  alt={product.productName}
                  className="h-64 w-full object-cover object-center"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.productName}
                  </h3>

                  {product.salesPrice ? (
                    <>
                      <p className="mt-2 text-sm text-gray-700 line-through">
                        ${product.price}
                      </p>

                      <p className="mt-2 text-sm text-gray-700">
                        <span className="text-red-500">
                          ${product.salesPrice}
                        </span>
                        &nbsp;(Sale price)
                      </p>
                    </>
                  ) : (
                    <p className="mt-2 text-sm text-gray-700">
                      ${product.price}
                    </p>
                  )}
                </div>
              </Link>

              <div className="mt-4">
                <button
                  className="block w-full py-2 px-4 mt-2 rounded-md bg-green-500 text-white font-semibold shadow-md transition duration-300 transform hover:scale-105"
                  onClick={() => {
                    handleAddToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
