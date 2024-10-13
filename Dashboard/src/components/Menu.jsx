import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  const [selectedMenu,setSelectedMenu] = useState(0);
  const [profile , setProfile] = useState(false);

  const handleMenu = (idx)=>{
    setSelectedMenu(idx);
  }

  const handleProfile = ()=>{
    setProfile(!profile);
  }

  const menu = "menu";
  const selected_menu = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li >
            <Link to='/' onClick={()=>handleMenu(0)}><p className={selectedMenu===0?selected_menu:menu}>Dashboard</p></Link>
          </li>
          <li >
            <Link to='/Orders' onClick={()=>handleMenu(1)} ><p className={selectedMenu===1?selected_menu:menu}>Orders</p></Link>
          </li>
          <li >
            <Link to='/Holdings'  onClick={()=>handleMenu(2)} ><p className={selectedMenu===2?selected_menu:menu}>Holdings</p></Link>
          </li>
          <li className="menu ">
            <Link to='/Positions' onClick={()=>handleMenu(3)} ><p className={selectedMenu===3?selected_menu:menu}>Positions</p></Link>
          </li>
          <li >
            <Link to='/Funds' onClick={()=>handleMenu(4)} ><p className={selectedMenu===4?selected_menu:menu}>Funds</p></Link>
          </li>
          <li >
            <Link to='/Apps' onClick={()=>handleMenu(5)} ><p className={selectedMenu===5?selected_menu:menu}>Apps</p></Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfile}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
