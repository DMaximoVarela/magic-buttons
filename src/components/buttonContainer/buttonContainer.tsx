import CopyComponent from "../copyComponent/copyComponent";

const ButtonContainer = () => {
  return (
    <div className="relative w-[250px] lg:w-[350px] 3xl:w-[450px] h-[200px] sm:h-[250px] 2xl:h-[350px] rounded-2xl bg-[#191919] flex justify-center items-center">
      <div className="absolute top-0 right-0 m-2">
        <CopyComponent text="Copy Test" />
      </div>
      Hola! Soy un Boton FELIZ :{")"}
      <span className="absolute bottom-0 left-0 w-[95%] mx-2 text-[18px] sm:text-[20px] lg:text-[24px] 3xl:text-[32px] font-medium border-t border-t-[#C7C7C7]">
        Botón #1
      </span>
    </div>
  );
};

export default ButtonContainer;
