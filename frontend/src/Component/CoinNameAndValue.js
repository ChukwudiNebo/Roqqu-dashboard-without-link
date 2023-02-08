import React from "react";
import "../css file/coinnameandvalue.css";
const CoinNameAndValue = () => {
  return (
    <>
      <div className="d-flex  align-items-center justify-content-between coinNameAndValue">
        <div>
          <p style={{ marginBottom: "0px",fontSize:"15px"}}>Name</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p style={{ marginBottom: "0px", marginRight: "3.5rem",fontSize:"15px" }}>Balance</p>
          </div>
          <div>
            <p style={{ marginBottom: "0px", marginRight: "3.5rem",fontSize:"15px" }}>
              Fiat Value
            </p>
          </div>
          <div>
            <p style={{ marginBottom: "0px",fontSize:"15px"  }}>24h Change</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinNameAndValue;
