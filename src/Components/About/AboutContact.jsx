const AboutContact = () => {
  return (
    <section className="pt-[60px] lg:pb-[30px] lg:px-10 flex w-full items-center justify-center gap-x-[62px] lg:flex-row flex-col">
      <img
        className="lg:w-1/2 lg:h-[570px] h-[216px] w-full object-cover"
        src="https://jetour-mogilev.by/wp-content/uploads/2023/09/KVBed5SpGZ.webp"
        alt="about"
      />

      <div className="lg:w-1/2 w-full p-5 flex flex-col gap-y-5">
        <h1 className="font-bold lg:text-4xl text-[22px] lg:leading-[45px] leading-[29px]">
          Первый официальный дилер Jetour в Беларуси
        </h1>
        <p className="leading-[21px] text-[#4c4c4c]">
          ООО «Кросс Моторс» — официальный дилер Jetour в Могилеве.
          <br />
          <br />
          Приобретая автомобиль в автоцентре «Кросс-Моторс», Вы получите полный
          спектр услуг обслуживания: возможность записаться и пройти тест-драйв,
          купить авто в кредит или лизинг, оформить страховку на авто,
          воспользоваться программой trade-in, приобрести и установить
          дополнительное оборудование или аксессуары для различных моделей
          Jetour.
          <br />
          <br />
          ООО «Кросс-Моторс» — это надежный партнер для тех, кто ценит качество, комфорт и безопасность своего автомобиля.
        </p>

        <div className="leading-[21px] text-[#4c4c4c] flex flex-col gap-y-5">
          <p>Отдел продаж:</p>
          <div className="flex flex-col">
            <span>пн-пт 09:00-18:00</span>
            <span>сб 10:00-17:00</span>
            <span>вс выходной</span>
          </div>
        </div>

        {/* <div className="leading-[21px] text-[#4c4c4c] flex flex-col gap-y-5">
          <p>Продажа авто:</p>
          <div className="flex flex-col">
            <span>пн-пт: 09:00-20:00</span>
            <span>сб-вс: 10:00-18:00</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default AboutContact;
