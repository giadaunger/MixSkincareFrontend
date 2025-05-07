import React, { useState, useEffect } from "react";
import NavFullScreen from "./NavFullScreen";
import NavSmallScreen from "./NavSmallScreen";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 700;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="p-4 shadow-md">
      {windowWidth > breakpoint ? <NavFullScreen /> : <NavSmallScreen />}
    </nav>
  );
}

export default Navbar;