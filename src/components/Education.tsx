"use client";
import { GraduationCap } from "lucide-react";
import SectionWrapper, { SectionHeading, SectionSubheading } from "./SectionWrapper";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading>Education</SectionHeading>
      <SectionSubheading>Where I studied</SectionSubheading>

      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((e) => (
          <div
            key={e.id}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{e.degree}</h3>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{e.school}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {e.detail} · {e.period}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
