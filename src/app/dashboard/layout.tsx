"use client";

import Navbar from "@/components/Navbar/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-[100dvh] flex flex-col justify-between items-start p-5 gap-5">
      {children}
      <Navbar />
    </div>
  );
}
