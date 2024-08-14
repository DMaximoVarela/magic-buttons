import useFiltersStore from "@/stores/filtersStore";
import ButtonContainer from "../buttonContainer/buttonContainer";
import buttons from "../buttons/buttons";
import { useEffect } from "react";
import useButtonsStore from "@/stores/buttonsStore";

const Cards = () => {
  const copyButtons = buttons.slice(1);

  const filters = useFiltersStore((state) => state.filters);
  const getButtons = useButtonsStore((state) => state.getButtons);
  const allButtons = useButtonsStore((state) => state.buttons);

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
        {copyButtons.map((btn) => (
          <ButtonContainer key={btn.id} btnId={btn.id} />
        ))}
      </ul>
    </div>
  );
};

export default Cards;
