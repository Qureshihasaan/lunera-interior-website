import React from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '24', label: 'Years of experience' },
  { value: '162', label: 'Projects completed' },
];

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F6F6DB] manrope-para">
      <div className="absolute top-0 left-0 w-full md:w-[75%] h-[80%] bg-[#004A2B] rounded-br-[180px]" />
      <div className="max-w-6xl mx-auto relative z-10 px-6 lg:px-8 pt-10 pb-20 md:pt-20 md:pb-28">
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] items-center">
          <div>
            <p className="uppercase text-xs tracking-[0.6em] text-[#C19355] mb-6">Interiorfirm</p>
            <h1 className="text-4xl md:text-6xl  text-[#C19355] leading-tight">
              Modern Interior
              <br />
              Design Service
            </h1>
            <p className="text-lg md:text-xl text-[#C19355] mt-6 max-w-2xl manrope-para">
              Interiorfirm is an acclaimed multidisciplinary studio specializing in interior architecture,
              interior design and décor that redefines laid-back luxury.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="px-8 py-3 rounded-full bg-[#C19355] text-[#000000] text-sm font-semibold tracking-[0.3em] uppercase shadow-lg shadow-primary/20"
              >
                Explore Now
              </Link>
              <Link
                to="/shop"
                className="px-8 py-3 rounded-full border border-[#C19355] text-[#C19355] text-sm font-semibold tracking-[0.3em] uppercase"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-10">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="text-4xl md:text-5xl  text-[#C19355]">{item.value}</p>
                  <p className="uppercase text-xs tracking-[0.4em] text-[#F6F6DB] mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#F6F6DB] rounded-[120px] p-6 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
                alt="Living room interior"
                className="w-full h-[500px] object-cover rounded-[100px]"
              />
            </div>
            <div className="absolute -left-8 md:-left-16 bottom-8 w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-[#F6F6DB] bg-[#C19355] shadow-xl" />
            <div className="absolute -bottom-10 right-6 bg-[#F6F6DB] rounded-3xl shadow-xl p-4 text-sm text-[#414141] max-w-[220px]">
              <p className=" text-lg text-[#004A2B]">Make your dream home.</p>
              <p className="text-xs mt-2 text-[#004A2B]">
                Tailored floor plans, custom furniture sourcing and styling packages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
