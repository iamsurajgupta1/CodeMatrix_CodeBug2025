import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Briefcase,
  DollarSign,
  GraduationCap,
  FileText,
  Video,
  Settings,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", to: "/" },
  { icon: Briefcase, label: "Jobs", to: "/jobs" },
  { icon: DollarSign, label: "Payments", to: "/payments" },
  { icon: FileText, label: "AI Resume Builder", to: "/resume-builder" },
  { icon: GraduationCap, label: "Courses", to: "/courses" },
  { icon: Video, label: "Mock Interviews", to: "/mock-interviews" },
  { icon: Settings, label: "Settings", to: "/settings" },
];

export default function Sidebar({ isSidebarOpen, toggleSidebar, isDarkMode, toggleTheme }) {
  return (
    <aside
      className={`fixed left-0 top-0 h-screen w-64 transition-transform transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } ${isDarkMode ? "bg-[#12131E] border-[#1F2937]" : "bg-white border-gray-200"}
        border-r p-4 flex flex-col z-50 shadow-lg`}
    >
      {/* Sidebar Header */}
      <div className="mb-6 flex items-center space-x-3">
        <img src="/company_icon.svg" alt="SkillSphere Logo" className="h-10" />
        <h1 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>
          SkillSphere
        </h1>
      </div>

      {/* Navigation Items */}
      <nav className="space-y-2 flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-purple-500 text-white"
                  : `${
                      isDarkMode
                        ? "text-gray-400 hover:bg-[#1A1B26] hover:text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-black"
                    }`
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
          isDarkMode
            ? "text-gray-400 hover:bg-[#1A1B26] hover:text-white"
            : "text-gray-700 hover:bg-gray-100 hover:text-black"
        } mt-4`}
      >
        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
      </button>

      {/* Logout Button */}
      <button
        className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors mt-4 ${
          isDarkMode
            ? "text-gray-400 hover:bg-red-500 hover:text-white"
            : "text-gray-700 hover:bg-red-500 hover:text-white"
        }`}
      >
        <LogOut className="h-5 w-5" />
        <span>Logout</span>
      </button>

      {/* Sidebar Close Button (For Mobile) */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-md shadow-md md:hidden"
      >
        Close
      </button>
    </aside>
  );
}
