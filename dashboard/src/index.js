import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

// 1. Import Toastify CSS & Container
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* 2. Place ToastContainer here */}
    <ToastContainer position="top-right" autoClose={3000} />
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);