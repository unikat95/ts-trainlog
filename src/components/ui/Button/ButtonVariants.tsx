import { cva } from "class-variance-authority";

export const ButtonVariants = cva(
  "w-full px-5 py-2 rounded-[4px] flex justify-center items-center gap-2",
  {
    variants: {
      variant: {
        light: "",
        dark: "",
        blue: "bg-blue-500 text-white",
        red: "",
        yellow: "",
        green: "",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }
);
