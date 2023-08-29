import { useState } from "react";

const TableCard = ({ title, option, choose }) => {
  const [open, setOpen] = useState(false);

  console.log(option);

  return (
    <div>
      <div
        onClick={() => setOpen((prv) => !prv)}
        className="w-full p-5 bg-[#F3F4F5] flex justify-start items-start rounded-[10px] cursor-pointer"
      >
        <div className="flex justify-start items-center gap-x-[6px]">
          <h3 className="uppercase text-sm leading-5 font-bold text-[#505F79]">
            {title}
          </h3>

          <svg
            className={`transition-all duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
            width="12"
            height="12"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00053 7.80028C6.76165 7.80028 6.52272 7.70907 6.34054 7.52706L0.607506 1.79388C0.24281 1.42918 0.24281 0.837892 0.607506 0.473343C0.972054 0.108795 1.56323 0.108795 1.92795 0.473343L7.00053 5.5463L12.0733 0.473697C12.4379 0.109148 13.0291 0.109148 13.3936 0.473697C13.7585 0.838245 13.7585 1.42936 13.3936 1.79405L7.66069 7.52726C7.47842 7.70924 7.23949 7.80028 7.00053 7.80028Z"
              fill="#151B26"
            ></path>
          </svg>
        </div>
      </div>

      <div
        className={`mt-[30px] justify-start items-start lg:sticky top-0 transition-all duration-300 bg-white z-20 ${
          open ? "flex" : "hidden"
        } transition-all duration-300`}
      >
        <div className={`flex-col w-full lg:flex hidden`}>
          {option[0].option[choose].map((_, idl) => {
            return (
              <div
                key={idl}
                className="w-full hover:bg-[#f3f4f5] border-b flex gap-x-32"
              >
                {option.map((el, idx) => {
                  return (
                    <div
                      className={`w-[380px] first:w-[280px] flex transition-all first:text-[#505F79] duration-300 p-[10px] text-sm`}
                      key={idx}
                    >
                      {typeof el.option[choose][idl] === "boolean"
                        ? el.option[choose][idl]
                          ? "+"
                          : "-"
                        : el.option[choose][idl]}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className={`flex-col w-full lg:hidden flex gap-y-5`}>
          {option[0].option[choose].map((el, idx) => {
            return (
              <div key={idx} className="flex flex-col border-b pb-5">
                <span className="font-bold leading-[19px] text-[#5D5F79]">
                  {el}
                </span>

                {option.slice(1, 4).map(({ title, option }, idl) => {
                  return (
                    <div key={idl} className="mt-5 flex gap-x-[10px]">
                      <p className="text-sm w-1/2 leading-4 text-[#505F79]">
                        {title}
                      </p>

                      <p className="w-1/2 text-sm leading-5 text-[#141B27]">{option[choose][idx]}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TableCard;
