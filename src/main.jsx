import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import Products from "./Products.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="product/:id" element={<Products/>} />
      </Routes>
    </BrowserRouter>
);
