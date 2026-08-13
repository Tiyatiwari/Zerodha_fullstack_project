import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
      });
  }, []);

  // --- Dynamic Summary Calculations ---
  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + (stock.avg || 0) * (stock.qty || 0),
    0
  );

  const currentValue = allHoldings.reduce(
    (acc, stock) => acc + (stock.price || 0) * (stock.qty || 0),
    0
  );

  const totalProfit = currentValue - totalInvestment;
  const pnlPercentage = totalInvestment > 0 ? (totalProfit / totalInvestment) * 100 : 0;
  const isOverallProfit = totalProfit >= 0;

  // Split whole and decimal numbers for styling (e.g., "29,875" and "55")
  const formatSplitNumber = (num) => {
    const formatted = num.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const [whole, decimal] = formatted.split(".");
    return { whole, decimal };
  };

  const investmentFormatted = formatSplitNumber(totalInvestment);
  const currentValueFormatted = formatSplitNumber(currentValue);

  // Graph Labels & Data
  const labels = allHoldings.map((stock) => stock["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = (stock.price || 0) * (stock.qty || 0);
              const isProfit = curValue - (stock.avg || 0) * (stock.qty || 0) >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>₹{stock.avg ? stock.avg.toFixed(2) : "0.00"}</td>
                  <td>₹{stock.price ? stock.price.toFixed(2) : "0.00"}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    ₹{(curValue - (stock.avg || 0) * (stock.qty || 0)).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* --- Dynamic Row Summary --- */}
      <div className="row">
        <div className="col">
          <h5>
            ₹{investmentFormatted.whole}.<span style={{ display: "inline", fontSize: "1.0em" }}>{investmentFormatted.decimal}</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            ₹{currentValueFormatted.whole}.<span style={{ display: "inline", fontSize: "1.0em" }}>{currentValueFormatted.decimal}</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={isOverallProfit ? "profit" : "loss"}>
            {totalProfit >= 0 ? "+₹" : "-₹"}
            {totalProfit.toFixed(2)} ({pnlPercentage >= 0 ? "+" : ""}
            {pnlPercentage.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;