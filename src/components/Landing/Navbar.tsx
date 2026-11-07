import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Common/Button';
// @ts-ignore
import logo from '../../assets/Tarka logo.png';

interface NavbarProps {
  onOpenLogin: () => void;
}

const Navbar = ({ onOpenLogin }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="MINT Logo" className="h-8 w-auto group-hover:scale-105 transition-transform" />
          <span className="font-bold text-xl text-gray-900 tracking-tight">MINT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#home"
            className="text-sm font-medium text-gray-900 relative group"
          >
            Home
            <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-teal-primary rounded-full"></span>
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button onClick={onOpenLogin} variant="ghost" className="font-semibold text-gray-700">Login</Button>
          <Button onClick={onOpenLogin} variant="primary" className="font-semibold shadow-md shadow-teal-primary/20">Get Started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 md:hidden flex flex-col gap-4"
          >
            <a 
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-teal-primary py-2 border-b border-gray-50"
            >
              Home
            </a>
            <div className="flex flex-col gap-3 mt-4">
              <Button onClick={() => { setIsMobileMenuOpen(false); onOpenLogin(); }} variant="outline" className="w-full justify-center text-gray-700 border-gray-300">Login</Button>
              <Button onClick={() => { setIsMobileMenuOpen(false); onOpenLogin(); }} variant="primary" className="w-full justify-center">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
