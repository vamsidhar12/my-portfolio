"use client";
import { motion } from "framer-motion";
import {
  Network,
  Cpu,
  Trophy,
  Crown,
  Gamepad2,
  Code2,
  Coffee,
  Cloud,
} from "lucide-react";
import SectionWrapper, { SectionHeading, SectionSubheading } from "./SectionWrapper";
import { interests } from "@/data/portfolio";

const ICON_MAP: Record<string, React.ElementType> = {
  Network,
  Cpu,
  Trophy,
  Crown,
  Gamepad2,
  Code2,
  Coffee,
  Cloud,
};

export default function Interests() {
  return (
    <SectionWrapper id="interests">
      <SectionHeading>Interests</SectionHeading>
      <SectionSubheading>What I obsess over — inside and outside the terminal</SectionSubheading>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {interests.map((interest, i) => {
          const Icon = ICON_MAP[interest.icon] ?? Code2;
          return (
            <motion.div
              key={interest.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center">
                <Icon size={22} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                {interest.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Fun quote from README */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center italic text-gray-400 dark:text-gray-500 text-sm max-w-xl mx-auto border-l-4 border-indigo-300 dark:border-indigo-700 pl-4 text-left"
      >
        &ldquo;I&apos;ve spent 5 years making systems resilient to failure. My coffee order, however, has a single point of failure.&rdquo;
      </motion.blockquote>
    </SectionWrapper>
  );
}
