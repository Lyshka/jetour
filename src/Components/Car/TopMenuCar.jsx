import { useEffect, useRef, useState } from "react";

const TopMenuCar = ({ title, info }) => {
  const ref = useRef();

  const [scroll, setScroll] = useState(0);
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    console.log(ref.current?.getBoundingClientRect().top);

    setScroll(window.scrollY);

    if (ref.current?.getBoundingClientRect().top === 0) {
      setTimeout(() => {
        setHidden(true);
      }, 500);
    } else {
      setTimeout(() => {
        setHidden(false);
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          &nbsp;
        </div>

        <div className="flex gap-x-10 w-full lg:grid lg:grid-cols-3 flex-col gap-y-5 justify-start items-start">
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
