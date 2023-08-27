const TopMenu = ({ photo, title }) => {
  return (
    <>
      <section className="relative w-full">
        <img
          className="max-h-[550px] min-h-[390px] w-full h-full object-cover relative"
          src={photo}
          alt="mainPhoto"
        />

        <h1 className="absolute z-20 px-5 lg:top-10 top-5 flex flex-col text-white font-bold md:gap-y-6 gap-y-1">
          <span className="md:leading-8 leading-6 md:text-2xl text-base">Jetour</span>
          <span className="md:text-7xl text-[28px] md:leading-10 leading-9">{title}</span>
        </h1>
      </section>

      <nav className="shadowHeaderModel w-full h-[60px] top-0 sticky py-5 flex justify-center items-center bg-[#F3F4F5] z-20">
        <div className="md:max-w-[1200px] flex md:justify-between justify-start md:gap-x-0 gap-x-10 items-center w-full md:overflow-x-hidden overflow-x-scroll px-5 lg:px-0 menu">
          <a className="text-[#151B26] opacity-50 hover:text-[#a5a8ac] hover:opacity-100 whitespace-nowrap" href="#info">Общая инфо</a>
          <a className="text-[#151B26] opacity-50 hover:text-[#a5a8ac] hover:opacity-100 whitespace-nowrap" href="#drive">Запись на тест-драйв</a>
          <a className="text-[#151B26] opacity-50 hover:text-[#a5a8ac] hover:opacity-100 whitespace-nowrap" href="#garant">Гарантия</a>
          <a className="text-[#151B26] opacity-50 hover:text-[#a5a8ac] hover:opacity-100 whitespace-nowrap" href="#postavka">Ближайшая поставка</a>
          <a className="text-[#151B26] opacity-50 hover:text-[#a5a8ac] hover:opacity-100 whitespace-nowrap" href="#osob">Особенности</a>
          <a className="text-[#151B26] opacity-50 hover:text-[#a5a8ac] hover:opacity-100 whitespace-nowrap" href="#pht">Фото</a>
        </div>
      </nav>
    </>
  );
};
export default TopMenu;
