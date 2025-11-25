import React from 'react';
import { Instagram, Facebook, Twitter, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-secondary-light pt-20 pb-10 border-t border-primary-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* About Us */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">About Us</h3>
            <div className="space-y-2 text-gray-400 font-sans text-sm leading-relaxed">
              <p>Lunera Home Decor Design</p>
              <p>425 1f Kaori Road, Suite 42375</p>
              <p>All rights reserved.</p>
            </div>
            <div className="flex gap-4 pt-4">
              <Facebook size={20} className="hover:text-white transition-colors cursor-pointer" />
              <Instagram size={20} className="hover:text-white transition-colors cursor-pointer" />
              <Twitter size={20} className="hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Collections */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">Collections</h3>
            <ul className="space-y-3 text-gray-400 font-sans text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6 relative">
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">Newsletter Sign Up</h3>
            <p className="text-gray-400 font-sans text-sm">Sign up for our minimal newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border border-gray-600 text-white px-4 py-2 w-full focus:outline-none focus:border-secondary text-sm"
              />
              <button className="bg-secondary text-primary-dark px-6 py-2 text-sm font-bold uppercase hover:bg-secondary-light transition-colors">
                Sign Up
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 text-secondary opacity-20">
              <Sparkles size={100} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-dark text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Designed by Talha Qureshi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
