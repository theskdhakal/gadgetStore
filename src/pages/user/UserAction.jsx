import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { USERS } from "../../component/assets/constant/Constant";

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
      await setDoc(doc(db, USERS, user.uid), rest);
      return toast.success("you have been registered");
    }
  } catch (error) {
    toast.error(error.message);
  }
};
