import React from "react";

import AboutusImg from "../../assets/aboutus2.svg";

const AboutUs = () => (
  <div className="" style={{ paddingTop: "180px" }}>
    <h1
      className="text-blue-800 text-4xl items-center"
      style={{
        textAlign: "center",
        fontSize: "3rem",
        fontWeight: "600",
      }}
    >
      ABOUT US.
    </h1>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "150px",
        maxWidth: "70%",
        margin: "0 auto",
      }}
    >
      <img
        className="animate__animated animate__slideInLeft"
        src={AboutusImg}
        alt=""
        style={{
          width: "480px",
          height: "500px",
          marginTop: "55px",
          marginLeft: "200px",
          paddingRight: "20px",
        }}
      />
      <div className="mb-2 animate__animated animate__slideInRight">
        <p
          className="leading-relaxed h-70 mt-40 text-blue-800 p-7 text-2xl rounded-sm shadow-sm"
          style={{
            textAlign: "justify",
          }}
        >
          <p className="mb-0">
            {" "}
            Due to our ability to operate digitally, our users are geared up to
            save towards goals easily using DIGIAJO.
          </p>
          <br />{" "}
          <p className="mb-2">
            DIGIAJO offers a customized digital peer-to-peer saving solution
            that captures;
          </p>
          <ul className=" ">
            <li className="mb-2">
              Immediate disbursement of funds amongst peers saving together.
            </li>
            <li className="mb-2">
              Zero charge Policy - Unlike savings where the bank has to remove
              some charges on your account. DIGIAJO peer-to-peer saving solution
              has no charges involved in it.
            </li>
            <li className="mb-2">
              Proper money management and effective user verification to avoid
              abscondment.
            </li>
          </ul>
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
