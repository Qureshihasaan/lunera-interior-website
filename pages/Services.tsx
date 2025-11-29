import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../constants';
import { Layout, Sofa, Lamp, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const getIcon = (name: string) => {
    switch(name) {
      case 'Layout': return <Layout size={48} />;
      case 'Sofa': return <Sofa size={48} />;
      case 'Lamp': return <Lamp size={48} />;
      default: return <Layout size={48} />;
    }
  };

  useGSAP(() => {
    // Header animation
    gsap.from(headerRef.current?.querySelector('h1'), {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(headerRef.current?.querySelector('p'), {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out"
    });

    // Service items animation
    gsap.utils.toArray('.service-item').forEach((item: any, index) => {
      const isEven = index % 2 === 0;
      
      gsap.from(item.querySelector('.service-image'), {
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
        },
        x: isEven ? -60 : 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(item.querySelector('.service-content'), {
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
        },
        x: isEven ? 60 : -60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
      });

      gsap.from(item.querySelectorAll('.service-feature'), {
        scrollTrigger: {
          trigger: item,
          start: "top 70%",
        },
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.4,
        ease: "power2.out"
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-32 pb-20 manrope-para">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl  text-[#c19355] mb-6">Comprehensive Design</h1>
            <p className="text-[#F6F6DB] max-w-3xl mx-auto text-lg">
              From initial concept to final installation, Lunera offers a full suite of architectural and interior design services tailored to your lifestyle.
            </p>
          </div>

          <div className="space-y-24">
             {SERVICES.map((service, index) => (
               <div key={service.id} className={`service-item flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                 {/* Image Placeholder */}
                 <div className="service-image w-full md:w-1/2 aspect-video bg-gray-200 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
                 
                 {/* Text Content */}
                 <div className="service-content w-full md:w-1/2 space-y-6">
                    <div className="text-[#C19355] mb-4">
                      {getIcon(service.iconName)}
                    </div>
                    <h2 className="text-3xl  text-[#C19355]">{service.title}</h2>
                    <p className="text-[#F6F6DB] leading-loose text-lg">
                      {service.description} We focus on creating spaces that are not only visually stunning but also deeply personal and functional. Our team works closely with you to understand your vision.
                    </p>
                    <ul className="space-y-2">
                      <li className="service-feature flex items-center gap-3 text-[#F6F6DB]">
                        <Check size={16} className="text-[#C19355]" /> Initial Consultation & Space Planning
                      </li>
                      <li className="service-feature flex items-center gap-3 text-[#F6F6DB]">
                        <Check size={16} className="text-[#C19355]" /> 3D Visualization & Rendering
                      </li>
                      <li className="service-feature flex items-center gap-3 text-[#F6F6DB]">
                        <Check size={16} className="text-[#C19355]" /> Procurement & Installation
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
