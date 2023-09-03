import { Carousel } from "@material-tailwind/react";

import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState([]);
  const [aboutMain, setAboutMain] = useState({});

  const getAbout = async () => {
    const { data } = await axios.get("http://localhost:3000/get-about");

    setAbout(data);
  };

  const getAboutMain = async () => {
    const { data } = await axios.get("http://localhost:3000/get-about-main");

    setAboutMain(data[0]);
  };

  useEffect(() => {
    getAbout();
    getAboutMain();
  }, []);

  return (
    <section className="py-[30px] flex lg:flex-row flex-col w-full justify-center gap-x-[60px] items-start lg:px-10">
      <img
        className="object-cover w-full h-[396px] lg:w-[580px] lg:h-[275px]"
        src={`http://localhost:3000/${aboutMain.img}`}
        alt="about"
      />

      <div className="flex flex-col gap-y-10 lg:p-0 p-5 w-full">
        <div className="flex flex-col gap-y-5 w-full">
          <h2 className="font-bold lg:text-4xl text-[22px] lg:leading-[45px] leading-[29px]">
            {aboutMain.title}
          </h2>
          <p
            dangerouslySetInnerHTML={{ __html: aboutMain.description }}
            className="leading-[21px] text-[#4c4c4c] w-full"
          />
        </div>

        <div className="w-full justify-between lg:flex hidden items-start">
          {about.map(({ title, img, id }) => (
            <div
              key={id}
              className="flex max-w-[250px] flex-col justify-center items-center gap-y-5"
            >
              <img
                className="w-[70px] h-[70px]"
                src={`http://localhost:3000/${img}`}
                alt={title}
              />
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
