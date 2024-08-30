import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { IoLanguageSharp } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

const NavMobile = () => {
  return (
    <div className="w-full h-[48px] sm:h-[72px] top-0 left-0 absolute flex justify-between items-center p-4 z-10 shadow-md backdrop-blur border-b border-b-[#bdc3c780] lg:hidden">
      <IoIosSearch className="text-[24px] sm:text-[28px]" />
      <Link href={"/"}>
        <div className="absolute top-0 left-0 w-full h-[48px] sm:h-[72px] flex justify-center items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={28}
            height={28}
            className="cursor-pointer w-[28px] h-[28px] sm:w-[46px] sm:h-[46px]"
          />
        </div>
      </Link>
      <ul className="list-none flex justify-center items-center text-[20px] sm:text-[24px] gap-[2px] sm:gap-2">
        <li className="relative inline-block w-fit px-2 xsm:text-[14px] sm:text-[16px] md:text-[22px] font-medium text-[#C7C7C7] cursor-pointer">
          <IoLanguageSharp className="absolute top-1.5 left-3 pl-1" />
          <select className="appearance-none w-full xsm:px-5 sm:px-6 md:px-8 bg-transparent border border-[#C7C7C7] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4a90e2] cursor-pointer">
            <option value="es" className="bg-[#191919]">
              ES
            </option>
            <option value="en" className="bg-[#191919]">
              EN
            </option>
          </select>
          <TiArrowSortedDown className="absolute top-1.5 right-3 pr-1 pointer-events-none" />
        </li>
        <li>|</li>
        <li className="h-[22px] sm:h-[28px] flex justify-center items-center space-x-1 px-2 text-[#4A90E2] border-[#4A90E2] border rounded-xl bg-[#1456a44d] cursor-pointer hover:bg-[#1456a499]">
          <FaWandMagicSparkles />
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
