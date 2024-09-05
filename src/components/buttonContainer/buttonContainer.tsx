import CopyComponent from "../copyComponent/copyComponent";
import Button from "../button/button";
import useButtonsStore from "@/stores/buttonsStore";
import useModalStore from "@/stores/modalStore";
import { useTranslations } from "next-intl";

interface button {
  btnId: number;
}

const ButtonContainer: React.FC<button> = ({ btnId }) => {
  const buttons = useButtonsStore((state) => state.buttons);
  const setModal = useModalStore((state) => state.setModal);
  const setBtnId = useModalStore((state) => state.setBtnId);

  const button = buttons.filter((btn) => btn.id === btnId);
  const t = useTranslations();

  return (
    <>
      {button && (
        <div className="relative w-[250px] lg:w-[350px] 3xl:w-[450px] h-[200px] sm:h-[250px] 2xl:h-[350px] rounded-2xl bg-[#191919] flex flex-col justify-center items-center p-4">
          <div className="absolute top-0 right-0 m-2">
            <CopyComponent text={button[0].cssCode} />
          </div>

          <div
            className="w-fit h-fit mb-4 cursor-pointer"
            onClick={() => {
              setBtnId(button[0].id);
              setModal(true);
            }}
          >
            <Button codeString={button[0].tailwindCode} />
          </div>

          <span className="absolute bottom-0 left-0 w-[95%] mx-2 mb-1 text-[18px] sm:text-[20px] lg:text-[24px] 3xl:text-[32px] font-medium border-t border-t-[#C7C7C7]">
            {`${t("buttonContainer")} #${button[0].id}`}
          </span>
        </div>
      )}
    </>
  );
};

export default ButtonContainer;
