"use client";

import { MainContext } from "@/contexts/MainContext";
import { useContext } from "react";

export default function useMainContext() {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("error");
  }

  return context;
}
