import { Component } from "react";
import HomePage from "./home/page";
import LoginPage from "./login/page";

export default function Home() {
  const isLogin = JSON.parse(localStorage.getItem("isLogin") || "false");
  return <main>{isLogin ? <HomePage /> : <LoginPage />}</main>;
}

//in queue
// 1. custom toast Component- better ui, better responses.
// 2. hashing function, isEmptyorNull custom function
// 3. api calls for signup and login
// 4. google signup and login
