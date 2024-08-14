"use client";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

const Searchbar = () => {
  const [buttonId, setButtonId] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;

    if (/^\d+$/.test(value) && parseInt(value) > 0) {
      setButtonId(value);
    } else {
      window.alert("NO SE PERMITEN LETRAS NI NUMEROS NEGATIVOS!");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(buttonId);
      setButtonId("");
    }
  };

  return (
    <div className="relative w-[460px] 2xl:w-[520px] h-[50px] 2xl:h-[64px]">
      <IoIosSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[24px] 2xl:text-[32px] text-[#c7c7c7]" />
      <input
        className="w-full h-full border-[1px] border-[#c7c7c7] rounded-[24px] text-[24px] 2xl:text-[32px] pl-10 2xl:pl-12 pr-2 py-1 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200"
        type="text"
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        value={buttonId}
        placeholder="Ingresa el número del botón..."
      />
    </div>
  );
};

export default Searchbar;
