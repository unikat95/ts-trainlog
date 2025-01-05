import Link from "next/link";
import { IconType } from "react-icons";

type NavbarItemProps = {
  isActive: (path: string) => boolean;
  Icon: IconType;
  href: string;
};

export default function NavbarItem({ isActive, Icon, href }: NavbarItemProps) {
  return (
    <li className="p-1">
      <Link
        href={href}
        className={`flex p-3 rounded-2xl transition-all duration-200 select-none ${
          isActive(href)
            ? "bg-emerald-500 text-emerald-50 scale-110"
            : "text-zinc-500"
        }`}
      >
        <Icon size={20} />
      </Link>
    </li>
  );
}
