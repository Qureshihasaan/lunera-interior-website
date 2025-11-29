import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Background image subtle zoom
    tl.from(bgRef.current, {
      scale: 1.1,
      duration: 1.5,
    });

    // Title animation - split lines
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
    }, '-=1');

    // Button animation
    tl.from(buttonRef.current, {
      y: 30,
      opacity: 1,
      duration: 0.8,
    }, '-=0.6');
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        ref={bgRef}
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
        <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#F6F6DB] tracking-wide leading-tight mb-8">
          ILLUMINATE
          <br />
          EVERYDAY LIVING
        </h1>

        <Link
          ref={buttonRef}
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
