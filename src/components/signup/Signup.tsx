"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaLock, FaUser, FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";
import Toast from "../toast/CustomToast";

const SignupComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });
  const router = useRouter();

  const handleSignup = () => {
    if (!name || !email || !password) {
      showToast("All fields are required!", "error");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Please enter a valid email address!", "error");
      return;
    }

    if (password !== confirmPassword) {
      showToast("Passwords don't match!", "error");
      return;
    }

    setPassword("");
    setConfirmPassword("");
    setName("");
    setEmail("");
    showToast("Signup successful!", "success");
    router.push("/login");
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
          alt="Signup Illustration"
          width={600}
          height={400}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col items-center justify-center space-y-4 px-8">
        <h1 className="text-4xl font-bold text-[var(--primary-text)]">
          Register Now
        </h1>

        {/* Name Input */}
        <div className="flex items-center w-full bg-[var(--tertiary-background)] p-2 rounded">
          <FaUser className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-transparent outline-none text-[var(--primary-text)]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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

        {/* Confirm Password Input */}
        <div className="flex items-center w-full bg-[var(--tertiary-background)] p-2 rounded relative">
          <FaLock className="mr-2 text-gray-500" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full bg-transparent outline-none text-[var(--primary-text)]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div
            className="absolute right-4 cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <FaEyeSlash className="text-gray-500" />
            ) : (
              <FaEye className="text-gray-500" />
            )}
          </div>
        </div>

        {/* Signup Button */}
        <button
          className="w-full bg-[var(--primary-button)] text-white py-2 rounded hover:bg-[var(--primary-border)]"
          onClick={handleSignup}
        >
          Signup
        </button>

        {/* Divider for "Signup with" */}
        <div className="flex items-center justify-center w-full space-x-2">
          <hr className="flex-grow border-gray-300" />
          <span className="text-[var(--secondary-text)]">or signup with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Signup */}
        <button className="text-[var(--primary-text)] font-semibold py-2 px-2 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 border border-[var(--primary-border)]">
          <Image
            src="/images/google.png"
            alt="Google Icon"
            width={25}
            height={25}
          />
        </button>
      </div>
    </div>
  );
};

export default SignupComponent;
