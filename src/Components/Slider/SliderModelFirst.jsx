import { Carousel } from "@material-tailwind/react";
import { useState } from "react";

const SliderModelFirst = ({ title, interior, body, info }) => {
  let set;

  const [value, setValue] = useState(false);
  const [slides, setSlides] = useState(body);
  const [color, setColor] = useState(body[0].color);

  return (
    <section
      id="info"
      className="py-[60px] flex flex-col justify-center items-center md:px-10 px-5 w-full"
    >
      <div className="flex max-w-[1280px] w-full flex-col justify-center items-center gap-y-[30px]">
        <h2 className="text-center md:text-5xl text-[32px] md:leading-[56px] leading-[42px] font-bold">
          {title}
        </h2>

        <div className="bg-[#F3F4F5] rounded-[15px] flex justify-center items-center overflow-hidden md:flex-row flex-col w-full lg:w-auto">
          <button
            onClick={() => {
              setValue(false);
              setSlides(body);
              setColor(body[0].color);
              set(0)
            }}
            className={`py-2 w-full px-5 leading-[18px] rounded-[15px] transition-all duration-150 text-center font-bold ${
              value
                ? "bg-[#F3F4F5] text-[#141B27] hover:text-[#68a598]"
                : "bg-[#141B27] bg-opacity-50 text-white"
            }`}
          >
            Кузов
          </button>
          <button
            onClick={() => {
              setValue(true);
              setSlides(interior);
              setColor(interior[0].color);
              set(0)
            }}
            className={`py-2 px-5 leading-[18px] rounded-[15px] transition-all w-full duration-150 text-center font-bold ${
              value
                ? "bg-[#141B27] bg-opacity-50 text-white"
                : "bg-[#F3F4F5] text-[#141B27] hover:text-[#68a598]"
            }`}
          >
            Интерьер
          </button>
        </div>

        <Carousel
          loop
          prevArrow={({ handlePrev }) => (
            <div
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute cursor-pointer top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="h-6 w-6 stroke-white lg:stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </div>
          )}
          nextArrow={({ handleNext }) => (
            <div
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute cursor-pointer top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="h-6 w-6 stroke-white lg:stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          )}
          className="flex touch-pan-x justify-start items-start overflow-hidden md:h-[500px] h-[200px] w-full"
          navigation={({ setActiveIndex, activeIndex, length }) => {
            set = setActiveIndex

            return (
              <div className="absolute max-w-[900px] rounded w-full bottom-0 left-2/4 z-10 flex justify-center items-center -translate-x-2/4">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-[2px] max-w-[80px] w-full cursor-pointer transition-all content-[''] ${
                      activeIndex === i ? "bg-black" : "bg-[#cccccc]"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            );
          }}
        >
          {slides
            .find((el) => el.color === color)
            .Photos.map(({ url, ID }) => (
              <div key={ID} className="h-full bg-white w-screen">
                <img
                  className="md:max-w-[900px] w-full md:pr-20 md:h-[457px] h-[170px] object-cover relative left-1/4 -translate-x-1/4"
                  src={url}
                  alt=""
                />
              </div>
            ))}
        </Carousel>

        <div className="flex justify-center items-center md:mt-10">
          {slides.map((sliderColor, idx) => (
            <div
              onClick={() => {
                setColor(sliderColor.color);
                set(0);
              }}
              style={{ background: sliderColor.color }}
              key={idx}
              className={`w-6 h-6 border-2 border-[#F3F4F5] cursor-pointer rounded-[50%] ${
                sliderColor.color === color ? "shadowColorPick" : ""
              }`}
            ></div>
          ))}
        </div>

        <div className="mt-[30px] grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 w-full h-full">
          {info.map(({ icon, value, desc }, idx) => (
            <div
              key={idx}
              className="flex md:flex-col flex-row md:justify-center justify-start w-full md:items-center items-start h-full"
            >
              <div className="flex md:flex-col flex-row justify-center items-center h-full gap-x-5">
                <div className="p-[10px] rounded-[50%] bg-[#F3F4F5]">
                  <img className="w-10 h-10" src={icon} alt={value} />
                </div>
                <div className="flex flex-col md:text-center text-left mt-5 h-full">
                  <span className="leading-6 font-bold md:text-base text-sm">{value}</span>
                  <span className="text-sm leading-5">{desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SliderModelFirst;
