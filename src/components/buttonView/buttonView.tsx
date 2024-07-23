"use client";

import { useState } from "react";
import { FaRegMoon, FaRegCopy, FaCopy, FaCheck } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import buttons from "@/data/buttons";

interface content {
  idBtn: number;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const ButtonView: React.FC<content> = ({ idBtn, darkMode, setDarkMode }) => {
  const [isCopy, setIsCopy] = useState({
    icon: FaRegCopy,
  });
  const [isClicked, setIsClicked] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(buttons[idBtn].cssCode); // copia el textp al portapapeles
    setIsCopy({
      icon: FaCheck,
    });
    setIsClicked(true);

    setTimeout(() => {
      setIsCopy({
        icon: FaRegCopy,
      });
      setIsClicked(false);
    }, 5000);
  };

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsCopy({
        icon: FaCopy,
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsCopy({
        icon: FaRegCopy,
      });
    }
  };

  return (
    <div>
      <button className={buttons[idBtn].tailwindCode}>Botón</button>
      <ul className="absolute bottom-0 right-0 m-4 flex gap-4">
        <li
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className="flex justify-center items-center size-8 lg:size-10 text-[16px] lg:text-[24px] text-slate-100 bg-[#303030] hover:bg-[#272727] rounded-lg cursor-pointer"
        >
          {darkMode ? <FaRegMoon /> : <IoSunnyOutline />}
        </li>
        <li
          onClick={copy}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex justify-center items-center size-8 lg:size-10 text-[16px] lg:text-[24px] text-slate-100 bg-[#303030] hover:bg-[#272727] rounded-lg cursor-pointer"
        >
          <isCopy.icon />
        </li>
      </ul>
    </div>
  );
};

export default ButtonView;
