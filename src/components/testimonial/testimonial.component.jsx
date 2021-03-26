import React from "react";

const Testimonial = () => (
  <>
    <div
      className="my-10 md:my-24 container mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden animate__animated animate__zoomIn"
      x-data="{ testimonialActive: 2 }"
      x-cloak
    >
      <div className="relative w-full py-2 md:py-24 bg-blue-900 md:w-1/2 flex flex-col item-center justify-center">
        <div className="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>

        <div className="relative text-2xl md:text-5xl py-2 px-6 md:py-6 md:px-1 md:w-64 md:mx-auto text-indigo-100 font-semibold leading-tight tracking-tight mb-0 z-20">
          <span className="md:block">What Our</span>
          <span className="md-block">Customers</span>
          <span className="block">Are Saying?</span>
        </div>

        <div className="absolute right-0 bottom-0 mr-4 mb-4 hidden md:block"></div>
      </div>

      <div className="bg-gray-100 md:w-1/2">
        <div className="flex flex-col h-full relative">
          <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-indigo-200 fill-current w-12 h-12 md:w-16 md:h-16"
              viewBox="0 0 24 24"
            >
              <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
            </svg>
          </div>
          <div className="swiper-container w-100 mt-10">
            <div className="swiper-wrapper">
              <div className="swiper-slide px-20 py-6 flex items-center justify-center">
                <div className="py-6">
                  <div className="flex jusify-center py-4 text-blue-900 text-center">
                    I am amazed at how easy and user friendly the website is,
                    DigiAjo has really helped me to save better and given me
                    financial boyauncy. <br /> I love the app, I'll definitely
                    recomment to my loved ones.
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
                    I am amazed at how easy and user friendly the website is,
                    DigiAjo has really helped me to save better and given me
                    financial boyauncy. <br /> I love the app, I'll definitely
                    recomment to my loved ones.
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
            <div className="swiper-button-prev bg-white w-16 h-16 text-xs rounded-full text-green-500 mx-10"></div>
            <div className="swiper-button-next bg-white w-16 h-16 text-xs rounded-full text-green-500 mx-10"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Testimonial;
