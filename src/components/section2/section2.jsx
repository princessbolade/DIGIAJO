import React from "react";
import { Link } from "react-router-dom";

const Section2 = () => (
  <div style={{ margin: "0px", padding: "0px" }}>
    <div className="container grid grid-cols-3 gap-2 justify-center">
      <div
        className="md:col-span-1"
        style={{ marginLeft: "150px", marginTop: "50px" }}
      >
        <p
          className="md:text-3.5xl font-bold max-w-xl text-left mb-4 text-main"
          style={{ fontSize: "2.125rem" }}
        >
          DIGIAJO, Your one stop App to securing your future.
        </p>
        <p
          className="text-base md:text-1xl font-light leading-relaxed"
          style={{ fontSize: "1.375rem" }}
        >
          Specially made for people who are looking to save
          <br /> for specific wants and needs.
        </p>

        <Link to="/signup">
          <button
            className="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded"
            style={{ marginTop: "20px" }}
          >
            GET STARTED
          </button>
        </Link>
      </div>
      <div
        className="md:col-span-1"
        style={{ marginTop: "50px", marginLeft: "177px" }}
      >
        <p
          className="md:text-3.5xl font-bold max-w-xl text-left mb-4 text-main"
          style={{ fontSize: "2.125rem" }}
        >
          Easy and Flexible
        </p>
        <p
          className="text-base md:text-1xl font-light leading-relaxed"
          style={{ fontSize: "1.375rem" }}
        >
          DigiAjo is easy to use because we have a beautiful user friendly
          interface that allows you navigate the website with ease.
        </p>
      </div>
      <div
        className="md:col-span-1"
        style={{ marginTop: "50px", marginLeft: "180px" }}
      >
        <p
          className="md:text-3.5xl font-bold max-w-xl text-left mb-4 text-main"
          style={{ fontSize: "2.125rem" }}
        >
          Fast and Reliable
        </p>
        <p
          className="text-base md:text-1xl font-light leading-relaxed"
          style={{ fontSize: "1.375rem" }}
        >
          We disburse our customer's money when due, and we protect our customer
          data.
        </p>
      </div>
    </div>
  </div>
);

export default Section2;
