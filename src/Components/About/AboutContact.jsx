const AboutContact = () => {
  return (
    <section className="pt-[60px] lg:pb-[30px] lg:px-10 flex w-full items-center justify-center gap-x-[62px] lg:flex-row flex-col">
      <img
        className="lg:w-1/2 lg:h-[570px] h-[216px] w-full object-cover"
        src="https://jetour-atlantm.by/uploads/contacts/kv/be/KVBed5SpGZ.png"
        alt="about"
      />

      <div className="lg:w-1/2 w-full p-5 flex flex-col gap-y-5">
        <h1 className="font-bold lg:text-4xl text-[22px] lg:leading-[45px] leading-[29px]">
          Первый официальный дилер Jetour в Беларуси
        </h1>
        <p className="leading-[21px] text-[#4c4c4c]">
          ООО «Атлант-М Независимость» — первый официальный дилер Jetour в
          Беларуси
          <br />
          <br />
          Приобретая автомобиль в автоцентре Jetour «Атлант-М», Вы получите
          полный спектр услуг обслуживания: возможность записаться и пройти
          тест-драйв, купить авто в кредит или лизинг, оформить страховку на
          авто, воспользоваться программой trade-in, приобрести и установить
          дополнительное оборудование или аксессуары для различных моделей
          Jetour. <br />
          <br />
          Для Клиентов «Атлант-М» действует бонусная программа, которая
          позволяет накапливать бонусные баллы при каждом обращении в любой
          автоцентр «Атлант-М» в Беларуси, чтобы по своему усмотрению превращать
          их в скидки на товары и услуги в нашем автоцентре.
        </p>

        <div className="leading-[21px] text-[#4c4c4c] flex flex-col gap-y-5">
          <p>Отдел продаж автомобилей:</p>
          <div className="flex flex-col">
            <span>+375 44 732 00 00 </span>
            <span>+375 29 224 40 04</span>
          </div>
        </div>

        <div className="leading-[21px] text-[#4c4c4c] flex flex-col gap-y-5">
          <p>Продажа авто:</p>
          <div className="flex flex-col">
            <span>пн-пт: 09:00-20:00</span>
            <span>сб-вс: 10:00-18:00</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutContact;
