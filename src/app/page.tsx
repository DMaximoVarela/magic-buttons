"use client";

import style from "./page.module.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";
import useButtonsStore from "@/stores/buttonsStore";
import { useTranslations } from "next-intl";
import Image from "next/image";
// import AuxiliarViewButton from "@/components/auxiliarViewButton/auxiliarViewButton";

export default function LandingPage() {
  const getButtons = useButtonsStore((state) => state.getButtons);
  const getAllButtons = useButtonsStore((state) => state.getAllButtons);
  const allButtons = useButtonsStore((state) => state.buttonsCopy);
  const t = useTranslations("LandingPage");

  useEffect(() => {
    getButtons();
    getAllButtons();
  }, []);

  function perfectNum(num: number) {
    const lastDigit = num % 10;

    if (lastDigit === 0) {
      return num;
    } else if (lastDigit > 5) {
      return num - lastDigit + 5;
    } else {
      return num - lastDigit;
    }
  }

  return (
    <main className="w-full h-screen snap-y snap-mandatory">
      <div className={style.bg}></div>
      <section className="h-screen flex flex-col justify-center items-center snap-start">
        <div className="text-center px-6">
          <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] 2xl:text-[72px] 4xl:text-[84px] font-bold">
            {t("title.lineOne")}{" "}
            <span className="text-[#4A90E2]">{`+${perfectNum(
              allButtons.length
            )} ${t("title.lineTwo")}`}</span>{" "}
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
      </section>
      <section className="h-screen flex flex-col justify-center items-center snap-start">
        <h1 className="my-12 text-[24px] sm:text-[32px] lg:text-[42px] 2xl:text-[62px] 4xl:text-[74px] font-bold">
          Cada
          <span className="text-[#4A90E2]"> Botón</span> Con Un{" "}
          <span className="text-[#4A90E2]">Diseño Único</span>
        </h1>
        <div className="flex justify-center items-center px-6 space-x-6">
          <section className="flex flex-col justify-start items-start w-1/2">
            <h2 className="text-[24px] sm:text-[32px] lg:text-[42px] 2xl:text-[62px] 4xl:text-[74px] font-bold text-start">
              <span className="text-[#4A90E2]">Código</span> al Alcance de un{" "}
              <span className="text-[#4A90E2]">Clic</span>
            </h2>
            <span className="text-[16px] sm:text-[24px] 2xl:text-[32px] 4xl:text-[42px] text-start">
              Accede al código HTML y CSS de cualquier botón con un simple clic.
              Sin complicaciones.
            </span>
          </section>
          <section className="w-1/2">
            <Image
              src={"/images/Landing1.png"}
              alt="MagicButtons"
              width={700}
              height={700}
              style={{
                boxShadow: "0px 0px 15px 0px rgba(199,199,199,0.15)",
                borderRadius: "24px",
              }}
            />
          </section>
        </div>
      </section>
    </main>
  );
}
