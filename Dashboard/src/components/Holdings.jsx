import React, { useEffect, useState } from "react";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);
  useEffect(() => {
    // Fetch data and update state
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/allHoldings");
        const data = await response.json(); // Parse JSON response
        setHoldings(data); // Set the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function inside useEffect
  }, []);

  const { totalInvestment, currentValue } = holdings.reduce(
    (acc, holding) => {
      const investment = holding.qty * holding.avg;
      const value = holding.qty * holding.price;

      acc.totalInvestment += investment;
      acc.currentValue += value;

      return acc;
    },
    { totalInvestment: 0, currentValue: 0 }
  );
  const profitLoss = currentValue - totalInvestment;
  const profitLossPercentage = totalInvestment > 0 ? (profitLoss / totalInvestment) * 100 : 0;

  
  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
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

          {holdings.map((stock, index) => {
            const currVal = stock.price * stock.qty;
            const Prof = currVal - stock.avg * stock.qty;
            const profClass = Prof > 0 ? "profit" : "loss";
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currVal}</td>
                <td className={profClass}>{Prof.toFixed(2)}</td>
                <td className={profClass}>{stock.net}</td>
                <td style={{ color: stock.isLoss ? "red" : "green" }}>
                  {stock.day}
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {totalInvestment.toLocaleString()}.
            <span>{(totalInvestment % 1).toFixed(2).split(".")[1]}</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currentValue.toLocaleString()}.
            <span>{(currentValue % 1).toFixed(2).split(".")[1]}</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 style={{ color: profitLoss > 0.0 ? "green" : "red" }}>
            {profitLoss.toLocaleString()} ({profitLossPercentage.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
