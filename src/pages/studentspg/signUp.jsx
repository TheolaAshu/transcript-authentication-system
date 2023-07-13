import React, { useState, useContext } from "react";
import signupImg from "../assets/signup.jpg";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../assets/loading";
import { AuthContext } from "../../context/AuthContext";
import Alert from "../../components/alert";

const SignUp = () => {
  const { register, loading, error, setError } = useContext(AuthContext);

  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [matricule, setmatricule] = useState("");
  const [password, setpassword] = useState("");
  const navigation = useNavigate();

  if (loading) {
    return <LoadingPage />;
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    await register(
      matricule.toLowerCase() + "@gmail.com",
      password,
      matricule,
      name
    );
    if (!error) {
      navigation("/login");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full text-white">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={signupImg} alt="" />
        </div>

        <div className="bg-gray-800 flex flex-col justify-center relative">
          <button
            className="absolute right-10 top-5 py-2 px-4 bg-teal-500 rounded-full"
            onClick={() => navigate("/hero")}
          >
            Home
          </button>
          <form
            className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
            onSubmit={handleSignUp}
          >
            <h2 className="text-4xl dark:text-white font-bold text-center">
              Signup
            </h2>
            <div className="flex flex-col text-gray-400 py-2 ">
              <label>Name</label>
              <input
                value={name}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                onChange={(event) => {
                  setname(event.target.value);
                }}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2 ">
              <label>Matricule #</label>
              <input
                value={matricule}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                onChange={(event) => {
                  setmatricule(event.target.value);
                }}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2 ">
              <label>Password</label>
              <input
                value={password}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                onChange={(event) => {
                  setpassword(event.target.value);
                }}
              />
            </div>
            <div className="flex justify-betweentext-gray-400 py-2">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember me
              </p>
            </div>
            <button
              className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 text-white font-semibold"
              type="submit"
            >
              Signup
            </button>
            <div>
              <p
                className="my-5 py-2 text-gray-400 hover:cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Already have an account? Login
              </p>
            </div>
          </form>
        </div>
      </div>
      {error && <Alert message={error} onClose={() => setError("")} />}
    </>
  );
};

export default SignUp;
