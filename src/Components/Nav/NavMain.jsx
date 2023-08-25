import { Link } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";

import { nav } from "../../constants/nav";

const Nav = () => {
  return (
    <section className="w-full pb-[30px] h-screen lg:grid lg:grid-cols-3 lg:gap-0 flex">
      <Carousel
        className="h-screen lg:hidden flex"
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
        {nav.map(({ title, img, url }, idx) => (
          <div
            key={idx}
            className="relative h-full w-screen flex items-end justify-start"
          >
            <img
              src={img}
              alt="nav1"
              className="absolute w-full object-cover top-0 h-full"
            />
            <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center gap-y-5 relative w-screen py-[60px]">
              <h2 className="text-white lg:w-[461px] w-[350px] lg:text-start text-center lg:text-4xl text-[28px] uppercase leading-9 xl:leading-[45px]">
                {title}
              </h2>
              <Link
                to={url}
                className="text-white px-[26px] max-w-[200px] py-[14px] uppercase transition-colors duration-300 bg-[#68a598] flex justify-center items-center hover:bg-[#628788]"
              >
                подробности
              </Link>
            </div>
          </div>
        ))}
      </Carousel>

      {nav.map(({ title, img, url }, idx) => (
        <div
          key={idx}
          className="relative lg:flex hidden h-full w-full items-end justify-start"
        >
          <img src={img} alt="nav1" className="absolute top-0 h-full" />
          <div className="flex flex-col lg:justify-start lg:items-start gap-y-5 relative px-10 py-[60px]">
            <h2 className="text-white w-[461px] text-4xl uppercase leading-[45px]">
              {title}
            </h2>
            <Link
              to={url}
              className="text-white px-[26px] max-w-[200px] py-[14px] uppercase transition-colors duration-300 bg-[#68a598] flex justify-center items-center hover:bg-[#628788]"
            >
              подробности
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Nav;
