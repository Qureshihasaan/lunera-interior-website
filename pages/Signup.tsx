import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Loader2 } from 'lucide-react';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      await signup(name, email, password);
      navigate('/profile');
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-background manrope-para">
      <div className="w-full max-w-md bg-[#F6F6DB] p-8 md:p-12 shadow-xl border border-gray-100">
        <div className="text-center mb-10">
          <img src="/lunora-logo.png" alt="Lunora logo" className="mx-auto h-14 w-auto mb-4" />
          <p className="text-gray-500 text-sm uppercase tracking-widest">Join The Community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-gray-800"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-gray-800"
              placeholder="name@example.com"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-gray-800"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary hover:bg-primary-dark text-white py-4 font-medium tracking-widest uppercase transition-all duration-300 disabled:opacity-70 flex justify-center items-center gap-2"
          >
            {submitting ? <Loader2 size={18} className="animate-spin" /> : 'Create Account'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-secondary font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
