import React from "react";

function Hero() {
  return (
    <section id="supportHero" className="container-fluid">
      {/* Top Support Header */}
      <div id="supportWrapper" className="container py-4">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Support Portal</h4>

          <a href="#" className="support-link">
            Track Tickets
          </a>
        </div>
      </div>

      {/* Main Support Content */}
      <div className="container py-5">
        <div className="row align-items-start">
          {/* Search Section */}
          <div className="col-12 col-lg-7 mb-5 mb-lg-0">
            <h1 className="fs-3 fw-normal mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>

            {/* Search Box */}
            <div className="mb-4">
              <input
                type="text"
                className="form-control support-search"
                placeholder="Eg. how do I activate F&O"
              />
            </div>

            {/* Quick Links */}
            <div className="d-flex flex-wrap gap-3">
              <a href="#" className="support-link">
                Track account opening
              </a>

              <a href="#" className="support-link">
                Track segment activation
              </a>

              <a href="#" className="support-link">
                Intraday margins
              </a>

              <a href="#" className="support-link">
                Kite user manual
              </a>
            </div>
          </div>

          {/* Featured Section */}
          <div className="col-12 col-lg-5">
            <h2 className="fs-4 fw-normal mb-4">Featured</h2>

            <ol className="featured-list">
              <li>
                <a href="#" className="support-link">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>

              <li>
                <a href="#" className="support-link">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;