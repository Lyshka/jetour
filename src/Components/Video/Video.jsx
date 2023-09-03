import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Video = () => {
  const [mainInfo, setMainInfo] = useState({});

  const getMainInfo = async () => {
    const { data } = await axios.get("http://localhost:3000/get-admin-main");

    setMainInfo(data[0]);
  };

  useEffect(() => {
    getMainInfo();
  }, []);

  return (
    <section className="py-[30px] w-full lg:h-screen h-[700px] relative">
      <video
        loop={true}
        className="w-full h-full object-cover absolute top-0"
        src={mainInfo.mainVideo}
        controls={false}
        muted
        autoPlay
      />

      <div className="relative flex flex-col gap-y-10 lg:gap-y-[60px] justify-center items-center lg:top-48 top-12">
        <h2 className="font-bold text-white lg:text-4xl text-[28px] lg:leading-[45px] leading-9 text-center uppercase">
          {mainInfo.titleVideo}
        </h2>
      </div>
    </section>
  );
};
export default Video;
