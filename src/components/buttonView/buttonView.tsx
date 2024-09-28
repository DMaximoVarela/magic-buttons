import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import Button from "../button/button";
import MiniCopyComponent from "../miniCopyComponent/miniCopyComponent";
import useButtonsStore from "@/stores/buttonsStore";
import useAuthorsStore from "@/stores/authorsStore";
import Image from "next/image";
import Link from "next/link";

interface content {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const ButtonView: React.FC<content> = ({ darkMode, setDarkMode }) => {
  const button = useButtonsStore((state) => state.button);
  const author = useAuthorsStore((state) => state.author);

  const auxImage =
    "https://lh3.googleusercontent.com/a/ACg8ocJcaMp95SjVg43DJYimmwC_8r6ggT-8kOMc3vNK8_JYyKKGSWMA4l-HahwkjbSfcdxXWzdgu3elqMJbwLoM30SWIYnmyFU=s288-c-no";

  return (
    <div>
      <Button codeString={button?.tailwindCode || ""} />
      <Link href={author?.githubUrl || ""} target="blank" rel="noopener">
        <ul className="absolute bottom-0 left-0 m-6 p-2 h-8 lg:h-10 flex justify-start items-center space-x-2 bg-[#303030] rounded-2xl border-transparent border-2 hover:border-[#2072D3] text-slate-100 hover:text-[#4A90E2] text-[16px]">
          <li className="w-6 h-6">
            <Image
              src={author?.imageUrl || auxImage}
              alt="authorImage"
              width={20}
              height={20}
              className="w-full h-full rounded-full"
            />
          </li>
          <li>{author?.name}</li>
        </ul>
      </Link>
      <ul className="absolute bottom-10 sm:bottom-0 xsm:left-0 sm:left-auto sm:right-0 m-6 flex gap-4">
        <li
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className="flex justify-center items-center size-8 lg:size-10 text-[16px] lg:text-[24px] text-slate-100 bg-[#303030] hover:bg-[#272727] rounded-lg cursor-pointer"
        >
          {darkMode ? <FaRegMoon /> : <IoSunnyOutline />}
        </li>
        <li>
          <MiniCopyComponent text={button?.cssCode || ""} />
        </li>
      </ul>
    </div>
  );
};

export default ButtonView;
