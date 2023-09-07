import { Link } from "react-router-dom";

const Video = () => {
  return (
    <section className="py-[30px] w-full lg:h-screen h-[700px] relative">
      <video
        loop={true}
        className="w-full h-full object-cover absolute top-0"
        src="https://jetour-atlantm.by/uploads/dealers-web-main/qi/8v/No subtitle(2).mp4"
        controls={false}
        muted
        autoPlay
      />

      <div className="relative flex flex-col gap-y-10 lg:gap-y-[60px] justify-center items-center lg:top-48 top-12">
        <h2 className="font-bold text-white lg:text-4xl text-[28px] lg:leading-[45px] leading-9 text-center uppercase">
          JETOUR - СОЗДАН ДЛЯ ПУТЕШЕСТВИЙ!
        </h2>

        <Link
          to={"/"}
          className="text-white px-[26px] max-w-[200px] py-[14px] uppercase transition-colors duration-300 bg-[#68a598] hover:bg-[#628788] lg:text-base text-sm"
        >
          УЗНАТЬ БОЛЬШЕ
        </Link>
      </div>
    </section>
  );
};
export default Video;
