import Filters from "@/components/filters/filters";

const Page = () => {
  return (
    <div className="relative flex flex-col w-[100vw] mt-[52px] sm:mt-[76px] lg:mt-[104px] 2xl:mt-[124px] px-6">
      <div className="absolute top-0 left-0 mx-6 flex flex-col text-start text-white">
        <h1 className="text-[24px] sm:text-[32px] lg:text-[42px] 2xl:text-[48px] font-semibold">
          Bienvenido!
        </h1>
        <h3 className="text-[16px] sm:text-[24px] lg:text-[30px] 2xl:text-[36px] font-medium">
          Cada botón tiene su magia. ¿Cuál elegirás hoy?
        </h3>
      </div>
      <div className="self-center mt-[86px] lg:mt-[110px] 2xl:mt-[130px]">
        <Filters />
      </div>
    </div>
  );
};

export default Page;
