const ButtonContainerSkeleton = () => {
  return (
    <>
      <div className="relative w-[250px] lg:w-[350px] 3xl:w-[450px] h-[200px] sm:h-[250px] 2xl:h-[350px] rounded-2xl bg-[#191919] flex flex-col justify-center items-center p-4">
        <div className="absolute top-0 right-0 m-2">
          <button className="w-[90px] sm:w-[100px] 3xl:w-[110px] h-6 p-1 rounded-lg bg-[#3f3f3f] animate-pulse cursor-default" />
        </div>

        <div className="w-fit h-fit mb-4">
          <button className="w-32 h-12 rounded-lg animate-pulse bg-[#3f3f3f] cursor-default" />
        </div>

        <span className="absolute bottom-0 left-0 w-[95%] mx-2 mb-1 text-[18px] sm:text-[20px] lg:text-[24px] 3xl:text-[32px] font-medium border-t border-t-[#3f3f3f]">
          <button className="w-12 h-4 rounded-md animate-pulse bg-[#3f3f3f] cursor-default" />
        </span>
      </div>
    </>
  );
};

export default ButtonContainerSkeleton;
