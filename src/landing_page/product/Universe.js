import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 style={{ color: "#424242" }}>The Zerodha Universe</h1>

        <p className="text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-12 col-md-6 col-lg-4 p-4 mt-4">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
            style={{ maxWidth: "170px" }}
          />
          <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>
            Thematic investment platform
          </p>
        </div>

        <div className="col-12 col-md-6 col-lg-4 p-4 mt-4">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid"
            style={{ maxWidth: "170px" }}
          />
          <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>
            Algo & strategy platform
          </p>
        </div>

        <div className="col-12 col-md-6 col-lg-4 p-4 mt-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid"
            style={{ maxWidth: "170px" }}
          />
          <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>
            Options trading platform
          </p>
        </div>

        <div className="col-12 col-md-6 col-lg-4 p-4 mt-4">
          <img
            src="media/images/zerodhafundhouse.png"
            alt="Zerodha Fund House"
            className="img-fluid"
            style={{ maxWidth: "170px" }}
          />
          <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>
            Asset management
          </p>
        </div>

        <div className="col-12 col-md-6 col-lg-4 p-4 mt-4">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            className="img-fluid"
            style={{ maxWidth: "170px" }}
          />
          <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>
            Bonds trading platform
          </p>
        </div>

        <div className="col-12 col-md-6 col-lg-4 p-4 mt-4">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="img-fluid"
            style={{ maxWidth: "170px" }}
          />
          <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>
            Insurance
          </p>
        </div>

        <div className="mt-5 mb-5">
          <button
            className="zerodha-btn p-2 fs-5 mb-5"
            style={{
              padding: "12px 40px",
              margin: "0 auto",
              whiteSpace: "nowrap",
              display: "inline-block",
              width: "fit-content",
            }}
          >
            Signup now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
