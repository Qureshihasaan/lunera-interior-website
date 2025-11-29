import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Shop: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  
  const categories = ['All', 'Living Room', 'Lighting', 'Tables', 'Decor', 'Seating', 'Textiles'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  useGSAP(() => {
    // Header animation
    gsap.from(headerRef.current?.querySelector('h1'), {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(headerRef.current?.querySelector('p'), {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out"
    });

    // Filters animation
    gsap.from(filtersRef.current?.querySelectorAll('button'), {
      y: 20,
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      delay: 0.4,
      ease: "power2.out"
    });

    // Products grid animation
    gsap.from(".shop-product-card", {
      scrollTrigger: {
        trigger: ".products-grid",
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: containerRef, dependencies: [filteredProducts] });

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-[#004A2B] min-h-screen manrope-para">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl  text-[#c19355] mb-4">The Collection</h1>
          <p className="text-[#F6F6DB] max-w-xl mx-auto">Hand-picked pieces defined by quality materials and timeless aesthetics.</p>
        </div>

        {/* Filters */}
        <div ref={filtersRef} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-sm uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-[#c19355] text-[#F6F6DB]' 
                  : 'bg-[#F6F6DB] text-gray-600 hover:text-primary border border-transparent hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="shop-product-card">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
           <div className="text-center py-20 text-gray-400">
             No products found in this category.
           </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
