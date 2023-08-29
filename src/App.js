import { useEffect } from "react";
import "./App.css";
import { Footer } from "./component/layout/footer/Footer";
import { Header } from "./component/layout/header/abcd";
import { Home } from "./pages/home/Home";
import {
  getAllProduct,
  getAllProductAction,
} from "./pages/products/ProductAction";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Categories } from "./pages/categories/Categories";
import { NewArrival } from "./pages/new-arrival/NewArrival";
import { NewArrivalProduct } from "./pages/new-arrival/NewArrivalProduct";
import { getAllCategoriesAction } from "./pages/categories/categoriesAction";
import { CatMobile } from "./pages/categories/CatMobile";
import { CatLaptop } from "./pages/categories/CatLaptop";
import { CatTv } from "./pages/categories/CatTv";
import { CatCamera } from "./pages/categories/CatCamera";
import { CatGaming } from "./pages/categories/CatGaming";
import { HotDeals } from "./pages/deals/HotDeals";
import { Cart } from "./pages/shopping-cart/Cart";
import { ProductLanding } from "./component/products/ProductLanding";
import { Register } from "./pages/user/Register";
import { Login } from "./pages/user/Login";
import { Product } from "./pages/products/Product";
import { ToastContainer } from "react-toastify";
import Checkout from "./pages/checkout/Checkout";
import { OrderHistory } from "./pages/checkout/OrderHistory";
import { getAllOrderACtion } from "./pages/checkout/CheckoutAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductAction());
    dispatch(getAllCategoriesAction());
    dispatch(getAllOrderACtion());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        `` <Route path="/new" element={<NewArrival />} />
        <Route path="/deal" element={<HotDeals />} />
        <Route path="/newProduct" element={<NewArrivalProduct />} />
        <Route path="/categories/mobile" element={<CatMobile />} />
        <Route path="/categories/laptop" element={<CatLaptop />} />
        <Route path="/categories/televisions" element={<CatTv />} />
        <Route path="/categories/camera" element={<CatCamera />} />
        <Route path="/categories/gaming" element={<CatGaming />} />
        <Route path="/shopping-cart" element={<Cart />} />
        <Route path="/:parentCat/:slug" element={<ProductLanding />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
