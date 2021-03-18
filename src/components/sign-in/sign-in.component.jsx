import React from "react";
import SignInImg from "../../assets/signIn2.png";

const SignIn = () => (
  <div className="lg:flex">
    <div className="lg:w-1/2 xl:max-w-screen-sm overflow-hidden">
      <div class="py-12 bg-gray-200 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div class="cursor-pointer flex items-center"> </div>
        <div class="text-2xl uppercase text-blue-900 tracking-wide ml-2 font-semibold"></div>
      </div>
      <div className="mt-10 ml-20 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2 className="text-center text-4xl text-blue-900 font-semibold lg:text-left xl:text-5xl xl:text-bold">
          SIGN IN
        </h2>
        <div className="mt-12">
          <form>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Email Address
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-900"
              type=""
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
              <input
                className=" w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-900"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mt-10">
              <button className="bg-blue-900 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-700">
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-12 text-sm font-display font-semibold text-gray-400 text-center">
            Don't have an account?
            <a className="ml-2 cursor-pointer text-blue-900">SIGN UP</a>
            <a className="cursor-pointer text-blue-900"> SIGN UP </a>
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
        marginTop: "20px"
      }}
    >
      <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer"></div>
    </div>
  </div>
);

export default SignIn;
