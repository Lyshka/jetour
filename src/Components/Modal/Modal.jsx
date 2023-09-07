import { useState } from "react";

const Modal = ({ setOpen }) => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <div className="h-screen w-full fixed bg-black/70 top-0 z-[60] flex justify-center items-center lg:px-0 px-5">
      <div
        onClick={() => setOpen((prv) => !prv)}
        className="absolute top-5 right-5 flex justify-center items-center border rounded-[50%] transition-all duration-300 cursor-pointer hover:bg-[#68A598] border-[#68A598] lg:w-10 lg:h-10 w-7 h-7 md:w-12 md:h-12"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="lg:w-6 lg:h-6 w-6 h-6 fill-white"
        >
          <path d="M0 0h24v24H0V0z" fill="none"></path>
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
        </svg>
      </div>

      <div className="bg-white max-w-[674px] py-[25px] px-10 rounded-[10px]">
        <h5>Контактные данные</h5>

        <form className="flex flex-col gap-y-[30px] mt-[30px]">
          <input
            placeholder="Имя"
            className="outline-none p-[10px] h-10 border w-full leading-[21px] font-light rounded"
            type="text"
          />
          <input
            placeholder="Телефон"
            className="outline-none p-[10px] h-10 border w-full leading-[21px] font-light rounded"
            type="tel"
          />
          <textarea
            className="outline-none p-[10px] lg:h-[120px] h-[70px] border w-full leading-[21px] resize-none font-light rounded"
            autoComplete="false"
            placeholder="Комментарий"
          ></textarea>

          <div className="flex gap-x-4">
            <div
              onClick={() => setIsCheck((prv) => !prv)}
              className={`border lg:w-[24px] lg:h-[16px] w-10 h-4 flex justify-center items-center ${
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

            <p className="lg:text-base text-sm">
              Я принимаю условия{" "}
              <span className="cursor-pointer text-[#68A598]">
                Пользовательского соглашения
              </span>{" "}
              и выражаю согласие на{" "}
              <span className="cursor-pointer text-[#68A598]">обработку</span>{" "}
              персональных данных
            </p>
          </div>
          <div className="flex justify-end items-end">
            {isCheck ? (
              <button className="lg:max-w-[280px] py-[14px] px-[26px] h-11 w-full text-sm font-medium text-center uppercase transition-all duration-300 bg-[#68A598] hover:bg-[#628788] text-white">
                Отправить
              </button>
            ) : (
              <button disabled className="lg:max-w-[280px] py-[14px] px-[26px] h-11 w-full text-sm font-medium text-center uppercase transition-all duration-300 bg-[#68A598] hover:bg-[#628788] text-white disabled:bg-slate-600 disabled:text-gray-500">
                Отправить
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Modal;
