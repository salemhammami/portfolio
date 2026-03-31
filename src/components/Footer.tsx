import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-50 border-t border-brand-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter mb-6 block">
            Salem Hammami<span className="text-brand-500">.</span>
          </Link>
          <p className="text-brand-600 max-w-md mb-8">
            Senior UX/UI Designer with 10+ years of experience crafting meaningful digital experiences for international clients.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/salem-hammami/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-white border border-brand-100 hover:text-brand-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white border border-brand-100 hover:text-brand-500 transition-colors">
              <Twitter size={20} />
            </a>
            <a 
              href="https://github.com/salemhammami" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-white border border-brand-100 hover:text-brand-500 transition-colors"
            >
              <Github size={20} />
            </a>
            <a href="mailto:hammamisalem@gmail.com" className="p-2 rounded-full bg-white border border-brand-100 hover:text-brand-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Navigation</h4>
          <ul className="space-y-4 text-brand-600">
            <li><Link to="/" className="hover:text-brand-500 transition-colors">Home</Link></li>
            <li><Link to="/projects" className="hover:text-brand-500 transition-colors">Projects</Link></li>
            <li><Link to="/about" className="hover:text-brand-500 transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-brand-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-brand-600">
            <li>Remote Worldwide</li>
            <li>hammamisalem@gmail.com</li>
            <li>+216 55 695 105</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-100 text-center text-sm text-brand-500">
        <p>© {new Date().getFullYear()} Salem Hammami. All rights reserved.</p>
      </div>
    </footer>
  );
};
