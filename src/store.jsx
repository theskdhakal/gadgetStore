import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //defaults to loaclstorage

import productReducer from "./pages/products/ProductSlice";
import categoryReducer from "./pages/categories/CategorySlice";
import cartReducer from "./component/system/CartSlice";
import NewReducer from "./pages/new-arrival/NewSlice";
import ClientReducer from "./pages/user/ClientSlice";
import orderReducer from "./pages/checkout/OrderSlice";
import systemReducer from "./component/system/SystemSlice";

const persistConfig = {
  key: "root", //key for the persisted state in storage
  storage, //storage engine to use (localStorage by default)
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    system: systemReducer,
    client: ClientReducer,
    featured: NewReducer,
    order: orderReducer,
    cart: persistedCartReducer,
  },
});

const persistor = persistStore(store); //create persistor to manage state rehydration

export { store, persistor };
