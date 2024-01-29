import { Carousel } from "@material-tailwind/react";

import { about } from "../../constants/about";

const About = () => {
  return (
    <section className="py-[30px] flex lg:flex-row flex-col w-full justify-center gap-x-[60px] items-start lg:px-10">
      <img
        className="object-cover w-full h-[396px] lg:w-[580px] lg:h-[275px]"
        src="https://jetour-mogilev.by/wp-content/uploads/2023/09/KVBed5SpGZ.webp"
        alt="about"
      />

      <div className="flex flex-col gap-y-10 lg:p-0 p-5 w-full">
        <div className="flex flex-col gap-y-5 w-full">
          <h2 className="font-bold lg:text-4xl text-[22px] lg:leading-[45px] leading-[29px]">
            №1 по продаже и обслуживанию автомобилей JETOUR
          </h2>
          <p className="leading-[21px] text-[#4c4c4c] w-full">
            ООО «Кросс Моторс» — официальный дилер Jetour в Могилеве.
            <br />
            <br />
            Приобретая автомобиль в автоцентре «Кросс-Моторс», Вы получите
            полный спектр услуг обслуживания: возможность записаться и пройти
            тест-драйв, купить авто в кредит или лизинг, оформить страховку на
            авто, воспользоваться программой trade-in, приобрести и установить
            дополнительное оборудование или аксессуары для различных моделей
            Jetour.
            <br />
            <br />
            ООО «Кросс-Моторс» — это надежный партнер для тех, кто ценит
            качество, комфорт и безопасность своего автомобиля.
          </p>
        </div>

        <div className="2xl:grid hidden grid-cols-5 gap-6">
          {about.map(({ title, img }, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center gap-y-5 flex-shrink-0 flex-grow-0"
            >
              <img className="w-[70px] h-[70px]" src={img} alt={title} />
              <span className="text-center text-sm text-[#4c4c4c]">
                {title}
              </span>
            </div>
          ))}
        </div>

        <Carousel
          className="h-[200px] lg:hidden flex w-screen"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-2 cursor-pointer rounded-full transition-all content-[''] ${
                    activeIndex === i
                      ? "w-2 bg-[#ff874a]"
                      : "w-2 bg-transparent border-[#ff874a] border"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {about.map(({ title, img }, idx) => (
            <div className="w-screen h-[200px]" key={idx}>
              <div className="flex flex-col gap-y-5 justify-center items-center w-full">
                <img className="w-[70px] h-[70px]" src={img} alt={title} />
                <span className="text-sm text-center w-[300px] text-[#4c4c4c]">
                  {title}
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
export default About;
