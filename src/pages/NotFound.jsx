const NotFound = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="max-w-[1200px] w-full px-10 flex justify-between items-center">
        <div className="flex justify-start items-start flex-col gap-y-10">
          <h1 className="font-semibold text-[55px] leading-[130%] uppercase text-[#68A59C]">404 ОШИБКА</h1>

          <p className="font-semibold text-[28px] leading-[130%] text-black">Страница не найдена</p>

          <button className="py-[14px] px-[26px] h-11 font-medium text-center uppercase transition-all duration-300 text-white bg-[#68A59C] flex justify-center items-center hover:bg-[#628788]">НА ГЛАВНУЮ</button>
        </div>

        <img className="object-cover w-[700px]" src={`http://localhost:3000/img/1693893703347-404-not-found.a8d7827d.png`} alt="404pht" />
      </div>
    </div>
  )
}
export default NotFound