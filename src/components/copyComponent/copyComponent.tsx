"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { FaRegCopy, FaCopy, FaCheck } from "react-icons/fa6";

interface TextToCopy {
  text: string;
}

const CopyComponent: React.FC<TextToCopy> = ({ text }) => {
  const t = useTranslations("copyComponent");

  let stringCopy = t("copiar");
  let stringCopied = t("copiado");

  const [isCopy, setIsCopy] = useState({
    text: stringCopy,
    icon: FaRegCopy,
  });

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsCopy({ text: t("copiar"), icon: FaRegCopy });
  }, [t]);

  const copy = () => {
    navigator.clipboard.writeText(text); // copia el textp al portapapeles
    setIsCopy({
      text: stringCopied,
      icon: FaCheck,
    });
    setIsClicked(true);

    setTimeout(() => {
      setIsCopy({
        text: stringCopy,
        icon: FaRegCopy,
      });
      setIsClicked(false);
    }, 5000);
  };

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsCopy({
        text: stringCopy,
        icon: FaCopy,
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsCopy({
        text: stringCopy,
        icon: FaRegCopy,
      });
    }
  };

  return (
    <div
      className="w-[90px] sm:w-[100px] 3xl:w-[110px] h-auto p-1 rounded-lg bg-[#202020] shadow shadow-[#151515] cursor-pointer"
      onClick={copy}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="flex justify-center items-center text-[14px] sm:text-[16px] 3xl:text-[18px] text-slate-200 gap-1">
        <li>
          <isCopy.icon />
        </li>
        <li>{isCopy.text}</li>
      </ul>
    </div>
  );
};

export default CopyComponent;
