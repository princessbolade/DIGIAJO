import React from "react";

const DashboardBody = () => (
  <div className="" style={{ display: "flex", gap: "150px" }}>
    <div>
      <div className="bg-gray-200 w-full ml-10" style={{ height: "200px" }}>
        <h4 className="mt-20 ml-4 pb-4 font-bold pt-4">My referral link</h4>
        <div
          className="ml-4 pt-6 bg-gray-300"
          style={{
            marginTop: "2vh",
            width: "500px",
            height: "100px",
          }}
        >
          <div className="pl-4">
            <p>To promote on social media </p>
            <div>
              <form>
                <label>
                  <input type="text" />
                  <button className="bg-blue-800 text-gray-100 p-1 hover:bg-blue-700 ml-2 rounded">
                    copy
                  </button>
                  <button className="bg-blue-800 text-gray-100 p-1 ml-2 hover:bg-blue-700 rounded">
                    share
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 w-full ml-10" style={{ height: "250px" }}>
        <h4 className="mt-20 ml-4 pb-4 font-bold pt-4">Recent referrals</h4>
        <div className="pl-4 " style={{ height: "200px" }}>
          <div
            className="bg-gray-200 mt-2"
            style={{
              display: "flex",
              marginTop: "15px",
              width: "500px",
              justifyContent: "space-between",
              height: "40px",
            }}
          >
            <p clasName="pt-2">Save more money with DigiAjo</p>
            <button className="bg-blue-800 text-gray-100 ml-2 hover:bg-blue-700 rounded mb-2 mr-2 mt-2">
              {" "}
              Learn More{" "}
            </button>
          </div>
          <div className="bg-gray-300  pt-6 " style={{ width: "500px" }}>
            <p>
              {" "}
              You have not referred anyone yet.
              <br /> Share your link and begin to earn
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="bg-gray-200 w-full ml-10" style={{ height: "250px" }}>
        <h4 className="mt-20 ml-4 pb-4 font-bold pt-4">Account Balance</h4>
        <div
          className="ml-4 pt-2 bg-gray-300"
          style={{
            marginTop: "2vh",
            width: "500px",
            height: "100px",
          }}
        >
          <div className="pl-4">
            <p className="">Earned balance </p>
            <div>
              <h1 className="mt-4 ">N0.00</h1>
              <p className="mb-2" style={{ fontSize: "tiny" }}>
                Your savings balance
              </p>
            </div>
          </div>
          <div style={{ justifyContent: "space-between" }}>
            <button className="bg-blue-800 text-gray-100 ml-2 hover:bg-blue-700 rounded mb-2 mr-2 mt-2 p-1">
              Withdraw Earnings
            </button>
            <button className="bg-blue-800 text-gray-100 ml-2 hover:bg-blue-700 rounded mb-2 mr-2 mt-2 p-1">
              Payout History
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-full ml-10" style={{ height: "200px" }}>
        <h4 className="mt-20 ml-4 pb-4 font-bold pt-4">Account Stats</h4>
        <div
          className="ml-4 pt-6 bg-gray-300"
          style={{
            marginTop: "2vh",
            width: "500px",
            height: "100px",
          }}
        >
          <div className="pl-4">
            <p>Paid Out</p>
            <div>
              {/* <form>
                <label>
                  <input type="text" />
                  <button className="bg-blue-800 text-gray-100 p-1 hover:bg-blue-700 ml-2 rounded">
                    copy
                  </button>
                  {/* <button className="bg-blue-800 text-gray-100 p-1 ml-2 hover:bg-blue-700 rounded">
                    share
                  </button> */}
              {/* </label>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default DashboardBody;
