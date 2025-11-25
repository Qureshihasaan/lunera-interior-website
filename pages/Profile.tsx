import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Package, Settings, Heart } from 'lucide-react';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen manrope-para">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Header */}
        <div className="bg-[#F6F6DB] p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 mb-8">
          <img 
            src={user.avatar || "https://via.placeholder.com/100"} 
            alt={user.name} 
            className="w-24 h-24 rounded-full object-cover border-4 border-background"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl  text-primary font-bold">{user.name}</h1>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-xs text-secondary font-bold uppercase tracking-widest mt-2">Gold Member</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors px-4 py-2 border border-gray-200 hover:border-red-200"
          >
            <LogOut size={16} />
            <span className="text-sm uppercase tracking-wider">Sign Out</span>
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Orders */}
          <div className="bg-[#F6F6DB] p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="w-12 h-12 bg-background text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <Package size={24} />
            </div>
            <h3 className="text-lg  text-primary mb-2">Order History</h3>
            <p className="text-gray-500 text-sm">View past transactions and track current shipments.</p>
          </div>

          {/* Wishlist */}
          <div className="bg-[#F6F6DB] p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="w-12 h-12 bg-background text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <Heart size={24} />
            </div>
            <h3 className="text-lg  text-primary mb-2">Wishlist</h3>
            <p className="text-gray-500 text-sm">Manage your saved items and design inspirations.</p>
          </div>

          {/* Settings */}
          <div className="bg-[#F6F6DB] p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="w-12 h-12 bg-background text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <Settings size={24} />
            </div>
            <h3 className="text-lg  text-primary mb-2">Account Settings</h3>
            <p className="text-gray-500 text-sm">Update your profile details, password, and preferences.</p>
          </div>
        </div>

        {/* Recent Activity / Empty State */}
        <div className="mt-12">
          <h3 className="text-xl  text-primary mb-6">Recent Activity</h3>
          <div className="bg-[#F6F6DB] p-12 text-center border border-gray-100 border-dashed">
            <p className="text-gray-400">No recent orders found.</p>
            <button onClick={() => navigate('/shop')} className="mt-4 text-secondary hover:text-primary font-medium text-sm uppercase tracking-widest">Start Shopping</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
