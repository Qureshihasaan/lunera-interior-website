import React, { useState, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Package, Settings, Heart, User, ChevronRight, MapPin, CreditCard, Bell, Camera } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { PRODUCTS } from '../constants';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Settings State
  const [settingsForm, setSettingsForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    street: '',
    city: '',
    zip: ''
  });

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettingsForm({ ...settingsForm, [e.target.name]: e.target.value });
  };

  const saveSettings = () => {
    // Mock save functionality
    alert("Settings saved successfully!");
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.sidebar-item', {
      x: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    })
    .from(contentRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3');

  }, { scope: containerRef });

  // Animation when switching tabs
  useGSAP(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    );
  }, { scope: containerRef, dependencies: [activeTab] });

  if (!user) return null;

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Header Card */}
            <div className="bg-gradient-to-r from-[#004A2B] to-[#1A3C34] p-8 rounded-2xl shadow-lg relative overflow-hidden group text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c19355]/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="relative">
                  <img 
                    src={user.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"} 
                    alt={user.name} 
                    className="w-28 h-28 rounded-full object-cover border-4 border-[#c19355]/50 shadow-xl"
                  />
                  <button className="absolute bottom-0 right-0 p-2 bg-[#c19355] rounded-full text-white hover:bg-[#a07a46] transition-colors shadow-md">
                    <Camera size={16} />
                  </button>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-serif mb-2">Welcome back, {user.name}</h2>
                  <p className="text-[#c19355] font-medium tracking-wide uppercase text-sm">Gold Member</p>
                  <div className="mt-4 flex gap-4 justify-center md:justify-start">
                    <div className="text-center px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                      <span className="block text-xl font-bold">12</span>
                      <span className="text-xs text-gray-300 uppercase tracking-wider">Orders</span>
                    </div>
                    <div className="text-center px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                      <span className="block text-xl font-bold">5</span>
                      <span className="text-xs text-gray-300 uppercase tracking-wider">Wishlist</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-[#004A2B]/5 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-[#F6F6DB] rounded-full text-[#004A2B] group-hover:bg-[#004A2B] group-hover:text-[#F6F6DB] transition-colors">
                    <Package size={24} />
                  </div>
                  <span className="text-3xl font-serif text-[#004A2B]">12</span>
                </div>
                <p className="text-gray-500 text-sm font-medium">Total Orders</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#004A2B]/5 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-[#F6F6DB] rounded-full text-[#004A2B] group-hover:bg-[#004A2B] group-hover:text-[#F6F6DB] transition-colors">
                    <Heart size={24} />
                  </div>
                  <span className="text-3xl font-serif text-[#004A2B]">5</span>
                </div>
                <p className="text-gray-500 text-sm font-medium">Wishlist Items</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#004A2B]/5 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-[#F6F6DB] rounded-full text-[#004A2B] group-hover:bg-[#004A2B] group-hover:text-[#F6F6DB] transition-colors">
                    <CreditCard size={24} />
                  </div>
                  <span className="text-xs font-bold text-[#004A2B] bg-[#F6F6DB] px-2 py-1 rounded uppercase tracking-wider">Active</span>
                </div>
                <p className="text-gray-500 text-sm font-medium">Payment Methods</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-8 rounded-xl border border-[#004A2B]/5 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-serif text-[#004A2B]">Recent Activity</h3>
                <button onClick={() => setActiveTab('orders')} className="text-sm text-[#c19355] hover:text-[#004A2B] font-medium transition-colors">View All</button>
              </div>
              <div className="space-y-4">
                {PRODUCTS.slice(0, 2).map((product, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-[#F6F6DB]/30 border border-[#004A2B]/5 rounded-lg hover:bg-[#F6F6DB]/50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-md overflow-hidden border border-gray-100">
                         <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-[#004A2B] font-medium">Order #{2450 + i}</p>
                        <p className="text-sm text-gray-500">Delivered on Nov {20 - i}, 2024</p>
                      </div>
                    </div>
                    <div className="text-right">
                       <p className="text-[#004A2B] font-medium">${product.price}</p>
                       <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Delivered</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'orders':
        return (
          <div className="bg-white p-8 rounded-xl border border-[#004A2B]/5 shadow-sm min-h-[400px]">
            <h3 className="text-2xl font-serif text-[#004A2B] mb-6">Order History</h3>
            <div className="space-y-6">
               {PRODUCTS.slice(0, 4).map((product, i) => (
                 <div key={i} className="flex flex-col sm:flex-row items-center gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                    <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                        <h4 className="text-lg font-serif text-[#004A2B]">{product.name}</h4>
                        <span className="text-[#c19355] font-bold">${product.price}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">Order placed on October {15 + i}, 2024</p>
                      <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                        <button className="px-4 py-2 bg-[#004A2B] text-white text-sm rounded hover:bg-[#003820] transition-colors">View Details</button>
                        <button className="px-4 py-2 border border-[#004A2B] text-[#004A2B] text-sm rounded hover:bg-[#F6F6DB] transition-colors">Invoice</button>
                      </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        );
      case 'wishlist':
        return (
          <div className="bg-white p-8 rounded-xl border border-[#004A2B]/5 shadow-sm min-h-[400px]">
            <h3 className="text-2xl font-serif text-[#004A2B] mb-6">My Wishlist</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {PRODUCTS.slice(2, 6).map((product) => (
                 <div key={product.id} className="group relative bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                   <div className="aspect-[4/5] bg-[#F6F6DB] overflow-hidden relative">
                     <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-50 transition-colors shadow-sm z-10">
                       <Heart size={18} fill="currentColor" />
                     </button>
                     <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button onClick={() => navigate(`/product/${product.id}`)} className="bg-white text-[#004A2B] px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#004A2B] hover:text-white">
                          View Product
                        </button>
                     </div>
                   </div>
                   <div className="p-4">
                     <h4 className="text-[#004A2B] font-medium font-serif text-lg mb-1">{product.name}</h4>
                     <p className="text-[#c19355] font-bold">${product.price}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white p-8 rounded-xl border border-[#004A2B]/5 shadow-sm">
            <h3 className="text-2xl font-serif text-[#004A2B] mb-8">Account Settings</h3>
            
            <div className="space-y-8">
              <section>
                <h4 className="text-lg text-[#004A2B] mb-4 flex items-center gap-2 font-medium border-b border-gray-100 pb-2">
                  <User size={18} /> Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={settingsForm.name} 
                      onChange={handleSettingsChange}
                      className="w-full p-3 bg-[#F6F6DB]/30 border border-[#004A2B]/10 rounded-lg focus:border-[#c19355] focus:ring-1 focus:ring-[#c19355] outline-none transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={settingsForm.email} 
                      onChange={handleSettingsChange}
                      className="w-full p-3 bg-[#F6F6DB]/30 border border-[#004A2B]/10 rounded-lg focus:border-[#c19355] focus:ring-1 focus:ring-[#c19355] outline-none transition-all" 
                    />
                  </div>
                </div>
              </section>

              <section>
                <h4 className="text-lg text-[#004A2B] mb-4 flex items-center gap-2 font-medium border-b border-gray-100 pb-2">
                  <MapPin size={18} /> Shipping Address
                </h4>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Street Address</label>
                    <input 
                      type="text" 
                      name="street"
                      placeholder="123 Design Street" 
                      value={settingsForm.street}
                      onChange={handleSettingsChange}
                      className="w-full p-3 bg-[#F6F6DB]/30 border border-[#004A2B]/10 rounded-lg focus:border-[#c19355] focus:ring-1 focus:ring-[#c19355] outline-none transition-all" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">City</label>
                      <input 
                        type="text" 
                        name="city"
                        placeholder="New York" 
                        value={settingsForm.city}
                        onChange={handleSettingsChange}
                        className="w-full p-3 bg-[#F6F6DB]/30 border border-[#004A2B]/10 rounded-lg focus:border-[#c19355] focus:ring-1 focus:ring-[#c19355] outline-none transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Postal Code</label>
                      <input 
                        type="text" 
                        name="zip"
                        placeholder="10001" 
                        value={settingsForm.zip}
                        onChange={handleSettingsChange}
                        className="w-full p-3 bg-[#F6F6DB]/30 border border-[#004A2B]/10 rounded-lg focus:border-[#c19355] focus:ring-1 focus:ring-[#c19355] outline-none transition-all" 
                      />
                    </div>
                  </div>
                </div>
              </section>

              <div className="pt-6 border-t border-gray-100 flex justify-end">
                <button 
                  onClick={saveSettings}
                  className="bg-[#004A2B] text-white px-8 py-3 rounded-lg hover:bg-[#003820] transition-colors uppercase tracking-widest text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="pt-32 pb-20 bg-[#Fcfcfc] min-h-screen manrope-para">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Sidebar */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white p-4 lg:p-6 rounded-xl border border-[#004A2B]/5 shadow-sm sticky top-32">
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`sidebar-item flex-shrink-0 lg:w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeTab === item.id 
                        ? 'bg-[#004A2B] text-white shadow-md lg:translate-x-1' 
                        : 'text-gray-500 hover:bg-[#F6F6DB] hover:text-[#004A2B]'
                    }`}
                  >
                    <item.icon size={18} />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </button>
                ))}
              </div>

              <div className="mt-4 lg:mt-8 pt-4 lg:pt-8 border-t border-gray-100">
                <button 
                  onClick={handleLogout}
                  className="sidebar-item w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut size={18} />
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div ref={contentRef} className="flex-1 min-w-0">
            {renderContent()}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
