import style from "./auxiliarViewButton.module.css";
// ESTO ES PARA DISEÑAR LOS BOTONES! LUEGO SERA ELIMINADO!
const AuxiliarViewButton = () => {
  return (
    <div className="m-8 flex flex-col space-y-2 items-center justify-center">
      <button
        className={`flex items-center justify-center bg-amber-400 border-2 border-[#111] rounded-lg box-border text-[#111] cursor-pointer h-[48px] max-w-full font-semibold leading-6 pt-0 px-8 relative text-center touch-manipulation select-none after:bg-[#111] after:rounded-lg after:content-[""] after:block after:h-[48px] after:left-0 after:w-full after:absolute after:top-[-2px] after:transform after:translate-x-0 after:translate-y-0 after:transition-transform after:duration-200 after:ease-out after:z-[-1] hover:after:translate-x-2 hover:after:translate-y-2 active:bg-amber-300 active:outline-none hover:outline-none`}
      >
        Botón
      </button>
    </div>
  );
};

export default AuxiliarViewButton;
