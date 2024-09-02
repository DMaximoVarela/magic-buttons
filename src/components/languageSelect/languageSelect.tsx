import React from "react";
import { IoLanguageSharp } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

const LanguageSelect = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="language" className="text-xs px-1 mn:px-2">
        Idioma
      </label>
      <div className="relative inline-block w-fit px-1 mn:px-2 xsm:text-[14px] sm:text-[16px] md:text-[22px] lg:text-[24px] 2xl:text-[32px] font-medium text-[#C7C7C7] cursor-pointer">
        <IoLanguageSharp className="absolute top-1.5 left-3 mn:pl-1" />
        <select
          name="language"
          className="appearance-none w-full xsm:px-5 sm:px-6 md:px-8 2xl:px-10 bg-transparent border border-[#C7C7C7] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4a90e2] cursor-pointer"
        >
          <option value="es" className="bg-[#191919]">
            ES
          </option>
          <option value="en" className="bg-[#191919]">
            EN
          </option>
        </select>
        <TiArrowSortedDown className="absolute top-1.5 right-3 mn:pr-1 pointer-events-none" />
      </div>
    </div>
  );
};

export default LanguageSelect;
