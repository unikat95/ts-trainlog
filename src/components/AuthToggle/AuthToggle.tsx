import { SetStateAction, useState } from "react";

type AuthToggleProps = {
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<SetStateAction<boolean>>;
};

export default function AuthToggle({
  isSignedIn,
  setIsSignedIn,
}: AuthToggleProps) {
  const handleMethodChange = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <div className="flex gap-1">
      {isSignedIn ? "Already have an account?" : "Don`t have an account?"}
      <button className="text-blue-500" onClick={handleMethodChange}>
        {isSignedIn ? "Sign In" : "Sign Up"}
      </button>
    </div>
  );
}
