import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  if (cart.length === 0 && !isSuccess) {
    navigate('/cart');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-[#004A2B] flex flex-col items-center justify-center text-[#F6F6DB] px-4 text-center">
        <CheckCircle size={80} className="text-[#c19355] mb-6" />
        <h2 className="text-4xl mb-4 text-[#c19355]">Order Placed Successfully!</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-md">
          Thank you for your purchase, {formData.firstName}. Your order has been confirmed and will be shipped shortly.
        </p>
        <button 
          onClick={() => navigate('/shop')}
          className="px-8 py-3 bg-[#c19355] text-[#004B2A] font-semibold uppercase tracking-wider hover:bg-[#d4a86a] transition-all"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-[#004A2B] min-h-screen manrope-para text-[#F6F6DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl text-[#c19355] mb-12 text-center">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="bg-[#003d23] p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#c19355] mb-6">Shipping & Payment</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    className="w-full bg-[#002b19] border border-[#004B2A] rounded p-3 text-[#F6F6DB] focus:outline-none focus:border-[#c19355]"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    required
                    className="w-full bg-[#002b19] border border-[#004B2A] rounded p-3 text-[#F6F6DB] focus:outline-none focus:border-[#c19355]"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-[#002b19] border border-[#004B2A] rounded p-3 text-[#F6F6DB] focus:outline-none focus:border-[#c19355]"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Address</label>
                <input 
                  type="text" 
                  name="address"
                  required
                  className="w-full bg-[#002b19] border border-[#004B2A] rounded p-3 text-[#F6F6DB] focus:outline-none focus:border-[#c19355]"
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">City</label>
                  <input 
                    type="text" 
                    name="city"
                    required
                    className="w-full bg-[#002b19] border border-[#004B2A] rounded p-3 text-[#F6F6DB] focus:outline-none focus:border-[#c19355]"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">ZIP Code</label>
                  <input 
                    type="text" 
                    name="zip"
                    required
                    className="w-full bg-[#002b19] border border-[#004B2A] rounded p-3 text-[#F6F6DB] focus:outline-none focus:border-[#c19355]"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-[#004B2A]">
                <h3 className="text-lg font-semibold text-[#c19355] mb-4">Payment Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Card Number</label>
                    <input 
                      type="text" 
                      name="cardNumber"
                      placeholder="0000 0000 0000 0000"
                      required
                      className="w-full bg-[#002b19] border border-[#004B2A] rounded p-3 text-[#F6F6DB] focus:outline-none focus:border-[#c19355]"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Expiry Date</label>
                      <input 
                        type="text" 
                        name="expiry"
                        placeholder="MM/YY"
                        required
                        className="w-full bg-[#002b19] border border-[#004B2A] rounded p-3 text-[#F6F6DB] focus:outline-none focus:border-[#c19355]"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">CVC</label>
                      <input 
                        type="text" 
                        name="cvc"
                        placeholder="123"
                        required
                        className="w-full bg-[#002b19] border border-[#004B2A] rounded p-3 text-[#F6F6DB] focus:outline-none focus:border-[#c19355]"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full px-6 py-4 bg-[#c19355] text-[#004B2A] font-semibold uppercase tracking-wider hover:bg-[#d4a86a] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {isProcessing ? 'Processing...' : `Pay $${cartTotal.toLocaleString()}`}
              </button>
            </form>
          </div>

          {/* Order Summary Side */}
          <div className="lg:col-span-1">
            <div className="bg-[#003d23] p-8 rounded-lg shadow-lg sticky top-24">
              <h2 className="text-2xl font-semibold text-[#c19355] mb-6">Your Order</h2>
              <div className="space-y-4 max-h-96 overflow-y-auto mb-6 pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 border-b border-[#004B2A] pb-4 last:border-0">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-grow">
                      <h4 className="text-[#F6F6DB] font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-[#c19355]">${(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-[#004B2A] pt-4 flex justify-between text-xl font-bold text-[#F6F6DB]">
                <span>Total</span>
                <span>${cartTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
