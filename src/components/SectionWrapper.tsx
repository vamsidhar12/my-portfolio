"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = "" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 px-6 max-w-6xl mx-auto ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
      {children}
    </h2>
  );
}

export function SectionSubheading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">{children}</p>
  );
}
