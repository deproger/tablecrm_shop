import AccentButton from "./AccentButton";

const Banner = () => {
  return (
    <>
      <div className="flex bg-[#E3DDDF] w-auto flex-row justify-between relative h-screen sm:h-[80vh] md:h-auto md:aspect-[16/6] mx-5 ">
        <img
          src="/banner.png"
          className="absolute w-full h-full object-cover "
          alt=""
        />

        <div className="flex flex-col z-10 max-w-[450px] text-start gap-2 ml-10 mt-5">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1D1D1B]">
            Собрали для вас все предложения в одном месте
          </h1>
          <span className="text-[#1D1D1B]">
            Новые акции каждую неделю, следите на сайте
          </span>
          <AccentButton text="Перейти к акциям" url="" className="m-1" />
        </div>
      </div>
    </>
  );
};

export default Banner;
