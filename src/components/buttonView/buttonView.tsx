import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import Button from "../button/button";
import MiniCopyComponent from "../miniCopyComponent/miniCopyComponent";
import useButtonsStore from "@/stores/buttonsStore";

interface content {
  idBtn: number;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const ButtonView: React.FC<content> = ({ idBtn, darkMode, setDarkMode }) => {
  const buttons = useButtonsStore((state) => state.buttons);

  const button = buttons.filter((btn) => btn.id === idBtn);

  return (
    <div>
      <Button codeString={button[0].tailwindCode} />
      <ul className="absolute bottom-0 right-0 m-4 flex gap-4">
        <li
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className="flex justify-center items-center size-8 lg:size-10 text-[16px] lg:text-[24px] text-slate-100 bg-[#303030] hover:bg-[#272727] rounded-lg cursor-pointer"
        >
          {darkMode ? <FaRegMoon /> : <IoSunnyOutline />}
        </li>
        <li>
          <MiniCopyComponent text={button[0].cssCode} />
        </li>
      </ul>
    </div>
  );
};

export default ButtonView;
