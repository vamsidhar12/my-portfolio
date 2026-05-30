"use client";
import { motion, type Variants, type Transition } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon, MailIcon } from "./icons";
import { personal } from "@/data/portfolio";

const easeOut: Transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: easeOut },
};

const SOCIALS = [
  { href: personal.github, Icon: GithubIcon, label: "GitHub" },
  { href: personal.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
  { href: personal.leetcode, Icon: LeetcodeIcon, label: "LeetCode" },
  { href: `mailto:${personal.email}`, Icon: MailIcon, label: "Email" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-indigo-400/20 dark:bg-indigo-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl mx-auto text-center"
      >
        {/* Status badge */}
        {personal.availableForWork && (
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-700"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for work
          </motion.div>
        )}

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
        >
          {personal.name}
        </motion.h1>

        {/* Title */}
        <motion.div variants={item}>
          <span className="inline-block text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-6">
            {personal.title}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30"
          >
            View My Work
          </button>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-xl font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={item} className="flex items-center justify-center gap-5">
          {SOCIALS.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
