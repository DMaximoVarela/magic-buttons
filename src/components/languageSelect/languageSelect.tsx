import { useTransition } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/local";
import { IoLanguageSharp } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import { useLocale } from "next-intl";

const languageOptions = [
  {
    id: 1,
    value: "es",
    label: "ES",
  },
  {
    id: 2,
    value: "en",
    label: "EN",
  },
];

const LanguageSelect = () => {
  const handleChange = (e) => {
    const value = e.target.value;
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  const locale = useLocale();

  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex flex-col">
      <label htmlFor="language" className="text-xs px-1 mn:px-2">
        Idioma
      </label>
      <div className="relative inline-block w-fit px-1 mn:px-2 xsm:text-[14px] sm:text-[16px] md:text-[22px] lg:text-[24px] 2xl:text-[32px] font-medium text-[#C7C7C7] cursor-pointer">
        <IoLanguageSharp className="absolute top-1.5 left-3 mn:pl-1" />
        <select
          name="language"
          className={`appearance-none w-full xsm:px-5 sm:px-6 md:px-8 2xl:px-10 bg-transparent border border-[#C7C7C7] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4a90e2] cursor-pointer ${
            isPending && "pointer-events-none opacity-60"
          }`}
          onChange={handleChange}
          defaultValue={locale}
        >
          {languageOptions.map((lo) => {
            return (
              <option value={lo.value} key={lo.id} className="bg-[#191919]">
                {lo.label}
              </option>
            );
          })}
        </select>
        <TiArrowSortedDown className="absolute top-1.5 right-3 mn:pr-1 pointer-events-none" />
      </div>
    </div>
  );
};

export default LanguageSelect;
