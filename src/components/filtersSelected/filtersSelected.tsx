import useFiltersStore from "@/stores/filtersStore";

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
    filters.filters.length > 0;

  return (
    <div>
      <ul className="flex flex-wrap gap-3 my-4">
        {filters.size !== "Tamaño" && (
          <li className={stylesListItems} onClick={removeFilterSize}>
            <span>{filters.size}</span>
            <span>X</span>
          </li>
        )}
        {filters.style !== "Estilo" && (
          <li className={stylesListItems} onClick={removeFilterStyle}>
            <span>{filters.style}</span>
            <span>X</span>
          </li>
        )}
        {filters.filters.map((filter, index) => (
          <li
            key={index}
            className={stylesListItems}
            onClick={() => removeFilterSelected(filter)}
          >
            <span>{filter}</span>
            <span>X</span>
          </li>
        ))}
        {isAnyFilterApplied && (
          <li
            className="flex justify-between items-center w-fit px-2 border border-gray-300 rounded-2xl text-gray-300 text-[14px] sm:text-[16px] lg:text-xl font-semibold hover:text-[#6CA4E7] cursor-pointer transition duration-300 ease-in-out transform "
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
