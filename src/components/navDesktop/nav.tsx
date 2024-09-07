"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "../searchbar/searchbar";
import { FaGithub } from "react-icons/fa";
import style from "./Nav.module.css";
import useButtonsStore from "@/stores/buttonsStore";
import MagicTouchButton from "../magicTouchButton/magicTouchButton";
import useModalStore from "@/stores/modalStore";
import useToastStore from "@/stores/toastStore";
import LanguageSelect from "../languageSelect/languageSelect";
import { useTranslations } from "next-intl";

const Nav = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [count, setCount] = useState(0);

  const setModal = useModalStore((state) => state.setModal);
  const setActive = useModalStore((state) => state.setActive);
  const setBtnId = useModalStore((state) => state.setBtnId);
  const createToast = useToastStore((state) => state.createToast);

  const getRandomButton = useButtonsStore((state) => state.getRandomButton);
  const button = useButtonsStore((state) => state.randomButton);

  const t = useTranslations();

  let buttonId = Number(button?.id);

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
      setBtnId(buttonId);
      setModal(true);
      setActive(true);
    } else {
      createToast(t("nav"));
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
    <div className="fixed w-full h-[100px] 2xl:h-[120px] top-0 left-0 lg:flex justify-between items-center p-4 xl:p-8 z-50 shadow-lg backdrop-blur-md bg-[#191919bf] border-b border-b-[#bdc3c780] hidden">
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
        <li>
          <LanguageSelect />
        </li>
        <li>|</li>
        <li>
          <MagicTouchButton onClick={onClick}></MagicTouchButton>
        </li>
        <Link
          href={"https://github.com/DMaximoVarela/magic-buttons"}
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
