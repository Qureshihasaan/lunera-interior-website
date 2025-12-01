import React, { useState, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Package, Settings, Heart, User, ChevronRight, MapPin, CreditCard, Bell } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    navigate('/login');
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
            <div className="bg-[#F6F6DB] p-8 border border-[#004A2B]/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c19355]/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-700"></div>
              <div className="flex items-center gap-6 relative z-10">
                <img 
                  src={user.avatar || "https://via.placeholder.com/150"} 
                  alt={user.name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div>
                  <h2 className="text-3xl font-serif text-[#004A2B] mb-1">Welcome back, {user.name}</h2>
                  <p className="text-[#c19355] font-medium">Gold Member</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 border border-[#004A2B]/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-[#F6F6DB] rounded-full text-[#004A2B]">
                    <Package size={20} />
                  </div>
                  <span className="text-2xl font-serif text-[#004A2B]">12</span>
                </div>
                <p className="text-gray-500 text-sm">Total Orders</p>
              </div>
              <div className="bg-white p-6 border border-[#004A2B]/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-[#F6F6DB] rounded-full text-[#004A2B]">
                    <Heart size={20} />
                  </div>
                  <span className="text-2xl font-serif text-[#004A2B]">5</span>
                </div>
                <p className="text-gray-500 text-sm">Wishlist Items</p>
              </div>
              <div className="bg-white p-6 border border-[#004A2B]/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-[#F6F6DB] rounded-full text-[#004A2B]">
                    <CreditCard size={20} />
                  </div>
                  <span className="text-sm font-medium text-[#004A2B] bg-[#F6F6DB] px-2 py-1 rounded">Active</span>
                </div>
                <p className="text-gray-500 text-sm">Payment Methods</p>
              </div>
            </div>

            <div className="bg-white p-8 border border-[#004A2B]/5 shadow-sm">
              <h3 className="text-xl font-serif text-[#004A2B] mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {[1, 2].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-[#F6F6DB]/30 border border-[#004A2B]/5 hover:bg-[#F6F6DB]/50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#004A2B]/5 flex items-center justify-center text-[#004A2B]">
                        <Package size={20} />
                      </div>
                      <div>
                        <p className="text-[#004A2B] font-medium">Order #245{i}8</p>
                        <p className="text-sm text-gray-500">Delivered on Nov {20 - i}, 2024</p>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-[#c19355] group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'orders':
        return (
          <div className="bg-white p-8 border border-[#004A2B]/5 shadow-sm min-h-[400px]">
            <h3 className="text-2xl font-serif text-[#004A2B] mb-6">Order History</h3>
            <div className="text-center py-12">
              <Package size={48} className="mx-auto text-[#c19355] mb-4 opacity-50" />
              <p className="text-gray-500">No recent orders found.</p>
              <button onClick={() => navigate('/shop')} className="mt-4 text-[#004A2B] hover:text-[#c19355] font-medium text-sm uppercase tracking-widest border-b border-[#004A2B] hover:border-[#c19355] transition-colors pb-1">
                Start Shopping
              </button>
            </div>
          </div>
        );
      case 'wishlist':
        return (
          <div className="bg-white p-8 border border-[#004A2B]/5 shadow-sm min-h-[400px]">
            <h3 className="text-2xl font-serif text-[#004A2B] mb-6">My Wishlist</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {/* Placeholder Wishlist Items */}
               {[1, 2, 3].map((item) => (
                 <div key={item} className="group relative">
                   <div className="aspect-[4/5] bg-[#F6F6DB] mb-4 overflow-hidden">
                     <img src={`https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   </div>
                   <h4 className="text-[#004A2B] font-medium">Minimalist Lamp</h4>
                   <p className="text-[#c19355]">$120.00</p>
                   <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-50 transition-colors">
                     <Heart size={16} fill="currentColor" />
                   </button>
                 </div>
               ))}
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white p-8 border border-[#004A2B]/5 shadow-sm">
            <h3 className="text-2xl font-serif text-[#004A2B] mb-8">Account Settings</h3>
            
            <div className="space-y-8">
              <section>
                <h4 className="text-lg text-[#004A2B] mb-4 flex items-center gap-2">
                  <User size={18} /> Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                    <input type="text" defaultValue={user.name} className="w-full p-3 bg-[#F6F6DB]/30 border border-[#004A2B]/10 focus:border-[#c19355] outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                    <input type="email" defaultValue={user.email} className="w-full p-3 bg-[#F6F6DB]/30 border border-[#004A2B]/10 focus:border-[#c19355] outline-none transition-colors" />
                  </div>
                </div>
              </section>

              <section>
                <h4 className="text-lg text-[#004A2B] mb-4 flex items-center gap-2">
                  <MapPin size={18} /> Shipping Address
                </h4>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Street Address</label>
                    <input type="text" placeholder="123 Design Street" className="w-full p-3 bg-[#F6F6DB]/30 border border-[#004A2B]/10 focus:border-[#c19355] outline-none transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">City</label>
                      <input type="text" placeholder="New York" className="w-full p-3 bg-[#F6F6DB]/30 border border-[#004A2B]/10 focus:border-[#c19355] outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Postal Code</label>
                      <input type="text" placeholder="10001" className="w-full p-3 bg-[#F6F6DB]/30 border border-[#004A2B]/10 focus:border-[#c19355] outline-none transition-colors" />
                    </div>
                  </div>
                </div>
              </section>

              <div className="pt-6 border-t border-gray-100">
                <button className="bg-[#004A2B] text-white px-8 py-3 hover:bg-[#003820] transition-colors uppercase tracking-widest text-sm">
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
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 border border-[#004A2B]/5 shadow-sm sticky top-32">
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`sidebar-item w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      activeTab === item.id 
                        ? 'bg-[#004A2B] text-white shadow-md translate-x-1' 
                        : 'text-gray-500 hover:bg-[#F6F6DB] hover:text-[#004A2B]'
                    }`}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <button 
                  onClick={handleLogout}
                  className="sidebar-item w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={18} />
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div ref={contentRef} className="flex-1">
            {renderContent()}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
