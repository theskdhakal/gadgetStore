import { ORDER } from "../../component/assets/constant/Constant";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { setOrder } from "./OrderSlice";
import { db } from "../../component/firebase/FIrebaseConfig";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const getAllOrderACtion = () => async (dispatch) => {
  try {
    //define search query

    const q = query(collection(db, ORDER));

    // run search query
    let orders = [];

    const querySnapshot = await getDocs(q);

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

    if (orderRef?.id) {
      Swal.fire({
        icon: "success",
        title: "Your order has been placed",
        timer: 1000,
        allowOutsideClick: false,
      });
      dispatch(getAllOrderACtion());
      return;
    }

    toast.error("something went wrong", "error");
  } catch (error) {
    toast.error(error.message);
  }
};
