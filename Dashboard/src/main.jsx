import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Login from "./components/Login";
import userContext, { UserContextProvider } from "./components/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
const {user,updateUser} = useContext(userContext);
console.log(user);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserContextProvider>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Home />} />
      </Routes>
    </UserContextProvider>
      
    </BrowserRouter>
  </React.StrictMode>
);
