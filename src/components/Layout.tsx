import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-[#0A0B14]">
      {/* Sidebar - Show/Hide based on `isSidebarOpen` */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 transition-all duration-300">
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-2 rounded-md shadow-lg z-50"
        >
          {isSidebarOpen ? "Close Menu" : "Open Menu"}
        </button>

        {/* Header + Page Content */}
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
