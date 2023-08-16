import { toast } from "react-toastify";
import { CARTTABLE } from "../../component/assets/constant/Constant";
import { setCartItem } from "../../component/system/SystemSlice";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../../component/firebase/FIrebaseConfig";

export const getCartItems = () => async (dispatch) => {
  try {
    const q = query(collection(db, CARTTABLE));

    const docSnap = await getDocs(q);

    let cartItems = [];

    docSnap.forEach((doc) => {
      const id = doc.slug;
      const data = doc.data();

      cartItems.push({
        ...data,
        id,
      });
    });
    dispatch(setCartItem(cartItems));
  } catch (error) {
    toast.error(error.message);
  }
};

export const createNewCartAction = (obj) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, CARTTABLE), obj);

    if (docRef?.id) {
      toast.success("item has been added to cart");
    }

    dispatch(getCartItems());
  } catch (error) {
    toast.error();
  }
};
