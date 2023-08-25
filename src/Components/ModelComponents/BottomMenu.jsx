const BottomMenu = () => {
  return (
    <nav className="shadowBottomMenu bg-[#F3F4F5] h-[84px] sticky bottom-0 flex justify-center items-center gap-x-[10px]">
        <button className="max-w-[280px] py-[14px] px-[26px] h-11 w-full text-sm font-medium text-center uppercase transition-all duration-300 bg-[#68A598] hover:bg-[#628788] text-white">Консультация</button>
        <button className="max-w-[280px] py-[14px] px-[26px] h-11 w-full text-sm font-medium text-center uppercase transition-all duration-300 bg-[#68A598] hover:bg-[#628788] text-white">Комлектации и цены</button>
    </nav>
  )
}
export default BottomMenu