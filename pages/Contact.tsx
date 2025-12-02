import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate form submission
  };

  return (
    <div className="pt-24 pb-20 bg-[#004A2B] min-h-screen manrope-para text-[#F6F6DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-[#c19355] mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our products, need design advice, or just want to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#003d23] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#c19355] mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#002b19] rounded-full text-[#c19355]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-gray-400">hello@lunora.com</p>
                    <p className="text-gray-400">support@lunora.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#002b19] rounded-full text-[#c19355]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#002b19] rounded-full text-[#c19355]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Showroom</h4>
                    <p className="text-gray-400">123 Luxury Lane</p>
                    <p className="text-gray-400">New York, NY 10012</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#003d23] p-8 rounded-lg shadow-lg">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-[#c19355] rounded-full flex items-center justify-center mb-6">
                  <Send size={32} className="text-[#004B2A]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#c19355] mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thank you for contacting us. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[#c19355] hover:text-[#d4a86a] underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-semibold text-[#c19355] mb-6">Send a Message</h3>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-[#002b19] border border-[#004B2A] rounded p-3 text-[#F6F6DB] focus:outline-none focus:border-[#c19355]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-[#002b19] border border-[#004B2A] rounded p-3 text-[#F6F6DB] focus:outline-none focus:border-[#c19355]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Subject</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-[#002b19] border border-[#004B2A] rounded p-3 text-[#F6F6DB] focus:outline-none focus:border-[#c19355]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full bg-[#002b19] border border-[#004B2A] rounded p-3 text-[#F6F6DB] focus:outline-none focus:border-[#c19355]"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full px-6 py-4 bg-[#c19355] text-[#004B2A] font-semibold uppercase tracking-wider hover:bg-[#d4a86a] transition-all flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
