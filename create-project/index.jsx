import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProjectPage from "./pages/create-project/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Home Page Placeholder</div>} />
      <Route path="/create-project" element={<CreateProjectPage />} />
    </Routes>
  </BrowserRouter>
);
