import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import style from "./not-found.module.css";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("error404page")

  return (
    <div className="flex justify-between items-center px-6 md:space-x-7">
      <div className={style.bg}></div>
      <div className="text-start">
        <h1 className="text-[18px] sm:text-[32px] lg:text-[36px] 2xl:text-[60px] 4xl:text-[72px] text-[#e8e8e8] font-bold">
          ¡<span className="text-[#4A90E2]">Oops</span>, {t("title.lineOne")}
          <span className="text-[#4A90E2]"> {t("title.lineTwo")}</span>
          <br />
          {t("title.lineThree")}
        </h1>
        <Link
          href={"/inicio"}
          className="flex justify-start items-center space-x-1 cursor-pointer w-fit hover:text-[#4a90e2] transition duration-200 ease-in-out"
        >
          <FaArrowLeft className="text-[14px] sm:text-[16px] xl:text-[20px] 2xl:text-[24px] 4xl:text-[28px]" />
          <h2 className="text-[14px] sm:text-[20px] xl:text-[24px] 2xl:text-[32px] 4xl:text-[36px] font-normal">
            {t("btnText")}
          </h2>
        </Link>
      </div>
      <Image
        src="/images/404mb.png"
        alt="404img"
        width={360}
        height={360}
        className={style.img}
      />
    </div>
  );
}
