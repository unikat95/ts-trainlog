import { HTMLAttributes } from "react";
import { ButtonVariants } from "./ButtonVariants";
import { CgSpinner } from "react-icons/cg";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: "light" | "dark" | "blue" | "red" | "yellow" | "green";
  type?: "submit" | "reset" | "button" | undefined;
  text: string;
  loadingIcon?: boolean;
};

export default function Button({
  variant,
  type,
  text,
  loadingIcon,
  ...props
}: ButtonProps) {
  const className = ButtonVariants({ variant });

  return (
    <button type={type} className={className} {...props}>
      {loadingIcon && <CgSpinner className="animate-spin" />}
      {text}
    </button>
  );
}
