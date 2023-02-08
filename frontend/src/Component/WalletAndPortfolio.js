import React from "react";
import portfolioImg from "../images/wallet-side-icon.abe01825650c93c55d877bc8f503c1e2.svg";
import '../css file/portfolio.css'

const WalletAndPortfolio = () => {
  return (
    <>
      <button
        type="button"
        className="d-flex flew-row flex-nowrap align-items-center portfolio"
      >
        <span className="img-box">
          <img src={portfolioImg} alt="" className="img" />
        </span>
        <span className="align-self-center dashboardText">
          Wallet/ Portfolio
        </span>
      </button>
    </>
  );
};

export default WalletAndPortfolio;
