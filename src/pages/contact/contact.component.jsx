import React from "react";
// import CustomButton from "../../components/CusomButton/custom-button";
import ContactBg from "../../assets/contactbg1.svg";
import ContactIcon from "../../assets/contactus2digi.jpg";
import { Link } from "react-router-dom";

const Contact = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "170px",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${ContactBg})`,
        backgroundRepeat: "no-repeat",
        height: "700px",
        margin: "30px 50px 0",
        backgroundSize: "cover",
        width: "90%",
        border: "2px solid #0549b6",
      }}
    >
      <h1
        className="text-blue-800 text-4xl mt-6"
        style={{ textAlign: "center" }}
      >
        Let's talk
      </h1>
      <div style={{ display: "flex" }}>
        <div>
          <form style={{ marginLeft: "350px", marginTop: "120px" }}>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Your Name
            </div>
            <input
              className="text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-900"
              type="text"
              placeholder="John Doe"
              style={{ maxWidth: "100%", width: "100%" }}
            />
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Your Email
                </div>
              </div>
              <input
                className="  text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-900"
                type="email"
                placeholder="person@gmail.com"
                style={{ maxWidth: "100%", width: "100%" }}
              />
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Your Message
                  </div>
                </div>
                <input
                  className="  text-lg py-10 border-b border-gray-300 focus:outline-none focus:border-blue-900"
                  type="text"
                  placeholder="your message..."
                  style={{
                    maxWidth: "100%",
                  }}
                />
              </div>
              {/* <CustomButton /> */}
              <div className="mt-0">
                <button className="bg-blue-900 text-gray-100 p-4 mt-12  rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div style={{ marginLeft: "500px", marginTop: "100px" }}>
          <div>
            <img src={ContactIcon} alt="" style={{ width: "500px" }} />
          </div>
          <div style={{ marginTop: "70px" }}>
            <p>
              <i
                className="fa fa-map-marker mr-2"
                style={{ color: "#0549b6" }}
              ></i>
              39 Ikorodu Road, Jibowu Yaba Lagos.
            </p>
            <p style={{ marginTop: "20px" }}>
              {" "}
              <i
                className="fa fa-mobile-phone mr-2"
                style={{ color: "#0549b6" }}
              ></i>{" "}
              +234709988888
            </p>
            <p>
              <i
                className="fa fa-envelope mr-2"
                style={{ color: "#0549b6" }}
              ></i>
              contactus@gmail.com
            </p>
          </div>
          <div
            style={{
              marginTop: "50px",
              fontSize: "50px",
              color: "#0549b6",
            }}
          >
            <Link to="#">
              <i className="fa fa-facebook-f "></i>
            </Link>
            <Link to="#">
              <i className="fa fa-twitter ml-4"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-instagram ml-4"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
