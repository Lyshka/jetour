import { useEffect, useState } from "react";
import { HeaderAdmin, ModalPhoto } from "..";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AboutAdmin = () => {
  const { about: aboutParams } = useParams();
  const navigate = useNavigate()

  const [setpht, setSetpht] = useState("");
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [about, setAbout] = useState({});

  const getAbout = async () => {
    const { data } = await axios.get("http://localhost:3000/get-about");

    const newAbout = data.find((el) => el.id == aboutParams);

    setAbout(newAbout);
    setTitle(newAbout.title);
    setSetpht(newAbout.img);
  };

  const handleSubmit = async () => {
    if (!setpht.length || !title.length) {
      toast.error("Одно из полей не заполнено!");
    } else {
      const { data } = await axios.post("http://localhost:3000/update-about", {
        title,
        img: setpht,
        id: aboutParams,
      });

      navigate("/admin-about-main")
      toast.success("Изменено")
    }

    console.log(title, setpht);
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
            <div className="flex flex-col gap-y-10">
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
                  defaultValue={about.title}
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

        <div className="absolute right-10">
          <img
            className="w-40 h-40"
            src={`http://localhost:3000/${setpht ? setpht : about.img}`}
            alt="kkk"
          />
        </div>
      </div>

      <ModalPhoto open={open} setOpen={setOpen} setSetpht={setSetpht} />
    </div>
  );
};
export default AboutAdmin;
