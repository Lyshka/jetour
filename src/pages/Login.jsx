import axios from "axios";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const auth = async (e) => {
    e.preventDefault();
    
    const { data } = await axios.post("http://localhost:3000/is-user", {
      login,
      password,
    });

    if (data.message) {
      window.localStorage.setItem("key", true);

      navigate("/admin");
    } else {
      toast.error("Одно из полей неверно")
    }
  };

  useEffect(() => {
    const head = window.document.getElementById("header");
    const foot = window.document.getElementById("footer");

    head.style.display = "flex";
    foot.style.display = "flex";
  }, []);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Toaster />
      <div
        className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
      >
        <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
          Вход
        </h2>

        <form className="mt-10">
          <label
            htmlFor="login"
            className="block text-xs font-semibold text-gray-600 uppercase"
          >
            Логин
          </label>
          <input
            id="login"
            type="text"
            name="login"
            onChange={(e) => setLogin(e.target.value)}
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
            Пароль
          </label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required
          />

          <button
            onClick={auth}
            className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
