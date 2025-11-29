import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Layout, Sofa, Lamp } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import { SERVICES, PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

gsap.registerPlugin(ScrollTrigger);

const featureList = [
  "Bespoke Furniture",
  "Lighting Design",
  "Material Sourcing",
  "Art Curation"
];

const getIcon = (name: string) => {
  switch (name) {
    case 'Layout': return <Layout size={32} />;
    case 'Sofa': return <Sofa size={32} />;
    case 'Lamp': return <Lamp size={32} />;
    default: return <Layout size={32} />;
  }
};

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const promiseRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const studioRef = useRef<HTMLDivElement>(null);
  const collaborateRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Promise Section - text and images
    gsap.from(promiseRef.current?.querySelector('p'), {
      scrollTrigger: {
        trigger: promiseRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(promiseRef.current?.querySelector('h2'), {
      scrollTrigger: {
        trigger: promiseRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out"
    });

    gsap.from(promiseRef.current?.querySelectorAll('.feature-item'), {
      scrollTrigger: {
        trigger: promiseRef.current,
        start: "top 70%",
      },
      x: -30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out"
    });

    gsap.from(promiseRef.current?.querySelectorAll('.promise-image'), {
      scrollTrigger: {
        trigger: promiseRef.current,
        start: "top 70%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Featured Products Section
    gsap.from(".product-card", {
      scrollTrigger: {
        trigger: ".product-section",
        start: "top 75%",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Services Section - Fixed opacity bug
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 75%",
      },
      y: 50,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Studio Section
    gsap.from(studioRef.current, {
      scrollTrigger: {
        trigger: studioRef.current,
        start: "top 70%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Collaborate Section
    gsap.from(collaborateRef.current, {
      scrollTrigger: {
        trigger: collaborateRef.current,
        start: "top 85%",
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#F6F6DB] text-[#1a1a1a] manrope-para overflow-x-hidden">
      <Hero />

      <section ref={promiseRef} className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid gap-14 md:grid-cols-2 items-center">
          <div>
            <p className="uppercase text-xs tracking-[0.5em] text-[#004A2B] mb-4">Our Promise</p>
            <h2 className="text-3xl md:text-5xl text-[#004A2B]">Make your dream home.</h2>
            <p className="text-lg text-[#004A2B] mt-6">
              Our multidisciplinary team creates layered spaces with thoughtful detailing, sculpted lighting and curated
              materials that feel personal and enduring.
            </p>
            <div className="mt-10 grid gap-4">
              {featureList.map((item) => (
                <div key={item} className="feature-item flex items-center gap-3 text-[#004A2B]">
                  <div className="w-8 h-8 rounded-full bg-[#F6F6DB] border border-[#F6F6DB] flex items-center justify-center text-[#004A2B]">
                    <Check size={18} />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="promise-image rounded-[10px]  overflow-hidden shadow-lg">
              <img
                src="/diningjpg.jpg"
                alt="Bedroom detail"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="promise-image rounded-[10px]  overflow-hidden shadow-lg sm:translate-y-10">
              <img
                src="/home-sofa.jpeg"
                alt="Living room vignette"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="product-section py-20 bg-[#004A2B] text-[#F6F6DB]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 justify-between items-end mb-12">
            <div>
              <p className="uppercase text-xs tracking-[0.5em] text-[#C19355]">Collection</p>
              <h2 className="text-3xl md:text-4xl mt-3">Featured Pieces</h2>
            </div>
            <Link
              to="/shop"
              className="flex items-center gap-2 text-[#F6F6DB] font-medium tracking-[0.3em] uppercase text-xs hover:text-[#C19355] transition-colors"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((product) => (
              <div key={product.id} className="product-card">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="py-20 bg-[#F6F6DB]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 justify-between items-end mb-16">
            <div>
              <p className="uppercase text-xs tracking-[0.5em] text-[#004A2B]">Our Expertise</p>
              <h2 className="text-3xl md:text-4xl text-[#004A2B] mt-3">Design Services</h2>
            </div>
            <Link
              to="/shop"
              className="flex items-center gap-2 text-[#004A2B] font-medium tracking-[0.3em] uppercase text-xs hover:text-[#C19355] transition-colors"
            >
              See Projects <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="service-card group p-8 rounded-[10px] md:rounded-[10px] border border-[#efe5d8] bg-[#004A2B] hover:bg-[#F6F6DB] hover:-translate-y-1 hover:shadow-lg hover:border-secondary/30 transition-all duration-300"
              >
                <div className="text-[#F6F6DB] mb-6 group-hover:text-[#004A2B] transition-colors">{getIcon(service.iconName)}</div>
                <h3 className="text-2xl text-[#F6F6DB] group-hover:text-[#004A2B] mb-3 transition-colors">{service.title}</h3>
                <p className="text-sm text-[#F6F6DB] group-hover:text-[#004A2B] leading-relaxed transition-colors">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div ref={studioRef} className="bg-[#004A2B] rounded-[10px] md:rounded-[10px] p-8 md:p-10 shadow-2xl border border-[#f0e4d6]">
            <p className="uppercase text-xs tracking-[0.5em] text-[#F6F6DB]">Studio</p>
            <h3 className="text-3xl md:text-5xl text-[#C19355] mt-4 mb-6">We curate calm, tactile spaces.</h3>
            <p className="text-[#F6F6DB] text-lg leading-relaxed mb-10">
              From concept to installation, we handle every detail: drafting, sourcing, site coordination and layered
              styling that tells your story.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['Residential Concepts', 'Bespoke Furniture', 'Material Libraries', 'Art Direction'].map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 rounded-full bg-[#F6F6DB] text-sm font-medium text-[#004A2B]"
                >
                  {chip}
                </span>
              ))}
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#F6F6DB] font-semibold tracking-[0.3em] uppercase text-xs hover:text-[#C19355] transition-colors"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
          <div ref={collaborateRef} className="relative bg-[#C19355] rounded-[10px] md:rounded-[10px] p-8 md:p-10 overflow-hidden text-[#1b1a17]">
            <div className="max-w-md relative z-10">
              <p className="uppercase text-xs tracking-[0.5em] text-[#F6F6DB]">Collaborate</p>
              <h3 className="text-3xl md:text-4xl text-[#004A2B] mt-4 mb-4">Interested in working with us?</h3>
              <p className="text-[#F6F6DB] mb-8 leading-relaxed">
                If you have a passion for creating beautiful and functional spaces, visit our contact page and share the
                details of your project. We respond within 2 business days.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#004A2B] text-[#F6F6DB] text-sm font-semibold tracking-[0.3em] uppercase hover:bg-[#] transition-colors"
              >
                Explore
              </Link>
            </div>
            <img
              src="/hero_1.jpg"
              alt="Styled vignette"
              className="absolute bottom-0 right-6 w-24 md:w-44 rounded-t-[40px] md:rounded-t-[80px] border-4 border-white object-cover opacity-50 md:opacity-100"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;