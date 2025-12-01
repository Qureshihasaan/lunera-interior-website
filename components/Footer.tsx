import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Facebook, Twitter, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Footer sections slide up on scroll
    gsap.from(footerRef.current?.querySelectorAll('.footer-section'), {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Social icons pop in
    gsap.from(footerRef.current?.querySelectorAll('.social-icon'), {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
      },
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.6,
      ease: "back.out(2)"
    });

    // Newsletter input and button slide in
    gsap.from(footerRef.current?.querySelector('.newsletter-input'), {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
      },
      x: -30,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "power2.out"
    });

    gsap.from(footerRef.current?.querySelector('.newsletter-button'), {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
      },
      x: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.6,
      ease: "power2.out"
    });

    // Sparkles icon rotation and fade
    gsap.from(footerRef.current?.querySelector('.sparkles-icon'), {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
      },
      rotation: -180,
      opacity: 0,
      duration: 1.2,
      delay: 0.8,
      ease: "power2.out"
    });

    // Bottom bar fade in
    gsap.from(footerRef.current?.querySelector('.bottom-bar'), {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 75%",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 1,
      ease: "power2.out"
    });

  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="bg-primary text-secondary-light pt-20 pb-10 border-t border-primary-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* About Us */}
          <div className="footer-section space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">About Us</h3>
            <div className="space-y-2 text-gray-400 font-sans text-sm leading-relaxed">
              <p>Lunora Home Decor Design</p>
              <p>425 1f Kaori Road, Suite 42375</p>
              <p>All rights reserved.</p>
            </div>
            <div className="flex gap-4 pt-4">
              <Facebook size={20} className="social-icon hover:text-white transition-colors cursor-pointer" />
              <Instagram size={20} className="social-icon hover:text-white transition-colors cursor-pointer" />
              <Twitter size={20} className="social-icon hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Collections */}
          <div className="footer-section space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 font-sans text-sm">
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/cart" className="hover:text-white transition-colors">Cart</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section space-y-6 relative">
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">Newsletter Sign Up</h3>
            <p className="text-gray-400 font-sans text-sm">Sign up for our minimal newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="newsletter-input bg-transparent border border-gray-600 text-white px-4 py-2 w-full focus:outline-none focus:border-secondary text-sm"
              />
              <button className="newsletter-button bg-secondary text-primary-dark px-6 py-2 text-sm font-bold uppercase hover:bg-secondary-light transition-colors">
                Sign Up
              </button>
            </div>
            <div className="sparkles-icon absolute -bottom-10 -right-10 text-secondary opacity-20">
              <Sparkles size={100} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar pt-8 border-t border-primary-dark text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
