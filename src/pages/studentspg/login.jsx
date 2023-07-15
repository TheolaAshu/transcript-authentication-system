import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import LoadingPage from "../assets/loading";
import loginImg from "../assets/Login-rafiki.png";
import Alert from "../../components/alert";

const Login = () => {
  const { login, loading, error, setError } = useContext(AuthContext);
  const [matricule, setMatricule] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handleLogin = async (event) => {
    console.log("================ Starting Logging ==================");
    event.preventDefault();
    await login(matricule.toLowerCase() + "@gmail.com", password);

    if (!loading && !error) {
      navigation("/transcripts");
    }
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full text-white">
          <div className="hidden sm:block">
            <img className="w-full h-full object-cover" src={loginImg} alt="" />
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
                <label htmlFor="matricule">Matricule #</label>
                <input
                  id="matricule"
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="text"
                  value={matricule}
                  onChange={(event) => {
                    setMatricule(event.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <button
                className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 text-white font-semibold rounded-lg"
                type="submit"
              >
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

export default Login;
