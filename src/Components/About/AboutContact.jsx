import axios from "axios";
import { useState, useEffect } from "react";

const AboutContact = () => {
  const [contacts, setContacts] = useState({});
  const [tel, setTel] = useState([]);

  const getPages = async () => {
    const { data } = await axios.get("http://localhost:3000/get-pages");

    setContacts(data[4]);
  };

  console.log(contacts)

  const getMainInfo = async () => {
    const { data } = await axios.get("http://localhost:3000/get-admin-main");

    const newArr = data[0].contacts.split(",").map((el) => el.trim());

    setTel(newArr);
  };

  useEffect(() => {
    getPages();
    getMainInfo();
  }, []);

  return (
    <section className="pt-[60px] lg:pb-[30px] lg:px-10 flex w-full items-center justify-center gap-x-[62px] lg:flex-row flex-col">
      <img
        className="lg:w-1/2 lg:h-[570px] h-[216px] w-full object-cover"
        src={`http://localhost:3000/${contacts.img}`}
        alt="about"
      />

      <div className="lg:w-1/2 w-full p-5 flex flex-col gap-y-5">
        <h1 className="font-bold lg:text-4xl text-[22px] lg:leading-[45px] leading-[29px]">
          {contacts.title}
        </h1>
        <p
          className="leading-[21px] text-[#4c4c4c]"
          dangerouslySetInnerHTML={{
            __html: contacts.description,
          }}
        />

        <div className="leading-[21px] text-[#4c4c4c] flex flex-col gap-y-5">
          <p>Отдел продаж автомобилей:</p>
          <div className="flex flex-col">
            {tel.map((el, idx) => (
              <span key={idx}>{el}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutContact;
