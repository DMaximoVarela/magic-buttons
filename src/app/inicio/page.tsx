"use client";

import Filters from "@/components/filters/filters";
import FiltersSelected from "@/components/filtersSelected/filtersSelected";
import Cards from "@/components/cards/cards";
import useButtonsStore from "@/stores/buttonsStore";
import { useTranslations } from "next-intl";
import Pagination from "@/components/pagination/pagination";

const Page = () => {
  const buttons = useButtonsStore((state) => state.buttons);
  const t = useTranslations("HomePage");

  return (
    <div className="relative flex flex-col w-[100vw] mt-[52px] sm:mt-[76px] lg:mt-[104px] 2xl:mt-[124px] px-6">
      <div className="absolute top-0 left-0 mx-6 flex flex-col text-start text-white">
        <h1 className="text-[24px] sm:text-[32px] lg:text-[42px] 2xl:text-[48px] font-semibold">
          {t("title")}
        </h1>
        <h3 className="text-[16px] sm:text-[24px] lg:text-[30px] 2xl:text-[36px] font-medium">
          {t("subtitle")}
        </h3>
      </div>
      <div className="relative self-center mt-[86px] lg:mt-[110px] 2xl:mt-[130px]">
        <Filters />
        {/**Contenedor #202020*/}
        <div className="absolute p-6 w-full h-fit bg-[#202020]">
          <ul className="flex justify-between items-center">
            <li className="text-[20px] sm:text-[24px] lg:text-[32px] text-white">
              {`${buttons.length} ${t("btnLength")}`}
            </li>
            <li className="text-[16px] sm:text-[18px] lg:text-[20px]">
              {t("pagination")}
            </li>
          </ul>
          <FiltersSelected />
          <Cards />
          <div className="relative flex justify-center items-center mt-4">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
