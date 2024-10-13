import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { UserContextProvider } from "./components/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
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
