import React, { useEffect, useState ,useContext} from "react";
import { Grow, Tooltip } from "@mui/material";
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MoreIcon from '@mui/icons-material/More';

import GeneralContext from "./GeneralContext";

const WatchList = () => { 
  const [watchlist,setWatchlist] = useState([]);
  let data = [];
  useEffect(()=>{
    const fetchData = async ()=>{
      data = await fetch('https://zerodhaclone-1-08be.onrender.com/allWatchlist');
      data = await data.json();
      setWatchlist(data);
    }
    fetchData();
  },[]);
  
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list" >
        {watchlist.map((item, idx) => {
          return (
            <li key={item._id}>
              {" "}
              <WatchListItem stock={item} key={idx} />{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [isHovered , setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }
  return (
    <div className="item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isHovered?<ListToolTip stock={stock} key={stock._id}/>:""}
      {stock.name}
      <div className="item-info">
        <span className={stock.isDown ? "down" : "up"}>{stock.percent}</span>
        {stock.isDown===true ? (
          <span className="down">
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        ) : (
          <span className="up">
            <i className="fa-solid fa-chevron-up"></i>
          </span>
        )}

        <span className={stock.isDown ? "down" : "up"}>{stock.price}</span>
        
      </div>
    </div>
  );
};

const ListToolTip = ({stock}) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow({stock});
  };

  return (
    <span className="actions" >
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={()=>handleBuyClick(stock)}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlinedIcon className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreIcon className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};