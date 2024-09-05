import useFiltersStore from "@/stores/filtersStore";
import { quitarAcentos } from "@/utils/quitarAcentos";
import { useTranslations } from "next-intl";

const FiltersSelected = () => {
  const filters = useFiltersStore((state) => state.filters);
  const removeFilterSize = useFiltersStore((state) => state.removeFilterSize);
  const removeFilterStyle = useFiltersStore((state) => state.removeFilterStyle);
  const removeFilterSelected = useFiltersStore(
    (state) => state.removeFilterSelected
  );
  const resetFilters = useFiltersStore((state) => state.resetFilters);
  const stylesListItems =
    "flex justify-between items-center w-fit space-x-2 px-2 border border-gray-300 rounded-2xl text-gray-300 text-[14px] sm:text-[16px] lg:text-xl font-semibold hover:text-[#6CA4E7] cursor-pointer transition duration-300 ease-in-out transform";

  const isAnyFilterApplied =
    filters.size !== "Tamaño" ||
    filters.style !== "Estilo" ||
    filters.category !== "null";

  const t = useTranslations("filters");

  return (
    <div>
      <ul className="flex flex-wrap gap-3 my-4">
        {filters.size !== "Tamaño" && (
          <li className={stylesListItems} onClick={removeFilterSize}>
            <span>
              {t(`sizeOptions.${quitarAcentos(filters.size.toLowerCase())}`)}
            </span>
            <span>X</span>
          </li>
        )}
        {filters.style !== "Estilo" && (
          <li className={stylesListItems} onClick={removeFilterStyle}>
            <span>
              {t(`styleOptions.${quitarAcentos(filters.style.toLowerCase())}`)}
            </span>
            <span>X</span>
          </li>
        )}
        {filters.category !== "null" && (
          <li className={stylesListItems} onClick={removeFilterSelected}>
            <span>
              {t(`filters.${quitarAcentos(filters.category.toLowerCase())}`)}
            </span>
            <span>X</span>
          </li>
        )}
        {isAnyFilterApplied && (
          <li
            className="flex justify-between items-center w-fit px-2 border border-gray-300 rounded-2xl text-gray-300 text-[14px] sm:text-[16px] lg:text-xl font-semibold hover:text-[#4A90E2] cursor-pointer transition duration-300 ease-in-out transform "
            onClick={resetFilters}
          >
            Reset
          </li>
        )}
      </ul>
    </div>
  );
};

export default FiltersSelected;
