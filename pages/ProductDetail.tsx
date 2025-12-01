import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  
  const product = PRODUCTS.find(p => p.id === Number(id));

  useGSAP(() => {
    if (!product) return;

    // Back button animation
    gsap.from(containerRef.current?.querySelector('.back-button'), {
      x: -30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    });

    // Image animation - slide in from left with scale
    gsap.from(imageRef.current, {
      x: -100,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      delay: 0.2,
      ease: "power3.out"
    });

    // Details section - stagger animation
    const tl = gsap.timeline({ delay: 0.4 });
    
    tl.from(detailsRef.current?.querySelector('.category'), {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    })
    .from(detailsRef.current?.querySelector('.product-title'), {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, '-=0.4')
    .from(detailsRef.current?.querySelector('.product-price'), {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, '-=0.5')
    .from(detailsRef.current?.querySelector('.product-description'), {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, '-=0.4')
    .from(detailsRef.current?.querySelectorAll('.feature-item'), {
      x: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    }, '-=0.5')
    .from(detailsRef.current?.querySelector('.add-to-cart-btn'), {
      y: 20,
      opacity: 1,
      scale: 0.95,
      duration: 0.6,
      ease: "back.out(1.2)"
    }, '-=0.3');

  }, { scope: containerRef, dependencies: [product] });

  if (!product) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-[#004A2B] flex flex-col items-center justify-center text-[#F6F6DB]">
        <h2 className="text-3xl mb-4">Product Not Found</h2>
        <button 
          onClick={() => navigate('/shop')}
          className="flex items-center gap-2 text-[#c19355] hover:text-[#d4a86a] transition-colors"
        >
          <ArrowLeft size={20} /> Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    // You might want to add a toast notification here
    // alert(`${product.name} added to cart!`);
  };

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-[#004A2B] min-h-screen manrope-para">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="back-button flex items-center gap-2 text-[#F6F6DB] hover:text-[#c19355] transition-colors mb-8"
        >
          <ArrowLeft size={20} /> Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div ref={imageRef} className="relative group overflow-hidden rounded-lg shadow-xl aspect-square">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Details Section */}
          <div ref={detailsRef} className="flex flex-col space-y-6 text-[#F6F6DB]">
            <div>
              <p className="category text-[#c19355] uppercase tracking-widest text-sm mb-2">{product.category}</p>
              <h1 className="product-title text-4xl md:text-5xl font-light mb-4">{product.name}</h1>
              <p className="product-price text-3xl font-light">${product.price.toLocaleString()}</p>
            </div>

            <div className="product-description prose prose-invert max-w-none text-gray-300">
              <p>
                Experience luxury with the {product.name}. Meticulously crafted to bring elegance and sophistication to your space. 
                This piece combines timeless design with modern comfort, making it a perfect addition to your {product.category.toLowerCase()} collection.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li className="feature-item">Premium quality materials</li>
                <li className="feature-item">Hand-finished details</li>
                <li className="feature-item">Designed for comfort and style</li>
                <li className="feature-item">Durable and long-lasting</li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={handleAddToCart}
                className="add-to-cart-btn w-full md:w-auto px-8 py-4 bg-[#F6F6DB] text-[#004B2A] font-semibold uppercase tracking-wider hover:bg-[#d4a86a] transition-all flex items-center justify-center gap-3"
              >
                <ShoppingBag size={20} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
