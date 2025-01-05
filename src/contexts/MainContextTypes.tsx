import { SignInProps, SignOutProps, SignUpProps } from "@/utils/AuthFunctions";
import { User } from "firebase/auth";
import { SetStateAction } from "react";

export type UserProps = {
  id: string;
  email: string;
  nickName: string;
};

export type FunctionsProps = {
  handleSignUp: ({
    email,
    nickName,
    password,
    router,
    setFormFields,
  }: SignUpProps) => Promise<void>;
  handleSignIn: ({
    email,
    password,
    router,
    setInitializing,
  }: SignInProps) => Promise<void>;
  handleSignOut: ({
    setUser,
    setCurrentUser,
    router,
    setLoading,
  }: SignOutProps) => Promise<void>;
};

export type MainContextProps = {
  user: User | null;
  setUser: React.Dispatch<SetStateAction<User | null>>;
  currentUser: UserProps | null;
  setCurrentUser: React.Dispatch<SetStateAction<UserProps | null>>;
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  initializing: boolean;
  setInitializing: React.Dispatch<SetStateAction<boolean>>;
} & FunctionsProps;

export type MainProviderProps = { children: React.ReactNode };
