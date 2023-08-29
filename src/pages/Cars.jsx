import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { BottomMenuCar, HeaderModel, TableCar, TopMenuCar } from "../Components";
import { cars } from "../constants/cars";

const Cars = () => {
  const params = useParams();

  const newCars = cars.find((el) => el.title === params.car);

  useEffect(() => {
    const head = window.document.getElementById("header");

    head.style.display = "none";
  }, []);

  useEffect(() => {
    window.document.title = params.car;
  }, [params.car]);

  return (
    <div>
      <HeaderModel />

      <TopMenuCar title={newCars.title} info={newCars.complect} />

      <TableCar info={newCars.complect}/>

      <BottomMenuCar />
    </div>
  );
};
export default Cars;
