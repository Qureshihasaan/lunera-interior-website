import React from 'react';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import Philosophy from '../components/Philosophy';

const Home: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      <Hero />
      <Collections />
      <Philosophy />
    </div>
  );
};

export default Home;