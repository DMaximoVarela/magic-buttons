"use client";

import { useState } from "react";
import { FaRegCopy, FaCopy, FaCheck } from "react-icons/fa6";

interface TextToCopy {
  text: string;
}

const MiniCopyComponent: React.FC<TextToCopy> = ({ text }) => {
  const [isCopy, setIsCopy] = useState({
    icon: FaRegCopy,
  });

  const [isClicked, setIsClicked] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text); // copia el textp al portapapeles
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
    <div
      onClick={copy}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex justify-center items-center size-8 lg:size-10 text-[16px] lg:text-[24px] text-slate-100 bg-[#303030] hover:bg-[#272727] rounded-lg ${
        isClicked ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <isCopy.icon />
    </div>
  );
};

export default MiniCopyComponent;
