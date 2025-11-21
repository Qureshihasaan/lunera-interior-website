import React from 'react';
import { SERVICES } from '../constants';
import { Layout, Sofa, Lamp, Check } from 'lucide-react';

const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'Layout': return <Layout size={48} />;
      case 'Sofa': return <Sofa size={48} />;
      case 'Lamp': return <Lamp size={48} />;
      default: return <Layout size={48} />;
    }
  };

  return (
    <div className="pt-32 pb-20 manrope-para">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl  text-primary mb-6">Comprehensive Design</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From initial concept to final installation, Lunera offers a full suite of architectural and interior design services tailored to your lifestyle.
            </p>
          </div>

          <div className="space-y-24">
             {SERVICES.map((service, index) => (
               <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                 {/* Image Placeholder */}
                 <div className="w-full md:w-1/2 aspect-video bg-gray-200 overflow-hidden relative">
                    <img 
                      src={`https://picsum.photos/id/${120 + index}/800/600`} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
                 
                 {/* Text Content */}
                 <div className="w-full md:w-1/2 space-y-6">
                    <div className="text-secondary mb-4">
                      {getIcon(service.iconName)}
                    </div>
                    <h2 className="text-3xl  text-primary">{service.title}</h2>
                    <p className="text-gray-600 leading-loose text-lg">
                      {service.description} We focus on creating spaces that are not only visually stunning but also deeply personal and functional. Our team works closely with you to understand your vision.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3 text-gray-700">
                        <Check size={16} className="text-secondary" /> Initial Consultation & Space Planning
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <Check size={16} className="text-secondary" /> 3D Visualization & Rendering
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <Check size={16} className="text-secondary" /> Procurement & Installation
                      </li>
                    </ul>
                 </div>
               </div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default Services;
