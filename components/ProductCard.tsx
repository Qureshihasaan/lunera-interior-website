import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white cursor-pointer">
      <div className="aspect-[3/4] overflow-hidden relative bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Quick Add Button */}
        <button className="absolute bottom-4 right-4 bg-white text-primary p-3 rounded-full shadow-lg translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-secondary hover:text-white">
          <Plus size={20} />
        </button>
      </div>
      
      <div className="pt-4">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="text-lg font-serif text-primary group-hover:text-secondary transition-colors">{product.name}</h3>
        <p className="text-gray-700 font-medium mt-1">${product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;
