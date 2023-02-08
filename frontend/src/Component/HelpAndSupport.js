import React from "react";
import helpIcon from "../images/help-side-icon.b69e35053d6a435a2f4282869c1ce8d0.svg";
import "../css file/support.css"
const HelpAndSupport = () => {
  return (
    <>
      <button
        className="d-flex flew-row flex-nowrap align-items-center support"
        type="button"
      >
        <span className="img-box">
          <img src={helpIcon} alt="" className="img" />
        </span>
        <span className="align-self-center dashboardText">HelpAndSupport</span>
      </button>
    </>
  );
};

export default HelpAndSupport;
