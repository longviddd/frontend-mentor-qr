import React from "react";
import qr from "./images/image-qr-code.png";

export default function Card() {
  return (
    <div className="card">
      <img src={qr} alt="QR" className="card__qr-image"></img>
      <div className="card__header">
        Improve your front-end skills by building projects
      </div>
      <div className="card__text">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </div>
    </div>
  );
}
