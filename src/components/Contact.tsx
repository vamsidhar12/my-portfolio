"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon, MailIcon } from "./icons";
import SectionWrapper, { SectionHeading, SectionSubheading } from "./SectionWrapper";
import { personal } from "@/data/portfolio";

const SOCIALS = [
  { href: personal.github, Icon: GithubIcon, label: "GitHub", handle: "@vamsidhar12" },
  { href: personal.linkedin, Icon: LinkedinIcon, label: "LinkedIn", handle: "in/vamsidhar-reddy-poothi" },
  { href: personal.leetcode, Icon: LeetcodeIcon, label: "LeetCode", handle: "Vamsidhar12" },
  { href: null, Icon: MailIcon, label: "Email", handle: personal.email },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const FORMSPREE_URL = "https://formspree.io/f/xjgzzekd";
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-gray-50/50 dark:bg-gray-900/50">
      <SectionHeading>Get in Touch</SectionHeading>
      <SectionSubheading>
        Have a project in mind or just want to say hi? I&apos;d love to hear from you.
      </SectionSubheading>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center gap-4 text-center py-8"
            >
              <CheckCircle size={48} className="text-green-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Message sent!</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Doe"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="jane@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 transition-colors"
              >
                {sending ? (
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {sending ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Social links */}
        <div className="flex flex-col justify-center gap-6">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Whether it&apos;s a full-time role, freelance project, or just a conversation
            about tech — my inbox is always open.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SOCIALS.map(({ href, Icon, label, handle }) => {
              const inner = (
                <>
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">{label}</div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors break-all">
                      {handle}
                    </div>
                  </div>
                </>
              );
              const baseClass = "flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all group";
              return href ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={`${baseClass} hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-md`}>
                  {inner}
                </a>
              ) : (
                <div key={label} className={baseClass}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
