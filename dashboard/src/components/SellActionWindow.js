import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useContext(GeneralContext);

  const handleSellClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      });

      // 🔴 Red Toast notification on sell success (with proper backticks)
      toast.error(`Sell order placed for ${stockQuantity} qty of ${uid}!`);
    } catch (error) {
      console.error("Error placing sell order:", error);
      toast.error("Failed to place sell order!");
    }

    // Safely close the window
    if (generalContext && generalContext.closeSellWindow) {
      generalContext.closeSellWindow();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    if (generalContext && generalContext.closeSellWindow) {
      generalContext.closeSellWindow();
    }
  };

  return (
    <div className="container sell-container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          Margin required ₹{(Number(stockQuantity) * Number(stockPrice)).toFixed(2)}
        </span>
        <div>
          <button type="button" className="btn btn-orange" onClick={handleSellClick}>
            Sell
          </button>
          <button type="button" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;