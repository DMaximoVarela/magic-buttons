import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import buttons from "@/data/buttons";
import MiniCopyComponent from "../miniCopyComponent/miniCopyComponent";

interface content {
  idBtn: number;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const ButtonView: React.FC<content> = ({ idBtn, darkMode, setDarkMode }) => {
  return (
    <div>
      <button className={buttons[idBtn].tailwindCode}>Botón</button>
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
          <MiniCopyComponent text={buttons[idBtn].cssCode} />
        </li>
      </ul>
    </div>
  );
};

export default ButtonView;
