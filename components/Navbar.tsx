import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const leftLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/shop" },
  ];

  const rightLinks = [
    { name: "About", path: "/services" },
    { name: "Journal", path: "/services" },
    { name: "Contact", path: "/services" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          {/* Left Links */}
          <div className="hidden md:flex items-center gap-8">
            {leftLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-sans hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo Center */}
          <Link to="/" className="text-3xl font-serif tracking-widest text-center w-32">
            <img src="lunora-logo.png" alt="Lunera Logo" />
          </Link>

          {/* Right Links */}
          <div className="hidden md:flex items-center gap-8">
            {rightLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-sans hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <button
                onClick={() => navigate("/profile")}
                className="text-sm font-sans hover:text-secondary transition-colors"
              >
                <User size={18} />
              </button>
            ) : (
              <Link
                to="/login"
                className="text-sm font-sans hover:text-secondary transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-current"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        isOpen && (
          <div className="md:hidden bg-primary absolute top-full left-0 right-0 border-t border-primary-dark p-6 shadow-xl">
            <div className="flex flex-col space-y-4 text-center">
              {[...leftLinks, ...rightLinks].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-white font-sans text-lg hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    navigate("/profile");
                    setIsOpen(false);
                  }}
                  className="text-white font-sans text-lg hover:text-secondary transition-colors"
                >
                  Profile
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-white font-sans text-lg hover:text-secondary transition-colors"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )
      }
    </nav >
  );
};

export default Navbar;
