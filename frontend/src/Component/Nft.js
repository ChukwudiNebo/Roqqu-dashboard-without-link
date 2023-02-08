import React from "react";
import nftImg from "../images/myNFT-icon-copy.c998810e57d1aacdebb5bc1d2a940646.svg";
import "../css file/nft.css"
const Nft = () => {
  return (
    <>
      <button
        className="d-flex flew-row flex-nowrap align-items-center nft"
        type="button"
      >
        <span className="img-box">
          <img src={nftImg} alt="" className="img" />
        </span>
        <span className="align-self-center dashboardText">NFTs</span>
      </button>
    </>
  );
};

export default Nft;
