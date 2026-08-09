import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Heading Section */}
      <div className="row py-5 mt-5 border-bottom text-center">
        <div className="col-12">
          <h1 style={{ color: "#424242", fontWeight: "600" }}>Pricing</h1>

          <h3
            className="mt-3"
            style={{
              color: "#666",
              fontSize: "1.35rem",
              fontWeight: "400",
            }}
          >
            Free equity investments and flat ₹20 intraday and F&O trades
          </h3>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row text-center py-5">
        <div className="col-12 col-md-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Free equity delivery"
            className="img-fluid mb-4"
            style={{ maxWidth: "75%" }}
          />

          <h2
            className="mb-3"
            style={{ color: "#424242", fontSize: "1.8rem" }}
          >
            Free equity delivery
          </h2>

          <p
            className="text-muted"
            style={{ lineHeight: "1.8", fontSize: "15px" }}
          >
            All equity delivery investments (NSE, BSE) are absolutely free —
            ₹0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday and F&O trades"
            className="img-fluid mb-4"
            style={{ maxWidth: "75%" }}
          />

          <h2
            className="mb-3"
            style={{ color: "#424242", fontSize: "1.8rem" }}
          >
            Intraday and F&O trades
          </h2>

          <p
            className="text-muted"
            style={{ lineHeight: "1.8", fontSize: "15px" }}
          >
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity.
          </p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Free direct MF"
            className="img-fluid mb-4"
            style={{ maxWidth: "75%" }}
          />

          <h2
            className="mb-3"
            style={{ color: "#424242", fontSize: "1.8rem" }}
          >
            Free direct MF
          </h2>

          <p
            className="text-muted"
            style={{ lineHeight: "1.8", fontSize: "15px" }}
          >
            All direct mutual fund investments are absolutely free — ₹0
            commissions and DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;