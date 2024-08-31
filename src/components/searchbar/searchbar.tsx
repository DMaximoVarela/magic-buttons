"use client";
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import useButtonsStore from "@/stores/buttonsStore";
import Modal from "../modal/modal";
import Toast from "../toast/toast";

const Searchbar = () => {
  const [buttonId, setButtonId] = useState("");
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState("");

  const getButtonById = useButtonsStore((state) => state.getButtonById);
  const button = useButtonsStore((state) => state.button);

  const handleInput = (e) => {
    const value = e.target.value;
    if (value === "" || (/^\d+$/.test(value) && parseInt(value) > 0)) {
      setButtonId(value);
    } else {
      setMessage("No se permiten letras, ni números negativos");
      setToast(true);
    }
  };

  const handleButtonResult = (button: any) => {
    if (button) {
      setModal(true);
    } else {
      setMessage(`El botón con el id ${buttonId} no ha sido encontrado...`);
      setToast(true);
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (buttonId) {
        await getButtonById(buttonId);
        handleButtonResult(button);
      } else {
        setMessage("Por favor ingrese un número");
        setToast(true);
      }
      e.target.blur();
      setButtonId("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (buttonId) {
        await getButtonById(buttonId);
      }
    };

    fetchData();
  }, [buttonId]);

  return (
    <div className="relative w-[180px] mn:w-[320px] sm:w-[460px] 2xl:w-[520px] h-[36px] sm:h-[50px] 2xl:h-[64px] text-[16px] sm:text-[24px] 2xl:text-[32px]">
      <IoIosSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#c7c7c7]" />
      <input
        className="w-full h-full border-[1px] border-[#c7c7c7] rounded-[24px] pl-8 sm:pl-10 2xl:pl-12 pr-2 py-1 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200"
        type="text"
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        value={buttonId}
        placeholder="Ingresa el número del botón..."
      />
      <Modal
        modal={modal}
        setModal={setModal}
        btnId={button?.id || 1}
        active={true}
      />
      <Toast message={message} active={toast} setActive={setToast} />
    </div>
  );
};

export default Searchbar;
