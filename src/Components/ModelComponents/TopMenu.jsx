const TopMenu = ({ photo, title }) => {
  return (
    <>
      <div className="relative">
        <img
          className="max-h-[550px] w-full object-cover relative"
          src={photo}
          alt="mainPhoto"
        />

        <h1 className="absolute z-10 px-5 top-10 flex flex-col text-white font-bold gap-y-6">
          <span className="leading-8 text-2xl">Jetour</span>
          <span className="text-7xl leading-10">{title}</span>
        </h1>
      </div>

      <nav className="shadowHeaderModel w-full h-[60px] top-0 sticky py-5 flex justify-center items-center bg-[#F3F4F5]">
        <div className="max-w-[1200px] flex justify-between items-center w-full">
          <a className="text-[#151B26] opacity-50 hover:text-[#a5a8ac] hover:opacity-100" href="#info">Общая инфо</a>
          <a className="text-[#151B26] opacity-50 hover:text-[#a5a8ac] hover:opacity-100" href="#drive">Запись на тест-драйв</a>
          <a className="text-[#151B26] opacity-50 hover:text-[#a5a8ac] hover:opacity-100" href="#garant">Гарантия</a>
          <a className="text-[#151B26] opacity-50 hover:text-[#a5a8ac] hover:opacity-100" href="#postavka">Ближайшая поставка</a>
          <a className="text-[#151B26] opacity-50 hover:text-[#a5a8ac] hover:opacity-100" href="#osob">Особенности</a>
          <a className="text-[#151B26] opacity-50 hover:text-[#a5a8ac] hover:opacity-100" href="#pht">Фото</a>
        </div>
      </nav>
    </>
  );
};
export default TopMenu;
