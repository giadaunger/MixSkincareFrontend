import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CompareProducts from "./pages/CompareProducts";
import SkincareDupes from "./pages/SkincareDupes";
import HaircareDupes from "./pages/HaircareDupes";
import ProductPage from "./pages/ProductPage";
import SkincareRoutine from "./pages/SkincareRoutine";
import HaircareRoutine from "./pages/HaircareRoutine";
import About from "./pages/About";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Sales from "./pages/Sales";

// Blogs
import NaturalRemedies from "./components/blogPages/NaturalRemedies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/compare" element={<CompareProducts />}></Route>
          <Route path="/skincare-dupes" element={<SkincareDupes />}></Route>
          <Route path="/haircare-dupes" element={<HaircareDupes />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path="/skincare-routine" element={<SkincareRoutine />}></Route>
          <Route path="/haircare-routine" element={<HaircareRoutine />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/sales" element={<Sales />}></Route>

          {/* Blogs */}
          <Route path="/blog/glow-naturally-3-diy-beauty-remedies" element={<NaturalRemedies />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
