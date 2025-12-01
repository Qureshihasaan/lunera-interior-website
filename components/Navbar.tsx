import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    // Navbar entrance animation
    gsap.from(navRef.current?.querySelector('.nav-logo'), {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(navRef.current?.querySelectorAll('.nav-link'), {
      // y: -20,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.2,
      ease: "power2.out"
    });
  }, { scope: navRef });

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isProfilePage = location.pathname === '/profile';

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isProfilePage ? 'bg-[#004A2B]/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="nav-logo text-2xl font-serif text-[#F6F6DB] tracking-wider">
            <img src="/lunora-logo.png" className="h-12" alt="" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link text-sm uppercase tracking-widest hover:text-[#c19355] transition-colors ${isActive(link.path) ? 'text-[#c19355]' : 'text-[#F6F6DB]'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <Link to="/cart" className="nav-link relative text-[#F6F6DB] hover:text-[#c19355] transition-colors">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#c19355] text-[#004B2A] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {user ? (
              <button
                onClick={handleLogout}
                className="nav-link px-6 py-2 border border-[#c19355] text-[#c19355] hover:bg-[#c19355] hover:text-[#004B2A] transition-all text-sm uppercase tracking-widest"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="nav-link px-6 py-2 border border-[#c19355] text-[#c19355] hover:bg-[#c19355] hover:text-[#004B2A] transition-all text-sm uppercase tracking-widest"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="relative text-[#F6F6DB] hover:text-[#c19355] transition-colors">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#c19355] text-[#004B2A] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F6F6DB] hover:text-[#c19355] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#004A2B] border-t border-[#c19355]/20">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm uppercase tracking-widest hover:text-[#c19355] transition-colors ${isActive(link.path) ? 'text-[#c19355]' : 'text-[#F6F6DB]'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <button
                onClick={handleLogout}
                className="text-center px-6 py-2 border border-[#c19355] text-[#c19355] hover:bg-[#c19355] hover:text-[#004B2A] transition-all text-sm uppercase tracking-widest w-full"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="text-center px-6 py-2 border border-[#c19355] text-[#c19355] hover:bg-[#c19355] hover:text-[#004B2A] transition-all text-sm uppercase tracking-widest"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
