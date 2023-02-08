import React from "react";
import Header from "./Header";
// import nitials from "../images/initials (1).svg";
import "../css file/walletandporfoliocomponent.css";
import Portfolio from "./Portfolio";
import DepositNwithdrawalNTransact from "./DepositNwithdrawalNTransact";
import CoinSection from "./CoinSection";

const WalletAndPortfolioComponent = () => {
  return (
    <>
      <div className="walletBG" style={{ width: "100%", height: "140vh" }}>
        <div>
          <Header />
        </div>
        {/*  */}
        {/*  */}
        <div>
          <Portfolio />
        </div>
        {/*  */}
        {/*  */}
        <div>
          <DepositNwithdrawalNTransact />
        </div>
        <div>
          <CoinSection />
        </div>
      </div>
    </>
  );
};

export default WalletAndPortfolioComponent;
