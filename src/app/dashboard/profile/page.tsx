"use client";

import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import Logout from "@/components/Logout/Logout";
import useMainContext from "@/hooks/useMainContext";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";

export default function Profile() {
  const { currentUser } = useMainContext();
  const [loading, setLoading] = useState(false);

  if (loading) return "loading...";

  return (
    <div className="w-full flex justify-between items-start">
      <div className="w-full flex flex-col">
        <div>Nick: {currentUser?.nickName}</div>
        <div>Email: {currentUser?.email}</div>
      </div>
      <div className="w-auto flex">
        <Logout Icon={FiLogOut} iconSize={18} setLoading={setLoading} />
      </div>
    </div>
  );
}
