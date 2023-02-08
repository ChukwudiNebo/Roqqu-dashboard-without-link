import React from "react";
import "../css file/dashboard.css";
import dashboardImg from "../images/dashboard-side-icon.af4b58c0c8501b2ee1ac5020b4b00bf8 (1).svg";
const Dashboard = () => {
  return (
    <>
        <button
          className="d-flex flew-row flex-nowrap align-items-center dashboard"
          type="button"
        >
          <sp className="img-box">
            <img
              src={dashboardImg}
              alt=""
              className="img"
              style={{ color: "white" }}
            />
          </sp>
          <span className="align-self-center dashboardText">Overview</span>
          <i className="fa-solid fa-angle-down dash-icon"></i>
        </button>
    </>
  );
};

export default Dashboard;
