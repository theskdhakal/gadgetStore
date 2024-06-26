import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.JPG";
import { BsFillCartFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import "./Header.css";
import { Cart } from "../../../pages/shopping-cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { ProductsCard } from "../../products/ProductsCard";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { setIsCartOpen } from "../../system/SystemSlice";
import { setClient } from "../../../pages/user/ClientSlice";
import { auth } from "../../firebase/FIrebaseConfig";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

export const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [searchValue, setSearchValue] = useState();
  const { product } = useSelector((state) => state.product);
  const { cart } = useSelector((state) => state.cart);
  const { client } = useSelector((state) => state.client);
  let filteredProduct = [];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  //function to open the shopping cart
  const openCart = () => {
    dispatch(setIsCartOpen(true));
  };

  const handleOnSearch = (e) => {
    const newValue = e.target.value;

    setSearchValue(newValue);
  };

  if (searchValue) {
    filteredProduct = product.filter((item) =>
      item.productName.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  const handleOnLogout = () => {
    signOut(auth).then(() => {
      dispatch(setClient({}));
      toast.success("you have been logged out");
    });
  };
  return (
    <>
      <div class="bg-mycolor">
        <div class="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  // to="/categories"
                  aria-label="Our product"
                  title="Our product"
                  class="font-medium  tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex underline w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 font-medium font-semibold text-white underlined shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-black">
                        Categories
                        <AiFillCaretDown />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/categories/mobile"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Mobile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/categories/laptop"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Laptops
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/categories/tv"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Tv
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/categories/camera"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Camera
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/categories/gaming"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Gaming
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </Link>
              </li>
              <li>
                <Link
                  to="/new"
                  aria-label="New Arrival"
                  title="New Arrival"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/deal"
                  aria-label="Product pricing"
                  title="Product pricing"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Deals
                </Link>
              </li>
            </ul>

            <Link
              to="/"
              aria-label="Company"
              title="Company"
              class="inline-flex  items-center ml-7"
            >
              <img src={logo} alt="" style={{ width: "115px" }} />
            </Link>
            <ul class="flex items-center hidden ml-auto  space-x-8  lg:flex">
              {client?.uid ? (
                <li>
                  <p
                    className="inline-flex  items-center justify-center mt-3  h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-deep-blue-accent-700 focus:shadow-outline focus:outline-none"
                    style={{ marginRight: "2rem" }}
                  >
                    Hi&nbsp;! {client.fName}
                  </p>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      to="/register"
                      aria-label="register"
                      title=" register"
                      class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    >
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      class="inline-flex  items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-deep-blue-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="login"
                      title="login"
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>

            {/* //second row of header  */}
            <div className="col-span-2 lg:col-span-3 mt-2">
              <div className="grid grid-cols-2 lg:grid-cols-3 ">
                {/* left and middle grid (col-span-1 on small screen, col-span-2 on large screens */}
                <div className="col-span-2 lg:col-span-2  bordered round  ml-2 lg:flex relative ">
                  <input
                    id="searchbar"
                    type="text"
                    autoComplete="off"
                    aria-label="search"
                    placeholder="search"
                    className="rounded mt-0 px-5 text-xl w-full"
                    onChange={handleOnSearch}
                  />
                  <span className="absolute left-2 top-4">
                    <AiOutlineSearch className="text-2xl" />
                  </span>
                </div>

                {/* right grid (col-span-1) */}
                <div className="lg:col-span-1 " style={{ marginLeft: "15rem" }}>
                  <ul className="absolute top-7 right-2 flex ml-auto lg:static">
                    <li>
                      <div className="relative">
                        <button
                          onClick={openCart}
                          className="text-white text-2xl p-1 "
                        >
                          <BsFillCartFill />
                        </button>
                        {cart.length > 0 && (
                          <>
                            <BsFillCircleFill className="text-red-500 absolute top-0 right-0 " />
                            <span className="absolute top-0 right-1 text-xs text-bold text-white">
                              {cart.length}
                            </span>
                          </>
                        )}

                        <Cart />
                      </div>
                    </li>
                    {client?.uid && (
                      <li>
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute  right-0 z-10 mt-2 w-48  origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/profile"
                                    className={classNames(
                                      active ? "bg-gray-100  " : "",
                                      "block px-4 py-2 text-sm text-gray-700 no-underline"
                                    )}
                                  >
                                    Your Profile
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/orderHistory"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700 no-underline"
                                    )}
                                  >
                                    Order History
                                  </Link>
                                )}
                              </Menu.Item>
                              {client?.uid ? (
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to="/"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700 no-underline"
                                      )}
                                      onClick={handleOnLogout}
                                    >
                                      Sign out
                                    </Link>
                                  )}
                                </Menu.Item>
                              ) : (
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to="/login"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Login
                                    </Link>
                                  )}
                                </Menu.Item>
                              )}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div class="ml-auto lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline absolute top-7 left-0"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg class="w-5 text-white" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div
                  class="absolute -top-2 -left-6 w-80  "
                  style={{ zIndex: 999 }}
                >
                  <div class="p-2 bg-mycolor  border  shadow-sm h-screen">
                    <div class="flex items-center justify-between mb-4 ">
                      <div className="flex items-center justify-center w-80">
                        <img src={logo} alt="" style={{ width: "95px" }} />
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2  transition duration-200 rounded hover:bg-white focus:bg-white focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <RxCross2 className="text-2xl text-white" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4">
                        <li>
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <Menu.Button className="inline-flex  w-full justify-center gap-x-1.5 rounded-md   py-2 font-medium font-semibold text-white underlined shadow-sm ring-1 ring-inset ring-gray-300 ">
                                Categories
                                <AiFillCaretDown />
                              </Menu.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-mycolor  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        to="/categories/mobile"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-white"
                                            : "text-white no-underline",
                                          "block px-4 py-2 text-sm"
                                        )}
                                      >
                                        Mobile
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        to="/categories/laptop"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-white"
                                            : "text-white  no-underline",
                                          "block px-4 py-2 text-sm"
                                        )}
                                      >
                                        Laptops
                                      </Link>
                                    )}
                                  </Menu.Item>
                                </div>
                                <div className="py-1">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        to="/categories/tv"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-white"
                                            : "text-white  no-underline",
                                          "block px-4 py-2 text-sm"
                                        )}
                                      >
                                        Tv
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        to="/categories/camera"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-white"
                                            : "text-white  no-underline",
                                          "block px-4 py-2 text-sm"
                                        )}
                                      >
                                        Camera
                                      </Link>
                                    )}
                                  </Menu.Item>
                                </div>
                                <div className="py-1">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        to="/categories/gaming"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-white"
                                            : "text-white  no-underline",
                                          "block px-4 py-2 text-sm"
                                        )}
                                      >
                                        Gaming
                                      </Link>
                                    )}
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </li>
                        <li>
                          <Link
                            to="/new"
                            aria-label="New Arrival"
                            title="New Arrival"
                            class="font-medium tracking-wide text-white no-underline transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/deal"
                            aria-label="Product pricing"
                            title="Product pricing"
                            class="font-medium tracking-wide text-white no-underline transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Deals
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/register"
                            aria-label="register"
                            title="register"
                            class="font-medium tracking-wide text-white no-underline transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Register
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/login"
                            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="login"
                            title="login"
                          >
                            Login
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {filteredProduct.length > 0 && (
        <div>
          <h5 className="text-black text-center pt-3">Search Result</h5>
          <ProductsCard filteredProduct={filteredProduct} />
        </div>
      )}
    </>
  );
};
