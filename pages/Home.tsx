import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import DesignAssistant from '../components/DesignAssistant';
import { PRODUCTS, SERVICES, TESTIMONIALS } from '../constants';
import { ArrowRight, Layout, Sofa, Lamp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Helper to get icon
  const getIcon = (name: string) => {
    switch(name) {
      case 'Layout': return <Layout size={32} />;
      case 'Sofa': return <Sofa size={32} />;
      case 'Lamp': return <Lamp size={32} />;
      default: return <Layout size={32} />;
    }
  };

  return (
    <div className="animate-fade-in">
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase tracking-widest text-xs font-bold">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mt-2">Design Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-8 border border-gray-100 hover:border-secondary hover:shadow-lg transition-all duration-300 group text-center">
                <div className="text-primary mb-6 flex justify-center group-hover:text-secondary transition-colors">
                  {getIcon(service.iconName)}
                </div>
                <h3 className="text-xl font-serif text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
             <div>
                <span className="text-secondary uppercase tracking-widest text-xs font-bold">Curated</span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mt-2">New Arrivals</h2>
             </div>
             <Link to="/shop" className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors">
               View All <ArrowRight size={16} />
             </Link>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {PRODUCTS.slice(0, 4).map((product) => (
               <ProductCard key={product.id} product={product} />
             ))}
           </div>
           
           <div className="mt-12 text-center md:hidden">
              <Link to="/shop" className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors">
               View All <ArrowRight size={16} />
             </Link>
           </div>
        </div>
      </section>

      {/* AI Design Assistant */}
      <DesignAssistant />

      {/* Gallery/Cta */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/800?grayscale')] bg-cover bg-center bg-fixed">
           <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
           <h2 className="text-3xl md:text-5xl font-serif mb-6">Transform Your Home Into a Sanctuary</h2>
           <p className="text-lg text-gray-200 mb-10 font-light">Schedule a consultation with our expert team or browse our exclusive collections.</p>
           <button className="bg-secondary hover:bg-white hover:text-primary text-white px-10 py-4 font-medium tracking-widest uppercase transition-all">
             Book Consultation
           </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
            <span className="text-secondary uppercase tracking-widest text-xs font-bold">Reviews</span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mt-2">Client Stories</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {TESTIMONIALS.map((item) => (
               <div key={item.id} className="bg-background p-8">
                 <div className="flex gap-1 text-secondary mb-4">
                   {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                 </div>
                 <p className="text-gray-600 italic mb-6 leading-loose">"{item.text}"</p>
                 <div className="flex items-center gap-4">
                   <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                   <div>
                     <h4 className="text-sm font-bold text-primary">{item.name}</h4>
                     <p className="text-xs text-gray-500 uppercase">{item.role}</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
