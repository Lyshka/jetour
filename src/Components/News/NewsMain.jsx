import { Link } from "react-router-dom";

import { news } from "../../constants/news";
import { Carousel } from "@material-tailwind/react";

const News = () => {
  return (
    <section className="lg:py-[30px] md:h-full md:py-5 lg:h-auto h-screen flex flex-col justify-center items-center w-full mb-[20px]">
      <h2 className="font-bold text-[22px] lg:text-4xl leading-[29px] lg:leading-[45px] text-center w-full text-[#4c4c4c]">
        Новости и события
      </h2>

      <div className="mt-5 flex flex-col justify-center items-center w-full">
        <div className="px-10 hidden lg:grid grid-cols-4 gap-x-5">
          {news.slice(0,4).map(({ title, desc, img, date, id }, idx) => (
            <a href={`/newsall/${id}`} key={idx} className="flex group flex-col gap-y-5">
              <img
                className="object-cover w-full h-[250px]"
                src={img}
                alt={title}
              />
              <h3 className="font-bold leading-5 group-hover:text-[#68a598] transition-colors duration-300">
                {title}
              </h3>

              <p className="leading-5">{desc}</p>

              <div className="h-full flex justify-start items-end">
                <span className="text-[#7c7f85] leading-5">{date}</span>
              </div>
            </a>
          ))}
        </div>

        <Carousel
          className="lg:hidden w-full h-full flex"
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
          {news.map(({ title, desc, img, date }, idx) => (
            <div className="w-screen h-full" key={idx}>
              <Link className="flex group justify-center items-center flex-col gap-y-5 px-5 relative h-full w-full">
                <img
                  className="object-cover md:h-full md:w-full h-[230px] w-[350px]"
                  src={img}
                  alt={title}
                />
                <h3 className="font-bold leading-5 group-hover:text-[#68a598] transition-colors duration-300">
                  {title}
                </h3>

                <p className="leading-5">{desc}</p>

                <div className="flex relative bottom-10 justify-start items-start w-full mt-10">
                  <span className="text-[#7c7f85] leading-5 text-left">
                    {date}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>

        <Link
          className="mt-[60px] border border-[#cccccc] max-w-[170px] px-[26px] py-[14px] flex justify-center items-center text-center uppercase leading-4 transition-colors duration-300 font-medium h-11 text-[#4c4c4c] hover:text-[#818181] text-sm"
          to={"/newsall"}
        >
          ВСЕ НОВОСТИ
        </Link>
      </div>
    </section>
  );
};
export default News;
