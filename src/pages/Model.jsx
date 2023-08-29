import { useParams } from "react-router-dom";

import { cars } from "../constants/cars";
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
import { useEffect } from "react";

const Model = () => {
  const params = useParams();

  const model = cars.find((el) => el.model === params.id);

  useEffect(() => {
    const head = window.document.getElementById("header");

    head.style.display = "none";
  }, []);

  useEffect(() => {
    window.document.title = params.id;
  }, [params.id]);

  return (
    <section>
      <HeaderModel />

      <TopMenu photo={model.mainphoto} title={model.model} />

      <SliderModelFirst
        title={model.title}
        interior={model.interior}
        body={model.body}
        info={model.info}
      />

      <AboutModal about={model.about} to={model.title}/>

      <SliderModelSecond slides={model.slider} />

      <Hang hang={model.hang} />

      <DeliveryModal delivery={model.delivery} />

      <Guarant />

      <FormModal img={model.photoForm} />

      <BottomMenu to={model.title}/>
    </section>
  );
};
export default Model;
