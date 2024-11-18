import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header"; 
import Footer from "./Footer"; 

function Layout() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "0", padding: "0" }}>
      <Header />

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
