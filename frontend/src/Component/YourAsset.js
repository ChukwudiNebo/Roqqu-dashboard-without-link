// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import React from "react";
import "../css file/yourasset.css";

const YourAsset = () => {
  return (
    <>
      <div className="asset">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h4 style={{ fontSize: "19px",marginLeft:"20px" }}>Your Assets</h4>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex" style={{ marginRight: "30px" }}>
              <div>
                <i style={{ fontSize: "13px" }}>Sort by:</i>
              </div>
              <div>
                <div>
                  Balance
                  {/* Alphabet */}
                </div>
              </div>
              <div>
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
            <div className="add-coin">
              <p
                style={{
                  marginBottom: "0px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                Add New Coin
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourAsset;
