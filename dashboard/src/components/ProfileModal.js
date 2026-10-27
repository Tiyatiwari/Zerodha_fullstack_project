import React from "react";

const ProfileModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "8px",
          padding: "25px",
          width: "380px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ margin: 0 }}>My Profile</h3>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <hr style={{ margin: "15px 0", borderColor: "#eee" }} />

        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#ebdcf9",
              color: "#9c27b0",
              fontSize: "1.5rem",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 10px auto",
            }}
          >
            {user.initials}
          </div>
          <h4 style={{ margin: 0 }}>{user.username}</h4>
          <p style={{ margin: 0, color: "#666", fontSize: "0.85rem" }}>{user.email}</p>
        </div>

        <div style={{ fontSize: "0.9rem", color: "#444" }}>
          <p><strong>Account Type:</strong> Equity & Derivatives</p>
          <p><strong>Status:</strong> Active ✅</p>
          <p><strong>Depository:</strong> NSDL / CDSL</p>
        </div>

        <button
          onClick={onClose}
          className="btn btn-grey"
          style={{ width: "100%", marginTop: "15px", padding: "8px" }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;