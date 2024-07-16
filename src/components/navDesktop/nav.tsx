"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "../searchbar/searchbar";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import style from "./Nav.module.css";

const Nav = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleAnimationIteration = () => {
    setRotation((prevRotation) => (prevRotation + 360) % 360);
  };

  return (
    <div className="w-full h-[100px] 2xl:h-[120px] top-0 left-0 absolute lg:flex justify-between items-center p-4 xl:p-8 z-10 shadow-lg backdrop-blur border-b border-b-[#bdc3c780] hidden">
      <ul className="list-none flex justify-stretch items-center gap-4 xl:gap-10">
        <Link href={"/"}>
          <li>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={92}
              height={92}
              className={`${style.logo}`}
              style={{
                transform: isHovering
                  ? "rotate(360deg)"
                  : `rotate(${rotation}deg)`,
                transition: isHovering ? "none" : "transform 1s linear",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onAnimationIteration={handleAnimationIteration}
            />
          </li>
        </Link>
        <li>
          <Searchbar />
        </li>
      </ul>
      <ul className="list-none flex justify-stretch items-center text-[22px] xl:text-[24px] 2xl:text-[26px] gap-4 2xl:gap-5">
        <li>|</li>
        <li className="p-2 xl:p-2 flex justify-center items-center rounded-xl xl:rounded-2xl hover:bg-[#00000033] backdrop-blur cursor-pointer transition duration-500 ease-in-out transform">
          ES
        </li>
        <li className="h-[50px] 2xl:h-[64px] my-4 flex justify-center items-center text-[24px] 2xl:text-[32px] font-medium px-4 space-x-1 text-[#4a90e2] border border-[#4a90e2] rounded-3xl bg-[#1456a44d] hover:bg-[#1456a499] cursor-pointer transition duration-500 ease-in-out transform">
          <span>Toque Mágico</span>
          <FaWandMagicSparkles />
        </li>
        <Link
          href={"https://www.linkedin.com/in/maximo-varela/"}
          target="blank"
          rel="noopener"
        >
          <li className="text-[24px] xl:text-[32px] hover:text-gray-200 cursor-pointer transition duration-500 ease-in-out transform">
            <FaLinkedin />
          </li>
        </Link>
        <Link
          href={"https://github.com/DMaximoVarela"}
          target="blank"
          rel="noopener"
        >
          <li className="text-[24px] xl:text-[32px] hover:text-gray-200 cursor-pointer transition duration-500 ease-in-out transform">
            <FaGithub />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
