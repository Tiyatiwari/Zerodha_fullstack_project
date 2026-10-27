import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import ProfileModal from "./ProfileModal";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // State for logged-in user details
  const [user, setUser] = useState({
    username: "USERID",
    email: "user@example.com",
    initials: "ZU",
  });

  // Decode JWT Token from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);

        const username = decoded.username || decoded.email?.split("@")[0] || "User";
        const email = decoded.email || "user@example.com";
        const initials = username.substring(0, 2).toUpperCase();

        setUser({ username, email, initials });
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3001/login";
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

        {/* --- Profile / Avatar Section --- */}
        <div className="profile-wrapper" style={{ position: "relative" }}>
          <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
            <div className="avatar">{user.initials}</div>
            <p className="username" style={{ textTransform: "uppercase" }}>
              {user.username}
            </p>
          </div>

          {/* Dynamic Dropdown Menu */}
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <div className="dropdown-header">
                <p className="user-fullname">{user.username}</p>
                <p className="user-email">{user.email}</p>
              </div>
              <hr />
              <ul>
                <li
                  onClick={() => {
                    setIsProfileDropdownOpen(false);
                    setIsProfileModalOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  My Profile
                </li>
                <li style={{ cursor: "pointer" }}>Settings</li>
                <li style={{ cursor: "pointer" }}>Console</li>
                <li style={{ cursor: "pointer" }}>Kite Connect</li>
                <hr />
                <li
                  className="logout"
                  onClick={handleLogout}
                  style={{ cursor: "pointer", color: "#df514c", fontWeight: "bold" }}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Render Modal Overlay when active */}
      {isProfileModalOpen && (
        <ProfileModal user={user} onClose={() => setIsProfileModalOpen(false)} />
      )}
    </div>
  );
};

export default Menu;