import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/' }, 
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className={`text-2xl font-serif font-bold tracking-wider ${isScrolled ? 'text-primary' : 'text-white'}`}>
              LUNERA
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-widest hover:text-secondary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 border-l border-gray-300/30 pl-6 ml-2">
              <button className={`p-2 rounded-full hover:bg-secondary/20 transition ${isScrolled ? 'text-primary' : 'text-white'}`}>
                <ShoppingBag size={20} />
              </button>
              
              {isAuthenticated ? (
                <button 
                  onClick={() => navigate('/profile')}
                  className={`p-2 rounded-full hover:bg-secondary/20 transition flex items-center gap-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
                >
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-current">
                     <img src={user?.avatar || "https://via.placeholder.com/50"} alt="User" className="w-full h-full object-cover" />
                  </div>
                </button>
              ) : (
                <Link 
                  to="/login"
                  className={`text-sm font-medium uppercase tracking-widest hover:text-secondary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-primary' : 'text-white'}`}
             >
               {isOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-gray-100">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-primary font-medium text-lg border-b border-gray-50 pb-2 hover:text-secondary"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-100">
              {isAuthenticated ? (
                <Link 
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-primary font-medium text-lg"
                >
                  <User size={20} />
                  My Account
                </Link>
              ) : (
                <Link 
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block text-primary font-medium text-lg hover:text-secondary"
                >
                  Login / Sign Up
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
