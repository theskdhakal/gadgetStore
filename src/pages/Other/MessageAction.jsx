import { addDoc, collection } from "firebase/firestore";
import { MESSAGE } from "../../component/assets/constant/Constant";
import { db } from "../../component/firebase/FIrebaseConfig";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export const addMessageAction = (form) => async (disaptch) => {
  try {
    const messageRef = await addDoc(collection(db, MESSAGE), form);

    if (messageRef?.id) {
      Swal.fire({
        icon: "success",
        title: "Your message has been sent",
        allOutsideClick: false,
      });
    }
  } catch (error) {
    toast.error("Message sending Failed !! Please try again");
  }
};
