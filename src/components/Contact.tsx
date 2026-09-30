"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contacts = [
  {
    number: "01",
    label: "Email Me",
    value: "afinafarah3@gmail.com",
    href: "mailto:afinafarah3@gmail.com",
    description: "Reach out directly to my inbox",
  },
  {
    number: "02",
    label: "LinkedIn",
    value: "linkedin.com/in/afina-maulidya",
    href: "https://www.linkedin.com/in/afina-maulidya/",
    description: "Connect professionally on LinkedIn",
  },
  {
    number: "03",
    label: "Instagram",
    value: "@afinamldy",
    href: "https://www.instagram.com/afinamldy?stkn=emM0a3hocHE5ODV5",
    description: "Follow my daily moments on Instagram",
  },
  {
    number: "04",
    label: "WhatsApp",
    value: "+62 822-3038-9393",
    href: "https://wa.me/6282230389393?text=Hi%20Afina!%20I%20would%20like%20to%20connect%20with%20you.",
    description: "Chat with me directly on WhatsApp",
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

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#2C2A29] relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B5713A]/5 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#B5713A]/5 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main heading */}
        <FadeUp>
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#D4956A] text-center mb-4">
            Open to opportunities
          </p>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-[#FAF8F5] text-center leading-none tracking-tight mb-6">
            LET&apos;S WORK
            <br />
            <span className="text-[#B5713A]">TOGETHER</span>
          </h2>
          <p className="font-sans text-sm text-[#7A7570] text-center max-w-md mx-auto leading-relaxed mb-20">
            I&apos;m currently available for full-time roles and collaboration.
            Pick your preferred channel below.
          </p>
        </FadeUp>

        {/* Contact channels */}
        <div className="space-y-0">
          {contacts.map((c, i) => (
            <FadeUp key={c.number} delay={0.1 + i * 0.1}>
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-8 border-b border-[#FAF8F5]/10 hover:border-[#B5713A]/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  {/* Number */}
                  <span className="font-sans text-[#B5713A]/50 text-sm tracking-widest group-hover:text-[#B5713A] transition-colors duration-200">
                    {c.number}
                  </span>
                  {/* Label */}
                  <div>
                    <p className="font-serif text-2xl md:text-3xl text-[#FAF8F5] group-hover:text-[#D4956A] transition-colors duration-300">
                      {c.label}
                    </p>
                    <p className="font-sans text-xs text-[#7A7570] mt-0.5">
                      {c.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-sans text-xs md:text-sm text-[#7A7570] hidden sm:block">
                    {c.value}
                  </span>
                  {/* Arrow */}
                  <div className="w-10 h-10 rounded-full border border-[#FAF8F5]/20 flex items-center justify-center group-hover:border-[#B5713A] group-hover:bg-[#B5713A] transition-all duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#FAF8F5] -rotate-45"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>

        {/* Footer */}
        <FadeUp delay={0.5}>
          <div className="mt-20 pt-8 border-t border-[#FAF8F5]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-[#7A7570] tracking-widest">
              © 2025 AFINA MAULIDYA FARAHDILA
            </p>
            <p className="font-sans text-xs text-[#7A7570]">
              Designed with care · Built with Next.js & Tailwind
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
