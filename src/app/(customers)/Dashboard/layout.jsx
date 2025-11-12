"use client";
import { useState, useEffect } from "react";
import Sidebar from "../../../components/lakdashboard";

export default function AdminLayout({ children }) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar onToggle={setIsSidebarExpanded} />
      <main
        className={`flex-1 p-6 sm:p-8 overflow-y-auto transition-all duration-300 ${
          !isMobile && isSidebarExpanded ? "ml-64" : !isMobile ? "ml-16" : ""
        }`}
      >
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            Admin Dashboard
          </h1>
          <p className="text-gray-500">Manage your website here</p>
        </header>
        <div className="bg-white p-6 rounded-2xl shadow-md">{children}</div>
      </main>
    </div>
  );
}
