"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Certificate {
  title: string;
  issuer: string;
  icon: string;
  link?: string;
  linkLabel?: string;
}

const certificates: Certificate[] = [
  {
    title: "Flight Attendant Certificate",
    issuer: "Lion Air · Ratings: Boeing 737 & Airbus A330",
    icon: "✈",
  },
  {
    title: "BNSP Competency Certificate",
    issuer: "Badan Nasional Sertifikasi Profesi · Junior Accountant",
    icon: "📋",
  },
  {
    title: "Getting Started with Data",
    issuer: "IBM SkillsBuild",
    icon: "📊",
    link: "/skillsbuild-data-certificate.pdf",
    linkLabel: "View Certificate",
  },
  {
    title: "Unleashing the Power of AI Agents",
    issuer: "IBM SkillsBuild",
    icon: "🤖",
    link: "/skillsbuild-ai-certificate.pdf",
    linkLabel: "View Certificate",
  },
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

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-24 px-6 bg-[#FAF8F5] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeUp>
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#B5713A] text-center mb-2">
            Achievements
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C2A29] text-center mb-4">
            Recognition & Certificates
          </h2>
          <div className="w-16 h-px bg-[#D4956A] mx-auto mb-16" />
        </FadeUp>

        {/* Certificate cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <FadeUp key={cert.title} delay={i * 0.1}>
              <div className="group bg-[#F2EDE6] rounded-2xl p-6 border border-[#E5DDD3] hover:border-[#D4956A]/60 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="text-3xl mb-4">{cert.icon}</div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-base font-semibold text-[#2C2A29] leading-snug mb-2">
                    {cert.title}
                  </h3>
                  <p className="font-sans text-xs text-[#7A7570] leading-relaxed">
                    {cert.issuer}
                  </p>
                </div>

                {/* Optional link */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 font-sans text-xs tracking-wide uppercase text-[#B5713A] hover:text-[#2C2A29] transition-colors duration-200 border-b border-[#B5713A]/30 hover:border-[#2C2A29] pb-0.5 w-fit"
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    {cert.linkLabel}
                  </a>
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Decorative quote */}
        <FadeUp delay={0.4}>
          <div className="mt-16 text-center">
            <blockquote className="font-serif text-xl md:text-2xl italic text-[#7A7570] max-w-2xl mx-auto leading-relaxed">
              "Service is not a skill — it's an attitude carried in every
              interaction."
            </blockquote>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
