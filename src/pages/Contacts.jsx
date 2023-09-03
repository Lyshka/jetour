import { useEffect, useState } from "react";
import { AboutContact, Map } from "../Components";
import axios from "axios";

const Contacts = () => {
  const [mainInfo, setMainInfo] = useState([]);

  const getMainInfo = async () => {
    const { data } = await axios.get("http://localhost:3000/get-admin-main");

    const newArr = data[0].contacts.split(",").map((el) => el.trim());

    setMainInfo(newArr);
  };

  useEffect(() => {
    getMainInfo();
  }, []);

  useEffect(() => {
    window.document.title = "Контакты";
  }, []);

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
            {mainInfo.map((el, idx) => (
              <a
                key={idx}
                className="hover:underline transition-all duration-300 hover:text-[#729394] text-[#68a598]"
                href={`tel:${el}`}
              >
                {el}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contacts;
