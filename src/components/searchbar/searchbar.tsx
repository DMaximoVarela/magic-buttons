import { IoIosSearch } from "react-icons/io";

const Searchbar = () => {
  return (
    <div className="relative w-[540px] xl:w-[560px] 2xl:w-[610px] h-[64px]">
      <IoIosSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[26px]  xl:text-[28px] 2xl:text-[32px] text-[#c7c7c7]" />
      <input
        className="w-full h-full border-[1px] border-[#c7c7c7] rounded-[24px] text-[22px] xl:text-[24px] 2xl:text-[26px] pl-12 pr-2 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200"
        type="text"
        placeholder="Ingresa el número del botón..."
      />
    </div>
  );
};

export default Searchbar;
