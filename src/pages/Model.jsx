import { useParams } from "react-router-dom";

import { cars } from "../constants/cars";
import { HeaderModel, TopMenu } from "../Components";
import { useEffect } from "react";

const Model = () => {
  const params = useParams();

  const model = cars.find((el) => el.model === params.id);

  useEffect(() => {
    const head = window.document.getElementById("header");

    (head.style.display = "none");
  }, []);

  return (
    <section>
      <HeaderModel img={model.mainphoto} />

      <TopMenu photo={model.mainphoto} title={model.model}/>

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
