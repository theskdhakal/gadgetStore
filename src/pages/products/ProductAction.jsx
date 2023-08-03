import { toast } from "react-toastify";
import { PRODUCTTABLE } from "../../component/assets/constant/Constant";
import { setProduct } from "./ProductSlice";
import { collection, doc, getDocs, query } from "firebase/firestore";
import { db } from "../../component/firebase/FIrebaseConfig";

export const getAllProductAction = () => async (dispatch) => {
  try {
    const q = query(collection(db, PRODUCTTABLE));

    const productSnap = await getDocs(q);

    const productList = [];

    productSnap.forEach((doc) => {
      const productDt = {
        ...doc.data(),
        slug: doc.id,
      };
      productList.push(productDt);
    });

    dispatch(setProduct(productList));
  } catch (error) {
    toast.error(error.message);
  }
};
