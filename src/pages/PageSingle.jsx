import { useEffect, useState } from "react";
import { HeaderAdmin, ModalPhoto } from "../Components";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PageSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [setpht, setSetpht] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const getAbout = async () => {
    const { data } = await axios.get("http://localhost:3000/get-pages");

    const newPageSingle = data.find((el) => el.id == id);

    setName(newPageSingle.name);
    setTitle(newPageSingle.title);
    setDescription(newPageSingle.description);
    setSetpht(newPageSingle.img);
  };

  const handleSubmit = async () => {
    if (
      !name.length ||
      !title.length ||
      !description.length
    ) {
      toast.error("Одно из полей не заполнено!");
    } else {
      const { data } = await axios.post("http://localhost:3000/update-pages", {
        name,
        title,
        description,
        img: setpht,
        id,
      });

      navigate("/pages");
      toast.success("Изменено");
    }
  };

  useEffect(() => {
    const head = window.document.getElementById("header");
    const foot = window.document.getElementById("footer");

    head.style.display = "none";
    foot.style.display = "none";
  }, []);

  useEffect(() => {
    getAbout();
  }, []);

  console.log(setpht)

  return (
    <div className="relative">
      <HeaderAdmin />

      <Toaster />
      <div className="flex justify-center items-center h-[calc(100vh-94px)]">
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
                  Название
                </label>
                <input
                  id="title"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  defaultValue={name}
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
                  htmlFor="title"
                  className="block text-xs font-semibold text-gray-600 uppercase mt-10"
                >
                  Заголовок
                </label>
                <input
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  defaultValue={title}
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
                  htmlFor="title"
                  className="block text-xs font-semibold text-gray-600 uppercase mt-10"
                >
                  Текст
                </label>
                <textarea
                  id="title"
                  onChange={(e) => setDescription(e.target.value)}
                  defaultValue={description}
                  name="title"
                  className="block w-full h-[300px] py-3 px-1 mt-2 
                                  text-gray-800 appearance-none 
                                  border-2 border-gray-100
                                  focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />
              </div>

              {setpht !== "null" && (
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
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                      font-medium text-white uppercase
                      focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Изменить
            </button>
          </div>
        </div>

        {setpht !== "null" && (
          <div className="absolute right-10">
            <img
              className="w-40 h-40"
              src={`http://localhost:3000/${setpht}`}
              alt="kkk"
            />
          </div>
        )}
      </div>

      <ModalPhoto open={open} setOpen={setOpen} setSetpht={setSetpht} />
    </div>
  );
};
export default PageSingle;
