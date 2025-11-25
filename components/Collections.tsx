import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

const products: (Product & { discount?: number })[] = [
    {
        id: 1,
        name: 'Funury Home Lighting',
        price: 54.00,
        category: 'Lighting',
        image: 'https://images.unsplash.com/photo-1507473888900-52e1adad5420?q=80&w=1000&auto=format&fit=crop',
        discount: 50
    },
    {
        id: 2,
        name: 'Funury Home Lighting',
        price: 56.00,
        category: 'Lighting',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
        discount: 20
    },
    {
        id: 3,
        name: 'Funury Home Lighting',
        price: 213.00,
        category: 'Lighting',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
        discount: 20
    },
    {
        id: 4,
        name: 'Redaboor Lighting',
        price: 249.00,
        category: 'Lighting',
        image: 'https://images.unsplash.com/photo-1540932296235-d8493159e36e?q=80&w=1000&auto=format&fit=crop',
        discount: 50
    }
];

const Collections: React.FC = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <h2 className="text-3xl md:text-4xl font-serif text-secondary text-center mb-16 tracking-wide">
                    CURATED COLLECTIONS
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} discount={product.discount} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collections;
