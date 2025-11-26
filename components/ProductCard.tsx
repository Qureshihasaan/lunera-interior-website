import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, discount }) => {
  return (
    <div className="group flex flex-col bg-[#004A2B]">
      <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {discount && (
          <div className="absolute top-4 right-4 bg-[#C19355] text-white text-xs font-medium px-3 py-1">
            -{discount}%
          </div>
        )}
      </div>

      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-sans text-[#c19355] font-medium max-w-[70%] leading-tight">
          {product.name}
        </h3>
        <p className="text-lg font-sans text-accent">
          ${product.price.toFixed(2)}
        </p>
      </div>

      <button className="w-full py-3 bg-[#c19355] text-white text-sm uppercase tracking-widest hover:bg-primary-dark transition-colors">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
