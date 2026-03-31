import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/src/data/projects";
import { ProjectCard } from "@/src/components/ProjectCard";

const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

export const Projects = () => {
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects = activeTag === "All"
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag));

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
              Selected <br />
              <span className="text-brand-500">Works.</span>
            </h1>
            <p className="text-xl text-brand-600 max-w-2xl mx-auto mb-12">
              A collection of digital products designed with a focus on user experience, business goals, and aesthetic excellence.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                  activeTag === tag
                    ? "bg-brand-900 text-white shadow-lg scale-105"
                    : "bg-brand-50 text-brand-600 hover:bg-brand-100"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
