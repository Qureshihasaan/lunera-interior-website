import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Services from './pages/Services';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => setLoading(false), 2500);
  }, []);

    if (loading) return <Loader />;

  return (
    <AuthProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen font-sans">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/services" element={<Services />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
