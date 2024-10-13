import { useState, useEffect, useContext } from "react";
import userContext from "./UserContext";
import axios from "axios";

const Summary = () => {
  const {user,updateUser} = useContext(userContext); 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('auth_token'); 
        const res = await axios.get('https://zerodhaclone-1-08be.onrender.com/user', {
          withCredentials: true,  
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
          }
        });
        updateUser(res.data) 
        console.log("in function ", res.data);
      } catch (err) {
        console.error('Error fetching user:', err);
      }
    };

    fetchUser();
  }, []); // Empty dependency array means this runs once when the component mounts

  console.log("second time ", user); // This will log the updated user data after fetchUser completes

  return (
    <>
      <div className="username">
        <h6>Hi, {user.username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
