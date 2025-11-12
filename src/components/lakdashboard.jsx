"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  ShoppingCart,
  Package,
  Users,
  FileText,
  Settings,
  ChevronDown,
  Menu,
  X,
  IdCard,
  LogOut
} from "lucide-react";

const Sidebar = ({ onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) onToggle?.(isHovered);
    else onToggle?.(sidebarOpen);
  }, [isHovered, sidebarOpen, isMobile, onToggle]);

  const toggleSubmenu = (index) =>
    setOpenSubmenu(openSubmenu === index ? null : index);

  const menuItems = [
    { label: "Dashboard", icon: <Home className="w-8 h-5" />, link: "/Dashboard" },
    {
      label: "Orders",
      icon: <ShoppingCart className="w-8 h-5" />,
      children: [
        { label: "All Orders", link: "/Customer/Orders" },
        { label: "Pending", link: "/Customer/Orders/pending" },
        { label: "Completed", link: "/Customer/Orders/completed" },
        { label: "Completed", link: "/Customer/Orders/completed" },
      ],
    },
    {
      label: "Products",
      icon: <Package className="w-8 h-5" />,
      children: [
        { label: "All Products", link: "/Customer/Products" },
        { label: "Add Product", link: "/Customer/Products/add" },
      ],
    },
    {
      label: "Products",
      icon: <Package className="w-8 h-5" />,
      children: [
        { label: "All Products", link: "/Customer/Products" },
        { label: "Add Product", link: "/Customer/Products/add" },
      ],
    },
    { label: "Customers", icon: <Users className="w-8 h-5" />, link: "/Customer/Customers" },
    { label: "Profile", icon: <IdCard className="w-8 h-5" />, link: "/Customer/Customers" },
    { label: "Reports", icon: <FileText className="w-8 h-5" />, link: "/Customer/Reports" },
    { label: "Settings", icon: <Settings className="w-8 h-5" />, link: "/Customer/Settings" },
    { label: "Logout", icon: <LogOut className="w-8 h-5" />, link: "/logout" },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-[#111827] z-50 transition-all duration-300 shadow-xl ${
          isMobile
            ? sidebarOpen
              ? "w-56"
              : "w-0"
            : isHovered
            ? "w-56"
            : "w-16"
        }`}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        {/* Header / Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-800">
          <span
            className={`text-white font-semibold transition-all duration-300 ${
              (isHovered || isMobile)
                ? "text-sm tracking-wide"
                : "text-xl tracking-tight"
            }`}
          >
            {(isHovered || isMobile) ? "Admin Panel" : "L"}
          </span>

          {/* Mobile Close Button */}
          {isMobile && sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white p-2 hover:bg-slate-800 rounded-lg"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto mt-2 font-sans">
          {menuItems.map((item, index) => {
            const isActive = openSubmenu === index;
            return (
              <div key={index}>
                <div
                  onClick={() =>
                    item.children ? toggleSubmenu(index) : setOpenSubmenu(null)
                  }
                  className={`flex items-center justify-between gap-3 px-3 p-2 rounded-lg cursor-pointer transition-all duration-200 group ${
                    isActive
                      ? "bg-slate-800 text-indigo-400"
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`p-1 rounded-md ${
                        isActive
                          ? "text-indigo-400"
                          : "text-slate-400 group-hover:text-white"
                      }`}
                    >
                      {item.icon}
                    </div>
                    {(isHovered || isMobile) && (
                      <span className="text-[14px] font-medium">{item.label}</span>
                    )}
                  </div>

                  {(isHovered || isMobile) && item.children && (
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        isActive ? "rotate-180 text-indigo-400" : "text-slate-500"
                      }`}
                    />
                  )}
                </div>

                {/* Submenu */}
                {item.children && isActive && (isHovered || isMobile) && (
                  <div className="ml-5 mt-1 border-l border-slate-700 space-y-1">
                    {item.children.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.link}
                        className="block text-slate-400 hover:text-indigo-400 text-xs py-1.5 px-3 rounded-md hover:bg-slate-800 transition-colors duration-150"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Open Button */}
        {isMobile && !sidebarOpen && (
          <button
            className="fixed top-4 left-4 bg-slate-800 text-white p-1.5 rounded-md shadow-md hover:bg-slate-700 transition-colors duration-200"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-4 h-4" />
          </button>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
