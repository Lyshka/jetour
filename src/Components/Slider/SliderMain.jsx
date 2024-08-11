import { Carousel } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const Slider = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [slides, setSlides] = useState([]);

  const getSlides = async () => {
    const { data } = await axios.get(
      "https://jetour-mogilev.by/wp-json/wp/v2/pages/255/?acf_format=standard"
    );

    const gallery = data.acf.gallery_new;
    setSlides(gallery);
    setLoading(false);
  };

  useEffect(() => {
    getSlides();
  }, []);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center w-full">
        <div className="animate-pulse">Загрузка</div>
      </div>
    );

  return (
    <>
      <section
        id="mainCarousel"
        className="w-full h-[calc(100vh-60px)] lg:mb-0 mb-5"
      >
        <Carousel
          loop
          prevArrow={({ handlePrev }) => (
            <div
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute cursor-pointer top-2/4 left-4 -translate-y-2/4 bg-black/20 hover:bg-white transition-all duration-300 group justify-center items-center xl:w-16 w-8 xl:h-24 h-12 flex"
            >
              <svg
                className="xl:h-10 h-6 xl:w-10 w-5 rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23.8 45.3"
              >
                <g>
                  <path
                    className="group-hover:fill-black transition-all duration-300"
                    fill="#f5f7f9"
                    d="M23.8 22.5L1.5.1 0 1.6l21 21.1-21 21 1.5 1.5 22.3-22.3-.2-.2z"
                  ></path>
                </g>
              </svg>
            </div>
          )}
          nextArrow={({ handleNext }) => (
            <div
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute cursor-pointer top-2/4 !right-4 -translate-y-2/4 bg-black/20 hover:bg-white transition-all duration-300 group justify-center items-center xl:w-16 w-8 xl:h-24 h-12 flex"
            >
              <svg
                className="xl:h-10 h-6 xl:w-10 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23.8 45.3"
              >
                <g>
                  <path
                    className="group-hover:fill-black transition-all duration-300"
                    fill="#f5f7f9"
                    d="M23.8 22.5L1.5.1 0 1.6l21 21.1-21 21 1.5 1.5 22.3-22.3-.2-.2z"
                  ></path>
                </g>
              </svg>
            </div>
          )}
          className="relative"
        >
          {slides.map(({ desctop, mobile, title }, idx) => (
            <div key={idx} className="item-slide relative">
              <img
                className="w-full lg:block hidden h-full object-cover"
                src={desctop}
                alt="slide"
              />
              <img
                className="w-full lg:hidden block h-full object-cover"
                src={mobile}
                alt="slide"
              />

              <div className="absolute xl:left-28 left-1/2 xl:-translate-x-0 -translate-x-1/2 z-[1] xl:top-1/2 top-1/4 -translate-y-1/2 xl:max-w-[calc(50%-228px)] w-full xl:px-0 px-2.5 xl:space-y-8 space-y-4">
                <h3 className="text-white xl:text-5xl text-2xl font-bold">
                  {title}
                </h3>

                <button
                  onClick={() => setOpen((prv) => !prv)}
                  className="bg-[#68a598] xl:text-sm text-xs xl:px-5 px-2.5 xl:py-2.5 py-2 uppercase text-white"
                >
                  Запись на тест-драйв
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {open && <Modal setOpen={setOpen} />}
    </>
  );
};
export default Slider;
