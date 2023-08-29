import { Link } from "react-router-dom";
import { NewsCard } from "../Components";
import { news } from "../constants/news";
import { useEffect } from "react";

const NewsAll = () => {
  useEffect(() => {
    window.document.title = "Новости"
  }, [])

  return (
    <section className="py-[60px] flex justify-center items-center flex-col w-full">
      <div className="px-10 max-w-[1280px] flex flex-col justify-start items-start w-full">
        <h1 className="font-bold md:text-[40px] md:leading-[52px] self-start text-2xl leading-8">
          Новости
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 h-full w-full gap-x-[30px] gap-y-[60px] mt-[30px]">
          {news.map(({ img, title, id }) => (
            <Link key={id} to={`${id}`}>
              <NewsCard  img={img} title={title} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default NewsAll;
