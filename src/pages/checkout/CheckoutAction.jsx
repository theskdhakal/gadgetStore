import { ORDER } from "../../component/assets/constant/Constant";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { setOrder, setReview } from "./OrderSlice";
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
  ({ orderId, uid, prodId, rating, feedback, reviewId }) =>
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

            item.rating = rating;
            item.feedback = feedback;
            item.reviewId = reviewId;
          }
          return item;
        });

        //update the order docs with modified cart
        await updateDoc(orderRef, { cart: updatedCart });

        dispatch(getAllOrderACtion(uid));
      } else {
        toast.error("order not found");
      }
    } catch (error) {
      toast.error("order couldnot be updated with review");
    }
  };

export const addNewReviewAction = (reviewObj) => async (dispatch) => {
  try {
    const { orderId, prodId, rating, feedback, uid } = reviewObj;

    const docRef = await addDoc(collection(db, REVIEW), reviewObj);

    if (docRef?.id) {
      toast.success("Your review has been added");
    }

    //updating orderTable and adding review to items

    const obj = {
      orderId,
      prodId,
      uid,
      rating,
      feedback,
      reviewId: docRef.id,
    };

    dispatch(updateOrderAction(obj));
    dispatch(setPopupShow(false));
    return;
  } catch (error) {
    toast.error("Error in adding Review");
  }
};

export const deleteReviewAction =
  ({ reviewId, prodId, orderId, uid }) =>
  async (dispatch) => {
    try {
      await deleteDoc(doc(db, REVIEW, reviewId));

      const orderRef = doc(db, ORDER, orderId);
      const orderDoc = await getDoc(orderRef);

      if (orderDoc.exists()) {
        //get the order data

        const orderData = orderDoc.data();

        //find the specific item in the cart
        const updatedCart = orderData.cart.map((item) => {
          if (item.id === prodId) {
            //add the review to the item

            item.rating = null;
            item.feedback = null;
            item.reviewId = null;
          }
          return item;
        });

        //update the order docs with modified cart
        await updateDoc(orderRef, { cart: updatedCart });

        dispatch(getAllOrderACtion(uid));
      }
    } catch (error) {
      toast.error("something went wrong while deleting review");
    }
  };

//fetch review for selected product

export const getSelectedProductReview = (slug) => async (dispatch) => {
  console.log(slug);
  try {
    const q = query(collection(db, REVIEW), where("prodId", "==", slug));
    const { docs } = await getDocs(q);

    if (docs.length) {
      let selectedBookReview = [];

      docs.forEach((doc) => {
        const reviewObj = { id: doc.id, ...doc.data() };
        selectedBookReview.push(reviewObj);
      });
      dispatch(setReview(selectedBookReview));
    }
  } catch (error) {
    toast.error("something went wrong while fetching review");
  }
};
