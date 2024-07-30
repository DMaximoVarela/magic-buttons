import style from "./auxiliarViewButton.module.css";
// ESTO ES PARA DISEÑAR LOS BOTONES! LUEGO SERA ELIMINADO!
const AuxiliarViewButton = () => {
  return (
    <div className="m-8 flex flex-col space-y-2 items-center justify-center">
      <div className="relative group">
        <div className="absolute inset-0 bg-indigo-500 rounded-md shadow-lg shadow-black/45 transform translate-y-1 transition-transform group-hover:scale-105"></div>
        <button className="relative px-8 py-2 text-slate-100 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-md font-semibold transition-transform transform group-hover:scale-105 active:translate-y-1">
          <span className="relative z-10">Botón</span>
        </button>
      </div>

      <br />

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
