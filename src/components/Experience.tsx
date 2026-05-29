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
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 md:left-1/2" />

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className={`relative flex gap-6 md:gap-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-5 w-3 h-3 rounded-full bg-indigo-600 border-2 border-white dark:border-gray-900 -translate-x-1/2 mt-1.5 md:left-1/2" />

              {/* Spacer for desktop */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div
                className={`ml-10 md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow">
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
