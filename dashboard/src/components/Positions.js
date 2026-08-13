import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  // Fetch live positions from backend
  useEffect(() => {
    axios
      .get("http://localhost:3002/allPositions")
      .then((res) => {
        setAllPositions(res.data);
      })
      .catch((err) => {
        console.error("Error fetching positions:", err);
      });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = (stock.price || 0) * (stock.qty || 0);
              const totalCost = (stock.avg || 0) * (stock.qty || 0);
              const pnl = curValue - totalCost;
              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product || "CNC"}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>₹{stock.avg ? stock.avg.toFixed(2) : "0.00"}</td>
                  <td>₹{stock.price ? stock.price.toFixed(2) : "0.00"}</td>
                  <td className={profClass}>
                    {pnl >= 0 ? "+" : ""}₹{pnl.toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day || stock.net || "0.00%"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;