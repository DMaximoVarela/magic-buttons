import CopyComponent from "../copyComponent/copyComponent";
import buttons from "@/data/buttons";
import style from "./codeComponent.module.css";

interface content {
  btnId: number;
  typeCode: string;
}

const CodeComponent: React.FC<content> = ({ btnId, typeCode }) => {
  const buttonCode = (typeCode: string) => {
    if (typeCode == "html") {
      return buttons[btnId].htmlCode;
    } else if (typeCode == "css") {
      return buttons[btnId].cssCode;
    } else {
      return buttons[btnId].tailwindCode;
    }
  };

  return (
    <div className="relative flex flex-col self-center justify-center items-center w-[90%] sm:w-[45%] h-[100%] border-[.5px] rounded-2xl bg-[#202020]">
      <div className="w-[97%] mt-2 px-2 flex justify-between items-center">
        <ul className="flex justify-center items-center gap-2">
          <li className="bg-[#3c3c3c] size-3 lg:size-4 rounded-full"></li>
          <li className="bg-[#3c3c3c] size-3 lg:size-4 rounded-full"></li>
          <li className="bg-[#3c3c3c] size-3 lg:size-4 rounded-full"></li>
        </ul>
        <span>button.{typeCode}</span>
        <div className="w-[60px] lg:w-[72px]">
          {/**solo es para ocupar espacio ;)*/}
        </div>
      </div>
      <div className={style.container}>
        <pre className="whitespace-pre-wrap">{buttonCode(typeCode)}</pre>
      </div>
      <div className="absolute bottom-0 right-0 m-2">
        <CopyComponent text={buttonCode(typeCode)} />
      </div>
    </div>
  );
};

export default CodeComponent;
