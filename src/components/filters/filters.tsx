import { FaHandPointer, FaMagic, FaSyncAlt } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";

const Filters = () => {
  const sizeOptions = ["Tamaño", "Pequeño", "Mediano", "Grande"];
  const styleOptions = [
    "Estilo",
    "Plano",
    "Elevado",
    "Redondeado",
    "3D",
    "Gradiente",
  ];
  const filters = [
    { name: "Hover", icon: FaHandPointer },
    { name: "Animación", icon: FaMagic },
    { name: "Interactivo", icon: FaSyncAlt },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-[100vw] p-6 gap-4">
      {/* Filtros de selección (Mobile) */}
      <div className="w-full flex items-center xsm:gap-6 sm:gap-12 lg:justify-between lg:order-2">
        {["Tamaño", "Estilo"].map((filterType, index) => (
          <div
            key={index}
            className="relative w-[125px] sm:w-[200px] xl:w-[250px]"
          >
            <select className="w-full py-2 pl-4 pr-8 bg-transparent text-white text-[16px] sm:text-[24px] xl:text-[32px] font-medium border border-white rounded-lg appearance-none cursor-pointer">
              {(filterType === "Tamaño" ? sizeOptions : styleOptions).map(
                (option, idx) => (
                  <option key={idx} className="text-white bg-[#191919]">
                    {option}
                  </option>
                )
              )}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <RiArrowDownSFill className="text-white text-[16px] sm:text-[24px] xl:text-[32px]" />
            </div>
          </div>
        ))}
      </div>
      {/* Filtros de selección (Desktop & Tablet) */}
      <div className="w-full flex items-center justify-between">
        {filters.map((filter, idx) => {
          const Icon = filter.icon;
          return (
            <div
              key={idx}
              className="w-[90px] sm:w-[140px] xl:w-[180px] flex flex-col justify-center items-center gap-2 text-white py-2 font-medium hover:text-[#4A90E2] border-b-2 border-b-transparent hover:border-b-[#4A90E2] cursor-pointer"
            >
              <Icon className="text-[32px] sm:text-[52px] xl:text-[72px]" />
              <span className="text-[16px] sm:text-[24px] xl:text-[32px]">
                {filter.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
