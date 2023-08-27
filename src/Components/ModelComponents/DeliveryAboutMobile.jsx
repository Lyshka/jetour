import { useState } from "react";

const DeliveryAboutMobile = ({ isCar, delivery, deliver, setIsCar }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-72 flex flex-col justify-center items-center gap-y-5 cursor-pointer"
      onClick={() => {
        setIsCar(deliver);
        setOpen((prv) => !prv);
      }}
    >
      <img
        className={`object-cover w-full ${
          deliver.title === isCar.title ? "opacity-100" : "opacity-50"
        }`}
        src={deliver.img}
        alt="car"
      />

      <h4 className="font-bold leading-6 text-center">{deliver.title}</h4>
      {open && (
        <div className="w-full max-w-[1280px] md:mt-[30px] md:h-[700px] justify-start items-start md:hidden flex md:flex-row flex-col-reverse">
          <div className="py-10 px-[30px] bg-[#F3F4F5] h-full  max-w-[400px] w-full">
            <h3 className="font-bold text-2xl leading-8">{isCar.title}</h3>

            <ul className="flex flex-col gap-y-[5px] mt-5">
              {isCar.complect.map((el, idx) => (
                <li className="text-sm leading-5" key={idx}>
                  -{el}
                </li>
              ))}
            </ul>
          </div>

          <img
            className="object-cover md:h-full max-h-[300px] w-full flex-1"
            src={delivery.img}
            alt="cel"
          />
        </div>
      )}
    </div>
  );
};
export default DeliveryAboutMobile;
