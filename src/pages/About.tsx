import React, { useState } from "react";
import { motion } from "motion/react";
import { Figma, Github, Layout, Palette, PenTool, Smartphone, TestTube, Briefcase, GraduationCap, MapPin, CheckCircle2 } from "lucide-react";
import { ImageModal } from "@/src/components/ImageModal";

const timeline = [
  {
    year: "2020 - Present",
    role: "Senior UX/UI Designer",
    company: "Historiska Hem",
    description: "Designing end-to-end real estate platforms and internal analytics dashboards for the Swedish market.",
    location: "Stockholm / Remote",
  },
  {
    year: "2015 - 2019",
    role: "UX/UI Specialist",
    company: "Vistaprint",
    description: "Optimizing e-commerce conversion through user research and interface enhancements.",
    location: "Remote",
  },
  {
    year: "2013 - 2015",
    role: "Graphic & Web Designer",
    company: "Trame",
    description: "Crafting visual identities and web experiences for diverse clients.",
    location: "Remote",
  },
];

const tools = [
  { name: "Figma", icon: <Figma size={32} /> },
  { name: "Adobe CC", icon: <PenTool size={32} /> },
  { name: "Framer", icon: <Smartphone size={32} /> },
  { name: "ReactJS", icon: <Layout size={32} /> },
  { name: "Spline", icon: <Palette size={32} /> },
  { name: "InVision", icon: <TestTube size={32} /> },
];

export const About = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
              Designing with <br />
              <span className="text-brand-500">purpose.</span>
            </h1>
            <p className="text-xl text-brand-600 mb-8 max-w-lg uppercase">
              I'm a certified UX/UI designer with a background in web development.
            </p>
            <p className="text-lg text-brand-600 mb-8 max-w-lg">
              After working over 10 years in the financial sector, my curiosity led me to transition my career to digital products. I am always motivated and passionate to learn more, focusing on building innovative, adaptable, and creative user experiences.
            </p>
            <div className="flex items-center space-x-4 text-brand-500 font-bold">
              <MapPin size={20} />
              <span>Remote Worldwide</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
            onClick={() => setSelectedImage("/profile.jpg")}
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl cursor-zoom-in">
              <img
                src="/profile.jpg"
                alt="Salem Hammami"
                className="w-full h-full object-cover bg-brand-900"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-3xl font-display font-bold text-brand-500">10+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-brand-600">
                Years of Experience
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-6 py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8">
              Skills Set
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Design Thinking", "User Research", "Wireframing", "Prototyping",
                "Usability Testing", "Visual Design", "Interaction Design", "Information Architecture",
                "Agile Methodologies", "3D Modeling", "HTML/CSS", "Javascript",
                "ReactJS", "GitHub"
              ].map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-brand-500" />
                  <span className="text-brand-600 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8">
              Philosophy
            </h2>
            <p className="text-xl text-brand-600 leading-relaxed italic">
              "Design is not just what it looks like and feels like. Design is how it works. I believe in a user-centered approach where every pixel serves a purpose and every interaction is intuitive."
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-20 text-center">
            Career Journey
          </h2>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 rounded-3xl bg-white border border-brand-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-brand-500 font-display font-bold text-xl">
                  {item.year}
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-display font-bold mb-2">{item.role}</h3>
                  <p className="text-brand-500 font-bold mb-4">{item.company}</p>
                  <p className="text-brand-600">{item.description}</p>
                </div>
                <div className="flex items-start md:justify-end text-sm text-brand-400 font-medium">
                  <MapPin size={16} className="mr-2" />
                  {item.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Skills */}
      <section className="px-6 py-32 bg-brand-900 text-white rounded-[3rem] mx-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8">
              My Toolkit
            </h2>
            <p className="text-brand-400 max-w-xl mx-auto">
              I use the best tools in the industry to bring ideas to life, from research to high-fidelity prototypes.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
            {tools.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center space-y-4">
                <div className="p-6 rounded-2xl bg-white/10 border border-white/10">
                  {tool.icon}
                </div>
                <span className="font-bold text-sm tracking-widest uppercase">{tool.name}</span>
              </div>
            ))}
          </div>

          {/* Certification Section */}
          <div className="mt-24 pt-24 border-t border-white/10">
            <div className="rounded-[2rem] overflow-hidden mb-12 shadow-2xl">
              <img 
                src="/gomycode.jpg" 
                alt="GOMYCODE Certification" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center">
              <a 
                href="https://diploma.gomycode.app/?id=31688400225417670" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-brand-500 text-white font-bold rounded-full hover:bg-brand-400 transition-colors"
              >
                View Certificate
              </a>
            </div>
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
