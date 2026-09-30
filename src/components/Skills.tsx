"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const softSkills = [
  "People First Service",
  "Cross-Cultural Communication",
  "Ownership & Accountability",
  "Emergency Response",
  "Problem Solving",
  "Teamwork",
];

const hardSkills = [
  "Aviation Safety Procedures",
  "Microsoft Office",
  "Video Editing (CapCut)",
  "Content Design (Canva)",
];

const languages = [
  { lang: "Indonesia", level: "Native", pct: 100 },
  { lang: "English", level: "Fluent", pct: 90 },
];

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SkillTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-sans text-sm text-[#2C2A29] bg-[#FAF8F5] border border-[#E5DDD3] px-4 py-2 rounded-full hover:border-[#B5713A] hover:text-[#B5713A] transition-colors duration-200">
      <span className="w-1.5 h-1.5 rounded-full bg-[#B5713A]" />
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#F2EDE6] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeUp>
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#B5713A] text-center mb-2">
            Capabilities
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C2A29] text-center mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 h-px bg-[#D4956A] mx-auto mb-16" />
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Soft Skills */}
          <FadeUp delay={0.1}>
            <div className="bg-[#FAF8F5] rounded-2xl p-8 border border-[#E5DDD3] h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#B5713A]/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B5713A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2C2A29]">
                  Soft Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <SkillTag key={s} label={s} />
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Hard Skills */}
          <FadeUp delay={0.2}>
            <div className="bg-[#FAF8F5] rounded-2xl p-8 border border-[#E5DDD3] h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#B5713A]/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B5713A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2C2A29]">
                  Hard Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((s) => (
                  <SkillTag key={s} label={s} />
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Languages */}
          <FadeUp delay={0.3}>
            <div className="bg-[#FAF8F5] rounded-2xl p-8 border border-[#E5DDD3] h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#B5713A]/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B5713A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2C2A29]">
                  Languages
                </h3>
              </div>
              <div className="space-y-5">
                {languages.map((l) => (
                  <div key={l.lang}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-sans text-sm text-[#2C2A29] font-medium">
                        {l.lang}
                      </span>
                      <span className="font-sans text-xs text-[#7A7570]">
                        {l.level}
                      </span>
                    </div>
                    <div className="h-1.5 bg-[#E5DDD3] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#B5713A] to-[#D4956A] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
