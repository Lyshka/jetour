import { useEffect, useRef, useState } from "react";

const TopMenuCar = ({ title, info }) => {
  const ref = useRef();

  // const [isCheck, setIsCheck] = useState(false);

  const [scroll, setScroll] = useState(0);
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY);

    setTimeout(() => {
      if (ref.current?.getBoundingClientRect().top === 0) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }, 1200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  return (
    <>
      <div className="font-bold px-10">
        <h1 className="mt-[60px] text-[40px] leading-[52px]">{title}</h1>
        <p className="mt-[10px] leading-8 text-2xl">комлектации и цены:</p>
      </div>

      <div
        ref={ref}
        className={`px-10 mt-[30px] flex justify-start items-start lg:sticky top-0 ${
          hidden ? "py-12 shadowCar" : ""
        } transition-all duration-300 bg-white z-40`}
      >
        <div className="gap-x-2 items-center w-[500px] lg:flex hidden">
          {/* <div
            onClick={() => setIsCheck((prv) => !prv)}
            className={`border w-4 h-4 flex justify-center items-center ${
              isCheck ? "bg-[#68a598]" : "bg-transparent"
            }`}
          >
            {isCheck && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="object-cover w-full h-full"
                viewBox="0 0 30 30"
                fill="white"
              >
                <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
              </svg>
            )}
          </div>

          <p className="text-sm leading-[150%] text-[#505F79]">
            Скрыть одинаковые параметры
          </p> */}
          &nbsp;
        </div>

        <div className=" flex gap-x-10 w-full lg:flex-row flex-col gap-y-5 justify-start items-start">
          {info.slice(1, 4).map(({ img, title, price }, idx) => (
            <div
              key={idx}
              className={`${
                hidden
                  ? "flex-row justify-center items-center"
                  : " flex-col border"
              } rounded-[10px] border-[#D0D5DC] border-opacity-50 flex transition-all duration-300`}
            >
              <div
                className={`bg-[#F3F4F5] ${
                  hidden
                    ? "rounded-[10px] min-w-[60px] min-h-[60px] flex justify-center items-center"
                    : "pt-5 pb-4"
                }`}
              >
                <img className="object-cover" src={img} alt={title} />
              </div>

              <div className="p-5 text-[#141B27] w-full">
                <h2 className="font-bold leading-[120%]">{title}</h2>
                <span className="mt-[5px] whitespace-nowrap leading-5">
                  {price} р.
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default TopMenuCar;
