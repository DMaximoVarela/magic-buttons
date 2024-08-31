"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { IoLanguageSharp } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import useButtonsStore from "@/stores/buttonsStore";
import Modal from "../modal/modal";
import MagicTouchButton from "../magicTouchButton/magicTouchButton";

const NavMobile = () => {
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);

  const getRandomButton = useButtonsStore((state) => state.getRandomButton);
  const button = useButtonsStore((state) => state.randomButton);

  let buttonId = Number(button?.id);

  const generateRandomNumber = (max: number, min: number) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const onClick = async () => {
    setCount(count + 1);

    if (button) {
      setModal(true);
    } else {
      alert(`Se produjo un error desconocido 💀`);
    }
  };

  useEffect(() => {
    const randomNumber = generateRandomNumber(1, 6);

    const fetchData = async () => {
      await getRandomButton(randomNumber.toString());
    };

    fetchData();
  }, [count]);

  return (
    <div className="w-full h-[48px] sm:h-[72px] top-0 left-0 absolute flex justify-between items-center p-4 z-50 shadow-md backdrop-blur border-b border-b-[#bdc3c780] lg:hidden">
      <IoIosSearch className="text-[24px] sm:text-[28px]" />
      <div className="absolute top-0 left-0 w-full z-[0] h-[48px] sm:h-[72px] flex justify-center items-center">
        <Link href={"/"} className="w-fit">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={28}
            height={28}
            className="cursor-pointer w-[28px] h-[28px] sm:w-[46px] sm:h-[46px]"
          />
        </Link>
      </div>
      <ul className="list-none flex justify-center items-center text-[20px] sm:text-[24px] gap-[2px] sm:gap-2">
        <li className="relative inline-block w-fit px-2 xsm:text-[14px] sm:text-[16px] md:text-[22px] font-medium text-[#C7C7C7] cursor-pointer">
          <IoLanguageSharp className="absolute top-1.5 left-3 pl-1" />
          <select className="appearance-none w-full xsm:px-5 sm:px-6 md:px-8 bg-transparent border border-[#C7C7C7] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4a90e2] cursor-pointer">
            <option value="es" className="bg-[#191919]">
              ES
            </option>
            <option value="en" className="bg-[#191919]">
              EN
            </option>
          </select>
          <TiArrowSortedDown className="absolute top-1.5 right-3 pr-1 pointer-events-none" />
        </li>
        <li className="px-1">|</li>
        <li>
          <MagicTouchButton onClick={onClick} />
        </li>
      </ul>

      <Modal modal={modal} setModal={setModal} btnId={buttonId} active={true} />
    </div>
  );
};

export default NavMobile;
