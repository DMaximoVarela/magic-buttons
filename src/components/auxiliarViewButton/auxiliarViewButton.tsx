import style from "./auxiliarViewButton.module.css";
// ESTO ES PARA DISEÑAR LOS BOTONES! LUEGO SERA ELIMINADO!
const AuxiliarViewButton = () => {
  return (
    <div className="m-8 flex flex-col space-y-2 items-center justify-center">
      <div className="relative p-0.5 bg-gradient-to-r from-rose-400 to-red-500 rounded-lg text-slate-100 font-semibold">
        <button className="relative bg-slate-900 px-12 py-2 rounded-lg text-slate-100 font-semibold cursor-pointer">
          Botón
          <span className="absolute flex justify-center items-center inset-0 bg-gradient-to-r from-rose-400 to-red-500 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
            Botón
          </span>
        </button>
      </div>

      <br />

      <div className={style.container}>
        <button className={style.btn}>Botón
          <span className={style.bg}>Botón</span>
        </button>
      </div>
    </div>
  );
};

export default AuxiliarViewButton;
