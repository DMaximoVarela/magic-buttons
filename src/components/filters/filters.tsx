import useFiltersStore from "@/stores/filtersStore";
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

  const filtersState = useFiltersStore((state) => state.filters);
  const filterSize = useFiltersStore((state) => state.filterSize);
  const filterStyle = useFiltersStore((state) => state.filterStyle);
  const filterSelected = useFiltersStore((state) => state.filterSelected);
  const removeFilterSelected = useFiltersStore(
    (state) => state.removeFilterSelected
  );

  const handleFilterBySize = (event) => {
    filterSize(event.target.value);
  };

  const handleFilterByStyle = (event) => {
    filterStyle(event.target.value);
  };

  const handleFilterSelected = (filter) => {
    filterSelected(filter);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-[100vw] px-6 pt-6 gap-4">
      {/* Filtros de selección (Mobile) */}
      <div className="w-full flex items-center justify-center xsm:gap-6 sm:gap-12 lg:order-2">
        {["Tamaño", "Estilo"].map((filterType, index) => (
          <div
            key={index}
            className="relative w-[125px] sm:w-[200px] 2xl:w-[250px]"
          >
            <select
              className="w-full py-2 pl-4 pr-8 bg-transparent text-white text-[16px] sm:text-[24px] 2xl:text-[32px] font-medium border border-white rounded-lg appearance-none cursor-pointer"
              value={
                filterType == "Tamaño" ? filtersState.size : filtersState.style
              }
              onChange={
                filterType === "Tamaño"
                  ? handleFilterBySize
                  : handleFilterByStyle
              }
            >
              {(filterType === "Tamaño" ? sizeOptions : styleOptions).map(
                (option, idx) => (
                  <option
                    key={idx}
                    value={option}
                    className="text-white bg-[#191919]"
                  >
                    {option}
                  </option>
                )
              )}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <RiArrowDownSFill className="text-white text-[16px] sm:text-[24px] 2xl:text-[32px]" />
            </div>
          </div>
        ))}
      </div>
      {/* Filtros de selección (Desktop & Tablet) */}
      <div className="w-full flex items-center justify-between">
        {filters.map((filter, idx) => {
          const Icon = filter.icon;
          const isSelected = filtersState.filters.includes(filter.name);
          return (
            <div
              key={idx}
              className={`w-[90px] sm:w-[140px] 2xl:w-[180px] flex flex-col justify-center items-center gap-2  py-2 font-medium ${
                isSelected
                  ? "text-[#4A90E2] border-b-2 border-b-[#4A90E2]"
                  : "text-white border-b-2 border-b-transparent"
              }  hover:text-[#4A90E2] hover:border-b-[#4A90E2] cursor-pointer transition duration-300 ease-in-out transform`}
              onClick={() => {
                isSelected
                  ? removeFilterSelected(filter.name)
                  : handleFilterSelected(filter.name);
              }}
            >
              <Icon className="text-[32px] sm:text-[52px] 2xl:text-[72px]" />
              <span className="text-[16px] sm:text-[24px] 2xl:text-[32px]">
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
