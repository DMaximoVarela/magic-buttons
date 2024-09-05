import { useTranslations } from "next-intl";
import { FaWandMagicSparkles } from "react-icons/fa6";

interface params {
  onClick: () => void;
}

const MagicTouchButton: React.FC<params> = ({ onClick }) => {
  const t = useTranslations();

  return (
    <div
      className="h-[22px] sm:h-[28px] lg:h-[50px] 2xl:h-[64px] my-4 flex justify-center items-center text-[24px] 2xl:text-[32px] font-medium px-2 lg:px-4 space-x-1 text-[#4a90e2] border border-[#4a90e2] rounded-xl lg:rounded-3xl bg-[#1456a44d] hover:bg-[#1456a499] cursor-pointer transition duration-500 ease-in-out transform"
      onClick={onClick}
    >
      <span className="lg:flex hidden">{t("magicTouchButton")}</span>
      <FaWandMagicSparkles />
    </div>
  );
};

export default MagicTouchButton;
