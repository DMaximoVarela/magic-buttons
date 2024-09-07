"use client";

import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import CodeComponent from "../codeComponent/codeComponent";
import { useEffect, useState } from "react";

const CodeView = () => {
  const [html, setHtml] = useState(true);
  const [css, setCss] = useState(window.innerWidth > 640 ? true : false);
  const [tailwind, setTailwind] = useState(false);

  const handleCodeSmall = (typeCode: string) => {
    if (typeCode == "html") {
      setHtml(true);
      setCss(false);
      setTailwind(false);
    } else if (typeCode == "css") {
      setCss(true);
      setHtml(false);
      setTailwind(false);
    } else {
      setTailwind(true);
      setHtml(false);
      setCss(false);
    }
  };

  const handleCodeBig = (typeCode: string) => {
    if (typeCode == "css") {
      setHtml(true);
      setCss(true);
      setTailwind(false);
    } else {
      setTailwind(true);
      setHtml(false);
      setCss(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCss(false);
        setHtml(true);
        setTailwind(false)
      } else {
        setCss(true);
        setHtml(true);
        setTailwind(false)
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="size-full flex flex-col">
      <ul className="flex self-start justify-start items-center gap-3 text-[32px] m-4">
        <li className="sm:hidden">
          <span
            className={`hover:text-[#F3652A] cursor-pointer ${
              html ? "text-[#F3652A]" : "text-[#C7C7C7]"
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
              css ? "text-[#264DE4]" : "text-[#C7C7C7]"
            }`}
            onClick={() => {
              window.innerWidth > 640 ? handleCodeBig("css") : handleCodeSmall("css")
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
              tailwind ? "text-[#39BCF9]" : "text-[#C7C7C7]"
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
        {html && <CodeComponent typeCode="html" />}
        {css && <CodeComponent typeCode="css" />}
        {tailwind && <CodeComponent typeCode="tailwind" />}
      </div>
    </div>
  );
};

export default CodeView;
