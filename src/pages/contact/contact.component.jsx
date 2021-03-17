import React from "react";
import ContactBg from "../../assets/contactbg1.svg";

const Contact = () => (
  <div
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
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
      <div>
        <div>
          <form style={{ marginLeft: "350px", marginTop: "120px" }}>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Your Name
            </div>
            <input
              className="text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-900"
              type=""
              placeholder="John Doe"
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
              />
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Your Message
                  </div>
                </div>
                <input
                  className="  text-lg py-10 border-b border-gray-300 focus:outline-none focus:border-blue-900"
                  type=""
                  placeholder="who dey breeeeeet!!!!!!!"
                  style={{ width: "100%", maxWidth: "30%" }}
                />
              </div>
              <div className="mt-0">
                <button className="bg-blue-900 text-gray-100 p-6 mt-14  rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div>SOCIAL MEDIA SECTION</div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
