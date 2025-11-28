import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-[#004A2B] flex flex-col items-center justify-center text-[#F6F6DB]">
        <h2 className="text-3xl mb-4">Your Cart is Empty</h2>
        <p className="text-gray-400 mb-8">Looks like you haven't added anything yet.</p>
        <Link 
          to="/shop"
          className="px-8 py-3 bg-[#c19355] text-[#004B2A] font-semibold uppercase tracking-wider hover:bg-[#d4a86a] transition-all"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-[#004A2B] min-h-screen manrope-para text-[#F6F6DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl text-[#c19355] mb-12 text-center">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 bg-[#003d23] p-6 rounded-lg shadow-lg">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-[#c19355]">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.category}</p>
                  <p className="text-lg mt-1">${item.price.toLocaleString()}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-[#002b19] rounded-full px-2 py-1">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:text-[#c19355] transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:text-[#c19355] transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-400 hover:text-red-300 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
            
            <button 
              onClick={clearCart}
              className="text-sm text-red-400 hover:text-red-300 underline mt-4"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#003d23] p-8 rounded-lg shadow-lg sticky top-24">
              <h2 className="text-2xl font-semibold text-[#c19355] mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-[#004B2A] pt-4 flex justify-between text-xl font-bold text-[#F6F6DB]">
                  <span>Total</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full px-6 py-4 bg-[#c19355] text-[#004B2A] font-semibold uppercase tracking-wider hover:bg-[#d4a86a] transition-all flex items-center justify-center gap-2"
              >
                Proceed to Checkout <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
