"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "../searchbar/searchbar";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";
import style from "./Nav.module.css";
import useButtonsStore from "@/stores/buttonsStore";
import { TiArrowSortedDown } from "react-icons/ti";

const Nav = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [count, setCount] = useState(0);

  const getRandomButton = useButtonsStore((state) => state.getRandomButton);
  const button = useButtonsStore((state) => state.randomButton);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleAnimationIteration = () => {
    setRotation((prevRotation) => (prevRotation + 360) % 360);
  };

  const generateRandomNumber = (max: number, min: number) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const onClick = async () => {
    setCount(count + 1);

    if (button) {
      alert(`MODAL MOSTRANDO BOTÓN`);
    } else {
      alert(`Se produjo un error desconocido 💀`);
    }
  };

  useEffect(() => {
    const randomNumber = generateRandomNumber(1, 15);

    const fetchData = async () => {
      await getRandomButton(randomNumber.toString());
    };

    fetchData();
  }, [count]);

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
        <li className="relative inline-block w-fit px-2 text-[24px] 2xl:text-[32px] font-medium text-[#C7C7C7] cursor-pointer">
          <IoLanguageSharp className="absolute top-1.5 left-3 pl-1" />
          <select className="appearance-none w-full px-8 2xl:px-10 bg-transparent border border-[#C7C7C7] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4a90e2] cursor-pointer">
            <option value="es" className="bg-[#191919]">
              ES
            </option>
            <option value="en" className="bg-[#191919]">
              EN
            </option>
          </select>
          <TiArrowSortedDown className="absolute top-1.5 right-3 pr-1 pointer-events-none" />
        </li>
        <li>|</li>
        <li
          className="h-[50px] 2xl:h-[64px] my-4 flex justify-center items-center text-[24px] 2xl:text-[32px] font-medium px-4 space-x-1 text-[#4a90e2] border border-[#4a90e2] rounded-3xl bg-[#1456a44d] hover:bg-[#1456a499] cursor-pointer transition duration-500 ease-in-out transform"
          onClick={onClick}
        >
          <span>Toque Mágico</span>
          <FaWandMagicSparkles />
        </li>
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
