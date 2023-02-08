import React from "react";
import exchangeImg from "../images/exchange-icon.36f3750d7140e5294b617c352100caef.svg";
import '../css file/exchange.css'
const Exchange = () => {
  return (
    <>
      <button
        className="d-flex flew-row flex-nowrap align-items-center exchange"
        type="button"
      >
        <span className="img-box">
          <img src={exchangeImg} alt="" className="img" />
        </span>
        <span className="align-self-center dashboardText">Exchange</span>
      </button>
    </>
  );
};

export default Exchange;
