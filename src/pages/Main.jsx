import { useEffect } from "react";
import { About, Map, Nav, News, Slider, Video } from "../Components";

const Main = () => {
  useEffect(() => {
    window.document.title = "Jetour"
  }, [])

  return (
    <>
      <Slider />
      <Nav />
      <News />
      <Video />
      <About />
      <Map />
    </>
  );
};
export default Main;
