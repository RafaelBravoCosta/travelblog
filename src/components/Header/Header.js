import React from "react";
import Travelblog from "../../assests/Travelblog.jpeg";


export default function Header() {
  return (
    <header className="header-container">
      <h1>Travel Blog.</h1>

      <div className="header-img">
        <img src={Travelblog} alt="Travel blog" />

        {/* <div className="header-content"> */}
        <h3>The sky is the limit.</h3>
      </div>
    </header>
  );
}
