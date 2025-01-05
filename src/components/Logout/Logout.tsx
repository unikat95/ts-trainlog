import useMainContext from "@/hooks/useMainContext";
import { useRouter } from "next/navigation";
import { SetStateAction } from "react";
import { IconType } from "react-icons";

type LogoutProps = {
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  text?: string;
  Icon?: IconType;
  iconSize?: number;
};

export default function Logout({
  setLoading,
  text,
  Icon,
  iconSize,
}: LogoutProps) {
  const { handleSignOut, setUser, setCurrentUser } = useMainContext();
  const router = useRouter();
  return (
    <button
      onClick={() =>
        handleSignOut({
          setUser,
          setCurrentUser,
          router,
          setLoading,
        })
      }
      className={`${
        Icon && "rounded-full bg-white text-zinc-900 p-3 main-shadow"
      }`}
    >
      {text ? text : Icon && <Icon size={iconSize} />}
    </button>
  );
}
