import { toast } from "react-toastify";
import { PRODUCTTABLE } from "../../component/assets/constant/Constant";
import { setProduct } from "./ProductSlice";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../component/firebase/FIrebaseConfig";

export const getAllProductAction = () => async (dispatch) => {
  try {
    const q = query(
      collection(db, PRODUCTTABLE),
      where("status", "==", "active")
    );

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

export const updateProductAction = (cart) => async (dispatch) => {
  try {
    for (const item of cart) {
      //get the item
      const slug = item.id;
      const productRef = doc(db, PRODUCTTABLE, slug);
      const productDoc = await getDoc(productRef);

      if (productDoc.exists()) {
        //get the current product data
        const productData = productDoc.data();

        //calculate the updated Quantity.
        const updatedQuantity = productData.quantity - item.quantity;

        //Ensure the updated quantity is not negative
        if (updatedQuantity >= 0) {
          //update quantity in db

          await updateDoc(productRef, { quantity: updatedQuantity });
        } else {
          toast.error("Quantity insufficient");
        }
      } else {
        toast.error("product not found");
      }
    }
  } catch (error) {
    console.log(error);
    toast.error("Error while updating product quantity");
  }
};
