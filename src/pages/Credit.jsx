import { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import axios from "axios";

const Credit = () => {
  const [credit, setCredit] = useState({});

  const getPages = async () => {
    const { data } = await axios.get("http://localhost:3000/get-pages");

    setCredit(data[0]);
  };

  useEffect(() => {
    window.document.title = "Кредит и лизинг";
  }, []);

  useEffect(() => {
    getPages()
  }, [])

  return (
    <Layout
      title={credit.title}
      desc={{
        __html: credit.description,
      }}
    />
  );
};
export default Credit;
