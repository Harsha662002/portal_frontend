"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import { FaUser, FaLock, FaGoogle } from "react-icons/fa";
import Image from "next/image";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setIsLogin } = useAppContext();

  const handleLogin = async (event: React.FormEvent) => {
    setIsLogin(true);
    router.push("/home");
  };

  return (
    <div className="bg-[var(--secondary-background)] shadow-lg flex">
      {/* Left Section */}
      <div className="w-1/2 p-4">
        <Image
          src="/images/loginPage.png"
          alt="Login Illustration"
          width={600}
          height={400}
          className="w-full h-full object-cover rounded"
        />
      </div>
      {/* Right Section */}
      <div className="w-1/2 flex flex-col items-center justify-center space-y-4 px-8">
        <h1 className="text-4xl font-bold text-[var(--primary-text)]">
          Portal
        </h1>
        <h2 className="text-lg text-[var(--secondary-text)]">
          Sign in to your account
        </h2>

        {/* Username Input */}
        <div className="flex items-center w-full bg-[var(--tertiary-background)] p-2 rounded">
          <FaUser className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-transparent outline-none text-[var(--primary-text)]"
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center w-full bg-[var(--tertiary-background)] p-2 rounded">
          <FaLock className="mr-2 text-gray-500" />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent outline-none text-[var(--primary-text)]"
          />
        </div>

        {/* Forgot Password */}
        <div className="w-full text-right">
          <a href="#" className="text-[var(--secondary-text)]">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-[var(--primary-button)] text-[var(--primary-text)] py-2 rounded">
          Login
        </button>

        {/* Divider for "Login with" */}
        <div className="flex items-center justify-center w-full space-x-2">
          <hr className="flex-grow border-gray-300" />
          <span className="text-[var(--secondary-text)]">or login with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <button className="text-[var(--primary-text)] font-semibold py-2 px-2 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 border border-[var(--primary-border)]">
          <Image
            src="/images/google.png"
            alt="Google Icon"
            width={25}
            height={25}
          />
        </button>

        {/* Register Link */}
        <p className="text-center text-[var(--primary-text)]">
          Don’t have an account?{" "}
          <a href="#" className="text-[var(--secondary-text)]">
            Register here...
          </a>
        </p>
      </div>
    </div>
  );
}
