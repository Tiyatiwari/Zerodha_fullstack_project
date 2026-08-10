import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5  border-top">
        <h1 className="fs-3 text-muted mt-5 text-center "> people</h1>
      </div>
      <div
        className="row p-3  text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-6 text-muted p-3 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="founder image"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h5 className="mt-3">Nithin Kamath</h5>
          <h6 className="mt-3">Founder, CEO</h6>
        </div>
        <div className="col-6 text-muted p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p className="fs-6">
            Connect on{" "}
            <a href="" className="team-link">Homepage</a> /{" "}
            <a href="" className="team-link">TradingQnA</a> /{" "}
            <a href="" className="team-link">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;