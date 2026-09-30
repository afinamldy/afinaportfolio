"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
  link?: { label: string; href: string };
}

const experiences: Experience[] = [
  {
    role: "Marketing Support",
    company: "Pelita Learning Hub",
    period: "May 2026 – Juli 2026",
    description:
      "Mengelola pemasaran program pendidikan, pengelolaan lead WhatsApp, dan pengembangan konten promosi untuk menarik calon peserta.",
    tags: ["Part-time", "Marketing", "WhatsApp CRM"],
  },
  {
    role: "Receptionist / Frontliner",
    company: "PT. Otto Media Grup",
    period: "Feb 2026 – Present",
    description:
      "Menangani operasional resepsionis, menyambut tamu korporat, koordinasi internal antar divisi, dan memastikan pengalaman tamu yang profesional.",
    tags: ["Full-time", "Frontliner", "Customer Service"],
  },
  {
    role: "Flight Attendant",
    company: "PT. Mentari Lion Airlines (Lion Air)",
    period: "Jan 2020 – Dec 2025",
    description:
      "Melayani penerbangan domestik dan internasional pada armada Boeing 737 & Airbus A330. Bertanggung jawab atas keselamatan penerbangan, prosedur darurat, serta memberikan layanan pelanggan kelas dunia kepada ribuan penumpang.",
    tags: ["Boeing 737", "Airbus A330", "5 Years", "Full-time"],
  },
  {
    role: "Aviation Security (AVSEC) – OJT",
    company: "PT. Gapura Angkasa",
    period: "Nov 2019",
    description:
      "On-the-job training dalam prosedur keamanan kargo bandara, pengamanan area sisi udara, dan implementasi standar keamanan penerbangan internasional.",
    tags: ["OJT", "AVSEC", "Cargo Security"],
  },
  {
    role: "Event Usher & Talent",
    company: "Various Corporate Events",
    period: "2018 – 2020",
    description:
      "Representasi event korporat, hospitality, dan kegiatan promosi. Berperan sebagai brand ambassador dan event host dalam berbagai acara skala nasional.",
    tags: ["Event", "Hospitality", "Brand Ambassador"],
    link: {
      label: "View Photo Document",
      href: "https://drive.google.com/drive/folders/1Cc1zyY4GXfyaH7rkdB0aaodpLgJjE18t?usp=sharing",
    },
  },
];

function TimelineItem({
  exp,
  index,
}: {
  exp: Experience;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-6 md:gap-10 group"
    >
      {/* Timeline spine connector */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div className="w-4 h-4 rounded-full bg-[#B5713A] border-2 border-[#FAF8F5] ring-2 ring-[#B5713A]/30 mt-1 shrink-0 z-10" />
        {/* Line */}
        <div className="w-px flex-1 bg-[#E5DDD3] mt-2 group-last:hidden" />
      </div>

      {/* Card */}
      <div className="pb-12 flex-1">
        <div className="bg-[#F2EDE6] rounded-2xl p-6 border border-[#E5DDD3] hover:border-[#D4956A]/60 transition-colors duration-300">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#2C2A29]">
                {exp.role}
              </h3>
              <p className="font-sans text-sm text-[#B5713A] mt-0.5">
                {exp.company}
              </p>
            </div>
            <span className="font-sans text-xs tracking-wide text-[#7A7570] bg-[#FAF8F5] border border-[#E5DDD3] px-3 py-1 rounded-full whitespace-nowrap">
              {exp.period}
            </span>
          </div>

          <p className="font-sans text-sm text-[#7A7570] leading-relaxed mb-4">
            {exp.description}
          </p>

          {/* Tags */}
          {exp.tags && (
            <div className="flex flex-wrap gap-2 mb-3">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-sans tracking-widest uppercase bg-[#FAF8F5] border border-[#E5DDD3] text-[#7A7570] px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Optional link */}
          {exp.link && (
            <a
              href={exp.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-wide uppercase text-[#B5713A] hover:text-[#2C2A29] transition-colors duration-200 border-b border-[#B5713A]/40 hover:border-[#2C2A29] pb-0.5"
            >
              <svg
                width="12"
                height="12"
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
              {exp.link.label}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-[#FAF8F5] relative overflow-hidden"
    >
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#B5713A] mb-2">
            Career Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C2A29]">
            Experience & Timeline
          </h2>
          <div className="mt-4 w-16 h-px bg-[#D4956A] mx-auto" />
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, i) => (
          <TimelineItem key={exp.role + exp.company} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
