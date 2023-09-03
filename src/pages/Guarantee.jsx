import { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import axios from "axios";

const Guarantee = () => {
  const [guarantee, setGuarantee] = useState({});

  const getPages = async () => {
    const { data } = await axios.get("http://localhost:3000/get-pages");

    setGuarantee(data[1]);
  };

  useEffect(() => {
    window.document.title = "Гарантия";
  }, []);

  useEffect(() => {
    getPages();
  }, []);

  return (
    <Layout
      title={guarantee.title}
      desc={{
        __html: guarantee.description,
      }}
    />
  );
};
export default Guarantee;
