"use client";

import { useState, useEffect, createContext, useContext } from "react";
import Toast from "../components/Toast/Toast";

const ToastContext = createContext({
  isToastActive: false,
  showToast: () => {},
});

export const ToastProvider = ({ children }) => {
  //Toast Sate
  const [isToastActive, setIsToastActive] = useState(false);
  const [toastMessage, setToastMessage] = useState("Hello world!");

  const showToast = (message) => {
    setToastMessage(message);
    setIsToastActive(true);
  };

  useEffect(() => {
    if (!isToastActive) return;

    const timer = setTimeout(() => {
      setIsToastActive(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [isToastActive]);

  return (
    <ToastContext.Provider
      value={{
        isToastActive,
        showToast,
      }}
    >
      <Toast show={isToastActive} message={toastMessage} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
