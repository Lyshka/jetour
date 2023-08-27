import { useEffect } from "react";

const ModalModel = ({ open, img, title, desc, setOpen, refs }) => {
  useEffect(() => {
    const id = window.document.getElementsByTagName("html");

    if (open) {
      id[0].style.overflow = "hidden";
    } else {
      id[0].style.overflow = "scroll";
    }
  }, [open]);

  return (
    <>
      {open && (
        <section className="fixed w-full top-0 h-screen bg-black/50 z-40 flex justify-center items-center p-5 md:p-0">
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

          <div
            ref={refs}
            className="w-[1200px] h-[720px] flex justify-center items-center"
          >
            <div className="bg-white min-w-[410px] overflow-y-scroll lg:h-full h-screen w-full px-6 pt-5 pb-11 flex flex-col justify-start items-start">
              <img
                className="object-cover w-full h-full lg:max-w-[100%] lg:max-h-[100%] md:max-w-[100%] max-w-[370px] max-h-[290px] lg:hidden block md:max-h-[400px]"
                src={img}
                alt="slide1"
              />

              <div
                onClick={() => setOpen((prv) => !prv)}
                className="flex justify-center items-center gap-x-1 cursor-pointer lg:mt-0 mt-5"
              >
                <svg
                  className="w-[11px] h-[11px] md:w-6 md:h-4"
                  viewBox="0 0 40 40"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.501 19.9994C10.501 19.4022 10.729 18.8049 11.184 18.3494L25.517 4.01681C26.4287 3.10507 27.9069 3.10507 28.8183 4.01681C29.7297 4.92818 29.7297 6.40611 28.8183 7.31793L16.1359 19.9994L28.8174 32.6813C29.7288 33.5927 29.7288 35.0708 28.8174 35.9821C27.9061 36.8943 26.4283 36.8943 25.5165 35.9821L11.1835 21.6498C10.7286 21.1941 10.501 20.5968 10.501 19.9994Z"></path>
                </svg>
                <span className="leading-5 md:text-2xl">
                  Смотреть все особенности
                </span>
              </div>

              <h3 className="lg:text-[32px] text-2xl font-bold lg:leading-[42px] leading-8 mt-6 md:text-3xl">
                {title}
              </h3>

              <p className="mt-[18px] md:text-xl leading-6">{desc}</p>
            </div>

            <img
              className="object-cover w-full h-full lg:block hidden"
              src={img}
              alt="slide1"
            />
          </div>
        </section>
      )}
    </>
  );
};
export default ModalModel;
