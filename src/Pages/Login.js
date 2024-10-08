import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaImdb } from "react-icons/fa";
import { Link } from "react-router-dom";
import { login } from "../Firebase/firebase";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { loginHandle } from "../Redux/AuthSlice";
import { useNavigate } from "react-router-dom";
import { getData } from "../Firebase/firebase";
import { setWatchList } from "../Redux/WatchListSlice";

function Login() {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);

    dispatch(loginHandle(user));

    if (user !== false && user !== undefined) {
      const firestoreData = await getData(user.email);
      dispatch(setWatchList(firestoreData));
      navigate("/");
    }
  };

  return (
    <div className="loginMain flex flex-col justify-center items-center h-screen">
      <Toaster />
      <div className="logindiv flex flex-col gap-y-4 justify-around rounded mx-auto shadow-md w-full sm:w-2/5 md:w-1/3 lg:w-1/4 h-full sm:h-3/5 md:h-1/2 lg:h-2/5">
        <div className="Logo flex items-center justify-center text-4xl text-white">
          <Link to={"/"}>
            <FaEye />
          </Link>
          <Link to={"/"}>EYE</Link>
        </div>

        <div className="flex flex-col items-center justify-center text-xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4 text-black"
          >
            <input
              className="input rounded p-1 border border-gray-300 h-7 sm:w-full md:w-80 lg:w-80"
              placeholder="e-mail"
              type="email"
              onChange={(event) => setMail(event.target.value)}
              value={email}
            />
            <input
              className="input rounded p-1 border border-gray-300 h-7 sm:w-full md:w-80 lg:w-80"
              placeholder="password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <button
              className="bg-red-700 text-white p-2 w-3/5 h-7 flex items-center justify-center"
              type="submit"
            >
              Login
            </button>
            <div className="flex flex-col justify-center mx-auto text-white">
              <div className="loginWith flex items-center justify-center space-x-4 text-xl mx-auto">
                <button>
                  <BiLogoGmail />
                </button>
                <button>
                  <FaFacebook />
                </button>
                <button>
                  <FaImdb />
                </button>
              </div>
            </div>
            <div className="text-white flex flex-col justify-center items-center">
              <p>Don't have an account?</p>
              <div className="flex">
                <Link to={"/sign"}>Sign Up</Link>
                <button className="bg-red-700 ml-3 w-16">
                  <Link to={"/"}>Home</Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
