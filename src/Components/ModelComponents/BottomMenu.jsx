import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

const BottomMenu = ({ to }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const id = window.document.getElementsByTagName("html");

    if (open) {
      id[0].style.overflow = "hidden";
    } else {
      id[0].style.overflow = "scroll";
    }
  }, [open]);

  return (
    <>
      <nav className="shadowBottomMenu bg-[#F3F4F5] lg:h-[84px] sticky bottom-0 flex lg:flex-row flex-col justify-center items-center gap-x-[10px] z-20 gap-y-[10px] h-full lg:py-0 py-5">
        <button
          onClick={() => setOpen((prv) => !prv)}
          className="max-w-[280px] py-[14px] px-[26px] h-11 w-full text-sm font-medium text-center uppercase transition-all duration-300 bg-[#68A598] hover:bg-[#628788] text-white"
        >
          Консультация
        </button>
        <Link
          to={to}
          className="max-w-[280px] py-[14px] px-[26px] h-11 w-full text-sm font-medium text-center uppercase transition-all duration-300 bg-[#68A598] hover:bg-[#628788] text-white"
        >
          Комлектации и цены
        </Link>
      </nav>

      {open && <Modal setOpen={setOpen} />}
    </>
  );
};
export default BottomMenu;
