import style from "./page.module.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
// import AuxiliarViewButton from "@/components/auxiliarViewButton/auxiliarViewButton";

export default function LandingPage() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className={style.bg}></div>
      <div className="text-center px-6">
        <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] 2xl:text-[72px] 4xl:text-[84px] font-bold">
          Descubre <span className="text-[#4A90E2]">+100 Botones</span>{" "}
          <span className="sm:hidden">con</span>
          <br />
          <span className="xsm:hidden sm:inline-block">con </span>{" "}
          <span className="text-[#4A90E2] inline-block">Código CSS</span>
        </h1>
        <h2 className="text-[16px] sm:text-[24px] xl:text-[32px] 4xl:text-[36px] font-normal text-[#BDC3C7]">
          Copia el código CSS de cualquier <br className="lg:hidden" /> botón
          con solo un clic.
        </h2>
      </div>
      <Link href={"/inicio"}>
        <div className="h-[32px] sm:h-[40px] lg:h-[50px] 2xl:h-[64px] my-4 flex justify-center items-center text-[16px] sm:text-[24px] 2xl:text-[32px] font-medium px-4 space-x-1 text-[#4a90e2] border border-[#4a90e2] rounded-3xl bg-[#1456a44d] hover:bg-[#1456a499] cursor-pointer transition duration-500 ease-in-out transform">
          <span>Iniciar Viaje</span>
          <FaArrowRight />
        </div>
      </Link>
    </main>
  );
}
