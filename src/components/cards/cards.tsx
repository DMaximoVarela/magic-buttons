"use client";

import useFiltersStore from "@/stores/filtersStore";
import ButtonContainer from "../buttonContainer/buttonContainer";
import { useEffect, useState } from "react";
import useButtonsStore from "@/stores/buttonsStore";
import { paginationButtons } from "@/utils/paginationButtons";
import usePaginationStore from "@/stores/paginationStore";

const Cards = () => {
  const filters = useFiltersStore((state) => state.filters);
  const getButtons = useButtonsStore((state) => state.getButtons);
  const allButtons = useButtonsStore((state) => state.buttons);
  const activePage = usePaginationStore((state) => state.active);
  const pageButtons = paginationButtons(allButtons);

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

      await getButtons(category, tamano, estilo);
    };

    fetchData();
  }, [filters]);

  return (
    <div>
      <ul className="flex flex-wrap justify-center sm:justify-between items-center gap-y-6 lg:gap-y-10">
        {pageButtons[activePage]?.map((btn) => (
          <ButtonContainer key={btn.id} btnId={btn.id} />
        ))}
      </ul>
    </div>
  );
};

export default Cards;
