import { useAppContext } from "@/context/AppContext";
import HomePage from "./home/page";
import LoginPage from "./login/page";

export default function Home() {
  const { isLogin } = useAppContext();
  return <main>{isLogin ? <HomePage /> : <LoginPage />}</main>;
}
