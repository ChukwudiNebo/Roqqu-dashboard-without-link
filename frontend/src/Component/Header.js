import React from 'react'
import searchImg from "../images/search-icon.517444163e73d36e6abdb2abc9150e48.svg";
import '../css file/header.css'
const Header = () => {
  return (
    <>
      <div className="">
        <div className="d-flex align-items-center justify-content-between  wallet_001">
          <div className="d-flex align-items-baseline wallet">
            <span>
              <i
                className="fa-solid fa-angle-left wallet-angle-icon"
                style={{ color: "#85D1F0" }}
              ></i>
            </span>
            <h4>Wallet</h4>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center " id="search">
              <span>
                <img src={searchImg} alt="" className="searchImg" />
              </span>
              <input
                type="search"
                name="search"
                id="searchInput"
                placeholder="Search for assets"
              />
            </div>
            <div className="d-flex align-items-center justify-content-between profile">
              <span>
                <p>Chukwudi Nebo</p>
              </span>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Header
