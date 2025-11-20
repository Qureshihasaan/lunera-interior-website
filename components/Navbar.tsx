import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/services' },
    { name: 'Service', path: '/services' },
    { name: 'Projects', path: '/shop' },
    { name: 'Feedbacks', path: '/services' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary h-1 w-full" />
      
      <nav
        className={`sticky top-0 z-50 border-b border-[#e8ded0] transition-all duration-300 ${
          isScrolled ? 'bg-[#f9f6f1]/95 backdrop-blur-sm shadow-sm' : 'bg-[#f9f6f1]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center min-h-[72px]">
            <Link to="/" >
              <img
              src="lunora-logo.png"
              className="h-28 w-40"
              />
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-medium uppercase tracking-[0.3em] text-[#4b4b4b] hover:text-primary transition-colors relative pb-1 ${
                      isActive ? 'text-primary' : ''
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </Link>
                );
              })}
            </div>

          <div className="hidden md:flex items-center gap-6">
            {isAuthenticated ? (
              <button
                onClick={() => navigate('/profile')}
                className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary/80 hover:text-primary transition"
              >
                <User size={18} />
                Profile
              </button>
            ) : (
              <Link
                to="/login"
                className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80 hover:text-primary transition"
              >
                Login
              </Link>
            )}
            <Link
              to="/services"
              className="px-5 py-3 rounded-full bg-primary text-white text-xs font-semibold tracking-[0.3em] uppercase hover:bg-primary-dark transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary"
             >
               {isOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f9f6f1] border-t border-[#e8ded0]">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-primary font-medium text-lg border-b border-[#e8ded0] pb-3 hover:text-secondary"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-100 space-y-4">
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
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="inline-flex justify-center items-center px-4 py-3 rounded-full bg-primary text-white text-sm font-semibold tracking-[0.3em] uppercase"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
