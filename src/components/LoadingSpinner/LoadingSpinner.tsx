import { CgSpinner } from "react-icons/cg";

type LoadingSpinnerProps = {
  size: number;
};

export default function LoadingSpinner({ size }: LoadingSpinnerProps) {
  return (
    <div className="w-full h-[100dvh] flex justify-center items-center text-blue-400">
      <CgSpinner size={size} className="animate-spin" />
    </div>
  );
}
