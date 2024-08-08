"use client";

import { useState } from "react";
import CopyComponent from "../copyComponent/copyComponent";
import buttons from "../buttons/buttons";
import Modal from "../modal/modal";
import Button from "../button/button";

interface button {
  btnId: number;
}

const ButtonContainer: React.FC<button> = ({ btnId }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="relative w-[250px] lg:w-[350px] 3xl:w-[450px] h-[200px] sm:h-[250px] 2xl:h-[350px] rounded-2xl bg-[#191919] flex flex-col justify-center items-center p-4">
      <div className="absolute top-0 right-0 m-2">
        <CopyComponent text={buttons[btnId].cssCode} />
      </div>

      <div
        className="w-fit h-fit mb-4 cursor-pointer"
        onClick={() => {
          setModal(true);
        }}
      >
        <Button codeString={buttons[btnId].tailwindCode} />
      </div>

      <span className="absolute bottom-0 left-0 w-[95%] mx-2 mb-1 text-[18px] sm:text-[20px] lg:text-[24px] 3xl:text-[32px] font-medium border-t border-t-[#C7C7C7]">
        Botón #{buttons[btnId].id}
      </span>

      <Modal modal={modal} setModal={setModal} btnId={buttons[btnId].id} />
    </div>
  );
};

export default ButtonContainer;
