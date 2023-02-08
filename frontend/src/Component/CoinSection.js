import React from "react";
import CoinNameAndValue from "./CoinNameAndValue";
import YourAsset from "./YourAsset";
import "../css file/coinsection.css";
import OtherTrading from "./OtherTrading";
import Coinlist from "./Coinlist";

const CoinSection = () => {
  return (
    <>
      <div className="d-flex coinsection_001">
        <div className="coinsection">
          <div>
            <YourAsset />
          </div>
          <div>
            <CoinNameAndValue />
          </div>
          <div>
            <Coinlist />
          </div>
        </div>
        <div>
          <OtherTrading />
        </div>
      </div>
    </>
  );
};

export default CoinSection;
