"use client";

import Filters from "@/components/filters/filters";
import FiltersSelected from "@/components/filtersSelected/filtersSelected";

const Page = () => {
  return (
    <div className="relative flex flex-col w-[100vw] mt-[52px] sm:mt-[76px] lg:mt-[104px] 2xl:mt-[124px] px-6">
      <div className="absolute top-0 left-0 mx-6 flex flex-col text-start text-white">
        <h1 className="text-[24px] sm:text-[32px] lg:text-[42px] 2xl:text-[48px] font-semibold">
          Bienvenido!
        </h1>
        <h3 className="text-[16px] sm:text-[24px] lg:text-[30px] 2xl:text-[36px] font-medium">
          Cada botón tiene su magia. ¿Cuál elegirás hoy?
        </h3>
      </div>
      <div className="relative self-center mt-[86px] lg:mt-[110px] 2xl:mt-[130px]">
        <Filters />
        {/**Contenedor #202020*/}
        <div className="absolute p-6 w-full h-fit bg-[#202020]">
          <ul className="flex justify-between items-center">
            <li className="text-[20px] sm:text-[24px] lg:text-[32px] text-white">
              125 Botones
            </li>
            <li className="text-[16px] sm:text-[18px] lg:text-[20px]">
              Página 1 de 16
            </li>
          </ul>
          <FiltersSelected />
        </div>
      </div>
    </div>
  );
};

export default Page;
