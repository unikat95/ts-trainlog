"use client";

import useMainContext from "@/hooks/useMainContext";

export default function DashboardPage() {
  const { currentUser } = useMainContext();

  return (
    <>
      <div className="w-full h-auto rounded-lg overflow-y-auto flex flex-col">
        <div>Welcome back, {currentUser?.nickName}!</div>
      </div>
    </>
  );
}
