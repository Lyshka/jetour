import { useState } from "react";

const FormModal = ({ img }) => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <section id="drive" className="lg:pb-[60px] pb-10 flex justify-center items-center h-full">
      <div className="max-w-[1280px] w-full h-full flex lg:flex-row flex-col justify-between items-center">
        <img
          className="object-cover px-5 lg:max-w-[500px] lg:min-h-[700px] lg:hidden block"
          src={img}
          alt="formImg"
        />

        <div className="max-w-[100%] lg:pr-[172px] py-[60px] lg:pl-[60px] lg:px-0 px-10 justify-center items-center lg:block flex flex-col">
          <h3 className="font-bold lg:text-[35px] text-[22px] uppercase lg:leading-[45px] leading-[29px]">
            ПРЕДВАРИТЕЛЬНАЯ ЗАПИСЬ НА ТЕСТ-ДРАЙВ
          </h3>

          <p className="mt-[10px] leading-[19px]">
            Оставляйте заявку и оцените все преимущества нового X90 PLUS первым!
          </p>

          <form className="flex flex-col gap-y-[30px] mt-[30px]">
            <input
              placeholder="Имя"
              className="outline-none p-[10px] h-10 border border-[#4C4C4C] w-full leading-[21px] font-light"
              type="text"
            />
            <input
              placeholder="Телефон"
              className="outline-none p-[10px] h-10 border border-[#4C4C4C] w-full leading-[21px] font-light"
              type="tel"
            />
            <textarea
              className="outline-none p-[10px] lg:h-[120px] h-[70px] border border-[#4C4C4C] w-full leading-[21px] resize-none font-light"
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

            <button className="lg:max-w-[280px] py-[14px] px-[26px] h-11 w-full text-sm font-medium text-center uppercase transition-all duration-300 bg-[#68A598] hover:bg-[#628788] text-white">
              ЗАПИСАТЬСЯ
            </button>
          </form>
        </div>

        <img
          className="object-cover max-w-[500px] min-h-[700px] lg:block hidden"
          src={img}
          alt="formImg"
        />
      </div>
    </section>
  );
};
export default FormModal;
