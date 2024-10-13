import "./BuyWindow.css";
import GeneralContext from "./GeneralContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
function BuyWindow({ stock }) {
  const [stockQuantity, setStockQuantity] = useState(1);
  
  const handleBuyClick = () => {
    axios.post("https://zerodhaclone-1-08be.onrender.com/newOrder", {
      name: stock.name,
      qty: stockQuantity,
      price: stock.price,
      mode: "BUY",
    });

    GeneralContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };
  return (
    <div className="container" id="buy-window" draggable="true">
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
              value={stock.price}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BuyWindow;
