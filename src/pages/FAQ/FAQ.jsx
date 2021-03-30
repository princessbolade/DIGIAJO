import React from "react";

const Faq = () => (
  <div style={{ paddingTop: "80px" }}>
    <section className="text-gray-700 mt-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-6xl text-3xl font-semibold text-center title-font text-blue-900 mb-4">
            Frequently Asked Question
          </h1>
          <p className="text-2xl text-gray-900 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lets Help your DIGIAJO exxperience better.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="w-full lg:w-1/2 px-4 py-2">
            <details className="mb-4">
              <summary className="font-light bg-blue-900 text-white rounded-md py-2 px-4">
                What is DIGIAJO?
              </summary>

              <span>
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
            <details className="mb-4">
              <summary className="font-light bg-blue-900 text-white rounded-md py-2 px-4">
                How can I join DIGIAJO?
              </summary>

              <span>
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
            <details className="mb-4">
              <summary className="font-light  bg-blue-900 text-white rounded-md py-2 px-4">
                How safe is my money?
              </summary>

              <span>
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
          </div>
          <div className="w-full lg:w-1/2 px-4 py-2">
            <details className="mb-4">
              <summary className="font-light  bg-blue-900 text-white rounded-md py-2 px-4">
                What Happens If I decide to leave the group before the peer
                savings is over?
              </summary>

              <span className="px-4 py-2">
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
            <details className="mb-4">
              <summary className="font-light  bg-blue-900 text-white rounded-md py-2 px-4">
                How many groups can I join at once?
              </summary>

              <span className="px-4 py-2">
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
            <details className="mb-4">
              <summary className="font-light  bg-blue-900 text-white rounded-md py-2 px-4">
                How can I communicate with the DIGIAJO team?
              </summary>

              <span className="px-4 py-2">
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Faq;
