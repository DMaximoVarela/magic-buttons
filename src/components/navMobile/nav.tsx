import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FaWandMagicSparkles } from "react-icons/fa6";

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
        <li>|</li>
        <li className="h-[32px] sm:h-[48px] p-2 flex justify-center items-center rounded-xl hover:bg-[#00000033] backdrop-blur cursor-pointer">
          ES
        </li>
        <li className="h-[22px] sm:h-[28px] flex justify-center items-center space-x-1 px-2 text-[#4A90E2] border-[#4A90E2] border rounded-xl bg-[#1456a44d] cursor-pointer hover:bg-[#1456a499]">
          <FaWandMagicSparkles />
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
