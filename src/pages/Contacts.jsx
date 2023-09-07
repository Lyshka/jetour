import { useEffect } from "react";
import { AboutContact, Map } from "../Components";

const Contacts = () => {
  useEffect(() => {
    window.document.title = "Контакты"
  }, [])

  return (
    <section>
      <AboutContact />

      <Map />

      <div className="lg:pb-[60px] pb-[30px] lg:pt-[30px] lg:px-10 px-5 flex flex-col lg:gap-y-5 gap-y-3 justify-start items-start">
        <h2 className="font-bold lg:text-[25px] lg:leading-8 text-xl leading-[26px]">
          Отдел продаж автомобилей:
        </h2>

        <div className="flex flex-col gap-y-[10px]">
          <h3 className="font-bold leading-[21px]">Телефоны</h3>
          <div className="flex flex-col">
            <a
              className="hover:underline transition-all duration-300 hover:text-[#729394] text-[#68a598]"
              href="tel:+375447320000"
            >
              +375 44 732 00 00
            </a>
            <a
              className="hover:underline transition-all duration-300 hover:text-[#729394] text-[#68a598]"
              href="tel:+375447320000"
            >
              +375 29 224 40 04
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contacts;
