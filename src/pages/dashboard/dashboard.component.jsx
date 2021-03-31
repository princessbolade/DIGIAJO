import React from "react";
import SideBar from "../../components/dashboard-sidebar/sidebar";
import TopBar from "../../components/dashboard-topbar/topbar";
import DashboardBody from "../../components/dashboard-body/dashboardbody";

const Dashboard = () => (
  <div style={{ display: "flex" }}>
    <SideBar />
    <div>
      <TopBar />
      <DashboardBody />
    </div>
  </div>
);
export default Dashboard;
