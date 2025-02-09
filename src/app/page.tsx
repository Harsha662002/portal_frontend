import { Component } from "react";
import HomePage from "./home/page";
import LoginPage from "./login/page";
import { isUserLogin } from "@/utils/helperFunctions";

export default function Home() {
  const isLogin = isUserLogin();
  return <main>{isLogin ? <HomePage /> : <LoginPage />}</main>;
}

//in queue
// 3. api calls for signup and login
// 4. google signup and login
