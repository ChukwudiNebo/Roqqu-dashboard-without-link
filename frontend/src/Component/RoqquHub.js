import React from "react";
import hubImg from "../images/hub-icon.77bff39cc0b2e692562e4959471ad3b5.svg";
import '../css file/roqquHub.css'
const RoqquHub = () => {
  return (
    <>
      <button
        className="d-flex flew-row flex-nowrap align-items-center roqquhub"
        type="button"
      >
        <span className="img-box">
          <img src={hubImg} alt="" className="img" />
        </span>
        <span className="align-self-center dashboardText">Roqqu Hub</span>
      </button>
    </>
  );
};

export default RoqquHub;
