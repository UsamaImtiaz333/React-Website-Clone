import React from "react";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import HomeNavbar from "./HomeNavbar";

function Layout() {
  const path = useLocation();

  return (
    <div>
      {path.pathname !== "/home" && <HomeNavbar />}
      <Outlet />
      {path.pathname !== "/home" && <Footer />}
    </div>
  );
}

export default Layout;
