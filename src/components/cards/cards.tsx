import ButtonContainer from "../buttonContainer/buttonContainer";

const Cards = () => {
  return (
    <div>
      <ul className="flex flex-wrap justify-center sm:justify-between items-center gap-y-6 lg:gap-y-10">
        <li>
          <ButtonContainer btnId={1} />
        </li>
        <li>
          <ButtonContainer btnId={2} />
        </li>
        <li>
          <ButtonContainer btnId={1} />
        </li>
        <li>
          <ButtonContainer btnId={2} />
        </li>
        <li>
          <ButtonContainer btnId={1} />
        </li>
        <li>
          <ButtonContainer btnId={2} />
        </li>
        <li>
          <ButtonContainer btnId={1} />
        </li>
        <li>
          <ButtonContainer btnId={2} />
        </li>
        <li>
          <ButtonContainer btnId={1} />
        </li>
        <li>
          <ButtonContainer btnId={2} />
        </li>
        <li>
          <ButtonContainer btnId={1} />
        </li>
        <li>
          <ButtonContainer btnId={2} />
        </li>
      </ul>
    </div>
  );
};

export default Cards;
