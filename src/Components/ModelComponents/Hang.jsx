import Option from "./Option";

const Hang = ({ hang }) => {
  return (
    <section id="osob" className="py-[60px] bg-[#F3F4F5] w-full flex justify-center items-center flex-col relative">
      <h2 className="w-full text-center lg:text-5xl text-[32px] lg:leading-[56px] leading-[42px] font-bold">
        Особенности
      </h2>

      <div className="mt-10 flex flex-col lg:gap-y-[60px] gap-y-[50px]">
        {hang.map(({ title, desc, img, options }, idx) => (
          <Option
            key={idx}
            idx={idx}
            img={img}
            title={title}
            desc={desc}
            options={options}
          />
        ))}
      </div>
    </section>
  );
};
export default Hang;
