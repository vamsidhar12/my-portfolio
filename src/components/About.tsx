"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { MapPin, Mail, CheckCircle, Clock, ExternalLink } from "lucide-react";
import SectionWrapper, { SectionHeading, SectionSubheading } from "./SectionWrapper";
import { personal, stats, certifications } from "@/data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Bio row */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/30">
              <Image
                src="/image.jpeg"
                alt={personal.name}
                width={288}
                height={288}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -inset-3 rounded-3xl border-2 border-dashed border-indigo-300 dark:border-indigo-700 -z-10" />
          </div>
        </div>

        <div>
          <SectionHeading>About Me</SectionHeading>
          <SectionSubheading>Senior SWE · Distributed Systems · Cloud-Native</SectionSubheading>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line mb-8">
            {personal.bio}
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <MapPin size={16} className="text-indigo-500 shrink-0" />
              <span>{personal.location}</span>
            </li>
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <Mail size={16} className="text-indigo-500 shrink-0" />
              <a
                href={`mailto:${personal.email}`}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {personal.email}
              </a>
            </li>
            {personal.availableForWork && (
              <li className="flex items-center gap-3 text-green-600 dark:text-green-400">
                <CheckCircle size={16} className="shrink-0" />
                <span>Open to Mid-level / Senior SWE roles (willing to relocate within the US)</span>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 text-center shadow-sm"
          >
            <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">
              {s.value}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Cloud Certifications
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              {cert.status === "certified" ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all text-center"
                >
                  {/* Badge image */}
                  <div className="relative w-20 h-20">
                    <Image
                      src={cert.badge}
                      alt={cert.name}
                      fill
                      className="object-contain drop-shadow-md"
                      sizes="80px"
                    />
                  </div>

                  {/* Short code */}
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded-full">
                    {cert.short}
                  </span>

                  {/* Name */}
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {cert.name}
                  </p>

                  {/* Issuer + verified */}
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                    <CheckCircle size={11} />
                    <span className="text-xs">{cert.issuer}</span>
                  </div>

                  <ExternalLink size={12} className="text-gray-300 dark:text-gray-600 group-hover:text-indigo-400 transition-colors" />
                </a>
              ) : (
                /* In-progress card */
                <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white dark:bg-gray-900 border border-dashed border-amber-300 dark:border-amber-700 text-center">
                  <div className="w-20 h-20 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center">
                    <Clock size={32} className="text-amber-400" />
                  </div>

                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded-full">
                    {cert.short}
                  </span>

                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 leading-snug">
                    {cert.name}
                  </p>

                  <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                    <span className="text-xs font-medium">In Progress</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-amber-400 h-1.5 rounded-full w-[60%]" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
