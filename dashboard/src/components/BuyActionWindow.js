import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      // Green popup on success
      toast.success(`Buy Order Placed for ${stockQuantity} share(s) of ${uid}!`);
    } catch (error) {
      console.error("Error placing buy order:", error);
      // Red popup on error
      toast.error("Failed to place buy order!");
    }

    if (generalContext && generalContext.closeBuyWindow) {
      generalContext.closeBuyWindow();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    if (generalContext && generalContext.closeBuyWindow) {
      generalContext.closeBuyWindow();
    }
  };

  return (
    <div className="container buy-container" id="buy-window" draggable="true">
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
          <button type="button" className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button type="button" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;