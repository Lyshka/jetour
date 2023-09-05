import { useEffect, useState } from "react";
import { HeaderAdmin } from "../Components";
import axios from "axios";
import { Link } from "react-router-dom";

const NewsAdmin = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const { data } = await axios.get("http://localhost:3000/get-news");

    setNews(data);
  };

  useEffect(() => {
    const head = window.document.getElementById("header");
    const foot = window.document.getElementById("footer");

    head.style.display = "none";
    foot.style.display = "none";
  }, []);

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="relative">
      <HeaderAdmin />
      <div className="flex justify-center gap-x-10 items-center h-[calc(100vh-94px)] w-full px-32">
        <div className="flex flex-col gap-y-10 w-1/2">
          {news.map((el, idx) => {
            return (
              <Link
                to={`${el.id}`}
                className="flex justify-between outline px-5 py-4 items-center gap-x-10 cursor-pointer hover:outline-4 hover:shadow-2xl"
                key={el.id}
              >
                <div className="flex justify-center items-center gap-x-3">
                  <span>{idx + 1}.</span>

                  <h2>{el.title}</h2>
                </div>

                <img
                  className="w-14 h-14 hover:scale-[5]"
                  src={`http://localhost:3000/${el.img}`}
                  alt="kkk"
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="w-full shadow-2xl bg-white h-[100px] sticky bottom-0 flex justify-center items-center">
        <Link
          to={"/admin-news-add"}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Добавить новость
        </Link>
      </div>
    </div>
  );
};
export default NewsAdmin;
