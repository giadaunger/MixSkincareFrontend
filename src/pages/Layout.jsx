import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-belleza">
      <Navbar />
      <div className="flex-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
