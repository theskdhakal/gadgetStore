import swal from "sweetalert";
import { ORDER } from "../../component/assets/constant/Constant";
import { collection, getDocs, query } from "firebase/firestore";
import { setOrder } from "./OrderSlice";

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
      swal.fire("your order has been placed !", "success");
      dispatch(getAllOrderACtion());
    }

    swal.fire("something went wrong", "error");
  } catch (error) {
    toast.error(error.message);
  }
};
