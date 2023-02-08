import React from "react";
import Dashboard from "./Dashboard";
import WalletAndPortfolio from "./WalletAndPortfolio";
import Transactions from "./Transactions";
import Exchange from "./Exchange";
import RoqquHub from "./RoqquHub";
// import Account from "./Account";
import Settings from "./Settings";
import HelpAndSupport from "./HelpAndSupport";
import Nft from "./Nft";
import roqquLogo from "../images/roqqu-white-logo.7ccb7284c0912651997f111ac71a917c.svg";
import "../css file/sidenavbar.css";
import ThemeComp from "./ThemeComp";
// import { Outlet } from "react-router-dom";

const SideNavbar = () => {
  return (
    <>
      <div id="sidenavbgcolor">
        <div className="d-flex flex-column justify-content-between">
          <div>
            <img src={roqquLogo} alt="" className="roqquLogo" />
          </div>
          <div
            className="justify-content-end align-self-end navtoggle"
            style={{ backgroundColor: "#535C64" }}
          >
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div id="overview">Dashboard</div>
          <div>
            <Dashboard />
          </div>
          {/* <DashboardList /> */}
          <WalletAndPortfolio />
          <Transactions />
          <Nft />
          <Exchange />
          <RoqquHub />
          <div id="overviewAccount">Account</div>
          {/* <Account /> */}
          <Settings />
          <HelpAndSupport />
          <ThemeComp />
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
