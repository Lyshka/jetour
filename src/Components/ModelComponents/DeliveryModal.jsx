import { useState } from "react";

import { DeliveryAboutMobile } from "../";

const DeliveryModal = ({ delivery }) => {
  const [isCar, setIsCar] = useState(delivery.carsdelivery[0]);

  return (
    <section id="postavka" className="py-[60px] gap-y-5 flex flex-col justify-center items-center">
      <h2 className="md:text-5xl text-[32px] font-bold md:leading-[56px] leading-[42px] text-center w-full">
        Ближайшая поставка
      </h2>

      <div className="max-w-[1280px] w-full flex md:flex-row flex-col justify-between items-center">
        {delivery.carsdelivery.map((deliver, idx) => (
          <DeliveryAboutMobile
            key={idx}
            setIsCar={setIsCar}
            isCar={isCar}
            delivery={delivery}
            deliver={deliver}
          />
        ))}
      </div>

      <div className="w-full max-w-[1280px] mt-[30px] h-[700px] justify-start items-start md:flex hidden">
        <div className="py-10 px-[30px] bg-[#F3F4F5] h-full  max-w-[400px] w-full">
          <h3 className="font-bold text-2xl leading-8">{isCar.title}</h3>

          <ul className="flex flex-col gap-y-[5px] mt-5">
            {isCar.complect.map(({complectInside}, idx) => (
              <li className="text-sm leading-5" key={idx}>
                -{complectInside}
              </li>
            ))}
          </ul>
        </div>

        <img
          className="object-cover h-full flex-1"
          src={delivery.img}
          alt="cel"
        />
      </div>
    </section>
  );
};
export default DeliveryModal;
