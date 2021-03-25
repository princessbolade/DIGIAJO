import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
// import { useInView } from 'react-intersection-observer'
import { Link } from "react-router-dom";

export const Program = () => {
  const controls = useAnimation();
  // const [ref, inView] = useInView()

  // useEffect(() => {
  // 	if (inView) {
  // 		controls.start('visible')
  // 	}
  // }, [controls, inView])
  const styles = {
    body: {
      background: "#FAFBFF",
      width: "100%",
    },
    card: {
      background: "#FFFFFF",
      borderRadius: "10px",
    },
  };

  return (
    <div
      // ref={ref}
      // animate={controls}
      // initial="hidden"
      // variants={{
      // 	visible: { y: 0, opacity: 1 },
      // 	hidden: { y: 50, opacity: 0 },
      // }}
      // transition={{ delay: 1, duration: 0.7 }}
      style={styles.body}
      className=" mb-32"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-8 py-16 w-full">
        <div className="md:col-span-2">
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
          style={styles.card}
          className=" flex flex-col max-w-lg mx-auto justify-between p-4 md:p-6"
        >
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="23" cy="23" r="23" fill="#FFF3D1" fillOpacity="0.7" />
            <path
              d="M22.5245 12.4635C22.6741 12.0029 23.3259 12.0029 23.4755 12.4635L25.5819 18.9463C25.6488 19.1523 25.8408 19.2918 26.0574 19.2918H32.8738C33.3582 19.2918 33.5596 19.9116 33.1677 20.1963L27.6531 24.2029C27.4779 24.3302 27.4046 24.5559 27.4715 24.7619L29.5779 31.2447C29.7276 31.7053 29.2003 32.0884 28.8085 31.8037L23.2939 27.7971C23.1186 27.6698 22.8814 27.6698 22.7061 27.7971L17.1915 31.8037C16.7997 32.0884 16.2724 31.7053 16.4221 31.2447L18.5285 24.7619C18.5954 24.5559 18.5221 24.3302 18.3469 24.2029L12.8323 20.1963C12.4404 19.9116 12.6418 19.2918 13.1262 19.2918H19.9426C20.1592 19.2918 20.3512 19.1523 20.4181 18.9463L22.5245 12.4635Z"
              fill="#FBBF19"
              fillOpacity="0.7"
            />
          </svg>
          <div className="my-8">
            <p
              style={{
                color: "#12172D",
              }}
              className="text-base md:text-xl mb-2"
            >
              Rapid growing network{" "}
              <span aria-label="emoji" role="img">
                🏅
              </span>
            </p>
            <p
              style={{
                color: "#515151",
              }}
              className=" text-sm md:text-base font-light"
            >
              Secure lifelong support and opportunities through friendships that
              transition into beautiful connections.
            </p>
          </div>
        </div>
        <div
          style={styles.card}
          className=" flex flex-col mr-56 max-w-lg mx-auto justify-between p-4 md:p-6"
        >
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="23" cy="23" r="23" fill="#FFF3D1" fillOpacity="0.7" />
            <path
              d="M22.5245 12.4635C22.6741 12.0029 23.3259 12.0029 23.4755 12.4635L25.5819 18.9463C25.6488 19.1523 25.8408 19.2918 26.0574 19.2918H32.8738C33.3582 19.2918 33.5596 19.9116 33.1677 20.1963L27.6531 24.2029C27.4779 24.3302 27.4046 24.5559 27.4715 24.7619L29.5779 31.2447C29.7276 31.7053 29.2003 32.0884 28.8085 31.8037L23.2939 27.7971C23.1186 27.6698 22.8814 27.6698 22.7061 27.7971L17.1915 31.8037C16.7997 32.0884 16.2724 31.7053 16.4221 31.2447L18.5285 24.7619C18.5954 24.5559 18.5221 24.3302 18.3469 24.2029L12.8323 20.1963C12.4404 19.9116 12.6418 19.2918 13.1262 19.2918H19.9426C20.1592 19.2918 20.3512 19.1523 20.4181 18.9463L22.5245 12.4635Z"
              fill="#FBBF19"
              fillOpacity="0.7"
            />
          </svg>
          <div className="my-8">
            <p
              style={{
                color: "#12172D",
              }}
              className="text-base md:text-xl mb-2"
            >
              Rapid growing network{" "}
              <span aria-label="emoji" role="img">
                🏅
              </span>
            </p>
            <p
              style={{
                color: "#515151",
              }}
              className=" text-sm md:text-base font-light"
            >
              Secure lifelong support and opportunities through friendships that
              transition into professional connections.
            </p>
          </div>
        </div>
        <div
          style={styles.card}
          className=" flex flex-col max-w-lg mx-auto justify-between p-4 md:p-6"
        >
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="23" cy="23" r="23" fill="#FFF3D1" fillOpacity="0.7" />
            <path
              d="M22.5245 12.4635C22.6741 12.0029 23.3259 12.0029 23.4755 12.4635L25.5819 18.9463C25.6488 19.1523 25.8408 19.2918 26.0574 19.2918H32.8738C33.3582 19.2918 33.5596 19.9116 33.1677 20.1963L27.6531 24.2029C27.4779 24.3302 27.4046 24.5559 27.4715 24.7619L29.5779 31.2447C29.7276 31.7053 29.2003 32.0884 28.8085 31.8037L23.2939 27.7971C23.1186 27.6698 22.8814 27.6698 22.7061 27.7971L17.1915 31.8037C16.7997 32.0884 16.2724 31.7053 16.4221 31.2447L18.5285 24.7619C18.5954 24.5559 18.5221 24.3302 18.3469 24.2029L12.8323 20.1963C12.4404 19.9116 12.6418 19.2918 13.1262 19.2918H19.9426C20.1592 19.2918 20.3512 19.1523 20.4181 18.9463L22.5245 12.4635Z"
              fill="#FBBF19"
              fillOpacity="0.7"
            />
          </svg>
          <div className="my-8">
            <p
              style={{
                color: "#12172D",
              }}
              className="text-base md:text-xl mb-2"
            >
              Rapid growing network{" "}
              <span aria-label="emoji" role="img">
                🏅
              </span>
            </p>
            <p
              style={{
                color: "#515151",
              }}
              className=" text-sm md:text-base font-light"
            >
              Secure lifelong support and opportunities through friendships that
              transition into professional connections.
            </p>
          </div>
        </div>
        <div
          style={styles.card}
          className=" flex flex-col max-w-lg mx-auto justify-between p-4 md:p-6"
        >
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="23" cy="23" r="23" fill="#FFF3D1" fillOpacity="0.7" />
            <path
              d="M22.5245 12.4635C22.6741 12.0029 23.3259 12.0029 23.4755 12.4635L25.5819 18.9463C25.6488 19.1523 25.8408 19.2918 26.0574 19.2918H32.8738C33.3582 19.2918 33.5596 19.9116 33.1677 20.1963L27.6531 24.2029C27.4779 24.3302 27.4046 24.5559 27.4715 24.7619L29.5779 31.2447C29.7276 31.7053 29.2003 32.0884 28.8085 31.8037L23.2939 27.7971C23.1186 27.6698 22.8814 27.6698 22.7061 27.7971L17.1915 31.8037C16.7997 32.0884 16.2724 31.7053 16.4221 31.2447L18.5285 24.7619C18.5954 24.5559 18.5221 24.3302 18.3469 24.2029L12.8323 20.1963C12.4404 19.9116 12.6418 19.2918 13.1262 19.2918H19.9426C20.1592 19.2918 20.3512 19.1523 20.4181 18.9463L22.5245 12.4635Z"
              fill="#FBBF19"
              fillOpacity="0.7"
            />
          </svg>
          <div className="my-8">
            <p
              style={{
                color: "#12172D",
              }}
              className="text-base md:text-xl mb-2"
            >
              Rapid growing network{" "}
              <span aria-label="emoji" role="img">
                🏅
              </span>
            </p>
            <p
              style={{
                color: "#515151",
              }}
              className=" text-sm md:text-base font-light"
            >
              Secure lifelong support and opportunities through friendships that
              transition into professional connections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
