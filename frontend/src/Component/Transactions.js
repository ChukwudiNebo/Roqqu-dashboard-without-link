import React from "react";
import "../css file/transact.css";
import transactImg from "../images/transaction-side-icon.e044bd31f9a6a4d442aae75b568c9268.svg";
const Transactions = () => {
  return (
    <>
      <button
        className="d-flex flew-row flex-nowrap align-items-center transact"
        type="button"
      >
        <span className="img-box">
          <img src={transactImg} alt="" className="img" />
        </span>
        <span className="align-self-center dashboardText">Transactions</span>
      </button>
    </>
  );
};

export default Transactions;
