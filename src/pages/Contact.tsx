import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:hammamisalem@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pb-32">
      {/* Header */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
              Let's work <br />
              <span className="text-brand-500">together.</span>
            </h1>
            <p className="text-xl text-brand-600 max-w-2xl mx-auto mb-12">
              Whether you have a specific project in mind or just want to explore how we can collaborate, I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <h2 className="text-3xl font-display font-bold mb-8">Contact Information</h2>
            <div className="space-y-8">
              <a href="mailto:hammamisalem@gmail.com" className="flex items-start space-x-6 hover:text-brand-500 transition-colors">
                <div className="p-4 rounded-2xl bg-brand-50 text-brand-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-brand-600">hammamisalem@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start space-x-6">
                <div className="p-4 rounded-2xl bg-brand-50 text-brand-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-brand-600">+216 55 695 105</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="p-4 rounded-2xl bg-brand-50 text-brand-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-brand-600">Remote Worldwide</p>
                </div>
              </div>
            </div>

            <div className="p-12 rounded-[3rem] bg-brand-50 border border-brand-100">
              <h3 className="text-2xl font-display font-bold mb-4">Availability</h3>
              <p className="text-brand-600 mb-6">
                I'm currently accepting new projects for Q2 2026.
              </p>
              <div className="flex items-center text-brand-500 font-bold">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
                Available for hire
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-12 md:p-16 rounded-[3rem] bg-white border border-brand-100 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-brand-400">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 rounded-2xl bg-brand-50 border-none focus:ring-2 focus:ring-brand-500 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-brand-400">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 rounded-2xl bg-brand-50 border-none focus:ring-2 focus:ring-brand-500 transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-brand-400">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 rounded-2xl bg-brand-50 border-none focus:ring-2 focus:ring-brand-500 transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-brand-500 text-white rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center"
              >
                Send Message <Send size={20} className="ml-3" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
