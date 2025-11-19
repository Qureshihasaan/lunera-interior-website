import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold tracking-wider">LUNERA</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Elevating everyday living through exceptional design and craftsmanship.
            </p>
            <div className="flex space-x-4">
              <Instagram size={20} className="hover:text-secondary cursor-pointer transition-colors" />
              <Facebook size={20} className="hover:text-secondary cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">Subscribe for exclusive offers and design inspiration.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-primary-dark border border-gray-700 text-white px-4 py-2 focus:outline-none focus:border-secondary text-sm"
              />
              <button className="bg-white text-primary font-medium uppercase tracking-widest text-xs py-3 hover:bg-secondary hover:text-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; 2024 Lunera Interiors. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
