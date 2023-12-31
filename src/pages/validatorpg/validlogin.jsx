import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginnImg from "../assets/Mobile login-rafiki.png";
import { AuthContext } from "../../context/AuthContext";
import LoadingPage from "../assets/loading";
import Alert from "../../components/alert";

const Validlogin = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error, setError } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("================ Starting Logging ==================");
    event.preventDefault();
    await login(email, password, 'validator');

    if (!loading && !error) {
      navigation("/uploadpdf");
    }
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full text-white">
          <div className="hidden sm:block">
            <img
              className="w-full h-full object-cover"
              src={loginnImg}
              alt=""
            />
          </div>

          <div className="bg-gray-800 flex flex-col justify-center">
            <button
              className="absolute right-10 top-5 py-2 px-4 bg-teal-500 rounded-full"
              onClick={() => navigation("/hero")}
            >
              Home
            </button>
            <form
              className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
              onSubmit={handleLogin}
            >
              <h2 className="text-4xl dark:text-white font-bold text-center">
                Login
              </h2>
              <div className="flex flex-col text-gray-400 py-2 ">
                <label>E-mail</label>
                <input
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                <label>Password</label>
                <input
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 text-white font-semibold rounded-lg">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
      {error && <Alert message={error} onClose={() => setError("")} />}
    </>
  );
};

export default Validlogin;
