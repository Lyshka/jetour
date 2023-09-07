import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { NewsCard } from "../Components";

const NewsAll = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNews = async () => {
    const { data } = await axios.get(
      "https://jetour-mogilev.by/wp-json/wp/v2/news/?acf_format=standard"
    );

    setNews(data);
    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    window.document.title = "Новости"
  }, [])

  if (loading)
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <div className="animate-pulse">Загрузка</div>
    </div>
  );

  return (
    <section className="py-[60px] flex justify-center items-center flex-col w-full">
      <div className="px-10 max-w-[1280px] flex flex-col justify-start items-start w-full">
        <h1 className="font-bold md:text-[40px] md:leading-[52px] self-start text-2xl leading-8">
          Новости
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 h-full w-full gap-x-[30px] gap-y-[60px] mt-[30px]">
          {news.map(({ acf, id }) => (
            <Link key={id} to={`${id}`}>
              <NewsCard  img={acf.img} title={acf.title} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default NewsAll;
