"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { IoLanguageSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import useButtonsStore from "@/stores/buttonsStore";
import MagicTouchButton from "../magicTouchButton/magicTouchButton";
import Searchbar from "../searchbar/searchbar";
import useModalStore from "@/stores/modalStore";
import useToastStore from "@/stores/toastStore";
import LanguageSelect from "../languageSelect/languageSelect";

const NavMobile = () => {
  const [count, setCount] = useState(0);
  const [searchbarActive, setSearchbarActive] = useState(false);

  const setModal = useModalStore((state) => state.setModal);
  const setActive = useModalStore((state) => state.setActive);
  const setBtnId = useModalStore((state) => state.setBtnId);
  const createToast = useToastStore((state) => state.createToast);

  const getRandomButton = useButtonsStore((state) => state.getRandomButton);
  const button = useButtonsStore((state) => state.randomButton);

  let buttonId = Number(button?.id);

  const generateRandomNumber = (max: number, min: number) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const onClick = async () => {
    setCount(count + 1);

    if (button) {
      setBtnId(buttonId);
      setModal(true);
      setActive(true);
    } else {
      createToast(`Se produjo un error desconocido 💀`);
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
    <div className="fixed w-full h-[48px] sm:h-[72px] top-0 left-0 flex justify-between items-center p-4 z-50 shadow-md backdrop-blur border-b border-b-[#bdc3c780] lg:hidden">
      <IoIosSearch
        className={`text-[24px] sm:text-[28px] h-[32px] sm:h-[36px] p-1 w-auto ${
          searchbarActive ? "hidden" : "flex"
        } justify-center items-center z-[1] cursor-pointer hover:bg-[#101010bf] rounded-full`}
        onClick={() => {
          setSearchbarActive(true);
        }}
      />
      <FaArrowLeft
        className={`text-[24px] sm:text-[28px] h-[32px] sm:h-[36px] p-1 w-auto ${
          searchbarActive ? "flex" : "hidden"
        } justify-center items-center z-[1] cursor-pointer hover:bg-[#101010bf] rounded-full`}
        onClick={() => {
          setSearchbarActive(false);
        }}
      />
      <div
        className={`absolute top-0 left-0 w-full z-[0] h-[48px] sm:h-[72px] ${
          searchbarActive ? "flex" : "hidden"
        } justify-center items-center`}
      >
        <Searchbar />
      </div>
      <div
        className={`absolute top-0 left-0 w-full z-[0] h-[48px] sm:h-[72px] ${
          searchbarActive ? "hidden" : "flex"
        } justify-center items-center`}
      >
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
        <li className={`relative ${searchbarActive ? "hidden" : ""} `}>
          <LanguageSelect />
        </li>
        <li className={`px-1 ${searchbarActive ? "hidden" : ""}`}>|</li>
        <li>
          <MagicTouchButton onClick={onClick} />
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
