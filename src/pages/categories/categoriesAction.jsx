import { collection, getDocs, query } from "firebase/firestore";
import { CATEGORYTABLE } from "../../component/assets/constant/Constant";
import { setcategory } from "./CategorySlice";
import { db } from "../../component/firebase/FIrebaseConfig";
import { toast } from "react-toastify";

export const getAllCategoriesAction = () => async (dispatch) => {
  try {
    const q = query(collection(db, CATEGORYTABLE));

    const catSnap = await getDocs(q);

    const categoryList = [];

    catSnap.forEach((doc) => {
      const catDt = {
        ...doc.data(),
        slug: doc.id,
      };
      categoryList.push(catDt);
    });

    dispatch(setcategory(categoryList));
  } catch (error) {
    toast.error(error.message);
  }
};
