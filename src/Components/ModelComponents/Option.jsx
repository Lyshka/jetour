import { useState } from "react";

import ModalModel from "./ModalModel";
import useOutsideAlerter from "../../hook/useOutSideAlerter";

const Option = ({ idx, img, title, desc, options }) => {
  const [open, setOpen] = useState(false);
  const { isShow, setIsShow, ref } = useOutsideAlerter(false);

  const [titleInfo, setTitleInfo] = useState("");
  const [imgInfo, setImgInfo] = useState("");
  const [descInfo, setDescInfo] = useState("");

  return (
    <>
      <section
        className={`flex justify-center items-center ${
          idx % 2 === 0
            ? "lg:flex-row flex-col"
            : "lg:flex-row-reverse flex-col"
        } w-full`}
      >
        <img
          className="lg:max-w-[60%] w-full px-5 lg:px-0"
          src={img}
          alt="hang"
        />

        <div className="lg:px-10 px-5 lg:mt-0 mt-[10px]">
          <h3 className="font-bold lg:text-[32px] text-2xl lg:leading-[42px] leading-8">{title}</h3>

          <p
            className="leading-6 mt-5"
            dangerouslySetInnerHTML={{ __html: desc }}
          />

          <div
            onClick={() => setOpen((prv) => !prv)}
            className="mt-4 flex gap-x-1 cursor-pointer select-none items-center"
          >
            <span>Больше опций</span>

            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              className={`${
                open ? "rotate-180" : "rotate-0"
              } transition-all duration-300`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00053 7.80028C6.76165 7.80028 6.52272 7.70907 6.34054 7.52706L0.607506 1.79388C0.24281 1.42918 0.24281 0.837892 0.607506 0.473343C0.972054 0.108795 1.56323 0.108795 1.92795 0.473343L7.00053 5.5463L12.0733 0.473697C12.4379 0.109148 13.0291 0.109148 13.3936 0.473697C13.7585 0.838245 13.7585 1.42936 13.3936 1.79405L7.66069 7.52726C7.47842 7.70924 7.23949 7.80028 7.00053 7.80028Z"
                fill="#151B26"
              ></path>
            </svg>
          </div>
        </div>
      </section>

      {open ? (
        <section className="-mt-10 w-full h-full flex lg:flex-row flex-col justify-center gap-x-5 gap-y-5 items-start md:px-10">
          {options.map(({ title, img, desc }, idx) => (
            <div
              key={idx}
              onClick={() => {
                setIsShow(true);
                setTitleInfo(title);
                setImgInfo(img);
                setDescInfo(desc);
              }}
              className="flex cursor-pointer flex-col justify-center items-center w-full h-full gap-y-1"
            >
              <img
                className="object-cover lg:w-[350px] w-[200px] lg:h-[220px] h-[170px] md:w-full md:h-[400px]"
                src={img}
                alt=""
              />
              <h4 className="leading-6 text-center text-[#141B27] opacity-40 lg:w-full lg:max-w-[100%] max-w-[46%] md:text-2xl lg:text-base">
                {title}
              </h4>
            </div>
          ))}
        </section>
      ) : null}

      <ModalModel
        refs={ref}
        setOpen={setIsShow}
        open={isShow}
        img={imgInfo}
        title={titleInfo}
        desc={descInfo}
      />
    </>
  );
};
export default Option;
