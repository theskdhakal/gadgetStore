import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./pages/products/ProductSlice";
import categoryReducer from "./pages/categories/CategorySlice";
import cartReducer from "./component/system/SystemSlice";

export default configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
  },
});
