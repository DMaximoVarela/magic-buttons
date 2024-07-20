"use client";

import { useState } from "react";
import { FaRegCopy, FaCopy, FaCheck } from "react-icons/fa6";

interface TextToCopy {
  text: string;
}

const CopyComponent: React.FC<TextToCopy> = ({ text }) => {
  const [isCopy, setIsCopy] = useState({
    text: "Copiar",
    icon: FaRegCopy,
  });

  const [isClicked, setIsClicked] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text); // copia el textp al portapapeles
    setIsCopy({
      text: "Copiado!",
      icon: FaCheck,
    });
    setIsClicked(true);

    setTimeout(() => {
      setIsCopy({
        text: "Copiar",
        icon: FaRegCopy,
      });
      setIsClicked(false);
    }, 5000);
  };

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsCopy({
        text: "Copiar",
        icon: FaCopy,
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsCopy({
        text: "Copiar",
        icon: FaRegCopy,
      });
    }
  };

  return (
    <div
      className="w-[100px] h-auto p-1 rounded-lg bg-[#202020] shadow shadow-[#151515] cursor-pointer"
      onClick={copy}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="flex justify-center items-center text-[16px] text-slate-200 gap-2">
        <li>
          <isCopy.icon />
        </li>
        <li>{isCopy.text}</li>
      </ul>
    </div>
  );
};

export default CopyComponent;
