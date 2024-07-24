"use client";

import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import CodeComponent from "../codeComponent/codeComponent";
import { useState } from "react";
import buttons from "@/data/buttons";

interface content {
  btnId: number;
}

const CodeView: React.FC<content> = ({ btnId }) => {
  const [html, setHtml] = useState({
    isActive: true,
    code: buttons[btnId].htmlCode,
  });
  const [css, setCss] = useState({
    isActive: window.innerWidth > 640 ? true : false,
    code: buttons[btnId].cssCode,
  });
  const [tailwind, setTailwind] = useState({
    isActive: false,
    code: buttons[btnId].tailwindCode,
  });

  const handleCodeSmall = (typeCode: string) => {
    if (typeCode == "html") {
      setHtml({ ...html, isActive: true });
      setCss({ ...css, isActive: false });
      setTailwind({ ...tailwind, isActive: false });
    } else if (typeCode == "css") {
      setCss({ ...css, isActive: true });
      setHtml({ ...html, isActive: false });
      setTailwind({ ...tailwind, isActive: false });
    } else {
      setTailwind({ ...tailwind, isActive: true });
      setHtml({ ...html, isActive: false });
      setCss({ ...css, isActive: false });
    }
  };

  const handleCodeBig = (typeCode: string) => {
    if (typeCode == "css") {
      setHtml({ ...html, isActive: true });
      setCss({ ...css, isActive: true });
      setTailwind({ ...tailwind, isActive: false });
    } else {
      setTailwind({ ...tailwind, isActive: true });
      setHtml({ ...html, isActive: false });
      setCss({ ...css, isActive: false });
    }
  };

  return (
    <div className="size-full flex flex-col">
      <ul className="flex self-start justify-start items-center gap-3 text-[32px] m-4">
        <li className="sm:hidden">
          <span
            className={`hover:text-[#F3652A] cursor-pointer ${
              html.isActive == true ? "text-[#F3652A]" : "text-[#C7C7C7]"
            }`}
            onClick={() => {
              handleCodeSmall("html");
            }}
          >
            <FaHtml5 />
          </span>
        </li>
        <li className="sm:hidden">
          <span className="cursor-context-menu">-</span>
        </li>
        <li>
          <span
            className={`hover:text-[#264DE4] cursor-pointer ${
              css.isActive == true ? "text-[#264DE4]" : "text-[#C7C7C7]"
            }`}
            onClick={() => {
              if (window.innerWidth > 640) {
                handleCodeBig("css");
              } else {
                handleCodeSmall("css");
              }
            }}
          >
            <FaCss3Alt />
          </span>
        </li>
        <li>
          <span className="cursor-context-menu">-</span>
        </li>
        <li>
          <span
            className={`hover:text-[#39BCF9] cursor-pointer ${
              tailwind.isActive == true ? "text-[#39BCF9]" : "text-[#C7C7C7]"
            }`}
            onClick={() => {
              handleCodeBig("tailwind");
            }}
          >
            <RiTailwindCssFill />
          </span>
        </li>
      </ul>
      <div className="w-full h-[70%] 4xl:h-[80%] 5xl:h-[90%] flex justify-center items-center gap-8">
        {html.isActive == true ? (
          <CodeComponent btnId={btnId} typeCode="html" />
        ) : (
          ""
        )}
        {css.isActive == true ? (
          <CodeComponent btnId={btnId} typeCode="css" />
        ) : (
          ""
        )}
        {tailwind.isActive == true ? (
          <CodeComponent btnId={btnId} typeCode="tailwind" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CodeView;
