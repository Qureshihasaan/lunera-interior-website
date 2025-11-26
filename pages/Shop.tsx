import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const Shop: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Living Room', 'Lighting', 'Tables', 'Decor', 'Seating', 'Textiles'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-20 bg-[#004A2B] min-h-screen manrope-para">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl  text-[#c19355] mb-4">The Collection</h1>
          <p className="text-[#F6F6DB] max-w-xl mx-auto">Hand-picked pieces defined by quality materials and timeless aesthetics.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-sm uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-[#c19355] text-[#004B2A]' 
                  : 'bg-[#F6F6DB] text-gray-600 hover:text-primary border border-transparent hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
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
