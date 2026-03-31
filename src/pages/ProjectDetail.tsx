import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Globe, Layout, Palette, Smartphone, TestTube } from "lucide-react";
import { projects } from "@/src/data/projects";
import { ImageModal } from "@/src/components/ImageModal";

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">Project not found</h1>
        <Link to="/projects" className="text-brand-500 font-bold flex items-center">
          <ArrowLeft size={20} className="mr-2" /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/projects" className="inline-flex items-center text-brand-500 font-bold mb-8 hover:-translate-x-1 transition-transform">
              <ArrowLeft size={20} className="mr-2" /> Back to Projects
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-4 leading-[0.9]">
                  {project.title}
                </h1>
                <p className="text-2xl text-brand-500 font-display font-bold">{project.client}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl mb-24 bg-brand-50 cursor-zoom-in"
            onClick={() => project.image && setSelectedImage(project.image)}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-12 bg-gradient-to-br from-brand-50 to-brand-100">
                <span className="text-6xl md:text-9xl font-display font-bold text-brand-200 opacity-50 select-none text-center">
                  {project.title}
                </span>
              </div>
            )}
          </motion.div>

          {/* Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
            <div className="md:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Overview</h2>
                <p className="text-xl text-brand-600 leading-relaxed">
                  {project.overview}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">The Problem</h2>
                <p className="text-xl text-brand-600 leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Objectives</h2>
                <p className="text-xl text-brand-600 leading-relaxed">
                  {project.objectives}
                </p>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-6">Role</h4>
                <p className="text-lg font-bold text-brand-500">{project.role}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-6">Tools Used</h4>
                <div className="flex flex-wrap gap-4">
                  {project.tools.map((tool) => (
                    <div key={tool} className="px-4 py-2 rounded-xl bg-brand-50 text-brand-600 text-sm font-bold">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-6">Key Result</h4>
                <p className="text-lg font-bold text-brand-500">{project.results}</p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="space-y-32">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-center">The Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div>
                <div className="text-brand-500 mb-6"><Layout size={48} /></div>
                <h3 className="text-3xl font-display font-bold mb-6">01. Research & Insights</h3>
                <p className="text-lg text-brand-600 leading-relaxed mb-6">
                  {project.process.research}
                </p>
                <div className="p-6 rounded-2xl bg-brand-50 border-l-4 border-brand-500">
                  <h4 className="font-bold mb-2">Key Insight</h4>
                  <p className="text-brand-600 italic">"{project.process.insights}"</p>
                </div>
              </div>
              <div 
                className="rounded-3xl overflow-hidden shadow-xl aspect-square cursor-zoom-in"
                onClick={() => project.processImages?.research && setSelectedImage(project.processImages.research)}
              >
                {project.processImages?.research && (
                  <img 
                    src={project.processImages.research} 
                    alt="Research" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div 
                className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-xl aspect-square cursor-zoom-in"
                onClick={() => project.processImages?.userFlow && setSelectedImage(project.processImages.userFlow)}
              >
                {project.processImages?.userFlow && (
                  <img 
                    src={project.processImages.userFlow} 
                    alt="User Flow" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                )}
              </div>
              <div className="order-1 md:order-2">
                <div className="text-brand-500 mb-6"><Smartphone size={48} /></div>
                <h3 className="text-3xl font-display font-bold mb-6">02. User Flow & Wireframes</h3>
                <p className="text-lg text-brand-600 leading-relaxed mb-6">
                  {project.process.userFlow}
                </p>
                <p className="text-lg text-brand-600 leading-relaxed">
                  {project.process.wireframes}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div>
                <div className="text-brand-500 mb-6"><Palette size={48} /></div>
                <h3 className="text-3xl font-display font-bold mb-6">03. UI Design & Prototype</h3>
                <p className="text-lg text-brand-600 leading-relaxed mb-6">
                  {project.process.uiDesign}
                </p>
                <p className="text-lg text-brand-600 leading-relaxed">
                  {project.process.prototyping}
                </p>
              </div>
              <div 
                className="rounded-3xl overflow-hidden shadow-xl aspect-square cursor-zoom-in"
                onClick={() => project.processImages?.design && setSelectedImage(project.processImages.design)}
              >
                {project.processImages?.design && (
                  <img 
                    src={project.processImages.design} 
                    alt="UI Design" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div 
                className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-xl aspect-square cursor-zoom-in"
                onClick={() => project.processImages?.testing && setSelectedImage(project.processImages.testing)}
              >
                {project.processImages?.testing && (
                  <img 
                    src={project.processImages.testing} 
                    alt="Testing" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                )}
              </div>
              <div className="order-1 md:order-2">
                <div className="text-brand-500 mb-6"><TestTube size={48} /></div>
                <h3 className="text-3xl font-display font-bold mb-6">04. Testing & Solution</h3>
                <p className="text-lg text-brand-600 leading-relaxed mb-6">
                  {project.process.testing}
                </p>
                <div className="p-8 rounded-3xl bg-brand-900 text-white">
                  <h4 className="text-xl font-bold mb-4">The Solution</h4>
                  <p className="text-brand-200 leading-relaxed">{project.process.solution}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-32 space-y-16">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-center">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.gallery.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5] cursor-zoom-in"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img}
                      alt={`${project.title} gallery ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Results Section */}
          <div className="mt-32 p-12 md:p-24 bg-brand-900 text-white rounded-[3rem] text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8">The Results</h2>
            <p className="text-2xl md:text-4xl font-display font-bold text-brand-500 mb-12">
              {project.results}
            </p>
            <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-brand-500 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform">
              Discuss a similar project <ArrowRight size={24} className="ml-3" />
            </Link>
          </div>
        </div>
      </section>

      <ImageModal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        imageSrc={selectedImage} 
      />
    </div>
  );
};
