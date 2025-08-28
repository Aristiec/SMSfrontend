import React, { useState } from "react";
import Header from "../components/admin/Header";
import Navbar from "../components/admin/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../pages/ScrollToTop";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#E9EEF4] flex pt-[72px] relative">
      <Header />
      <nav className="w-[240px] fixed left-0 top-[72px] bottom-0 bg-white shadow-md overflow-y-auto scrollbar-hide z-50">
        <Navbar />
      </nav>
      <div className="flex-1 ml-[240px] p-4">
        <ScrollToTop />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
