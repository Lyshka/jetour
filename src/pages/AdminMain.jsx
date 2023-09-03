import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { HeaderAdmin, ModalPhoto } from "../Components";

const AdminMain = () => {
  const navigate = useNavigate();

  const [titleVideo, setTitleVideo] = useState("");
  const [mainVideo, setMainVideo] = useState("");
  const [coord, setCoord] = useState("");
  const [contacts, setContacts] = useState("");
  const [mail, setMail] = useState("");

  const [setpht, setSetpht] = useState("");
  const [setpht2, setSetpht2] = useState("");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const getMain = async () => {
    const { data } = await axios.get("http://localhost:3000/get-admin-main");

    setTitleVideo(data[0].titleVideo);
    setMainVideo(data[0].mainVideo);
    setCoord(data[0].coord);
    setSetpht(data[0].mainPhoto);
    setSetpht2(data[0].mainPhotoMobile);
    setContacts(data[0].contacts);
    setMail(data[0].mail);
  };

  const handleSubmit = async () => {
    if (
      !titleVideo.length ||
      !mainVideo.length ||
      !coord.length ||
      !setpht.length ||
      !setpht2.length ||
      !contacts.length ||
      !mail.length
    ) {
      toast.error("Одно из полей не заполнено!");
    } else {
      const { data } = await axios.post(
        "http://localhost:3000/update-admin-main",
        {
          titleVideo,
          mainVideo,
          coord,
          mainPhoto: setpht,
          mainPhotoMobile: setpht2,
          id: 1,
          contacts,
          mail,
        }
      );

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
    getMain();
  }, []);

  return (
    <div>
      <HeaderAdmin />
      <Toaster />

      <div className="flex relative justify-center my-48 items-center h-[calc(100vh-94px)] w-full px-32">
        <div className="flex flex-col gap-y-5 w-full justify-center items-center">
          <div
            className="p-12 w-1/2 px-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            <div>
              <div className="flex flex-col gap-y-10">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-xs font-semibold text-gray-600 uppercase mt-10"
                  >
                    Заголовок видео
                  </label>
                  <textarea
                    id="title"
                    name="title"
                    defaultValue={titleVideo}
                    onChange={(e) => setTitleVideo(e.target.value)}
                    className="block w-full h-32 py-3 px-1 mt-2 
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
                    Ссылка видео
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    defaultValue={mainVideo}
                    onChange={(e) => setMainVideo(e.target.value)}
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
                    Координаты
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    defaultValue={coord}
                    onChange={(e) => setCoord(e.target.value)}
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
                    Контакты{" "}
                    <span className="text-[10px] font-normal">
                      (Писать через запятую)
                    </span>
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    defaultValue={contacts}
                    onChange={(e) => setContacts(e.target.value)}
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
                    Почта
                    <span className="text-[10px] font-normal">
                      (Писать через запятую)
                    </span>
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    defaultValue={mail}
                    onChange={(e) => setMail(e.target.value)}
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
                    Главное фото
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

                <div>
                  <label
                    htmlFor="img"
                    className="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    Главное фото (мобильное)
                  </label>
                  <div className="flex justify-center items-center h-14">
                    <button
                      onClick={() => setOpen2((prv) => !prv)}
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

        <div className="flex gap-y-10 w-60 absolute flex-col right-40 top-20">
          <div className="flex flex-col justify-center items-center gap-y-5">
            <img
              className="w-60 h-60 object-cover"
              src={`http://localhost:3000/${setpht}`}
              alt="kkk"
            />

            <h2>Главное фото</h2>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-5">
            <img
              className="w-60 h-60 object-cover"
              src={`http://localhost:3000/${setpht2}`}
              alt="kkk"
            />

            <h2>Главное фото (мобильное)</h2>
          </div>
        </div>
      </div>

      <ModalPhoto open={open} setOpen={setOpen} setSetpht={setSetpht} />
      <ModalPhoto open={open2} setOpen={setOpen2} setSetpht={setSetpht2} />
    </div>
  );
};
export default AdminMain;
