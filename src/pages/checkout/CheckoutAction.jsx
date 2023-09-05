import { ORDER } from "../../component/assets/constant/Constant";
import {
  addDoc,
  collection,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { setOrder } from "./OrderSlice";
import { db } from "../../component/firebase/FIrebaseConfig";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { setPopupShow } from "../../component/system/systemSlice";

export const getAllOrderACtion = (uid) => async (dispatch) => {
  try {
    //define search query

    const q = query(collection(db, ORDER), where("uid", "==", uid));

    const querySnapshot = await getDocs(q);

    // run search query
    let orders = [];

    querySnapshot.forEach((doc) => {
      orders.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    dispatch(setOrder(orders));
  } catch (error) {
    toast.error(error.message);
  }
};

export const AddOrderAction = (orderData) => async (dispatch) => {
  try {
    const orderRef = await addDoc(collection(db, ORDER), orderData);
    console.log(orderData);
    if (orderRef?.id) {
      Swal.fire({
        icon: "success",
        title: "Your order has been placed",
        allowOutsideClick: false,
      });
      dispatch(getAllOrderACtion(orderData?.uid));
      dispatch(setPopupShow(true));

      return;
    }

    toast.error("something went wrong", "error");
  } catch (error) {
    toast.error(error.message);
  }
};
