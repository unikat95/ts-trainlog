"use client";

import { createContext } from "react";
import { MainContextProps, MainProviderProps } from "./MainContextTypes";
import useAuth from "@/hooks/useAuth";

import {
  handleSignUp,
  handleSignIn,
  handleSignOut,
} from "../utils/AuthFunctions";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

export const MainContext = createContext<MainContextProps | null>(null);

export default function MainProvider({ children }: MainProviderProps) {
  const {
    user,
    setUser,
    currentUser,
    setCurrentUser,
    loading,
    setLoading,
    initializing,
    setInitializing,
  } = useAuth();

  if (loading || initializing) return <LoadingSpinner size={40} />;

  return (
    <MainContext.Provider
      value={{
        user,
        setUser,
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        initializing,
        setInitializing,

        handleSignUp,
        handleSignIn,
        handleSignOut,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
