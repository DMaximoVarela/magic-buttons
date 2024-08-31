"use client";

import { useEffect } from "react";
import styles from "./Toast.module.css";

interface props {
  message: string;
  active: boolean;
  setActive: (toast: boolean) => void;
}

const Toast: React.FC<props> = ({ message, active, setActive }) => {
  useEffect(() => {
    setActive(active);
    if (active) {
      setTimeout(() => {
        setActive(!active);
      }, 3000);
    }
  }, [active]);

  return (
    <>
      {active && (
        <div className="fixed w-[100vw] h-[100vh] flex justify-center top-0 left-0 pointer-events-none">
          <div className={styles.toastContainer}>
            <span className={styles.message}>{message}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
