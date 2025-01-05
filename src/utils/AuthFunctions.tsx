import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth, db } from "@/services/firebase";
import { doc, setDoc } from "firebase/firestore";
import Cookies from "js-cookie";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { SetStateAction } from "react";
import { UserProps } from "@/contexts/MainContextTypes";

/////////////////////////////////////////////////////////////////////

export type SignUpProps = {
  email: string;
  nickName: string;
  password: string;
  router: AppRouterInstance;
  setFormFields: (
    value: SetStateAction<{
      email: string;
      nickName: string;
      password: string;
    }>
  ) => void;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
};

export async function handleSignUp({
  email,
  nickName,
  password,
  router,
  setFormFields,
  setLoading,
}: SignUpProps) {
  try {
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userId = userCred.user.uid;

    const userData = {
      id: userId,
      email: email,
      nickName: nickName,
    };

    await setDoc(doc(db, "users", userId), userData);
    Cookies.set("loggedIn", "true", { expires: 7 });
    router.push("/dashboard");
    setFormFields({ email: "", nickName: "", password: "" });
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
}

/////////////////////////////////////////////////////////////////////

export type SignInProps = {
  email: string;
  password: string;
  router: AppRouterInstance;
  setInitializing: React.Dispatch<SetStateAction<boolean>>;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
};

export async function handleSignIn({
  email,
  password,
  router,
  setLoading,
}: SignInProps) {
  setLoading(true);
  try {
    await signInWithEmailAndPassword(auth, email, password);
    Cookies.set("loggedIn", "true", { expires: 7 });
    router.push("/dashboard");
  } catch (error) {
    console.log(error);
  }
}

/////////////////////////////////////////////////////////////////////

export type SignOutProps = {
  setUser: React.Dispatch<SetStateAction<User | null>>;
  setCurrentUser: React.Dispatch<SetStateAction<UserProps | null>>;
  router: AppRouterInstance;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
};

export async function handleSignOut({
  setUser,
  setCurrentUser,
  router,
  setLoading,
}: SignOutProps) {
  try {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await signOut(auth);
    setUser(null);
    setCurrentUser(null);
    Cookies.remove("loggedIn");

    router.push("/");
  } catch (error) {
    console.log(error);
  }
}
