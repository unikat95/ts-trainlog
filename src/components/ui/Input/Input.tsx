import { HTMLAttributes } from "react";
import { InputVariants } from "./InputVariants";

type InputProps = HTMLAttributes<HTMLInputElement> & {
  variant?: "light" | "dark";
  type: string;
  name: string;
  value: string;
  placeholder: string;
};

export default function Input({
  type,
  name,
  value,
  variant,
  placeholder,
  ...props
}: InputProps) {
  const className = InputVariants({ variant });

  return (
    <input
      className={className}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  );
}
