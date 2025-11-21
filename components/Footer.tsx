import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const linkGroups = [
  {
    title: 'Company',
    items: ['Career', 'About Us', 'Blog', 'Feature', 'Story'],
  },
  {
    title: 'Design',
    items: ['2D Designer', '3D Designer', 'Collaboration', 'Tools', 'Important Link'],
  },
  {
    title: 'Links',
    items: ['Projects', 'Contact', 'Send Email', 'Fiverr', 'upWork'],
  },
  {
    title: 'Material',
    items: ['Company Profile', 'Asset', 'Location Map', 'Estimate Cost', 'Default Quotation'],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#1b1a17] manrope-para">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="space-y-4">
            <p className="text-3xl  text-primary">interiorfirm</p>
            <p className="text-[#5f5f5f] leading-relaxed">
              Interiorfirm is an acclaimed multidisciplinary studio specializing in interior architecture, interior design.
            </p>
            <div className="flex gap-4 text-primary">
              <Instagram size={18} className="cursor-pointer hover:text-secondary" />
              <Facebook size={18} className="cursor-pointer hover:text-secondary" />
              <Twitter size={18} className="cursor-pointer hover:text-secondary" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-[#5f5f5f]">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <p className="uppercase text-xs tracking-[0.4em] text-[#8a8a8a] mb-4">{group.title}</p>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 text-xs uppercase tracking-[0.4em] text-[#8a8a8a]">
          <span>&copy; Copyright 2024 Interiorfirm — All Rights Reserved.</span>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white text-center py-6 text-xs uppercase tracking-[0.5em]">
        Make your dream home.
      </div>
    </footer>
  );
};

export default Footer;
