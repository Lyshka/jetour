import { Toaster, toast } from "react-hot-toast";
import { HeaderAdmin } from "../Components";
import { useEffect, useState } from "react";
import axios from "axios";

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(null);
  const [deleteImg, setDeleteImg] = useState(null);

  const getPhoto = async () => {
    const { data } = await axios.get("http://localhost:3000/get-upload");

    setPhotos(data);
  };

  const handleChange = (e) => {
    setSelectedFile(e.target.files);
  };

  const handleUpload = async () => {
    if (selectedFile === null) {
      toast.error("Фотография не выбрана!");
      return;
    }

    const formData = new FormData();

    for (let i = 0; i < selectedFile.length; i++) {
      formData.append(`${selectedFile[i].name}`, selectedFile[i]);
    }

    const { data } = await axios.post("http://localhost:3000/upload", formData);

    setUploaded(data);
    window.location.reload();
  };

  const deleteUpload = async (id, title) => {
    const { data } = await axios.post("http://localhost:3000/delete-upload", {
      id,
      title,
    });

    setDeleteImg(data);

    toast.success("Фото удаленно");
  };

  useEffect(() => {
    if (!window.localStorage.getItem("key")) {
      navigate("/login");
    }

    const head = window.document.getElementById("header");
    const foot = window.document.getElementById("footer");

    head.style.display = "none";
    foot.style.display = "none";
  }, []);

  useEffect(() => {
    getPhoto();
  }, [uploaded, deleteImg]);

  return (
    <div className="relative">
      <HeaderAdmin />

      <div className="flex justify-start items-start w-full h-[calc(100vh-94px)] flex-col">
        <Toaster />

        <div className="grid grid-cols-9 w-full gap-5 p-5">
          {photos.map((el) => {
            return (
              <div key={el.id} className="relative">
                <img
                  className="object-cover w-[200px] h-[200px]"
                  src={`http://localhost:3000/${el.src}`}
                  alt="mainph"
                />

                <div
                  onClick={() => deleteUpload(el.id, el.src)}
                  className="absolute top-1 right-1 rounded-full cursor-pointer border border-red-700 hover:border-red-800"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.6066 21.3934C22.2161 21.0029 21.5829 21.0029 21.1924 21.3934C20.8019 21.7839 20.8019 22.4171 21.1924 22.8076L22.6066 21.3934ZM40.9914 42.6066C41.3819 42.9971 42.0151 42.9971 42.4056 42.6066C42.7961 42.2161 42.7961 41.5829 42.4056 41.1924L40.9914 42.6066ZM21.1924 41.1924C20.8019 41.5829 20.8019 42.2161 21.1924 42.6066C21.5829 42.9971 22.2161 42.9971 22.6066 42.6066L21.1924 41.1924ZM42.4056 22.8076C42.7961 22.4171 42.7961 21.7839 42.4056 21.3934C42.0151 21.0029 41.3819 21.0029 40.9914 21.3934L42.4056 22.8076ZM21.1924 22.8076L40.9914 42.6066L42.4056 41.1924L22.6066 21.3934L21.1924 22.8076ZM22.6066 42.6066L42.4056 22.8076L40.9914 21.3934L21.1924 41.1924L22.6066 42.6066Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white shadow-2xl flex justify-center items-center fixed bottom-0 w-full py-5 gap-x-5">
        <div>
          <input
            onChange={handleChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="img"
            type="file"
            accept="image/*"
            multiple
          />
        </div>

        <button
          onClick={handleUpload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative"
        >
          Добавить фото
        </button>
      </div>
    </div>
  );
};
export default Photo;
