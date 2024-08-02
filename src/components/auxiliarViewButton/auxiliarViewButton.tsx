import style from "./auxiliarViewButton.module.css";
// ESTO ES PARA DISEÑAR LOS BOTONES! LUEGO SERA ELIMINADO!
const AuxiliarViewButton = () => {
  return (
    <div className="m-8">
      <button className="relative px-8 py-2 bg-slate-900 rounded-2xl border-[.5px] border-teal-300 shadow shadow-teal-300 transition-transform transform hover:scale-105 active:scale-95">
        <span className="absolute inset-0 font-semibold text-teal-300 blur-sm flex items-center justify-center">
          Botón
        </span>
        <span className="relative font-semibold text-teal-400">Botón</span>
        <span className="absolute inset-0 border border-teal-300 rounded-2xl blur-sm"></span>
      </button>

      <br />
      <br />
      <br />
      <br />
      <br />

      <button className={style.btn}>
        <span className={style.txtNeon}>Botón</span>
        <span className={style.txt}>Botón</span>
        <span className={style.borderNeon}></span>
      </button>
    </div>
  );
};

export default AuxiliarViewButton;
