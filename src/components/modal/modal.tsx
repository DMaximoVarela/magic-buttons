"use client";

import { useState } from "react";
import { FaRegMoon, FaRegCopy, FaCopy, FaCheck } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";

interface content {
  modal: boolean;
  setModal: (modal: boolean) => void;
  cssCode: string;
  btnId: number;
  text: string;
}

const Modal: React.FC<content> = ({
  modal,
  setModal,
  cssCode,
  btnId,
  text,
}) => {
  const [darkMode, setDarkMode] = useState(true);
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
    <>
      {modal && (
        <div className="flex justify-center items-center w-[100vw] h-[100vh] fixed top-0 left-0 bg-[rgba(0, 0, 0, 0.7)] z-50 backdrop-blur-[20px]">
          <div className="relative flex flex-col w-[90vw] h-[80vh] bg-[#202020] rounded-[32px] shadow-md shadow-[#090909]">
            <div className="flex justify-between items-center w-[97%] self-center px-2 py-4 border-b border-b-[#c7c7c7] mb-6">
              <span
                onClick={() => {
                  setModal(!modal);
                }}
                className="flex justify-center items-center w-8 lg:w-12 h-8 lg:h-12 bg-[#303030] hover:bg-[#272727] rounded-lg text-[16px] lg:text-[24px] text-slate-100 cursor-pointer"
              >
                X
              </span>
              <span className="text-[18px] lg:text-[24px]">Botón #{btnId}</span>
              <div className="w-8 lg:w-12 h-8 lg:h-12"></div>{" "}
              {/* div vacio para balancear el header */}
            </div>

            <ul className="flex space-x-2 text-[16px] lg:text-[24px] ml-6 mb-4">
              <li className="cursor-pointer hover:text-slate-100">Botón</li>
              <li>|</li>
              <li className="cursor-pointer hover:text-slate-100">Código</li>
            </ul>

            <div
              className={`relative flex justify-center items-center flex-grow mx-6 mb-6 bg-[#191919] rounded-[32px] ${
                darkMode ? "bg-[#191919]" : "bg-[#e8e8e8]"
              } `}
            >
              <button className={cssCode}>Botón</button>
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
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
