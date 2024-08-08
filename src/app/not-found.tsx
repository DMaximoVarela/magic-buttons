import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import style from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className="flex justify-between items-center px-6 md:space-x-7">
      <div className={style.bg}></div>
      <div className="text-start">
        <h1 className="text-[18px] sm:text-[32px] lg:text-[36px] 2xl:text-[60px] 4xl:text-[72px] text-[#e8e8e8] font-bold">
          ¡<span className="text-[#4A90E2]">Oops</span>, página
          <span className="text-[#4A90E2]"> no</span>
          <br />
          encontrada!
        </h1>
        <Link
          href={"/inicio"}
          className="flex justify-start items-center space-x-1 cursor-pointer w-fit"
        >
          <FaArrowLeft className="text-[14px] sm:text-[16px] xl:text-[20px] 2xl:text-[24px] 4xl:text-[28px]" />
          <h2 className="text-[14px] sm:text-[20px] xl:text-[24px] 2xl:text-[32px] 4xl:text-[36px] font-normal">
            Volver al Inicio
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
