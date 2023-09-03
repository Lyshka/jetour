import axios from "axios";
import { useEffect, useState } from "react";

const Slider = () => {
  const [mainInfo, setMainInfo] = useState({});

  const getMainInfo = async () => {
    const { data } = await axios.get("http://localhost:3000/get-admin-main");

    setMainInfo(data[0]);
  };

  useEffect(() => {
    getMainInfo();
  }, []);


  return (
    <section className="w-full h-[calc(100vh-60px)] lg:mb-0 mb-5">
      <img
        className="w-full lg:block hidden h-full object-cover"
        src={`http://localhost:3000/${mainInfo.mainPhoto}`}
        alt="slide"
      />
      <img
        className="w-full lg:hidden block h-full object-cover"
        src={`http://localhost:3000/${mainInfo.mainPhotoMobile}`}
        alt="slide"
      />
    </section>
  );
};
export default Slider;
