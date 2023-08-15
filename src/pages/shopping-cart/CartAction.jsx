import { toast } from "react-toastify";
import { CARTTABLE } from "../../component/assets/constant/Constant";

export const createNewCartAction = (obj) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, CARTTABLE), obj);

    if (docRef?.id) {
      toast.success("item has been added to cart");
    }

    //to be continued
  } catch (error) {
    toast.error();
  }
};
