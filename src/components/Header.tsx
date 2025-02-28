import React from 'react';
import { Bell, Search, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-[#12131E] dark:bg-[#12131E] border-b border-[#1F2937] p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search jobs, companies..."
              className="pl-10 pr-4 py-2 bg-[#1A1B26] dark:bg-[#1A1B26] border border-[#1F2937] rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-[300px]"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-[#1A1B26] rounded-lg text-gray-400"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className="p-2 hover:bg-[#1A1B26] rounded-lg">
            <Bell className="h-5 w-5 text-gray-400" />
          </button>
          <div className="h-8 w-8 rounded-full bg-purple-500"></div>
        </div>
      </div>
    </header>
  );
}