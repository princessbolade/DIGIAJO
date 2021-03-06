import React, { useState } from "react";
import SignupImg from "../../assets/signUp.png";

const SignUp = () => {
  let [account, setAccount] = useState({
    name: "",
    password: "",
    email: "",
    picture: "",
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    account[name] = value;
    setAccount(account);
    console.log(account);
  };

  let save = (e) => {
    e.preventDefault();
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: account.name,
        password: account.password,
        email: account.email,
      }),
    };

    fetch("https://d8d36b54107c.ngrok.io/user/signup", request)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12"
      style={{ paddingTop: "200px" }}
    >
      <div className='"mt-12 flex flex-col items-center'>
        <h1 className="text-2xl xl:text-3xl text-blue-900 font-extrabold">
          {" "}
          Sign Up for DIGIAJO
        </h1>
        <div className="w-full flex-1 mt-8">
          <div className="flex flex-col items-center">
            <button class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-blue-200 text-gray-900 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
              <div className="bg-white p-2 rounded-full">
                <i className="fab fa-google text-blue-900"></i>
              </div>
              <span className="ml-4">Sign up with Google</span>
            </button>

            <button class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-blue-200 text-gray-900 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
              <div className="bg-white p-2 rounded-full">
                <i className="fab fa-facebook text-blue-900"></i>
              </div>
              <span className="ml-4">Sign up with Facebook</span>
            </button>
          </div>
          <div className="my-12 border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Or sign up with Email
            </div>
          </div>
          <div className="mx-auto  max-w-xs">
            <form action="" onSubmit={save}>
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                placeholder="Full Name"
                required
                name="name"
                onChange={handleChange}
                type=""
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                required
                type=""
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password"
                placeholder="Password"
                required
                name="password"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <i className="fas fa-user"></i>
                <span className="ml-3">Sign Up</span>
              </button>
            </form>

            <p className="mt-6 text-xs text-gray-600 text-center">
              I agree to abide by DIGIAJO'S
              <a
                href="#"
                className="border-b ml-2 border-gray-500 border-dotted"
              >
                Terms of Service
              </a>
              and its
              <a
                href="#"
                className="border-b ml-2 border-gray-500 border-dotted"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
