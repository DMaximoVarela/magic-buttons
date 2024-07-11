"use client";

import { useState } from "react";
import Image from "next/image";
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
    <div className="w-full h-[140px] top-0 left-0 absolute flex justify-center items-center p-8 z-10 shadow-lg backdrop-blur border-b border-b-[#bdc3c780]">
      <ul className="list-none flex justify-stretch items-center text-[26px] gap-6">
        <li>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={73}
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
        <li>
          <Searchbar />
        </li>
        <li>|</li>
        <li className="h-[64px] p-2 flex justify-center items-center rounded-2xl hover:bg-[#00000033] backdrop-blur cursor-pointer">
          ES
        </li>
        <li className="h-[64px] flex justify-center items-center space-x-1 px-6 text-[#4A90E2] border-[#4A90E2] border rounded-3xl bg-[#1456a44d] cursor-pointer hover:bg-[#1456a499]">
          <span>Toque Mágico</span>
          <FaWandMagicSparkles />
        </li>
        <li className="text-[32px] hover:text-gray-200 cursor-pointer">
          <FaLinkedin />
        </li>
        <li className="text-[32px] hover:text-gray-200 cursor-pointer">
          <FaGithub />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
