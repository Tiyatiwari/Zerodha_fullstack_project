import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img
        src="/media/images/kite-logo.svg"
        alt="kite logo"
        style={{ width: "30px", height: "auto", maxHeight: "30px" }}
      />

      <div className="menus">
        <ul>
          <li>
            <Link to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link to="/apps" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* --- Profile / Avatar Section with Relative Wrapper --- */}
        <div className="profile-wrapper">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">ZU</div>
            <p className="username">USERID</p>
          </div>

          {/* Dropdown Menu */}
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <div className="dropdown-header">
                <p className="user-fullname">User Name</p>
                <p className="user-email">user@example.com</p>
              </div>
              <hr />
              <ul>
                <li>My Profile</li>
                <li>Settings</li>
                <li>Console</li>
                <li>Kite Connect</li>
                <hr />
                <li className="logout">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;