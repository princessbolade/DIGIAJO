import React, { useState } from "react";
import SignInImg from "../../assets/signIn.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  let [account, setAccount] = useState({
    password: "",
    email: "",
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    account[name] = value;
    setAccount(account);
  };

  let save = (e) => {
    e.preventDefault();
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: account.password,
        email: account.email,
      }),
    };

    fetch("https://d8d36b54107c.ngrok.io/user/login", request)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="lg:flex">
      <div
        className="lg:w-1/2 xl:max-w-screen-sm overflow-hidden"
        // style={{ paddingTop: "100px" }}
      >
        <div class="py-12 bg-gray-200 lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div class="cursor-pointer flex items-center"> </div>
          <div class="text-2xl uppercase text-blue-900 tracking-wide ml-2 font-semibold"></div>
        </div>
        <div className="mt-10 ml-20 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2 className="text-center text-4xl text-blue-900 font-semibold lg:text-left xl:text-5xl xl:text-bold">
            SIGN IN
          </h2>
          <div className="mt-12">
            <form onSubmit={save}>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Email Address
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-900"
                type=""
                name="email"
                onChange={handleChange}
                placeholder="person@gmail.com"
              />
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                  <div>
                    <a className="text-xs font-semibold text-blue-900">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className=" relative">
                  <input
                    className=" w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-900"
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder="Enter your password"
                    name="password"
                    onChange={handleChange}
                  />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    class="z-10 h-full cursor-pointer leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"
                  >
                    <i class="far fa-eye"></i>
                  </span>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="bg-blue-900 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-700"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="mt-12 text-sm font-display font-semibold text-gray-400 text-center">
              Don't have an account?
              <Link to="/signup">
                {" "}
                <a className="ml-2 cursor-pointer text-blue-900">
                  SIGN UP
                </a>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" lg:flex-items-center justify-center bg-white flex-1 "
        style={{
          backgroundImage: `url(${SignInImg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      ></div>
    </div>
  );
};

export default SignIn;
