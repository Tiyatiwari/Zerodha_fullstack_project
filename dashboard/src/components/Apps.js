import React from "react";

const Apps = () => {
  const appsList = [
    {
      title: "Smallcase",
      description: "Thematic investment platform for stock portfolios.",
      icon: "https://smallcase.com/static/png/logo.png",
      link: "https://www.smallcase.com",
    },
    {
      title: "Sensibull",
      description: "Options trading platform for strategy building & analysis.",
      icon: "https://sensibull.com/favicon.ico",
      link: "https://sensibull.com",
    },
    {
      title: "Streak",
      description: "Algo trading platform to create, backtest, and deploy strategies.",
      icon: "https://streak.tech/favicon.ico",
      link: "https://streak.tech",
    },
    {
      title: "GoldenPi",
      description: "Platform to invest in bonds and fixed income instruments.",
      icon: "https://goldenpi.com/favicon.ico",
      link: "https://goldenpi.com",
    },
    {
      title: "Ditto",
      description: "Insurance advice and planning platform by Zerodha.",
      icon: "https://joinditto.in/favicon.ico",
      link: "https://joinditto.in",
    },
  ];

  return (
    <div className="apps-container" style={{ padding: "20px" }}>
      <h2>Zerodha Products & Integrations</h2>
      <p style={{ color: "#666", marginBottom: "25px" }}>
        Discover powerful third-party trading, investing, and research tools integrated directly into your workspace.
      </p>

      <div
        className="apps-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {appsList.map((app, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justify: "space-between",
            }}
          >
            <div>
              <h3 style={{ margin: "0 0 10px 0", color: "#444" }}>{app.title}</h3>
              <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.5" }}>
                {app.description}
              </p>
            </div>
            <a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "15px",
                display: "inline-block",
                padding: "8px 16px",
                backgroundColor: "#387ed1",
                color: "#fff",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "13px",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              Explore {app.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;