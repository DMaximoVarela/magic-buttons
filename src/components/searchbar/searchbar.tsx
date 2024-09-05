"use client";
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import useButtonsStore from "@/stores/buttonsStore";
import useModalStore from "@/stores/modalStore";
import useToastStore from "@/stores/toastStore";
import { useTranslations } from "next-intl";

const Searchbar = () => {
  const [buttonId, setButtonId] = useState("");

  const setModal = useModalStore((state) => state.setModal);
  const setBtnId = useModalStore((state) => state.setBtnId);
  const createToast = useToastStore((state) => state.createToast);

  const getButtonById = useButtonsStore((state) => state.getButtonById);
  const button = useButtonsStore((state) => state.button);

  const t = useTranslations("searchBar");

  const handleInput = (e) => {
    const value = e.target.value;
    if (value === "" || (/^\d+$/.test(value) && parseInt(value) > 0)) {
      setButtonId(value);
    } else {
      createToast(t("errorsMessages.errorOne"));
    }
  };

  const handleButtonResult = (button: any) => {
    if (button) {
      setBtnId(Number(buttonId));
      setModal(true);
    } else {
      createToast(
        `${t("errorsMessages.errorTwo.one")} ${buttonId} ${t(
          "errorsMessages.errorTwo.two"
        )}`
      );
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (buttonId) {
        await getButtonById(buttonId);
        handleButtonResult(button);
      } else {
        createToast(t("errorsMessages.errorThree"));
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
        placeholder={t("placeholder")}
      />
    </div>
  );
};

export default Searchbar;
