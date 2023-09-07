import { Link } from "react-router-dom";

const AboutModal = ({ about, to }) => {
  const { titlepage, descpage, img } = about;

  console.log(descpage)

  return (
    <section className="pb-[60px] w-full flex justify-center items-center">
      <div className="max-w-[1280px] w-full flex-col justify-center items-center flex gap-y-[25px] md:px-5">
        <h2 className="md:text-5xl text-[32px] text-center md:leading-[56px] leading-[42px] font-bold">
          {titlepage}
        </h2>

        <div className="flex md:flex-row flex-col justify-center items-center gap-x-10 md:justify-start md:items-start">
          <img
            className="object-cover md:max-w-[600px] max-w-[350px] md:max-h-[216px] max-h-[170px] w-full"
            src={img}
            alt="about"
          />

          <div className="justify-start items-start flex flex-col gap-y-5 h-full md:px-0 px-5 md:mt-0 mt-5">
            <p
              dangerouslySetInnerHTML={{ __html: descpage }}
              className="leading-[18px]"
            />

            <Link to={to}>
              <button className="md:max-w-[280px] py-[14px] px-[26px] h-11 w-full text-sm font-medium text-center uppercase transition-all duration-300 bg-[#68A598] hover:bg-[#628788] text-white">
                Комлектации
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutModal;
