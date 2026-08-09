import React from "react";

function CreateTicket() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 mb-4">
          <h1
            className="fs-2 fw-semibold"
            style={{ color: "#424242" }}
          >
            To create a ticket, select a relevant topic
          </h1>
        </div>

        {/* Card 1 */}
        <div className="col-12 col-md-6 col-lg-4 mb-5">
          <h4 className="mb-4">
            <i className="fa fa-plus-circle me-2"></i>
            Account Opening
          </h4>

          <a href="#" className="product-link d-block mb-2">
            Online Account Opening
          </a>

          <a href="#" className="product-link d-block mb-2">
            Offline Account Opening
          </a>

          <a href="#" className="product-link d-block mb-2">
            Company, Partnership and HUF Account Opening
          </a>

          <a href="#" className="product-link d-block mb-2">
            NRI Account Opening
          </a>

          <a href="#" className="product-link d-block mb-2">
            Charges at Zerodha
          </a>

          <a href="#" className="product-link d-block mb-2">
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </a>

          <a href="#" className="product-link d-block">
            Getting Started
          </a>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-6 col-lg-4 mb-5">
          <h4 className="mb-4">
            <i className="fa fa-user me-2"></i>
            Your Zerodha Account
          </h4>

          <a href="#" className="product-link d-block mb-2">Login Credentials</a>
          <a href="#" className="product-link d-block mb-2">Your Profile</a>
          <a href="#" className="product-link d-block mb-2">Account Modification</a>
          <a href="#" className="product-link d-block mb-2">CMR & DP</a>
          <a href="#" className="product-link d-block mb-2">Nomination</a>
          <a href="#" className="product-link d-block">Transfer & Conversion</a>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-6 col-lg-4 mb-5">
          <h4 className="mb-4">
            <i className="fa fa-line-chart me-2"></i>
            Kite
          </h4>

          <a href="#" className="product-link d-block mb-2">IPO</a>
          <a href="#" className="product-link d-block mb-2">Trading FAQs</a>
          <a href="#" className="product-link d-block mb-2">Margin Trading</a>
          <a href="#" className="product-link d-block mb-2">Charts & Orders</a>
          <a href="#" className="product-link d-block">Funds</a>
        </div>

        {/* Card 4 */}
        <div className="col-12 col-md-6 col-lg-4 mb-5">
          <h4 className="mb-4">
            <i className="fa fa-credit-card me-2"></i>
            Funds
          </h4>

          <a href="#" className="product-link d-block mb-2">Add Funds</a>
          <a href="#" className="product-link d-block mb-2">Withdraw Funds</a>
          <a href="#" className="product-link d-block">Payment Issues</a>
        </div>

        {/* Card 5 */}
        <div className="col-12 col-md-6 col-lg-4 mb-5">
          <h4 className="mb-4">
            <i className="fa fa-book me-2"></i>
            Console
          </h4>

          <a href="#" className="product-link d-block mb-2">Portfolio</a>
          <a href="#" className="product-link d-block mb-2">Reports</a>
          <a href="#" className="product-link d-block">Tax P&L</a>
        </div>

        {/* Card 6 */}
        <div className="col-12 col-md-6 col-lg-4 mb-5">
          <h4 className="mb-4">
            <i className="fa fa-gavel me-2"></i>
            Coin
          </h4>

          <a href="#" className="product-link d-block mb-2">Mutual Funds</a>
          <a href="#" className="product-link d-block mb-2">SIPs</a>
          <a href="#" className="product-link d-block">Redemption</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;