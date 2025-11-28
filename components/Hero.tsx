import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat object"
        style={{
          backgroundImage: 'url("/hero_3.png")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#F6F6DB] tracking-wide leading-tight mb-8">
          ILLUMINATE
          <br />
          EVERYDAY LIVING
        </h1>

        <Link
          to="/shop"
          className="px-8 py-3 border border-[#F6F6DB] text-[#F6F6DB] text-sm tracking-[0.2em] uppercase hover:bg-secondary-light hover:text-primary transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
