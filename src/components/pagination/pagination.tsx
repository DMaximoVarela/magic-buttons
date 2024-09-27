import useButtonsStore from "@/stores/buttonsStore";
import usePaginationStore from "@/stores/paginationStore";
import { paginationButtons } from "@/utils/paginationButtons";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Pagination = () => {
  const activePage = usePaginationStore((state) => state.active);
  const setActivePage = usePaginationStore((state) => state.setActive);
  const buttons = useButtonsStore((state) => state.buttons);
  const pageButtons = paginationButtons(buttons);

  const totalPages = pageButtons.length;

  const getPaginationRange = () => {
    const range: (string | number)[] = [];

    range.push(0);

    if (activePage > 3) {
      range.push("...");
    }

    if (totalPages > 1) {
      for (
        let i = Math.max(1, activePage - 2);
        i <= Math.min(totalPages - 2, activePage + 2);
        i++
      ) {
        range.push(i);
      }
    }

    if (activePage < totalPages - 4) {
      range.push("...");
    }

    if (totalPages > 1) {
      range.push(totalPages - 1);
    }

    return range;
  };

  const paginationRange = getPaginationRange();

  return (
    <div className="flex justify-center items-center space-x-4 text-[16px] text-white bg-[#191919] w-fit p-2 rounded-lg">
      <IoIosArrowBack
        className={`${
          activePage === 0
            ? "text-slate-400 cursor-not-allowed"
            : "hover:bg-[#4d4d4d40] cursor-pointer"
        } rounded-md p-2 size-full`}
        onClick={() => {
          if (activePage > 0) {
            setActivePage(activePage - 1);
          }
        }}
      />
      <ul className="flex justify-center items-center space-x-2">
        {paginationRange.map((page, index) => {
          if (typeof page === "string") {
            return (
              <li
                key={index}
                className="p-2 text-slate-400 cursor-not-allowed"
                style={{ pointerEvents: "none" }}
              >
                {page}
              </li>
            );
          }

          return (
            <li
              key={index}
              className={`p-2 ${
                activePage === page
                  ? "bg-[#2072D3] hover:bg-[#1456A4]"
                  : "hover:bg-[#4d4d4d40]"
              } cursor-pointer rounded-md`}
              onClick={() => {
                setActivePage(page);
              }}
            >
              {page + 1}
            </li>
          );
        })}
      </ul>
      <IoIosArrowForward
        className={`${
          activePage === totalPages - 1 || activePage === totalPages
            ? "text-slate-400 cursor-not-allowed"
            : "hover:bg-[#4d4d4d40] cursor-pointer"
        } rounded-md p-2 size-full`}
        onClick={() => {
          if (
            activePage < totalPages - 1 ||
            (activePage === totalPages && totalPages !== 0)
          ) {
            setActivePage(activePage + 1);
          }
        }}
      />
    </div>
  );
};

export default Pagination;
