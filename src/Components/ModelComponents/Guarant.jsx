const Guarant = () => {
  return (
    <section id="garant" className="pb-[60px] w-full flex justify-center items-center lg:px-10 px-5">
      <div className="max-w-[1280px] w-full bg-[#F3F4F5] p-[30px] flex justify-between items-center lg:flex-row flex-col">
        <div className="flex flex-col gap-y-5">
          <h3 className="lg:text-2xl text-xl leading-8 font-bold">Официальная гарантия: 5 лет или 200 тыс. пробега</h3>

          <p className="lg:leading-6 text-[#505F79] lg:text-base text-sm leading-5">
            Гарантийный срок на авто JETOUR составляет 5 лет или 200 000 км
            пробега, в зависимости от того, что наступит раньше. Гарантия
            распространяется на все оригинальные детали, узлы, агрегаты авто.
            Если в гарантийный период выявлены случаи коррозии, их устранение
            проводится за счет гарантийных обязательств.
          </p>
        </div>

        <img
          className="object-cover lg:mt-0 mt-5 lg:ml-5 lg:max-w-[40%] w-full"
          src={
            "https://jetour-mogilev.by/wp-content/uploads/2023/09/Dwi4LF1GhE-scaled.webp"
          }
          alt="guarant"
        />
      </div>
    </section>
  );
};
export default Guarant;
