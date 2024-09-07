import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center space-x-4 text-[16px] text-white bg-[#00000059] w-fit p-2 rounded-lg backdrop-blur-sm">
      <IoIosArrowBack className="hover:bg-[#4d4d4d40] cursor-pointer rounded-md p-2 size-full" />
      <ul className="flex justify-center items-center space-x-2">
        <li className="p-2 bg-[#2072D3] hover:bg-[#1456A4] cursor-pointer rounded-md">
          1
        </li>
        <li className="p-2 hover:bg-[#4d4d4d40] cursor-pointer rounded-md">
          2
        </li>
        <li className="p-2 hover:bg-[#4d4d4d40] cursor-pointer rounded-md">
          3
        </li>
        <li className="p-2 pointer-events-none">...</li>
        <li className="p-2 hover:bg-[#4d4d4d40] cursor-pointer rounded-md">
          16
        </li>
      </ul>
      <IoIosArrowForward className="hover:bg-[#4d4d4d40] cursor-pointer rounded-md p-2 size-full" />
    </div>
  );
};

export default Pagination;
