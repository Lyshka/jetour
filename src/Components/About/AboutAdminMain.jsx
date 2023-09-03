import { useEffect, useState } from "react";
import { HeaderAdmin, ModalPhoto } from "..";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const AboutAdminMain = () => {
  const navigate = useNavigate();

  const [setpht, setSetpht] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const [about, setAbout] = useState([]);

  const getAbout = async () => {
    const { data } = await axios.get("http://localhost:3000/get-about");

    setAbout(data);
  };

  const getAboutMain = async () => {
    const { data } = await axios.get("http://localhost:3000/get-about-main");

    setSetpht(data[0].img);
    setTitle(data[0].title);
    setDescription(data[0].description);
    console.log(data)
  };

  const handleSubmit = async () => {
    console.log(1)
    if (!setpht.length || !title.length || !description.length) {
      toast.error("Одно из полей не заполнено!");
    } else {
      const { data } = await axios.post("http://localhost:3000/update-about-main", {
        title,
        img: setpht,
        id: 1,
        description
      });

      navigate("/admin-about-main");
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
    getAboutMain();
  }, []);

  return (
    <div>
      <HeaderAdmin />
      <Toaster />

      <div className="flex justify-center my-48 gap-x-10 items-center h-[calc(100vh-94px)] w-full px-32">
        <div className="flex flex-col gap-y-5 w-full justify-center items-center">
          <div>
            <img
              className="w-60 h-60"
              src={`http://localhost:3000/${setpht ? setpht : about.img}`}
              alt="kkk"
            />
          </div>

          <div
            className="p-12 w-full px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            <div className="mt-10">
              <div className="flex flex-col gap-y-10">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-xs font-semibold text-gray-600 uppercase mt-10"
                  >
                    Заголовок
                  </label>
                  <textarea
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                    defaultValue={title}
                    name="title"
                    className="block w-full h-32 py-3 px-1 mt-2 
                                  text-gray-800 appearance-none 
                                  border-2 border-gray-100
                                  focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-xs font-semibold text-gray-600 uppercase mt-10"
                  >
                    Описание
                  </label>
                  <textarea
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                    defaultValue={description}
                    name="title"
                    className="block w-full h-96 py-3 px-1 mt-2 
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
                Изменить
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-10 w-1/2">
          {about.map((el) => {
            return (
              <Link
                to={`${el.id}`}
                className="flex justify-between outline px-5 py-4 items-center gap-x-10 cursor-pointer hover:outline-4 hover:shadow-2xl"
                key={el.id}
              >
                <h2>{el.title}</h2>

                <img
                  className="w-14 h-14"
                  src={`http://localhost:3000/${el.img}`}
                  alt="kkk"
                />
              </Link>
            );
          })}
        </div>
      </div>

      <ModalPhoto open={open} setOpen={setOpen} setSetpht={setSetpht} />
    </div>
  );
};
export default AboutAdminMain;
