import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: 'url("https://picsum.photos/1920/1080?grayscale")' }}
      >
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <span className="text-secondary tracking-[0.3em] uppercase text-sm font-semibold mb-4 animate-fade-in-up">
          Est. 2024
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 max-w-4xl leading-tight">
          Redefining Luxury <br /> <span className="italic text-secondary-light">Living Spaces</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-10 font-light">
          Curated collections for the modern sophisticate. Where timeless design meets contemporary comfort.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/shop"
            className="bg-secondary hover:bg-white hover:text-primary text-white px-8 py-4 rounded-none font-medium tracking-widest uppercase transition-all duration-300 flex items-center gap-2 group"
          >
            Shop Collection
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/services"
            className="border border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-none font-medium tracking-widest uppercase transition-all duration-300"
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
