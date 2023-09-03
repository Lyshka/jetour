import { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import axios from "axios";

const TradeIn = () => {
  const [tradeIn, setTradeIn] = useState({});

  const getPages = async () => {
    const { data } = await axios.get("http://localhost:3000/get-pages");

    setTradeIn(data[3]);
  };

  useEffect(() => {
    window.document.title = "Trade-in";
  }, []);

  useEffect(() => {
    getPages();
  }, []);

  return (
    <Layout
      title={tradeIn.title}
      desc={{
        __html: tradeIn.description,
      }}
    />
  );
};
export default TradeIn;
