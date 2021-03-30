import React from "react";
import UserProfile from "../../assets/User_Avatar-removebg-preview (1).png";

const SideBar = () => (
  <div
    className="shadow-md"
    style={{
      height: "100vh",
      width: "20%",
      backgroundColor: "white",
      paddingTop: "175px",
      overflow: "hidden",
    }}
  >
    <img
      src={UserProfile}
      alt=""
      style={{
        height: "100px",
        justifyContent: "center",
        marginLeft: "40%",
        paddingTop: "10px",
      }}
    />
    <div
      style={{
        marginTop: "20px",
        textAlign: "left",
        marginLeft: "80px",
      }}
    >
      <div
        style={{
          padding: "50px",
        }}
      >
        <p className="text-gray-300 p-2 ml-4">ACCOUNT </p>
        <button className=" p-2">
          {" "}
          <i className="fa fa-bars pr-7" aria-hidden="true"></i>Dashboard
        </button>{" "}
        <br />
        <button>
          <p className=" p-2">
            {" "}
            <i className="fa fa-bar-chart pr-5" aria-hidden="true">
              {" "}
            </i>{" "}
            Daily Summary{" "}
          </p>
        </button>
        <button className=" p-2">
          {" "}
          <i className="fa fa-eercast pr-5" aria-hidden="true"></i>Conversions
        </button>{" "}
        <br />
        <button className=" p-2  ">
          {" "}
          <i className="fa fa-credit-card-alt pr-14" aria-hidden="true"></i>
          Withdrawal Request
        </button>{" "}
        <br />
        <button className=" p-2">
          {" "}
          <i className="fa fa-history pr-6" aria-hidden="true"></i>Payout
          History
        </button>{" "}
        <br />
      </div>
    </div>
    <div style={{ textAlign: "left", marginLeft: "130px", marginTop: "30px" }}>
      <p className="p-3 text-gray-400 ml-4">SETTINGS</p>
      <button className="p-2">
        {" "}
        <i className="fa fa-file-archive-o pr-3" aria-hidden="true"></i>Bank
        Account Details
      </button>{" "}
      <br />
      <button className="p-2">
        <i className="fa fa-unlock-alt pr-3" aria-hidden="true"></i>Change
        Password
      </button>{" "}
      <br />
    </div>
  </div>
);

export default SideBar;
