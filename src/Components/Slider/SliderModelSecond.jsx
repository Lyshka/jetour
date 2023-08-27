import { Carousel } from "@material-tailwind/react";

const SliderModelSecond = ({ slides }) => {
  return (
    <section id="pht" className="pb-[60px] flex flex-col justify-center items-center px-10 w-full">
      <div className="flex max-w-[1280px] w-full flex-col justify-center items-center gap-y-[30px]">
        <Carousel
          loop
          prevArrow={({ handlePrev }) => (
            <div
              variant="text"
              color="white"
              size="lg"
              onClick={() => {
                handlePrev();
              }}
              className="!absolute cursor-pointer top-2/4 left-2 -translate-y-2/4"
            >
              <svg
                className="md:w-10 md:h-10 w-7 h-7"
                viewBox="0 0 40 40"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.501 19.9994C10.501 19.4022 10.729 18.8049 11.184 18.3494L25.517 4.01681C26.4287 3.10507 27.9069 3.10507 28.8183 4.01681C29.7297 4.92818 29.7297 6.40611 28.8183 7.31793L16.1359 19.9994L28.8174 32.6813C29.7288 33.5927 29.7288 35.0708 28.8174 35.9821C27.9061 36.8943 26.4283 36.8943 25.5165 35.9821L11.1835 21.6498C10.7286 21.1941 10.501 20.5968 10.501 19.9994Z"></path>
              </svg>
            </div>
          )}
          nextArrow={({ handleNext, activeIndex }) => {
            return (
              <div
                variant="text"
                color="white"
                size="lg"
                onClick={() => {
                  handleNext();
                }}
                className="!absolute cursor-pointer top-2/4 right-2 md:right-20 -translate-y-2/4"
              >
                <svg
                  className="md:w-10 md:h-10 w-7 h-7"
                  viewBox="0 0 40 40"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M29.4989 20.0006C29.4989 20.5978 29.2709 21.1951 28.8159 21.6506L14.4829 35.9832C13.5712 36.8949 12.093 36.8949 11.1816 35.9832C10.2702 35.0718 10.2702 33.5939 11.1816 32.6821L23.864 20.0006L11.1825 7.3187C10.2711 6.40733 10.2711 4.92917 11.1825 4.01788C12.0938 3.10569 13.5716 3.10569 14.4834 4.01788L28.8164 18.3502C29.2713 18.8059 29.4989 19.4032 29.4989 20.0006Z"></path>
                </svg>
              </div>
            );
          }}
          className="flex justify-start items-start md:h-[700px] h-[200px]"
          navigation={({ setActiveIndex, activeIndex, length }) => {
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
          {slides.map((el, idx) => {
            return (
              <div
                key={idx}
                className="md:h-[650px] h-[175px] bg-white w-screen"
              >
                <img
                  className={`md:max-w-[1300px] max-w-[350px] w-full md:pr-20 pr-[50px] h-full object-cover relative`}
                  src={el}
                  alt=""
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};
export default SliderModelSecond;
