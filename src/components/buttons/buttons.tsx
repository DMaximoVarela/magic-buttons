const buttons = [
  { id: 0 }, // Esto es solo para ayudar con que el index del array comience en 1, y no en 0
  {
    id: 1,
    categoria: "Hover",
    tamaño: "Pequeño",
    estilo: "Gradiente",
    htmlCode: `<button class="btn-uno">Botón</button>`,
    cssCode: `
  .btn-uno {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  padding: 0.5rem;
  background-image: linear-gradient(to right, #7c3aed, #4f46e5);
  border-radius: 1.5rem;
  color: #e2e8f0;
  transition: all 0.3s ease-in-out;
}

.btn-uno:hover {
  transform: scale(1.05);
  background-image: linear-gradient(to right, #4f46e5, #7c3aed);
  box-shadow: 0 0.5rem 1rem rgba(99, 102, 241, 0.5);
}`,
    tailwindCode: `
      <button className="flex justify-center items-center w-[150px] p-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl text-slate-100 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:shadow-lg hover:shadow-indigo-500/50">
        Botón
      </button>
    `,
    code: (
      <button className="flex justify-center items-center w-[150px] p-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl text-slate-100 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:shadow-lg hover:shadow-indigo-500/50">
        Botón
      </button>
    ),
  },
  {
    id: 2,
    categoria: "Interactivo",
    tamaño: "Pequeño",
    estilo: "3D",
    htmlCode: `
      <div class="container">
        <div class="shadow"></div>
        <button class="btn">
          <span class="txt">Botón</span>
        </button>
      </div>
    `,
    cssCode: `.container {
  position: relative;
}

.shadow {
  position: absolute;
  inset: 0;
  background-color: #1e40af;
  border: solid 1px #172554;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.45),
    0 4px 6px -2px rgba(0, 0, 0, 0.45);
  transform: translateY(0.5rem);
}

.btn {
  position: relative;
  padding: 0.5rem 1.5em;
  color: #f1f5f9;
  background-color: #3b82f6;
  border: solid 1px #172554;
  border-radius: 0.5rem;
  font-weight: 600;
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: transform 0.2s ease;
  transform: translateY(0);
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: translateY(2px);
}

.txt {
  position: relative;
  z-index: 10;
}`,
    tailwindCode: `
      <div className="relative">
        <div className="absolute inset-0 bg-blue-800 border border-blue-950 rounded-lg shadow-lg shadow-black/45 transform translate-y-2"></div>
        <button className="relative px-6 py-2 text-slate-100 bg-blue-500 rounded-lg border border-blue-950 font-semibold focus:outline-none transition-transform transform active:translate-y-1">
          <span className="relative z-10">Botón</span>
        </button>
      </div>
    `,
    code: (
      <div className="relative">
        <div className="absolute inset-0 bg-blue-800 border border-blue-950 rounded-lg shadow-lg shadow-black/45 transform translate-y-2"></div>
        <button className="relative px-6 py-2 text-slate-100 bg-blue-500 rounded-lg border border-blue-950 font-semibold focus:outline-none transition-transform transform active:translate-y-1">
          <span className="relative z-10">Botón</span>
        </button>
      </div>
    ),
  },
];

export default buttons;
