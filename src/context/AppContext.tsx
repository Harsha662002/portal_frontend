"use client";

import { createContext, useContext, useRef, useState, ReactNode } from "react";
import useStateRef from "react-usestateref";

interface AppContextProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isLoginRef: React.MutableRefObject<boolean>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isLogin, setIsLogin, isLoginRef] = useStateRef(false);

  return (
    <AppContext.Provider value={{ isLogin, setIsLogin, isLoginRef }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
