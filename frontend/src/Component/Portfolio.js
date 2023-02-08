import React from "react";
import NgnLogo from "../images/ngn-flag.bcc2075b9277973e90f5ad9a9643b1ab.svg";
import "../css file/portfolio.css";

const Portfolio = () => {
  return (
    <div className="d-flex align-items-center cryptBorder">
      <div className="d-flex align-items-start cryptoBorder">
        <div>
          <p
            className="crypto-portfolio"
            style={{ color: "#9DABBD", marginBottom: "0px" }}
          >
            Your Crypto Portfolio
          </p>
          <div className="crypto-money">
            <h3 style={{ color: "white", fontWeight: "bolder" }}>
              ₦5,269
              <span style={{ fontSize: "17px", fontWeight: "bolder" }}>
                .12
              </span>
            </h3>
          </div>
          <p style={{ color: "#9DABBD", width: "200px", fontSize: "13px" }}>
            This is the total value of all your cryptocurrencies at current
            prices
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center ngnlogoBorder">
          <div>
            <img src={NgnLogo} alt="" className="ngImg"/>
          </div>
          <div>
            <p
              style={{
                color: "white",
                fontSize: "14px",
                paddingTop:"2px",
                marginBottom: "0px",
                paddingLeft:"10px"
              }}
            >
              NGN
            </p>
          </div>
          <div>
            <i
              className="fa-solid fa-angle-down portfolio-angle-icon"
            ></i>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="d-flex align-items-center" style={{ marginLeft: "40px" }}>
        <div>
          <p
            className="crypto-portfolio"
            style={{ color: "#9DABBD", marginBottom: "0px" }}
          >
            Today's PNL
          </p>
          <div className="crypto-money">
            <h3 style={{ color: "#58BD7D", fontWeight: "bolder" }}>
              ₦33
              <span style={{ fontSize: "17px", fontWeight: "bolder" }}>
                .34
              </span>
              <sub style={{ fontSize: "15px", fontWeight: "bolder",paddingLeft:"30px" }}>
                -0.63%
              </sub>
            </h3>
          </div>
          <p style={{ color: "#9DABBD", width: "250px", fontSize: "13px" }}>
            This is the total growth value of your crypto portfolio in the last
            24hrs
          </p>
        </div>
        {/* <div className="d-flex align-items-center">
          <div>
            <a href="/">Add Money</a>
          </div>
          <div>
            <a href="/">Send Money</a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
