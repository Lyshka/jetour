import { Carousel } from "@material-tailwind/react";
import { useState } from "react";

const SliderModelFirst = ({ title, interior, body, info }) => {
  const [value, setValue] = useState(false);
  const [slides, setSlides] = useState(body);
  const [color, setColor] = useState(Object.keys(slides.color).shift());

  console.log(color);

  return (
    <section className="py-[60px] flex flex-col justify-center items-center px-10 w-full">
      <div className="flex max-w-[1280px] w-full flex-col justify-center items-center gap-y-[30px]">
        <h2 className="text-center text-5xl leading-[56px] font-bold">
          {title}
        </h2>

        <div className="bg-[#F3F4F5] rounded-[15px] flex justify-center items-center">
          <button
            onClick={() => {
              setValue(false);
              setSlides(body);
            }}
            className={`py-2 px-5 leading-[18px] rounded-[15px] transition-all duration-150 text-center font-bold ${
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
            }}
            className={`py-2 px-5 leading-[18px] rounded-[15px] transition-all duration-150 text-center font-bold ${
              value
                ? "bg-[#141B27] bg-opacity-50 text-white"
                : "bg-[#F3F4F5] text-[#141B27] hover:text-[#68a598]"
            }`}
          >
            Интерьер
          </button>
        </div>

        {/* <Carousel>

        </Carousel> */}

        <div className="flex justify-center items-center mt-10">
          {Object.keys(slides.color).map((el, idx) => (
            <div
              onClick={() => setColor(el)}
              style={{ background: el }}
              key={idx}
              className={`w-6 h-6 border-2 border-[#F3F4F5] cursor-pointer rounded-[50%] ${
                el === color ? "shadowColorPick" : ""
              }`}
            ></div>
          ))}
        </div>

        <div className="mt-[30px] grid grid-cols-6 gap-5 w-full">
          {info.map(({ icon, value, desc }, idx) => (
            <div className="flex flex-col justify-center items-center">
              <div className="p-[10px] rounded-[50%] bg-[#F3F4F5]">
                <img className="w-10 h-10" src={icon} alt={value} />
              </div>
              <div className="flex flex-col text-center mt-5">
                <span className="leading-6 font-bold">{value}</span>
                <span className="text-sm leading-5">{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SliderModelFirst;
