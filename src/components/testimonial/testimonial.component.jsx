import React from "react";

const Testimonial = () => (
  <div className=" justify-center items-center h-screen md:-mx-4">
    {/* <div */}
    {/* className="w-full mx-20 bg-gray-100" */}
    {/* style={{"backgroundImage:`url{(http://bugspatrol.ancorathemes.com/wp-content/uploads/2016/07/main_bg.jpg)}`}}" */}
    {/* > */}
    <h2 className="text-center font-bold text-3xl text-blue-900 pt-10">
      DIGIAJO REPUBLICANS
    </h2>
    <div className="swiper-container w-100">
      {/* <!-------------------- Additional required wrapper --------> */}
      <div className="swiper-wrapper">
        {/* <---------------- Slides ------------------------------> */}
        <div className="swiper-slide px-20 py-6 flex items-center justify-center">
          <div className="py-6">
            <div className="flex jusify-center py-4 text-blue-900 text-center">
              I am amazed at how easy and user friendly the website is, DigiAjo
              has really helped me to save better and given me financial
              boyauncy. <br /> I love the app, I'll definitely recomment to my
              loved ones.
            </div>
            <div className="flex justify-center py-4">
              <img
                className="h-20 w-20 rounded-full"
                src="http://bugspatrol.ancorathemes.com/wp-content/uploads/2016/07/testimonials-3-75x75.jpg"
              />
            </div>
            <div className="text-sm flex justify-center text-blue-900">
              Tamilore Zaid, Yaba
            </div>
          </div>
        </div>
        <div className="swiper-slide px-20 flex items-center justify-center">
          <div className="py-6">
            <div className="flex jusify-center py-4 text-blue-900 text-center">
              I am amazed at how easy and user friendly the website is, DigiAjo
              has really helped me to save better and given me financial
              boyauncy. <br /> I love the app, I'll definitely recomment to my
              loved ones.
            </div>
            <div className="flex justify-center py-4">
              <img
                className="h-20 w-20 rounded-full"
                src="http://bugspatrol.ancorathemes.com/wp-content/uploads/2016/07/testimonials-3-75x75.jpg"
              />
            </div>
            <div className="text-sm flex justify-center text-blue-900">
              Chigozie Ofurum, Lekki
            </div>
          </div>
        </div>
      </div>
      {/* <!-- If we need navigation buttons --> */}
      <div className="swiper-button-prev bg-white w-16 h-16 text-xs rounded-full text-green-500 mx-10"></div>
      <div className="swiper-button-next bg-white w-16 h-16 text-xs rounded-full text-green-500 mx-10"></div>
      {/* <!-------------- If we need pagination -----------------------------------------> */}
      <div className="swiper-pagination"></div>
    </div>
  </div>
);

export default Testimonial;
