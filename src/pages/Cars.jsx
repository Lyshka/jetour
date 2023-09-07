import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BottomMenuCar, HeaderModel, TableCar, TopMenuCar } from "../Components";
import axios from "axios";

const Cars = () => {
  const params = useParams();

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCars = async () => {
    const { data } = await axios.get(
      "https://jetour-mogilev.by/wp-json/wp/v2/car/?acf_format=standard"
    );

    const model = data.find(({ acf }) => acf.model === params.id);
    setCars(model.acf);
    setLoading(false);
  };

  useEffect(() => {
    const head = window.document.getElementById("header");

    head.style.display = "none";
  }, []);

  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => {
    window.document.title = params.car;
  }, [params.car]);

  if (loading)
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <div className="animate-pulse">Загрузка</div>
    </div>
  );

  return (
    <div>
      <HeaderModel />

      <TopMenuCar title={cars.title} info={cars.complect} />

      <TableCar info={cars.complect}/>

      <BottomMenuCar />
    </div>
  );
};
export default Cars;
