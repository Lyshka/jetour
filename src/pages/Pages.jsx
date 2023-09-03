import { useEffect, useState } from "react";
import { HeaderAdmin } from "../Components";
import axios from "axios";
import { Link } from "react-router-dom";

const Pages = () => {
  const [pages, setPages] = useState([]);

  const getPages = async () => {
    const { data } = await axios.get("http://localhost:3000/get-pages");

    setPages(data);

    console.log(data)
  };

  useEffect(() => {
    const head = window.document.getElementById("header");
    const foot = window.document.getElementById("footer");

    head.style.display = "none";
    foot.style.display = "none";
  }, []);

  useEffect(() => {
    getPages();
  }, []);

  return (
    <div>
      <HeaderAdmin />

      <div className="flex justify-center gap-x-10 items-center h-[calc(100vh-94px)] w-full px-32">

        <div className="flex flex-col gap-y-10 w-1/2">
          {pages.map((el, idx) => {
            return (
              <Link
                to={`${el.id}`}
                className="flex justify-between outline px-5 py-4 items-center gap-x-10 cursor-pointer hover:outline-4 hover:shadow-2xl"
                key={el.id}
              >
                <h2>{el.name}</h2>

                <span>{idx + 1}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Pages;
