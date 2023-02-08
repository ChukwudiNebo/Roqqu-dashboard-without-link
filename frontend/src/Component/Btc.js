import React from 'react'
import btnImg from '../images/Group.png'
const Btc = () => {
  return (
    <>
      <div className='d-flex text-primary'>
        <div>
          <img src={btnImg} alt="" />
        </div>
        <div>
          <p>
            Bitcoin
            <span>BTC</span>
          </p>
        </div>
        <div>
          <p>0.00 BTC</p>
        </div>
        <div>
          <p>₦ .00</p>
        </div>
        <div>
          <p>-1.13%</p>
        </div>
      </div>
    </>
  );
}

export default Btc
