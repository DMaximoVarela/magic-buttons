import style from "./auxiliarViewButton.module.css";
// ESTO ES PARA DISEÑAR LOS BOTONES! LUEGO SERA ELIMINADO!
const AuxiliarViewButton = () => {
  return (
    <div className="m-8 flex flex-col space-y-2 items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-800 border border-blue-950 rounded-lg shadow-lg shadow-black/45 transform translate-y-2"></div>
        <button className="relative px-6 py-2 text-slate-100 bg-blue-500 rounded-lg border border-blue-950 font-semibold focus:outline-none transition-transform transform active:translate-y-1">
          <span className="relative z-10">Botón</span>
        </button>
      </div>

      <div className={style.container}>
        <div className={style.shadow}></div>
        <button className={style.btn}>
          <span className={style.txt}>Botón</span>
        </button>
      </div>
    </div>
  );
};

export default AuxiliarViewButton;
