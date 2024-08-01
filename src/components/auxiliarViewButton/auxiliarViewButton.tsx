import style from "./auxiliarViewButton.module.css";
// ESTO ES PARA DISEÑAR LOS BOTONES! LUEGO SERA ELIMINADO!
const AuxiliarViewButton = () => {
  return (
    <div className="m-8 flex flex-col space-y-2 items-center justify-center">
      <button className="relative px-16 py-4 text-slate-100 font-semibold bg-gray-400 border-2 border-black rounded transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
        <span
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-35 z-[1]"
          style={{
            backgroundImage:
              "url('https://imgs.search.brave.com/vrPQsZzIuUOW5gVMSPXa7Sq79OqPiq0ASGqPGwLlX4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/NTA2OTQ4NC9lcy9m/b3RvL2JsYWNrLXRl/eHR1cmUtZm9yLWJh/Y2tncm91bmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWRn/dEh2T0tfUUd0Q254/ZXlvN3p5VjdkQ21a/NDhzdjRNcGJBalJn/RHVmYlE9')",
          }}
        >
          {/**Una disculpa por utilizar estilos en linea, sino no es posible este efecto :)*/}
        </span>
        <span className="absolute inset-0 border-t-2 border-l-2 border-slate-100 pointer-events-none z-[2]"></span>
        <span className="absolute inset-0 border-b-2 border-r-2 border-gray-700 pointer-events-none z-[2]"></span>
        <span className="relative z-[3]">Botón</span>
      </button>

      <br />

      <button className={style.btn}>
        <span className={style.bg}></span>
        <span className={style.borderWhite}></span>
        <span className={style.borderGray}></span>
        <span className={style.txt}>Botón</span>
      </button>
    </div>
  );
};

export default AuxiliarViewButton;
