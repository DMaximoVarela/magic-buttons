"use client";

import { useEffect, useState } from "react";
import styles from "./Toast.module.css";
import useToastStore from "@/stores/toastStore";

interface props {
  id: number;
  message: string;
}

const Toast: React.FC<props> = ({ id, message }) => {
  const [display, setDisplay] = useState("flex");

  const deleteToast = useToastStore((state) => state.deleteToast);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay("none");
      deleteToast(id);
    }, 3000);

    if (display === "flex") {
      clearTimeout(timer);
    }
  }, [id, display]);

  return (
    <>
      {display === "flex" && (
        <div style={{ display: display }} className={styles.container}>
          <div className={styles.toastContainer}>
            <span className={styles.message}>{message}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
