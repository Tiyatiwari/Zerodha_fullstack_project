import React from "react";

function Brokerage() {
  return (
    <div className="container py-5">
      <div className="row border-top pt-5">
        {/* Brokerage Calculator */}
        <div className="col-12 col-lg-8 mb-5 mb-lg-0">
          <a href="#" className="product-link">
            <h3 className="fs-4 mb-4">Brokerage calculator</h3>
          </a>

          <ul
            className="text-muted ps-3"
            style={{
              lineHeight: "2",
              fontSize: "15px",
            }}
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>

            <li>Digital contract notes will be sent via e-mail.</li>

            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>

            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>

            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>

            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* Charges */}
        <div className="col-12 col-lg-4">
          <a href="#" className="product-link">
            <h3 className="fs-4 mb-4">List of charges</h3>
          </a>

          <p
            className="text-muted"
            style={{
              lineHeight: "1.8",
              fontSize: "15px",
            }}
          >
            View the complete schedule of brokerage, taxes, statutory charges,
            and other applicable fees for all trading segments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;