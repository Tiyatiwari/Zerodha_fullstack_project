// TopBar.js
import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      {/* Market Indices */}
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">100.2</p>
          <p className="percent"></p>
        </div>

        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">100.2</p>
          <p className="percent"></p>
        </div>
      </div>

      {/* Menu renders its own logo and links */}
      <Menu />
    </div>
  );
};

export default TopBar;