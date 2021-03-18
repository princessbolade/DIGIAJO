import React from "react";
import Dottedimg from "../../assets/dottedImg.svg";
import Typical from "react-typical";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div
    className="container items-center ml-28 "
    style={{
      zIndex: "0",
      height: "50%",
      width: "100vw",
      position: "relative",
    }}
  >
    <div
      className="text-2xl bg-blue-900 rounded-2xl"
      style={{
        height: "550px",
        width: "900px",
        top: "40px",
        left: "70px",
        position: "relative",
        zIndex: "1",
        overflow: "hidden",
      }}
    >
      <img src={Dottedimg} alt="" />
      <h1
        className="font-bold text-center text-white tracking-wider leading-snug mt-2 mb-6"
        style={{ fontSize: "4rem", fontWeight: "600" }}
      >
        DIGIAJO
        <Typical
          steps={[
            "THE FUTURE IS HERE",
            2000,
            "SAVE BETA",
            2000,
            "THE FUTURE IS NOW",
            2000,
          ]}
          loop={Infinity}
          wrapper="p"
        />
      </h1>
    </div>
    <div
      className="bg-gray-300 text-lg rounded-2xl"
      style={{
        position: "absolute",
        zIndex: "2",
        height: "520px",
        width: "650px",
        left: "800px",
        top: "180px",
      }}
    >
      <h4
        className="text-2xl text-center tracking-normal leading-normal text-blue-900"
        style={{
          marginTop: "150px",
        }}
      >
        DIGIAJO is a rotational savings club aimed at a group of individuals
        <br /> to save together in a form of peer-to-peer saving.
        <br /> Group members will contribute funds into a pool regularly,
        <br /> and take turns withdrawing funds from the pool.
      </h4>
      <Link to="/signup">
        <button
          className="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded"
          style={{ marginLeft: "300px", marginTop: "20px" }}
        >
          GET STARTED
        </button>
      </Link>

      <img
        className="text-blue-900 align-baseline mt-2"
        src={Dottedimg}
        alt=""
        style={{
          height: "200px",
          width: "200px",
          marginLeft: "450px",
          overflow: "hidden",
        }}
      />
    </div>
  </div>
);

export default LandingPage;
