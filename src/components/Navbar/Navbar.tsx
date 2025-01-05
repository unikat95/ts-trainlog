"use client";

import { usePathname } from "next/navigation";
import NavbarItem from "./NavbarItem";

import { GrHomeRounded } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { MdEditCalendar } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { LuBicepsFlexed } from "react-icons/lu";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full flex justify-center items-center">
      <ul className="w-auto bg-white main-shadow rounded-3xl flex p-2 overflow-hidden">
        <NavbarItem
          isActive={isActive}
          Icon={MdEditCalendar}
          href="/dashboard/calendar"
        />
        <NavbarItem
          isActive={isActive}
          Icon={LuBicepsFlexed}
          href="/dashboard/training"
        />

        <NavbarItem
          isActive={isActive}
          Icon={GrHomeRounded}
          href="/dashboard"
        />
        <NavbarItem
          isActive={isActive}
          Icon={FiUser}
          href="/dashboard/profile"
        />
        <NavbarItem
          isActive={isActive}
          Icon={SlSettings}
          href="/dashboard/settings"
        />
      </ul>
    </nav>
  );
}
