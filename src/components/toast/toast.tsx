"use client";

import { useEffect } from "react";
import styles from "./Toast.module.css";
import useToastStore from "@/stores/toastStore";

const Toast = () => {
  const message = useToastStore((state) => state.message);
  const active = useToastStore((state) => state.active);
  const setActive = useToastStore((state) => state.setActive);

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
