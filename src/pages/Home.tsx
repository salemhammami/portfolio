import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Figma, Layout, Palette, PenTool, Smartphone, TestTube } from "lucide-react";
import { projects } from "@/src/data/projects";
import { ProjectCard } from "@/src/components/ProjectCard";
import { ImageModal } from "@/src/components/ImageModal";

const clients = [
  { name: "Partner 1", logo: "/Selected Partners/Plaquette-Artplus-01.jpg" },
  { name: "Partner 2", logo: "/Selected Partners/Plaquette-Artplus-02.jpg" },
  { name: "Partner 3", logo: "/Selected Partners/Plaquette-Artplus-03.jpg" },
  { name: "Partner 4", logo: "/Selected Partners/Plaquette-Artplus-04.jpg" },
  { name: "Partner 5", logo: "/Selected Partners/Plaquette-Artplus-05.jpg" },
  { name: "Partner 6", logo: "/Selected Partners/Plaquette-Artplus-06.jpg" },
  { name: "Partner 7", logo: "/Selected Partners/Plaquette-Artplus-07.jpg" },
  { name: "Partner 8", logo: "/Selected Partners/Plaquette-Artplus-08.jpg" },
  { name: "Partner 9", logo: "/Selected Partners/Plaquette-Artplus-09.jpg" },
  { name: "Partner 10", logo: "/Selected Partners/Plaquette-Artplus-10.jpg" },
  { name: "Partner 11", logo: "/Selected Partners/Plaquette-Artplus-11.jpg" },
  { name: "Partner 12", logo: "/Selected Partners/Plaquette-Artplus-12.jpg" },
  { name: "Partner 13", logo: "/Selected Partners/Plaquette-Artplus-13.jpg" },
  { name: "Partner 14", logo: "/Selected Partners/Plaquette-Artplus-14.jpg" },
  { name: "Partner 15", logo: "/Selected Partners/Plaquette-Artplus-15.jpg" },
];

const skills = [
  { name: "Design Thinking", icon: <Layout size={24} /> },
  { name: "User Research", icon: <CheckCircle2 size={24} /> },
  { name: "Wireframing", icon: <PenTool size={24} /> },
  { name: "Prototyping", icon: <Smartphone size={24} /> },
  { name: "Usability Testing", icon: <TestTube size={24} /> },
  { name: "Visual Design", icon: <Palette size={24} /> },
];

export const Home = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white overflow-hidden relative">
      {/* Hero Section - Artistic Split Layout */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center p-6 md:p-12 lg:p-24 overflow-hidden">
        {/* Atmospheric Background */}
        <div className="absolute inset-0 atmosphere z-0" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center gap-12"
          >
            <div className="relative max-w-[200px] md:max-w-[290px] flex-shrink-0">
              <div className="relative aspect-square rounded-full overflow-hidden border-2 border-brand-900/10 shadow-2xl group">
                <img 
                  src="/profile.jpg" 
                  alt="Salem Hammami" 
                  className="w-full h-full object-cover transition-all duration-700 hover:grayscale hover:scale-110"                />
                <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-1 -right-1 w-20 h-20 rounded-full glass flex items-center justify-center text-center p-2 shadow-xl border border-white/40 z-10"
              >
                <span className="text-[8px] font-mono uppercase tracking-tighter leading-tight">
                  Available for <br /> <span className="text-brand-500 font-bold">New Projects</span>
                </span>
              </motion.div>
            </div>

            <div className="max-w-4xl">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-500 block mb-4">
                  Creative UX/UI Designer — Graphic Designer
                </span>
                <h1 className="title-xl text-brand-900">
                  Crafting <br />
                  <span className="title-serif text-brand-500">Digital</span> <br />
                  Poetry.
                </h1>
              </div>
              
              <p className="mt-12 text-xl md:text-2xl text-brand-600 max-w-xl mx-auto leading-relaxed font-light">
                Salem Hammami — 10+ years of experience translating complex requirements into <span className="italic font-serif">intuitive, human-centered</span> design systems.
              </p>

              <div className="mt-12 flex items-center justify-center gap-8">
                <Link
                  to="/projects"
                  className="group flex items-center gap-4 text-lg font-bold"
                >
                  <span className="w-12 h-12 rounded-full border border-brand-900 flex items-center justify-center group-hover:bg-brand-900 group-hover:text-white transition-all duration-500">
                    <ArrowRight size={20} />
                  </span>
                  <span className="border-b border-transparent group-hover:border-current transition-all">Explore Work</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="space-y-48 pb-48">
        {/* Clients Section - Manual Scroll */}
        <section className="py-24 border-y border-brand-100 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-400">
              Selected Partners
            </span>
            <div className="flex gap-6">
              <button 
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-brand-200 flex items-center justify-center hover:bg-brand-900 hover:text-white transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-brand-200 flex items-center justify-center hover:bg-brand-900 hover:text-white transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div 
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex overflow-x-auto scrollbar-hide gap-0 items-center px-1 md:px-6 ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
            style={{ scrollSnapType: isDragging ? 'none' : 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {clients.map((client, idx) => (
              <div 
                key={`${client.name}-${idx}`} 
                className="w-48 h-24 md:w-72 md:h-36 flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 hover:scale-125 hover:z-10 opacity-100 transition-all duration-500 scroll-snap-align-start"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-full object-contain pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects - Asymmetrical Grid */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24">
              <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8">
                The <span className="title-serif">Archive</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`md:col-span-6 ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
                >
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
            
            <div className="mt-32 flex justify-center">
              <Link to="/projects" className="group relative px-12 py-6 overflow-hidden rounded-full border border-brand-900">
                <span className="relative z-10 font-bold group-hover:text-white transition-colors duration-500">View All Projects</span>
                <div className="absolute inset-0 bg-brand-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section - Hardware/Specialist Aesthetic */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 sticky top-24">
                <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
                  The <br /> <span className="title-serif">Method</span>
                </h2>
                <p className="text-xl text-brand-600 font-light leading-relaxed mb-12">
                  A systematic approach to creativity. Bridging the gap between technical complexity and human intuition.
                </p>
                
                <div className="p-8 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4">
                    <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                  </div>
                  <p className="text-lg font-serif italic text-brand-900 mb-6">
                    "Salem's attention to detail and ability to translate complex requirements into intuitive designs is exceptional."
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-500">Product Lead, EDF</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="bg-brand-50 border border-brand-100 p-10 rounded-3xl hover:border-brand-500 transition-all duration-500 group"
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div className="text-brand-500 group-hover:scale-110 transition-transform duration-500">{skill.icon}</div>
                      <span className="text-[10px] font-mono text-brand-400">0{skills.indexOf(skill) + 1}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-4">{skill.name}</h4>
                    <p className="text-sm text-brand-600 font-light mb-6">
                      Expertise in delivering high-quality {skill.name.toLowerCase()} solutions.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Immersive */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto relative group">
            <div className="absolute inset-0 bg-brand-900 rounded-3xl scale-[0.98] group-hover:scale-100 transition-transform duration-700" />
            <div className="relative z-10 p-12 md:p-32 text-center">
              <h2 className="text-5xl md:text-[8vw] leading-none font-display font-bold tracking-tighter text-white mb-12">
                Let's <span className="title-serif">Create</span>.
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-6 text-2xl font-serif italic text-white/60 hover:text-white transition-colors"
              >
                Start a conversation <ArrowRight size={32} />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <ImageModal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        imageSrc={selectedImage} 
      />
    </div>
  );
};
