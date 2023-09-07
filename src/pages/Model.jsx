import { useParams } from "react-router-dom";

import {
  HeaderModel,
  TopMenu,
  BottomMenu,
  SliderModelFirst,
  AboutModal,
  SliderModelSecond,
  Hang,
  DeliveryModal,
  Guarant,
  FormModal,
} from "../Components";
import { useEffect, useState } from "react";
import axios from "axios";

const Model = () => {
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
    window.document.title = params.id;
  }, [params.id]);

  useEffect(() => {
    getCars();
  }, []);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center w-full">
        <div className="animate-pulse">Загрузка</div>
      </div>
    );

  return (
    <section>
      <HeaderModel />

      <TopMenu photo={cars.mainphoto} title={cars.model} />

      <SliderModelFirst
        title={cars.title}
        interior={cars.interior}
        body={cars.body}
        info={cars.info}
      />

      <AboutModal about={cars.about} to={cars.title} />

      <SliderModelSecond slides={cars.slider} />

      <Hang hang={cars.hang} />

      <DeliveryModal delivery={cars.delivery} />

      <Guarant />

      <FormModal img={cars.photoForm} />

      <BottomMenu to={cars.title} />
    </section>
  );
};
export default Model;
