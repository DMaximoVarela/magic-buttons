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
    tailwindCode: `<button className="flex justify-center items-center w-[150px] p-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl text-slate-100 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:shadow-lg hover:shadow-indigo-500/50">Botón</button>`,
    code: (
      <button className="flex justify-center items-center w-[150px] p-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl text-slate-100 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:shadow-lg hover:shadow-indigo-500/50">
        Botón
      </button>
    ),
  },
  {
    id: 2,
    categoria: "Hover",
    tamaño: "Pequeño",
    estilo: "Gradiente",
    htmlCode: `<button class="btn-dos">Botón</button>`,
    cssCode: `.btn-dos {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  padding: 0.5rem;
  background-image: linear-gradient(to right, #059669, #0d9488);
  border-radius: 1.5rem;
  color: #e2e8f0;
  transition: all 0.3s ease-in-out;
}

.btn-dos:hover {
  transform: scale(1.05);
  background-image: linear-gradient(to right, #0d9488, #059669);
  box-shadow: 0 0.5rem 1rem rgba(20, 184, 166, 0.5);
}`,
    tailwindCode: `<button className="flex justify-center items-center w-[150px] p-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl text-slate-100 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-600 hover:shadow-lg hover:shadow-teal-500/50">Botón</button>`,
    code: (
      <button className="flex justify-center items-center w-[150px] p-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl text-slate-100 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-600 hover:shadow-lg hover:shadow-teal-500/50">
        Botón
      </button>
    ),
  },
];

export default buttons;
