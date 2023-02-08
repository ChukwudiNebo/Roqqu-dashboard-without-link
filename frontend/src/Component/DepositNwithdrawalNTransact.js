import React, { Fragment } from "react";
import depositWalletIcon from "../images/wallet-deposit-icon.8b613f6a2dc9d6136a590238618a848a.svg";
import withdrawalWalletIcon from "../images/wallet-withdraw-icon.d2524172cadc4315acf52045a5291e7b.svg";
import transferWalletIcon from "../images/wallet-transfer-icon.9ac453c8f42bf00ebc526a3ade2d6c11.svg";
import fundWalletIcon from "../images/currency-imgs.50e3bb1917614fcd10468579ca5085ea.svg";


// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';


import "../css file/dwt.css";

const DepositNwithdrawalNTransact = () => {

  // const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <div className="d-flex justify-content-between align-items-center dwt">
//     <div className="d-flex justify-content-around align-items-center deposite-slide">
//       <div>
//         <img src={depositWalletIcon} alt="" id="dwtIMG" />
//       </div>
//       <div>
//         <p style={{ color: "white", marginBottom: "0px", paddingLeft: "15px" }}>
//           Add Money
//         </p>
//       </div>
//     </div>
    
//     <div className="d-flex justify-content-center align-items-center withdrawal-slide">
//       <div>
//         <img src={withdrawalWalletIcon} alt="" id="dwtIMG" />
//       </div>
//       <div>
//         <p style={{ color: "white", marginBottom: "0px", paddingLeft: "15px" }}>
//           Send Money
//         </p>
//       </div>
//     </div>
    
//     <div className="d-flex justify-content-center align-items-center transfer-slide">
//       <div>
//         <img src={transferWalletIcon} alt="" id="dwtIMG" />
//       </div>
//       <div>
//         <p style={{ color: "white", marginBottom: "0px", paddingLeft: "15px" }}>
//           Transfer
//         </p>
//       </div>
//     </div>
    
//     <div className="d-flex justify-content-around align-items-center fund-slide">
//       <div>
//         <img src={fundWalletIcon} alt="" id="dwtIMGfund" />
//       </div>
//       <div>
//         <p style={{ color: "white", marginBottom: "0px", paddingLeft: "15px" }}>
//           Fund and transact with local currency
//         </p>
//       </div>
//     </div>
    
//   </div>
// ];


  return (
    // <AliceCarousel mouseTracking items={items} />
    <Fragment>
      <div className="d-flex justify-content-between align-items-center dwt">
        <div className="d-flex justify-content-around align-items-center deposite-slide">
          <div>
            <img src={depositWalletIcon} alt="" id="dwtIMG" />
          </div>
          <div>
            <p style={{ color: "white", marginBottom: "0px",paddingLeft:'15px' }}>Add Money</p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center withdrawal-slide">
          <div>
            <img src={withdrawalWalletIcon} alt="" id="dwtIMG" />
          </div>
          <div>
            <p style={{ color: "white", marginBottom: "0px",paddingLeft:'15px' }}>Send Money</p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center transfer-slide">
          <div>
            <img src={transferWalletIcon} alt="" id="dwtIMG" />
          </div>
          <div>
            <p style={{ color: "white", marginBottom: "0px",paddingLeft:'15px' }}>Transfer</p>
          </div>
        </div>
        <div className="d-flex justify-content-around align-items-center fund-slide">
          <div>
            <img src={fundWalletIcon} alt="" id="dwtIMGfund" />
          </div>
          <div>
            <p style={{ color: "white", marginBottom: "0px",paddingLeft:'15px' }}>
              Fund and transact with local currency
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DepositNwithdrawalNTransact;
