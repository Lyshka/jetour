const TopMenu = ({ photo, title }) => {
  return (
    <>
      <div className="relative">
        <img
          className="max-h-[550px] w-full object-cover relative"
          src={photo}
          alt="mainPhoto"
        />

        <h1 className="absolute z-10 px-5 top-10">
          <span>Jetour</span>
          <span>{title}</span>
        </h1>
      </div>

      <div className="shadowHeaderModel w-full h-[60px] top-0 sticky py-5 flex justify-center items-center bg-[#F3F4F5]">
        <div className="max-w-[1200px] flex justify-between items-center w-full">
          <a href="#info">Общая инфо</a>
          <a href="#drive">Запись на тест-драйв</a>
          <a href="#garant">Гарантия</a>
          <a href="#postavka">Ближайшая поставка</a>
          <a href="#osob">Особенности</a>
          <a href="#pht">Фото</a>
        </div>
      </div>
    </>
  );
};
export default TopMenu;
