"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

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
    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username" className="block text-sm font-medium">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your username"
        />
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your password"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded mb-4"
        >
          Login
        </button>
        <button
          type="button"
          className="w-full bg-gray-200 py-2 rounded mb-4"
          onClick={() => alert("Forgot password flow not implemented yet.")}
        >
          Forgot Password
        </button>
      </form>
      <div className="flex justify-between items-center">
        <button
          onClick={() => router.push("/signup")}
          className="text-blue-500 underline"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
