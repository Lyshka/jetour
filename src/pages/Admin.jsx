import { useEffect, useState } from "react";
import { HeaderAdmin } from "../Components";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

const Admin = () => {
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const change = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:3000/update-user", {
      oldPassword,
      newPassword,
    });

    if (data.message) {
      toast.success("Ваш пароль успешно был сменен!");
      window.localStorage.clear();
      navigate("/login");
    } else {
      toast.error("Не верный пароль!");
    }
  };

  const exit = () => {
    window.localStorage.clear();
    navigate("/login");
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

  return (
    <div>
      <HeaderAdmin />

      <div className="flex justify-center items-center w-full h-[calc(100vh-94px)] flex-col">
        <Toaster />
        <div
          className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg"
        >
          <form>
            <label
              htmlFor="login"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              Старый пароль
            </label>
            <input
              onChange={(e) => setOldPassword(e.target.value)}
              id="login"
              type="text"
              name="login"
              className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />

            <label
              htmlFor="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Новый пароль
            </label>
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              id="password"
              type="text"
              name="password"
              className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />

            <button
              onClick={change}
              className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Сменить
            </button>
          </form>
        </div>
        <button
          onClick={exit}
          className="max-w-[200px] w-full py-3 mt-10 bg-red-700 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-red-800 hover:shadow-none"
        >
          Выйти
        </button>
      </div>
    </div>
  );
};
export default Admin;
