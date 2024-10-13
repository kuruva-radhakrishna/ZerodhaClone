import React, { useEffect, useState } from "react";


const Positions = () => {
  const [positions,setPositions] = useState([]);
  let data = [];
  useEffect(()=>{
    const fetchData = async() =>{
      data = await fetch('https://zerodhaclone-1-08be.onrender.com/allPositions');
      data = await data.json();
      setPositions(data);
    }
    fetchData();
  },[])
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {positions.map((stock, index) => {
            const currVal = stock.price*stock.qty;
            const isLoss = currVal - stock.avg*stock.qty>=0;
            return (
              <tr key={index} >
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td style={{ color: isLoss ? 'red' : 'green' }} >{stock.net}</td>
                <td style={{ color: stock.isLoss ? 'red' : 'green' }}>{stock.day}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
