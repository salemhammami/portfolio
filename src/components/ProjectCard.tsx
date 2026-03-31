import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Project } from "@/src/data/projects";
import { cn } from "@/src/lib/utils";

export const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl bg-brand-50 border border-brand-100 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:z-10"
    >
      <Link to={`/projects/${project.id}`} className="block">
        <div className="aspect-video overflow-hidden bg-brand-100 relative">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-brand-50 to-brand-100">
              <span className="text-4xl font-display font-bold text-brand-200 opacity-50 select-none">
                {project.title}
              </span>
            </div>
          )}
        </div>
        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-brand-100 text-brand-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-brand-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-brand-600 text-sm line-clamp-2 mb-6">
            {project.description}
          </p>
          <div className="flex items-center text-sm font-bold group-hover:translate-x-1 transition-transform">
            View Case Study <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
