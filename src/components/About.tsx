"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "2+", label: "Certifications" },
  { value: "2023–Now", label: "UPH – Communication" },
];

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
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

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#FAF8F5] relative overflow-hidden"
    >
      {/* Decorative accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#E5DDD3] to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <FadeUp>
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#B5713A] text-center mb-2">
            About Me
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C2A29] text-center mb-16">
            The person behind the work
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Photo + badge */}
          <FadeUp delay={0.1}>
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="relative">
                {/* Decorative offset background */}
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-[#D4956A]/40 pointer-events-none" />
                <div className="w-72 h-80 md:w-80 md:h-[26rem] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/profile-photo.png"
                    alt="Afina Maulidya Farahdila"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Name + verified */}
              <div className="mt-4 flex items-center gap-2">
                <span className="font-serif text-xl font-semibold text-[#2C2A29]">
                  Afina Maulidya Farahdila
                </span>
                {/* Verified badge */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-label="Verified"
                >
                  <circle cx="12" cy="12" r="12" fill="#B5713A" />
                  <path
                    d="M7 12l3.5 3.5L17 8"
                    stroke="#FAF8F5"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#7A7570]">
                Aviation Professional · Communication Student
              </p>
            </div>
          </FadeUp>

          {/* Right — Stats + bio + button */}
          <div className="flex flex-col gap-8">
            {/* Stats row */}
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-[#F2EDE6] rounded-xl p-4 text-center border border-[#E5DDD3]"
                  >
                    <p className="font-serif text-2xl font-bold text-[#B5713A]">
                      {s.value}
                    </p>
                    <p className="font-sans text-[10px] text-[#7A7570] tracking-wide uppercase mt-1 leading-tight">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Bio */}
            <FadeUp delay={0.3}>
              <div className="space-y-4 text-[#2C2A29]">
                <p className="font-serif text-lg leading-relaxed">
                  A customer-focused aviation professional with{" "}
                  <span className="text-[#B5713A] font-semibold">
                    5+ years of experience
                  </span>{" "}
                  as a Flight Attendant at Lion Air, operating Boeing 737 &
                  Airbus A330 on domestic and international routes.
                </p>
                <p className="font-sans text-sm leading-relaxed text-[#7A7570]">
                  Currently transitioning into frontliner and marketing roles
                  while pursuing a degree in Communication at{" "}
                  <strong className="text-[#2C2A29]">
                    Universitas Pelita Harapan
                  </strong>
                  . Passionate about people-first service, cross-cultural
                  communication, and creating meaningful connections in every
                  professional environment.
                </p>
              </div>
            </FadeUp>

            {/* Download CV Button */}
            <FadeUp delay={0.4}>
              <a
                href="/cv-afina-maulidya-farahdila.pdf"
                download
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#2C2A29] text-[#FAF8F5] font-sans text-sm tracking-widest uppercase rounded-full hover:bg-[#B5713A] transition-colors duration-300 w-fit"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
