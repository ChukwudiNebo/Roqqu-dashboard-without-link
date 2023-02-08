import React from "react";
import settingIcon from "../images/settings-side-icon.eb7e1aa2d25e646c4482e53771e157a4.svg";
import '../css file/settings.css'
const Settings = () => {
  return (
    <>
      <button
        className="d-flex flew-row flex-nowrap align-items-center settings"
        type="button"
      >
        <span className="img-box">
          <img src={settingIcon} alt="" className="img" />
        </span>
        <span className="align-self-center dashboardText">Settings</span>
      </button>
    </>
  );
};

export default Settings;
