import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { CLIENT } from "../../component/assets/constant/Constant";
import { setClient, setUser } from "./ClientSlice";
import { db, auth } from "../../component/firebase/FIrebaseConfig";

export const registerUserAction = async ({
  confirmPassword,
  password,
  ...rest
}) => {
  try {
    const pendingUser = createUserWithEmailAndPassword(
      auth,
      rest.email,
      password
    );

    toast.promise(pendingUser, {
      pending: "please wait...",
    });

    const { user } = await pendingUser;

    if (user?.uid) {
      await setDoc(doc(db, CLIENT, user.uid), rest);
      return toast.success("you have been registered");
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const getUSerAction = (uid) => async (dispatch) => {
  try {
    //read user id from firebase

    const docSnap = await getDoc(doc(db, CLIENT, uid));

    if (docSnap.exists()) {
      const user = { ...docSnap.data(), uid };
      dispatch(setClient(user));
    }
  } catch (error) {
    toast.error(error.message);
  }
};
