import { Search, Moon, Bell, User, Settings, LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Avatar from '../Common/Avatar';
import { getCurrentRole } from '../../auth/authUtils';
import { authService } from '../../auth/authService';

const Header = () => {
  const role = getCurrentRole();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    setIsProfileOpen(false);
    await authService.logout();
    navigate('/');
  };
  return (
    <header className="h-[56px] bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-10">
      {/* Search Bar */}
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search tasks, projects, people..."
          className="w-full pl-9 pr-10 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center bg-white border border-gray-200 rounded px-1.5 py-0.5">
          <span className="text-[10px] font-medium text-gray-500">⌘K</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        {role === 'founder' && (
          <div className="hidden md:flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></div>
            <span className="text-[13px] font-semibold text-gray-700">Nimbus Technologies</span>
            <svg className="w-3.5 h-3.5 text-gray-400 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
        <div className="text-[13px] text-gray-500 font-medium hidden md:block">
          Thursday, 23 July 2026
        </div>
        
        <div className="flex items-center gap-3 text-gray-400">
          <button className="hover:text-gray-600 transition-colors">
            <Moon size={18} />
          </button>
          <button className="relative hover:text-gray-600 transition-colors">
            <Bell size={18} />
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
          </button>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center outline-none"
          >
            <Avatar initials="AM" size="sm" />
          </button>

          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-50 overflow-hidden"
              >
                <button 
                  onClick={() => setIsProfileOpen(false)}
                  className="w-full flex items-center gap-2.5 px-4 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <User size={16} className="text-gray-400" />
                  Profile
                </button>
                <button 
                  onClick={() => setIsProfileOpen(false)}
                  className="w-full flex items-center gap-2.5 px-4 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Settings size={16} className="text-gray-400" />
                  Settings
                </button>
                <div className="h-px bg-gray-100 my-1.5" />
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2.5 px-4 py-2 text-[13px] font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={16} />
                  Log out
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
