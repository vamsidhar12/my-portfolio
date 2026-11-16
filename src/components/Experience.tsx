"use client";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import SectionWrapper, { SectionHeading, SectionSubheading } from "./SectionWrapper";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-gray-50/50 dark:bg-gray-900/50">
      <SectionHeading>Experience</SectionHeading>
      <SectionSubheading>Where I&apos;ve worked and what I&apos;ve built</SectionSubheading>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -20px 0px" }}
              transition={{ duration: 0.35 }}
              className="relative flex"
            >
              {/* Dot */}
              <div className="absolute left-5 w-3 h-3 rounded-full bg-indigo-600 border-2 border-white dark:border-gray-900 -translate-x-1/2 mt-1.5" />

              {/* Card */}
              <div className="ml-10 w-full">
                <div
                  className={`bg-white dark:bg-gray-900 rounded-2xl border p-6 hover:shadow-md transition-shadow ${
                    i === 0
                      ? "border-indigo-300 dark:border-indigo-700 shadow-md shadow-indigo-500/10 sm:p-8"
                      : "border-gray-200 dark:border-gray-800 shadow-sm"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={13} className="text-indigo-500" />
                        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 mb-4 text-xs text-gray-400 dark:text-gray-500">
                    <MapPin size={11} />
                    <span>{exp.location}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
