"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaLock, FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Toast from "../toast/CustomToast";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      showToast("All fields are required!", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Please enter a valid email address!", "error");
      return;
    }

    setPassword("");
    setEmail("");
    showToast("Login successful!", "success");
    localStorage.setItem("isLogin", JSON.stringify(true));
    router.push("/home");
  };

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
  };

  return (
    <div className="bg-[var(--secondary-background)] shadow-lg flex relative">
      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "" })}
      />
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
        {/* Email Input */}
        <div className="flex items-center w-full bg-[var(--tertiary-background)] p-2 rounded">
          <FaEnvelope className="mr-2 text-gray-500" />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent outline-none text-[var(--primary-text)]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Password Input */}
        <div className="flex items-center w-full bg-[var(--tertiary-background)] p-2 rounded relative">
          <FaLock className="mr-2 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full bg-transparent outline-none text-[var(--primary-text)]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="absolute right-4 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaEyeSlash className="text-gray-500" />
            ) : (
              <FaEye className="text-gray-500" />
            )}
          </div>
        </div>
        {/* Forgot Password */}
        <div className="w-full text-right">
          <a href="#" className="text-[var(--secondary-text)]">
            Forgot Password?
          </a>
        </div>
        {/* Login Button */}
        <button
          className="w-full bg-[var(--primary-button)] text-[var(--primary-text)] py-2 rounded"
          onClick={handleLogin}
        >
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
        <p className="text-center text-[var(--primary-text)] text-sm">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-lg text-[var(--secondary-text)] hover:underline"
          >
            Register here...
          </Link>
        </p>
      </div>
    </div>
  );
}
