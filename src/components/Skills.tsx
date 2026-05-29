"use client";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading, SectionSubheading } from "./SectionWrapper";
import { skills } from "@/data/portfolio";

const CATEGORY_COLORS: Record<string, string> = {
  Languages:
    "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700",
  "Cloud & Infra":
    "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700",
  "DevOps & Security":
    "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700",
  Databases:
    "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700",
};

const defaultColor =
  "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-gray-50/50 dark:bg-gray-900/50">
      <SectionHeading>Skills & Tech</SectionHeading>
      <SectionSubheading>Languages, cloud, security, and data tools I work with daily</SectionSubheading>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, items], catIdx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.1 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={`text-xs font-medium px-3 py-1 rounded-full border ${
                    CATEGORY_COLORS[category] ?? defaultColor
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
