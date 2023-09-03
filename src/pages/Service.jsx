import { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import axios from "axios";

const Service = () => {
  const [service, setService] = useState({});

  const getPages = async () => {
    const { data } = await axios.get("http://localhost:3000/get-pages");

    setService(data[2]);
  };

  useEffect(() => {
    window.document.title = "Сервис";
  }, []);

  useEffect(() => {
    getPages();
  }, []);

  return (
    <Layout
      title={service.title}
      desc={{
        __html: service.description,
      }}
    />
  );
};
export default Service;
