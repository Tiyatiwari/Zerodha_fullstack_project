import React from "react";

function Hero() {
  return (
    <div className="container py-5 mb-5">
      <div className="row text-center">
        <div className="col-12">
          <h1
            className="mt-5 fw-bold"
            style={{ color: "#1E1E2D" }}
          >
            Invest in everything
          </h1>

          <p
            className="mt-3"
            style={{ color: "#5A5A5A", fontSize: "1.25rem" }}
          >
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <button
            className="zerodha-btn btn btn-primary px-5 py-2 fs-5 mt-3"
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;