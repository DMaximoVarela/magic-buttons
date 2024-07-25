import ButtonContainer from "../buttonContainer/buttonContainer";
import buttons from "../buttons/buttons";

const Cards = () => {
  const copyButtons = buttons.slice(1);

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
