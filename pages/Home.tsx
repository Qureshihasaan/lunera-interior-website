import React from 'react';
import Hero from '../components/Hero';
import { SERVICES } from '../constants';
import { ArrowRight, Layout, Sofa, Lamp, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const featureList = [
  'Bespoke moodboards & styling kits',
  'Curated lighting and decor sourcing',
  'On-site art direction and staging',
  'Turn-key project management',
];

const Home: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout size={36} />;
      case 'Sofa':
        return <Sofa size={36} />;
      case 'Lamp':
        return <Lamp size={36} />;
      default:
        return <Layout size={36} />;
    }
  };

  return (
    <div className="bg-[#f9f6f1] text-[#1a1a1a]">
      <Hero />

      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid gap-14 md:grid-cols-2 items-center">
          <div>
            <p className="uppercase text-xs tracking-[0.5em] text-[#7b7a73] mb-4">Our Promise</p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#141413]">Make your dream home.</h2>
            <p className="text-lg text-[#4c4c4c] mt-6">
              Our multidisciplinary team creates layered spaces with thoughtful detailing, sculpted lighting and curated
              materials that feel personal and enduring.
            </p>
            <div className="mt-10 grid gap-4">
              {featureList.map((item) => (
                <div key={item} className="flex items-center gap-3 text-[#3f3f3f]">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#eae2d3] flex items-center justify-center text-secondary">
                    <Check size={18} />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-[60px] overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80"
                alt="Bedroom detail"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-[60px] overflow-hidden shadow-lg translate-y-10">
              <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80"
                alt="Living room vignette"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 justify-between items-end mb-16">
            <div>
              <p className="uppercase text-xs tracking-[0.5em] text-secondary">Our Expertise</p>
              <h2 className="text-4xl font-serif text-primary mt-3">Design Services</h2>
            </div>
            <Link
              to="/shop"
              className="flex items-center gap-2 text-primary font-medium tracking-[0.3em] uppercase text-xs hover:text-secondary transition-colors"
            >
              See Projects <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="p-8 rounded-[40px] border border-[#efe5d8] bg-[#fdfaf3] hover:-translate-y-1 hover:shadow-lg hover:border-secondary/30 transition-all duration-300"
              >
                <div className="text-primary mb-6 group-hover:text-secondary transition-colors">{getIcon(service.iconName)}</div>
                <h3 className="text-2xl font-serif text-primary mb-3">{service.title}</h3>
                <p className="text-sm text-[#5f5f5f] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="bg-white rounded-[50px] p-10 shadow-2xl border border-[#f0e4d6]">
            <p className="uppercase text-xs tracking-[0.5em] text-secondary">Studio</p>
            <h3 className="text-4xl md:text-5xl font-serif text-[#1b1a17] mt-4 mb-6">We curate calm, tactile spaces.</h3>
            <p className="text-[#5a5a5a] text-lg leading-relaxed mb-10">
              From concept to installation, we handle every detail: drafting, sourcing, site coordination and layered
              styling that tells your story.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['Residential Concepts', 'Bespoke Furniture', 'Material Libraries', 'Art Direction'].map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 rounded-full bg-[#f3ede1] text-sm font-medium text-[#4c4c4c]"
                >
                  {chip}
                </span>
              ))}
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-secondary font-semibold tracking-[0.3em] uppercase text-xs hover:text-primary transition-colors"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative bg-[#f9cf82] rounded-[90px] p-10 overflow-hidden text-[#1b1a17]">
            <div className="max-w-md">
              <p className="uppercase text-xs tracking-[0.5em] text-[#7a5a1d]">Collaborate</p>
              <h3 className="text-4xl font-serif mt-4 mb-4">Interested in working with us?</h3>
              <p className="text-[#5a4b32] mb-8 leading-relaxed">
                If you have a passion for creating beautiful and functional spaces, visit our contact page and share the
                details of your project. We respond within 2 business days.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white text-sm font-semibold tracking-[0.3em] uppercase hover:bg-primary-dark transition-colors"
              >
                Explore
              </Link>
            </div>
            <img
              src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=80"
              alt="Styled vignette"
              className="absolute bottom-0 right-6 w-36 md:w-44 rounded-t-[80px] border-4 border-white object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;