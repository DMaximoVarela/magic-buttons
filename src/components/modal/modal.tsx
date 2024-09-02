"use client";

import { useEffect, useState } from "react";
import ButtonView from "../buttonView/buttonView";
import CodeView from "../codeView/codeView";
import useModalStore from "@/stores/modalStore";
import useButtonsStore from "@/stores/buttonsStore";

const Modal = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [viewActive, setViewActive] = useState("button");

  const modal = useModalStore((state) => state.modal);
  const setModal = useModalStore((state) => state.setModal);
  const btnId = useModalStore((state) => state.btnId);
  const active = useModalStore((state) => state.active);

  const button = useButtonsStore((state) => state.button);
  const getButtonById = useButtonsStore((state) => state.getButtonById);

  useEffect(() => {
    const fetchData = () => {
      if (btnId) {
        getButtonById(btnId.toString());
      }
    };

    fetchData();
  }, [btnId]);

  return (
    <>
      {modal && (
        <div className="flex justify-center items-center w-[100vw] h-[100vh] fixed top-0 left-0 bg-[rgba(0, 0, 0, 0.7)] z-50 backdrop-blur-[20px]">
          <div className="relative flex flex-col w-[90vw] h-[80vh] bg-[#202020] rounded-[32px] shadow-md shadow-[#090909]">
            <div className="flex justify-between items-center w-[97%] self-center px-2 py-4 border-b border-b-[#c7c7c7] mb-6">
              <span
                onClick={() => {
                  setModal(!modal);
                  if (active) {
                    setViewActive("button");
                    setDarkMode(true);
                  }
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
              <li
                className={`cursor-pointer hover:text-[#4A90E2] ${
                  viewActive == "button" ? "text-[#4A90E2]" : "text-[#c7c7c7]"
                }`}
                onClick={() => {
                  setViewActive("button");
                }}
              >
                Botón
              </li>
              <li className="cursor-context-menu">|</li>
              <li
                className={`cursor-pointer hover:text-[#4A90E2] ${
                  viewActive == "code" ? "text-[#4A90E2]" : "text-[#c7c7c7]"
                }`}
                onClick={() => {
                  setViewActive("code");
                  darkMode ? "" : setDarkMode(true);
                }}
              >
                Código
              </li>
            </ul>

            <div
              className={`relative w-[90%] h-[50%] flex self-center justify-center items-center flex-grow mx-6 mb-6 bg-[#191919] rounded-[32px] ${
                darkMode ? "bg-[#191919]" : "bg-[#e8e8e8]"
              } `}
            >
              {viewActive == "button" ? (
                <ButtonView darkMode={darkMode} setDarkMode={setDarkMode} />
              ) : (
                <CodeView />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
