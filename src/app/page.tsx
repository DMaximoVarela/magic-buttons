"use client";

import style from "./page.module.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";
import useButtonsStore from "@/stores/buttonsStore";
import { useTranslations } from "next-intl";
// import AuxiliarViewButton from "@/components/auxiliarViewButton/auxiliarViewButton";

export default function LandingPage() {
  const getButtons = useButtonsStore((state) => state.getButtons);
  const t = useTranslations("LandingPage");

  useEffect(() => {
    getButtons();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center">
      <div className={style.bg}></div>
      <div className="text-center px-6">
        <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] 2xl:text-[72px] 4xl:text-[84px] font-bold">
          {t("title.lineOne")}{" "}
          <span className="text-[#4A90E2]">{t("title.lineTwo")}</span>{" "}
          <span className="sm:hidden">{t("title.lineThree")}</span>
          <br />
          <span className="xsm:hidden sm:inline-block">
            {t("title.lineThree")}{" "}
          </span>{" "}
          <span className="text-[#4A90E2] inline-block">
            {t("title.lineFour")}
          </span>
        </h1>
        <h2 className="text-[16px] sm:text-[24px] xl:text-[32px] 4xl:text-[36px] font-normal text-[#BDC3C7]">
          {t("subtitle.lineOne")} <br className="lg:hidden" />
          {t("subtitle.lineTwo")}
        </h2>
      </div>
      <Link href={"/inicio"}>
        <div className="h-[32px] sm:h-[40px] lg:h-[50px] 2xl:h-[64px] my-4 flex justify-center items-center text-[16px] sm:text-[24px] 2xl:text-[32px] font-medium px-4 space-x-1 text-[#4a90e2] border border-[#4a90e2] rounded-3xl bg-[#1456a44d] hover:bg-[#1456a499] cursor-pointer transition duration-500 ease-in-out transform">
          <span>{t("btnText")}</span>
          <FaArrowRight />
        </div>
      </Link>
    </main>
  );
}
