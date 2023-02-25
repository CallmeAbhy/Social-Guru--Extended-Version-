import React from 'react'

const Sms = () => {
  return (
<div>
    <div className="sms">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://cdn-icons-png.flaticon.com/512/6073/6073874.png"
          alt=""
        />
        <p className="messageText">Hello How Are You ?</p>
      </div>
      <div className="messageBottom">1 hours</div>
    </div>

    <div className="sms own">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://cdn-icons-png.flaticon.com/512/6073/6073874.png"
          alt=""
        />
        <p className="messageText">I am Fine</p>
      </div>
      <div className="messageBottom">Just Now</div>
    </div>

    </div>


  )
}

export default Sms
