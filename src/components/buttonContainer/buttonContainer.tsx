"use client";

import { useState } from "react";
import CopyComponent from "../copyComponent/copyComponent";
import buttons from "@/data/buttons";
import Modal from "../modal/modal";

const ButtonContainer = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="relative w-[250px] lg:w-[350px] 3xl:w-[450px] h-[200px] sm:h-[250px] 2xl:h-[350px] rounded-2xl bg-[#191919] flex justify-center items-center">
      <div className="absolute top-0 right-0 m-2">
        <CopyComponent text={buttons[1].cssCode} />
      </div>
      <button
        onClick={() => {
          setModal(true);
        }}
        className={buttons[1].tailwindCode}
      >
        Botón
      </button>
      <span className="absolute bottom-0 left-0 w-[95%] mx-2 mb-1 text-[18px] sm:text-[20px] lg:text-[24px] 3xl:text-[32px] font-medium border-t border-t-[#C7C7C7]">
        Botón #1
      </span>

      <Modal modal={modal} setModal={setModal} btnId={buttons[1].id} />
    </div>
  );
};

export default ButtonContainer;
