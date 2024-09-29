"use client";

import useFiltersStore from "@/stores/filtersStore";
import ButtonContainer from "../buttonContainer/buttonContainer";
import { useEffect, useState } from "react";
import useButtonsStore from "@/stores/buttonsStore";
import { paginationButtons } from "@/utils/paginationButtons";
import usePaginationStore from "@/stores/paginationStore";
import ButtonContainerSkeleton from "../Skeletons/buttonContainerSkeleton/buttonContainerSkeleton";

const Cards = () => {
  const filters = useFiltersStore((state) => state.filters);
  const getButtons = useButtonsStore((state) => state.getButtons);
  const getAllButtons = useButtonsStore((state) => state.getAllButtons);
  const allButtons = useButtonsStore((state) => state.buttons);
  const allButtonsCopy = useButtonsStore((state) => state.buttonsCopy);
  const activePage = usePaginationStore((state) => state.active);
  const pageButtons = paginationButtons(allButtons);
  const loading = useButtonsStore((state) => state.loading);

  useEffect(() => {
    const fetchData = async () => {
      let category = "";
      let tamano = "";
      let estilo = "";
      if (filters.category !== "null") {
        category = filters.category;
      }
      if (filters.size !== "Tamaño") {
        tamano = filters.size;
      }
      if (filters.style !== "Estilo") {
        estilo = filters.style;
      }

      getButtons(category, tamano, estilo);
      getAllButtons();
    };

    fetchData();
  }, [filters]);

  const numberedArrayAux = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <ul className="flex flex-wrap justify-center sm:justify-between items-center gap-y-6 lg:gap-y-10">
        {!loading ? (
          pageButtons[activePage]?.map((btn) => (
            <ButtonContainer key={btn.id} btnId={btn.id} />
          ))
        ) : !allButtons.length && allButtonsCopy.length > 0 ? (
          <div className="flex justify-center items-center w-fit mx-auto my-6">
            <span className="text-center text-lg">
              No se encontraron botones con estos filtros...
            </span>
          </div>
        ) : (
          numberedArrayAux.map((value) => (
            <ButtonContainerSkeleton key={value} />
          ))
        )}
      </ul>
    </div>
  );
};

export default Cards;
