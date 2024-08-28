const buttons = [
  { id: 0 }, // Esto es solo para ayudar con que el index del array comience en 1, y no en 0
  {
    id: 1,
    categoria: "Hover",
    tamaño: "Pequeño",
    estilo: "Gradiente",
    htmlCode: `<button class="btn-uno">Botón</button>`,
    cssCode: `.btn-uno {
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
    tailwindCode: `<button className="flex justify-center items-center w-[150px] p-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl text-slate-100 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:shadow-lg hover:shadow-indigo-500/50">
  Botón
</button>`,
  },
  {
    id: 2,
    categoria: "Interactivo",
    tamaño: "Pequeño",
    estilo: "3D",
    htmlCode: `<div class="container">
  <div class="shadow"></div>
  <button class="btn">
    <span class="txt">Botón</span>
  </button>
</div>`,
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
    tailwindCode: `<div className="relative">
  <div className="absolute inset-0 bg-blue-800 border border-blue-950 rounded-lg shadow-lg shadow-black/45 transform translate-y-2"></div>
  <button className="relative px-6 py-2 text-slate-100 bg-blue-500 rounded-lg border border-blue-950 font-semibold focus:outline-none transition-transform transform active:translate-y-1">
    <span className="relative z-10">Botón</span>
  </button>
</div>`,
  },
  {
    id: 3,
    categoria: "Hover",
    tamaño: "Mediano",
    estilo: "Plano",
    htmlCode: `<button class="btn">Botón</button>`,
    cssCode: `.btn {
  padding: 0.5rem 2rem;
  border: solid 2px #34d399;
  border-radius: 1.5rem;
  color: #f1f5f9;
  transition: transform 300ms ease-in-out;
}

.btn:hover {
  color: #34d399;
  transform: scale(1.05);
}`,
    tailwindCode: `<button className="px-8 py-2 border-2 border-emerald-400 rounded-3xl text-slate-100 hover:text-emerald-400 transition duration-300 ease-in-out transform hover:scale-105">
  Botón
</button>`,
  },
  {
    id: 4,
    categoria: "Hover",
    tamaño: "Mediano",
    estilo: "Plano",
    htmlCode: `<button class="btn">Botón</button>`,
    cssCode: `.btn {
  align-items: center;
  background-color: #fbbf24;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 2rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.btn:after {
  background-color: #111;
  border-radius: 8px;
  content: "";
  display: block;
  height: 48px;
  left: 0;
  width: 100%;
  position: absolute;
  top: -2px;
  transform: translate(0, 0);
  transition: transform 0.2s ease-out;
  z-index: -1;
}

.btn:hover:after {
  transform: translate(8px, 8px);
}

.btn:active {
  background-color: #fcd34d;
  outline: 0;
}

.btn:hover {
  outline: 0;
}`,
    tailwindCode: `<div className="relative flex justify-center items-center w-fit group">
  <span className="absolute inset-0 bg-[#111] rounded-lg transition-transform duration-200 ease-out z-0 transform group-hover:translate-x-2 group-hover:translate-y-2"></span>

  <button className="relative flex items-center justify-center bg-amber-400 border-2 border-[#111] rounded-lg box-border text-[#111] cursor-pointer h-[48px] max-w-full font-semibold leading-6 pt-0 px-8 text-center touch-manipulation select-none z-10 active:bg-amber-300">
    <span className="relative z-10">Botón</span>
  </button>
</div>`,
  },
  {
    id: 5,
    categoria: "Hover",
    tamaño: "Mediano",
    estilo: "Gradiente",
    htmlCode: `<div class="container">
  <div class="shadow"></div>
  <button class="btn">
    <span class="txt">Botón</span>
  </button>
</div>`,
    cssCode: `.container {
  position: relative;
  display: inline-block;
  transition: transform 0.3s ease;
}

.shadow {
  position: absolute;
  inset: 0;
  background-color: #6366f1;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.45);
  transform: translateY(0.25rem);
  transition: inherit;
  z-index: 0;
}

.btn {
  position: relative;
  padding: 0.5rem 2rem;
  color: #f1f5f9;
  background: linear-gradient(to right, #818cf8, #22d3ee);
  border-radius: 0.375rem;
  font-weight: 600;
  transition: transform 0.3s ease;
  z-index: 1;
}

.container:hover {
  transform: scale(1.05);
}

.btn:active {
  transform: translateY(0.25rem);
}

.txt {
  position: relative;
  z-index: 2;
}`,
    tailwindCode: `<div className="relative group">
  <div className="absolute inset-0 bg-indigo-500 rounded-md shadow-lg shadow-black/45 transform translate-y-1 transition-transform group-hover:scale-105"></div>
  <button className="relative px-8 py-2 text-slate-100 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-md font-semibold transition-transform transform group-hover:scale-105 active:translate-y-1">
    <span className="relative z-10">Botón</span>
  </button>
</div>`,
  },
  {
    id: 6,
    categoria: "Hover",
    tamaño: "Grande",
    estilo: "Plano",
    htmlCode: `<button class="btn">Botón</button>`,
    cssCode: `.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 5rem;
  border: solid 2px #f1f5f9;
  color: #f1f5f9;
  font-weight: 600;
  cursor: pointer;
}

.btn:hover {
  color: #06b6d4;
  border: solid 2px #06b6d4;
  transition: 300ms ease-in-out;
}`,
    tailwindCode: `<button className="flex justify-center items-center px-20 py-2 border-2 border-slate-100 text-slate-100 font-semibold hover:border-cyan-500 hover:text-cyan-500 cursor-pointer transition duration-300 ease-in-out">
  Botón
</button>`,
  },
  {
    id: 7,
    categoria: "Hover",
    tamaño: "Mediano",
    estilo: "Gradiente",
    htmlCode: `<div class="container">
  <button class="btn">Botón
    <span class="bg">Botón</span>
  </button>
</div>`,
    cssCode: `.container {
  position: relative;
  padding: 0.125rem;
  background: linear-gradient(to right, #fb7185, #ef4444);
  border-radius: 0.5rem;
  color: #f1f5f9;
  font-weight: 600;
}

.btn {
  position: relative;
  background-color: #0f172a;
  padding: 0.5rem 3rem;
  border-radius: 0.5rem;
  color: #f1f5f9;
  font-weight: 600;
  cursor: pointer;
}

.bg {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
  background: linear-gradient(to right, #fb7185, #ef4444);
  opacity: 0;
  transition: opacity 300ms ease-in-out;
}

.bg:hover {
  opacity: 1;
} `,
    tailwindCode: `<div className="relative p-0.5 bg-gradient-to-r from-rose-400 to-red-500 rounded-lg text-slate-100 font-semibold">
  <button className="relative bg-slate-900 px-12 py-2 rounded-lg text-slate-100 font-semibold cursor-pointer">
    Botón
    <span className="absolute flex justify-center items-center inset-0 bg-gradient-to-r from-rose-400 to-red-500 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
      Botón
    </span>
  </button>
</div>`,
  },
  {
    id: 8,
    categoria: "Hover",
    tamaño: "Mediano",
    estilo: "Plano",
    htmlCode: `<button class="btn">Botón
  Botón
</button>`,
    cssCode: `.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2.5rem;
  color: #f8fafc;
  background-color: #f43f5e;
  font-weight: 600;
  border-radius: 1rem;
  border: solid 2px transparent;
  cursor: pointer;
  transition: 300ms ease-in-out;
}

.btn:hover {
  border: solid 2px #f8fafc;
}`,
    tailwindCode: `<button className="flex justify-center items-center px-10 text-slate-50 font-semibold py-2 rounded-2xl bg-rose-500 border-2 border-transparent hover:border-rose-100 cursor-pointer transition duration-300 ease-in-out">
  Botón
</button>`,
  },
  {
    id: 9,
    categoria: "Hover",
    tamaño: "Mediano",
    estilo: "Plano",
    htmlCode: `<button class="btn">Botón
  Botón
</button>`,
    cssCode: `.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  color: #f1f5f9;
  background-color: #6366f1;
  border: solid 2px #f1f5f9;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: 300ms ease-in-out;
}

.btn:hover {
  background-color: #f1f5f9;
  color: #0f172a;
}`,
    tailwindCode: `<button className="flex justify-center items-center px-8 py-2 text-slate-100 bg-indigo-500 border-2 border-slate-100 rounded-md hover:bg-slate-100 hover:text-slate-900 cursor-pointer transition duration-300 ease-in-out">
  Botón
</button>`,
  },
  {
    id: 10,
    categoria: "Hover",
    tamaño: "Grande",
    estilo: "Plano",
    htmlCode: `<button class="btn">Botón
  Botón
</button>`,
    cssCode: `.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 3rem;
  color: #f1f5f9;
  background-color: #dc2626;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 300ms ease-in-out;
}

.btn:hover {
  background-color: #f1f5f9;
  color: #0f172a;
}`,
    tailwindCode: `<button className="flex justify-center items-center px-12 py-4 text-slate-100 bg-red-600 rounded hover:text-slate-900 hover:bg-slate-200 cursor-pointer transition duration-300 ease-in-out">
  Botón
</button>`,
  },
  {
    id: 11,
    categoria: "Hover",
    tamaño: "Grande",
    estilo: "Plano",
    htmlCode: `<button class="btn">Botón
  Botón
</button>`,
    cssCode: `.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 4rem;
  color: #f1f5f9;
  background-color: #22c55e;
  border: solid 2px #f1f5f9;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 1.5rem;
  transition: 300ms ease-in-out;
}

.btn:hover {
  background-color: #15803d;
  transform: scale(1.05);
}

.btn:active {
  background-color: #22c55e;
}`,
    tailwindCode: `<button className="flex justify-center items-center px-16 py-3 text-slate-100 bg-green-500 border-2 border-slate-100 rounded-tl-3xl rounded-tr rounded-br-3xl rounded-bl hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 active:bg-green-500">
  Botón
</button>`,
  },
  {
    id: 12,
    categoria: "Hover",
    tamaño: "Grande",
    estilo: "Elevado",
    htmlCode: `<button class="btn">
  <span class="borderWhite"></span>
  <span class="borderGray"></span>
  <span class="txt">Botón</span>
</button>`,
    cssCode: `.btn {
  position: relative;
  padding: 1rem 4rem;
  color: #f1f5f9;
  font-weight: 600;
  background-color: #9ca3af;
  border: solid 2px black;
  border-radius: 4px;
  transition: transform 300ms ease-in-out;
}

.btn:hover {
  transform: scale(1.05);
}

.btn:active {
  transform: scale(0.95);
}

.borderWhite {
  position: absolute;
  inset: 0;
  border-top: solid 2px #f1f5f9;
  border-left: solid 2px #f1f5f9;
  pointer-events: none;
  z-index: 2;
}

.borderGray {
  position: absolute;
  inset: 0;
  border-bottom: solid 2px #374151;
  border-right: solid 2px #374151;
  pointer-events: none;
  z-index: 2;
}

.txt {
  position: relative;
  z-index: 3;
}`,
    tailwindCode: `<button className="relative px-16 py-4 text-slate-100 font-semibold bg-gray-400 border-2 border-black rounded transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
  <span className="absolute inset-0 border-t-2 border-l-2 border-slate-100 pointer-events-none z-[2]"></span>
  <span className="absolute inset-0 border-b-2 border-r-2 border-gray-700 pointer-events-none z-[2]"></span>
  <span className="relative z-[3]">Botón</span>
</button>`,
  },
  {
    id: 13,
    categoria: "Interactivo",
    tamaño: "Mediano",
    estilo: "Redondeado",
    htmlCode: `<button class="btn">
  <span>Eliminar</span>
</button>`,
    cssCode: `.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  color: #f1f5f9;
  background-color: #020617;
  border: solid 2px transparent;
  border-radius: 0.75rem;
  transition: 300ms ease-in-out;
}

.btn:hover {
  color: #dc2626;
  border: solid 2px #dc2626;
}`,
    tailwindCode: `<button className="flex justify-center items-center p-2 text-slate-100 bg-slate-950 border-2 border-transparent rounded-xl hover:text-red-600 hover:border-red-600 transition duration-300 ease-in-out">
  <span>Eliminar</span>
</button>`,
  },
  {
    id: 14,
    categoria: "Hover",
    tamaño: "Pequeño",
    estilo: "Redondeado",
    htmlCode: `<button class="btn">
  <span class="border"></span>
  <span class="txt">Botón</span>
 </button>`,
    cssCode: `
.btn {
  position: relative;
  padding: 0.75rem 1.5rem;
  border: solid 2px black;
  border-radius: 0.375rem;
  background-color: #cbd5e1;
  background-clip: padding-box;
  transition: transform 150ms ease-in-out;
}

.btn::after {
  position: absolute;
  content: "";
  background-color: #94a3b8;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50%;
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}

.btn:hover {
  transform: scale(0.95);
}

.btn:active {
  transform: scale(0.9);
}

.border {
  position: absolute;
  inset: 0;
  border-top: solid 2px #f1f5f9;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  z-index: 2;
}

.txt {
  position: relative;
  z-index: 2;
  color: black;
  font-weight: 700;
}`,
    tailwindCode: `<button
  className="relative px-6 py-3 rounded-md border-2 border-black
  bg-slate-300 bg-clip-padding after:absolute after:content-[''] after:bg-slate-400 after:inset-x-0 after:bottom-0 after:h-1/2 after:rounded-b-md
  hover:scale-95 active:scale-90 transition-transform duration-150 ease-in-out"
>
  <span className="absolute inset-0 border-t-2 border-t-slate-100 rounded-t-md z-[2]"></span>
  <span className="relative z-[2] text-black font-bold">Botón</span>
</button>`,
  },
  {
    id: 15,
    categoria: "Hover",
    tamaño: "Mediano",
    estilo: "Elevado",
    htmlCode: `<button class="btn">
  <span class="txtNeon">Botón</span>
  <span class="txt">Botón</span>
  <span class="borderNeon"></span>
</button>`,
    cssCode: `.btn {
  position: relative;
  padding: 0.5rem 2rem;
  background-color: #0f172a;
  border-radius: 1rem;
  border: solid 0.5px #5eead4;
  box-shadow: 0 1px 3px 0 #5eead4, 0 1px 2px -1px #5eead4;
  transition: transform 150ms ease-in-out;
}

.btn:hover {
  transform: scale(1.05);
}

.btn:active {
  transform: scale(0.95);
}

.txtNeon {
  position: absolute;
  inset: 0;
  font-weight: 600;
  color: #5eead4;
  filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.txt {
  position: relative;
  font-weight: 600;
  color: #2dd4bf;
}

.borderNeon {
  position: absolute;
  inset: 0;
  border: solid 1px #5eead4;
  border-radius: 1rem;
  filter: blur(4px);
}`,
    tailwindCode: `<button className="relative px-8 py-2 bg-slate-900 rounded-2xl border-[.5px] border-teal-300 shadow shadow-teal-300 transition-transform transform hover:scale-105 active:scale-95">
  <span className="absolute inset-0 font-semibold text-teal-300 blur-sm flex items-center justify-center">
    Botón
  </span>
  <span className="relative font-semibold text-teal-400">Botón</span>
  <span className="absolute inset-0 border border-teal-300 rounded-2xl blur-sm"></span>
</button>`,
  },
];

export default buttons;
