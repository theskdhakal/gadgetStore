import { ORDER } from "../../component/assets/constant/Constant";
import {
  addDoc,
  collection,
  doc,
  getDoc,
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
import { REVIEW } from "../../component/assets/constant/Constant";

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

export const updateOrderAction =
  ({ orderId, clientId, prodId, ...obj }) =>
  async (dispatch) => {
    try {
      //fetch the order document

      const orderRef = doc(db, ORDER, orderId);
      const orderDoc = await getDoc(orderRef);

      if (orderDoc.exists()) {
        //get the order data

        const orderData = orderDoc.data();

        //find the specific item in the cart
        const updatedCart = orderData.cart.map((item) => {
          if (item.id === prodId) {
            //add the review to the item

            item.review = obj;
          }
          return item;
        });

        //update the order docs with modified cart

        await setDoc(orderRef, { cart: updatedCart });

        dispatch(getAllOrderACtion(clientId));
      } else {
        toast.error("order not found");
      }
    } catch (error) {
      toast.error("order couldnot be updated with review");
    }
  };

export const addNewReviewAction = (reviewObj) => async (dispatch) => {
  try {
    const { orderId, prodId, ratings, clientId } = reviewObj;

    const docRef = await addDoc(collection(db, REVIEW), reviewObj);

    if (docRef?.id) {
      toast.success("Your review has been added");
    }

    //updating orderTable and adding review to items

    const obj = {
      orderId,
      prodId,
      clientId,
      reviewId: docRef.id,
      ratings,
    };

    // dispatch(updateOrderAction(obj));
    dispatch(setPopupShow(false));
    return;
  } catch (error) {
    toast.error("Error in adding Review");
  }
};
