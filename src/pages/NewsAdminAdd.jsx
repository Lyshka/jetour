import { useEffect, useState } from "react";
import { HeaderAdmin, ModalPhoto } from "../Components";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewsAdminAdd = () => {
  const navigate = useNavigate();

  const [setpht, setSetpht] = useState("");
  const [title, setTitle] = useState("");
  const [descnews, setDescNews] = useState("");
  const [fulldesc, setFulldesc] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    if (
      !setpht.length ||
      !title.length ||
      !descnews.length ||
      !fulldesc.length
    ) {
      toast.error("Одно из полей не заполнено!");
    } else {
      const { data } = await axios.post("http://localhost:3000/add-news", {
        title,
        img: setpht,
        descnews,
        fulldesc,
        date: Date.now(),
      });

      navigate("/admin-news");
    }
  };

  useEffect(() => {
    const head = window.document.getElementById("header");
    const foot = window.document.getElementById("footer");

    head.style.display = "none";
    foot.style.display = "none";
  }, []);

  return (
    <div className="relative">
      <HeaderAdmin />

      <Toaster />
      <div className="flex justify-center items-start h-[calc(100vh-94px)]">
        <div
          className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <div className="mt-10">
            <div className="flex flex-col gap-y-5">
              <div>
                <label
                  htmlFor="title"
                  className="block text-xs font-semibold text-gray-600 uppercase mt-10"
                >
                  Заголовок
                </label>
                <input
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  name="title"
                  className="block w-full py-3 px-1 mt-2 
                                  text-gray-800 appearance-none 
                                  border-2 border-gray-100
                                  focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="desc"
                  className="block text-xs font-semibold text-gray-600 uppercase mt-10"
                >
                  Краткое описание
                </label>
                <textarea
                  id="desc"
                  onChange={(e) => setDescNews(e.target.value)}
                  type="text"
                  name="desc"
                  className="block w-full h-[150px] py-3 px-1 mt-2 
                                  text-gray-800 appearance-none 
                                  border-2 border-gray-100
                                  focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="descfull"
                  className="block text-xs font-semibold text-gray-600 uppercase mt-10"
                >
                  Текст
                </label>
                <textarea
                  id="descfull"
                  onChange={(e) => setFulldesc(e.target.value)}
                  name="descfull"
                  className="block w-full h-[500px] py-3 px-1 mt-2 
                                  text-gray-800 appearance-none 
                                  border-2 border-gray-100
                                  focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="img"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Иконка
                </label>
                <div className="flex justify-center items-center h-14">
                  <button
                    onClick={() => setOpen((prv) => !prv)}
                    className="max-w-[250px] py-3 px-2 mt-10 bg-green-700 rounded-sm
                      font-medium text-white uppercase
                      focus:outline-none hover:bg-green-800 hover:shadow-none"
                  >
                    Выбрать фото
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                      font-medium text-white uppercase
                      focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Добавить
            </button>
          </div>
        </div>

        <div className="absolute right-10 top-1/2">
          {setpht && (
            <img
              className="w-40 h-40"
              src={`http://localhost:3000/${setpht}`}
              alt="kkk"
            />
          )}
        </div>
      </div>

      <ModalPhoto open={open} setOpen={setOpen} setSetpht={setSetpht} />
    </div>
  );
};
export default NewsAdminAdd;
