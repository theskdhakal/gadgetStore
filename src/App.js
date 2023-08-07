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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductAction());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/new" element={<NewArrival />} />
      <Route path="/newProduct" element={<NewArrivalProduct />} />
    </Routes>
  );
}

export default App;
