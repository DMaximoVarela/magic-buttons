import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import CodeComponent from "../codeComponent/codeComponent";

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
        <CodeComponent btnId={btnId} typeCode="html" />
        <CodeComponent btnId={btnId} typeCode="css" />
      </div>
    </div>
  );
};

export default CodeView;
