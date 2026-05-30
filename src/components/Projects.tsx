"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import SectionWrapper, { SectionHeading, SectionSubheading } from "./SectionWrapper";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <SectionWrapper id="projects">
      <SectionHeading>Projects</SectionHeading>
      <SectionSubheading>Things I&apos;ve built and shipped</SectionSubheading>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <AnimatePresence>
          {displayed.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-lg dark:hover:shadow-indigo-900/20 transition-all"
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Project image */}
              <div className="relative w-full h-40 rounded-xl overflow-hidden mb-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <GithubIcon size={15} /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {projects.length > displayed.length || showAll ? (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="px-6 py-2.5 rounded-xl text-sm font-medium border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            {showAll ? "Show Less" : `Show All ${projects.length} Projects`}
          </button>
        </div>
      ) : null}
    </SectionWrapper>
  );
}
