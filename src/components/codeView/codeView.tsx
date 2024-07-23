import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import CopyComponent from "../copyComponent/copyComponent";
import buttons from "@/data/buttons";
import style from "./CodeView.module.css";

interface content {
  btnId: number;
}

const CodeView: React.FC<content> = ({ btnId }) => {
  return (
    <div className="size-full flex flex-col">
      <ul className="flex self-start justify-start items-center gap-3 text-[32px] m-4">
        <li className="sm:hidden">
          <span className="hover:text-[#4A90E2] cursor-pointer">
            <FaHtml5 />
          </span>
        </li>
        <li className="sm:hidden">
          <span className="cursor-context-menu">-</span>
        </li>
        <li>
          <span className="hover:text-[#4A90E2] cursor-pointer">
            <FaCss3Alt />
          </span>
        </li>
        <li>
          <span className="cursor-context-menu">-</span>
        </li>
        <li>
          <span className="hover:text-[#4A90E2] cursor-pointer">
            <RiTailwindCssFill />
          </span>
        </li>
      </ul>
      <div className="w-full h-[70%] 4xl:h-[80%] 5xl:h-[90%] flex justify-center items-center gap-8">
        <div className="relative flex flex-col self-center justify-center items-center w-[90%] sm:w-[45%] h-[100%] border-[.5px] rounded-2xl bg-[#202020]">
          <div className="w-[97%] mt-2 px-2 flex justify-between items-center">
            <ul className="flex justify-center items-center gap-2">
              <li className="bg-[#3c3c3c] size-3 lg:size-4 rounded-full"></li>
              <li className="bg-[#3c3c3c] size-3 lg:size-4 rounded-full"></li>
              <li className="bg-[#3c3c3c] size-3 lg:size-4 rounded-full"></li>
            </ul>
            <span>button.html</span>
            <div className="w-[60px] lg:w-[72px]"></div>
          </div>
          <div className={style.container}>
            <pre className="whitespace-pre-wrap">{buttons[btnId].htmlCode}</pre>
          </div>
          <div className="absolute bottom-0 right-0 m-2">
            <CopyComponent text={buttons[btnId]?.htmlCode} />
          </div>
        </div>
        <div className="relative hidden sm:flex flex-col self-center justify-center items-center w-[45%] h-full border-[.5px] rounded-2xl bg-[#202020]">
          <div className="w-[97%] mt-2 px-2 flex justify-between items-center">
            <ul className="flex justify-center items-center gap-2">
              <li className="bg-[#3c3c3c] size-3 lg:size-4 rounded-full"></li>
              <li className="bg-[#3c3c3c] size-3 lg:size-4 rounded-full"></li>
              <li className="bg-[#3c3c3c] size-3 lg:size-4 rounded-full"></li>
            </ul>
            <span>button.css</span>
            <div className="w-[60px] lg:w-[72px]"></div>
          </div>
          <div className={style.container}>
            <pre className="whitespace-pre-wrap">{buttons[btnId].cssCode}</pre>
          </div>
          <div className="absolute bottom-0 right-0 m-2">
            <CopyComponent text={buttons[btnId]?.cssCode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeView;
