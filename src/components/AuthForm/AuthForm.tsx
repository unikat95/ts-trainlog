"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import useMainContext from "@/hooks/useMainContext";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import AuthToggle from "../AuthToggle/AuthToggle";

export default function AuthForm() {
  const { handleSignUp, handleSignIn, setInitializing } = useMainContext();
  const [formFields, setFormFields] = useState({
    email: "",
    nickName: "",
    password: "",
  });
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    if (isSignedIn) {
      await handleSignUp({
        email: formFields.email,
        nickName: formFields.nickName,
        password: formFields.password,
        router,
        setFormFields,
        setLoading,
      });
    } else {
      await handleSignIn({
        email: formFields.email,
        password: formFields.password,
        router,
        setInitializing,
        setLoading,
      });
    }

    await new Promise(() => setTimeout(() => setLoading(false), 500));
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <h1 className="text-2xl font-semibold">
        {isSignedIn ? "Register" : "Login"}
      </h1>
      <form
        className="w-full flex flex-col justify-start items-center gap-2"
        onSubmit={handleSubmit}
      >
        <Input
          variant="light"
          type="email"
          name="email"
          value={formFields.email}
          placeholder="email"
          onChange={handleInputChange}
        />
        {isSignedIn && (
          <Input
            variant="light"
            type="text"
            name="nickName"
            value={formFields.nickName}
            placeholder="nickname"
            onChange={handleInputChange}
          />
        )}
        <Input
          variant="light"
          type="password"
          name="password"
          value={formFields.password}
          placeholder="password"
          onChange={handleInputChange}
        />
        <Button
          variant="blue"
          text={isSignedIn ? "Register" : "Login"}
          loadingIcon={loading}
        />
      </form>
      <AuthToggle isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
    </div>
  );
}
