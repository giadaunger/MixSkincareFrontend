import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CompareProducts from "./pages/CompareProducts";
import Dupes from "./pages/Dupes";
import ProductPage from "./pages/ProductPage";
import SkincareRoutine from "./pages/SkincareRoutine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/compare" element={<CompareProducts />}></Route>
          <Route path="/dupes" element={<Dupes />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path="/skincare-routine" element={<SkincareRoutine />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
