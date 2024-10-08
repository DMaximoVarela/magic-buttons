import CopyComponent from "../copyComponent/copyComponent";
import style from "./codeComponent.module.css";
import useButtonsStore from "@/stores/buttonsStore";

interface content {
  typeCode: string;
}

const CodeComponent: React.FC<content> = ({ typeCode }) => {
  const button = useButtonsStore((state) => state.button);

  const buttonCode = (typeCode: string) => {
    if (typeCode === "html") {
      return button?.htmlCode || "";
    } else if (typeCode === "css") {
      return button?.cssCode || "";
    } else {
      return button?.tailwindCode || "";
    }
  };

  const addLineNumbers = (code: string) => {
    return code.split("\n").map((_, index) => index + 1);
  };

  const numberedCode = buttonCode(typeCode).split("\n");

  const lineNumbers = addLineNumbers(buttonCode(typeCode));

  return (
    <div className="relative flex flex-col self-center justify-center items-center w-[90%] sm:w-[45%] h-[100%] border-[.5px] rounded-2xl bg-[#202020]">
      <div className="w-[97%] mt-2 px-2 flex justify-between items-center">
        <ul className="flex justify-center items-center gap-2">
          <li className="bg-[#3c3c3c] size-3 lg:size-4 rounded-full"></li>
          <li className="bg-[#3c3c3c] size-3 lg:size-4 rounded-full"></li>
          <li className="bg-[#3c3c3c] size-3 lg:size-4 rounded-full"></li>
        </ul>
        <span>button.{typeCode === "tailwind" ? "jsx" : typeCode}</span>
        <div className="w-[60px] lg:w-[72px]">{/*solo es para ocupar espacio ;)*/}</div>
      </div>
      <div className={style.container}>
        <div className={style.lineNumbers}>
          {lineNumbers.map((line, index) => (
            <div key={index} className={style.lineNumber}>
              {line}
            </div>
          ))}
        </div>
        <pre className={`${style.code} whitespace-pre`}>
          {numberedCode.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </pre>
      </div>
      <div className="absolute bottom-0 right-0 m-2">
        <CopyComponent text={buttonCode(typeCode)} />
      </div>
    </div>
  );
};

export default CodeComponent;
