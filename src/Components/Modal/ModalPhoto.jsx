import axios from "axios";
import { useEffect, useState } from "react";
import { CardPhoto } from "../";

const ModalPhoto = ({ open, setOpen, setSetpht }) => {
  const [photos, setPhotos] = useState([]);

  const getPhoto = async () => {
    const { data } = await axios.get("http://localhost:3000/get-upload");

    setPhotos(data);
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <>
      {open && (
        <div className="fixed bg-black/60 top-0 w-full h-screen z-[60]">
          <div
            onClick={() => setOpen((prv) => !prv)}
            className="absolute top-5 right-5 rounded-full cursor-pointer border border-red-700 hover:border-red-800"
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.6066 21.3934C22.2161 21.0029 21.5829 21.0029 21.1924 21.3934C20.8019 21.7839 20.8019 22.4171 21.1924 22.8076L22.6066 21.3934ZM40.9914 42.6066C41.3819 42.9971 42.0151 42.9971 42.4056 42.6066C42.7961 42.2161 42.7961 41.5829 42.4056 41.1924L40.9914 42.6066ZM21.1924 41.1924C20.8019 41.5829 20.8019 42.2161 21.1924 42.6066C21.5829 42.9971 22.2161 42.9971 22.6066 42.6066L21.1924 41.1924ZM42.4056 22.8076C42.7961 22.4171 42.7961 21.7839 42.4056 21.3934C42.0151 21.0029 41.3819 21.0029 40.9914 21.3934L42.4056 22.8076ZM21.1924 22.8076L40.9914 42.6066L42.4056 41.1924L22.6066 21.3934L21.1924 22.8076ZM22.6066 42.6066L42.4056 22.8076L40.9914 21.3934L21.1924 41.1924L22.6066 42.6066Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="flex justify-center items-center w-full h-full px-10">
            <div className="grid grid-cols-6 overflow-y-scroll bg-white min-h-[800px] w-full gap-5 p-5">
              {photos.map((el) => {
                return (
                  <CardPhoto
                    key={el.id}
                    id={el.id}
                    src={el.src}
                    setSetpht={setSetpht}
                  />
                );
              })}
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="absolute bottom-10 max-w-[10%] py-2 bg-white flex justify-center items-center w-full rounded-full cursor-pointer">
              <button
                onClick={() => setOpen((prv) => !prv)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ModalPhoto;
