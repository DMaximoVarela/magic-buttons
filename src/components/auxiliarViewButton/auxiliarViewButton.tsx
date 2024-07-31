import style from "./auxiliarViewButton.module.css";
// ESTO ES PARA DISEÑAR LOS BOTONES! LUEGO SERA ELIMINADO!
const AuxiliarViewButton = () => {
  return (
    <div className="m-8 flex flex-col space-y-2 items-center justify-center">
      <button className="flex justify-center items-center px-16 py-3 text-slate-100 bg-green-500 border-2 border-slate-100 rounded-tl-3xl rounded-tr rounded-br-3xl rounded-bl hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 active:bg-green-500">
        Botón
      </button>

      <br />

      <button className={style.btn}>Botón</button>
    </div>
  );
};

export default AuxiliarViewButton;
