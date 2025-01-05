import { cva } from "class-variance-authority";

export const InputVariants = cva("w-full border px-4 py-3 rounded-[4px]", {
  variants: {
    variant: {
      light: "border-zinc-300 outline-blue-500",
      dark: "border-black bg-black text-white",
    },
  },
  defaultVariants: {
    variant: "light",
  },
});
