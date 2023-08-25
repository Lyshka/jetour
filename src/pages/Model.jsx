import { useParams } from "react-router-dom";

import { cars } from "../constants/cars";
import { HeaderModel } from "../Components";

const Model = () => {
  const params = useParams();

  const model = cars.find((el) => el.model === params.id);

  return (
    <section className="relative">
      <HeaderModel img={model.mainphoto} />
      <div className="relative">
        <div className="shadowHeaderModel w-full top-0 h-[60px] fixed py-5 flex justify-center items-center bg-[#F3F4F5]">
          <div className="max-w-[1200px] flex justify-between items-center w-full">
            <a href="#info">Общая инфо</a>
            <a href="#drive">Запись на тест-драйв</a>
            <a href="#garant">Гарантия</a>
            <a href="#postavka">Ближайшая поставка</a>
            <a href="#osob">Особенности</a>
            <a href="#pht">Фото</a>
          </div>
        </div>
      </div>

      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
      <div>dkasd;las</div>
    </section>
  );
};
export default Model;
