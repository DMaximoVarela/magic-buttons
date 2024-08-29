import CopyComponent from "../copyComponent/copyComponent";
import style from "./codeComponent.module.css";
import useButtonsStore from "@/stores/buttonsStore";

interface content {
  btnId: number;
  typeCode: string;
}

const CodeComponent: React.FC<content> = ({ btnId, typeCode }) => {
  const buttons = useButtonsStore((state) => state.buttons);

  const button = buttons.filter((btn) => btn.id === btnId);

  const buttonCode = (typeCode: string) => {
    if (typeCode === "html") {
      return button[0].htmlCode;
    } else if (typeCode === "css") {
      return button[0].cssCode;
    } else {
      return button[0].tailwindCode;
    }
  };

  const addLineNumbers = (code: string) => {
    return code
      .split("\n")
      .map((line, index) => `${index + 1}  ${line}`)
      .join("\n");
  };

  const numberedCode = addLineNumbers(buttonCode(typeCode));
  // NOTA DE MEJORA: HACER QUE EL NUMERO NO SE PUEDA SELECCIONAR COMO TEXTO!

  return (
    <div className="relative flex flex-col self-center justify-center items-center w-[90%] sm:w-[45%] h-[100%] border-[.5px] rounded-2xl bg-[#202020]">
      <div className="w-[97%] mt-2 px-2 flex justify-between items-center">
        <ul className="flex justify-center items-center gap-2">
          <li className="bg-[#3c3c3c] size-3 lg:size-4 rounded-full"></li>
          <li className="bg-[#3c3c3c] size-3 lg:size-4 rounded-full"></li>
          <li className="bg-[#3c3c3c] size-3 lg:size-4 rounded-full"></li>
        </ul>
        <span>button.{typeCode === "tailwind" ? "jsx" : typeCode}</span>
        <div className="w-[60px] lg:w-[72px]">
          {/**solo es para ocupar espacio ;)*/}
        </div>
      </div>
      <div className={style.container}>
        <pre className="whitespace-pre">{numberedCode}</pre>
      </div>
      <div className="absolute bottom-0 right-0 m-2">
        <CopyComponent text={buttonCode(typeCode)} />
      </div>
    </div>
  );
};

export default CodeComponent;
