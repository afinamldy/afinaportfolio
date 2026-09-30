"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface VideoItem {
  id: string;
  platform: "instagram" | "tiktok";
  href: string;
  label: string;
}

const videos: VideoItem[] = [
  {
    id: "v1",
    platform: "instagram",
    href: "https://www.instagram.com/reel/Dcf3AJUToHE/",
    label: "Reel #1",
  },
  {
    id: "v2",
    platform: "instagram",
    href: "https://www.instagram.com/reel/Db4hEuQTgZU/",
    label: "Reel #2",
  },
  {
    id: "v3",
    platform: "instagram",
    href: "https://www.instagram.com/reel/Dbkj3mozpzu/",
    label: "Reel #3",
  },
  {
    id: "v4",
    platform: "instagram",
    href: "https://www.instagram.com/reel/Da3BTHZzxNv/",
    label: "Reel #4",
  },
  {
    id: "v5",
    platform: "instagram",
    href: "https://www.instagram.com/reel/DakYeXpTiLR/",
    label: "Reel #5",
  },
  {
    id: "v6",
    platform: "tiktok",
    href: "https://vt.tiktok.com/ZSbe1WFg5/",
    label: "TikTok #1",
  },
  {
    id: "v7",
    platform: "instagram",
    href: "https://www.instagram.com/reel/DZ9CgsuTipU/",
    label: "Reel #6",
  },
  {
    id: "v8",
    platform: "instagram",
    href: "https://www.instagram.com/reel/DYhEhULzBNj/",
    label: "Reel #7",
  },
  {
    id: "v9",
    platform: "instagram",
    href: "https://www.instagram.com/reel/DX2BhrnzLCO/",
    label: "Reel #8",
  },
  {
    id: "v10",
    platform: "instagram",
    href: "https://www.instagram.com/reel/DW6ZjdeEzmX/",
    label: "Reel #9",
  },
  {
    id: "v11",
    platform: "tiktok",
    href: "https://vt.tiktok.com/ZSbe13veX/",
    label: "TikTok #2",
  },
  {
    id: "v12",
    platform: "tiktok",
    href: "https://vt.tiktok.com/ZSbe1vn9j/",
    label: "TikTok #3",
  },
  {
    id: "v13",
    platform: "tiktok",
    href: "https://vt.tiktok.com/ZSbe1suV4/",
    label: "TikTok #4",
  },
];

/* ── Platform icons ──────────────────────────────── */
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9a8.16 8.16 0 0 0 4.77 1.52V7.07a4.85 4.85 0 0 1-1-.38z" />
    </svg>
  );
}

/* ── Card number label ───────────────────────────── */
function cardIndex(i: number) {
  return String(i + 1).padStart(2, "0");
}

/* ── Single video card ───────────────────────────── */
function VideoCard({ item, index }: { item: VideoItem; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const isInstagram = item.platform === "instagram";
  const platformLabel = isInstagram ? "Instagram Reel" : "TikTok";
  const accentColor = isInstagram ? "#E1306C" : "#010101";

  return (
    <motion.a
      ref={ref}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: (index % 4) * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex flex-col justify-between bg-[#FAF8F5] border border-[#E5DDD3] rounded-2xl p-5 overflow-hidden cursor-pointer hover:border-[#D4956A]/70 hover:shadow-lg transition-shadow duration-300"
      style={{ minHeight: "160px" }}
    >
      {/* Subtle warm tint on hover */}
      <div className="absolute inset-0 bg-[#B5713A]/0 group-hover:bg-[#B5713A]/[0.03] transition-colors duration-300 pointer-events-none rounded-2xl" />

      {/* Top row — platform icon + index */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <span
          className="flex items-center gap-1.5 text-xs font-sans tracking-wide px-2.5 py-1 rounded-full border"
          style={{
            color: accentColor,
            borderColor: isInstagram ? "#E1306C33" : "#01010130",
            background: isInstagram ? "#E1306C08" : "#01010108",
          }}
        >
          {isInstagram ? <InstagramIcon /> : <TikTokIcon />}
          {platformLabel}
        </span>
        <span className="font-serif text-3xl font-bold text-[#E5DDD3] select-none">
          {cardIndex(index)}
        </span>
      </div>

      {/* Bottom row — label + arrow */}
      <div className="flex items-end justify-between relative z-10">
        <div>
          <p className="font-serif text-base font-semibold text-[#2C2A29] group-hover:text-[#B5713A] transition-colors duration-200">
            {item.label}
          </p>
          <p className="font-sans text-[11px] text-[#7A7570] mt-0.5 tracking-wide">
            Watch video ↗
          </p>
        </div>

        {/* Arrow circle */}
        <div className="w-9 h-9 rounded-full border border-[#E5DDD3] flex items-center justify-center group-hover:border-[#B5713A] group-hover:bg-[#B5713A] transition-all duration-300 shrink-0">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#7A7570] group-hover:text-[#FAF8F5] -rotate-45 transition-colors duration-300"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}

/* ── Section ─────────────────────────────────────── */
export default function TalentPortfolio() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const instagramCount = videos.filter((v) => v.platform === "instagram").length;
  const tiktokCount = videos.filter((v) => v.platform === "tiktok").length;

  return (
    <section
      id="talent"
      className="py-24 px-6 bg-[#F2EDE6] relative overflow-hidden"
    >
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#E5DDD3] to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#B5713A] mb-2">
            On Camera
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C2A29] mb-4">
            Talent Portfolio &amp; Video Highlights
          </h2>
          <div className="w-16 h-px bg-[#D4956A] mx-auto mb-6" />
          <p className="font-sans text-sm text-[#7A7570] max-w-xl mx-auto leading-relaxed">
            A curated collection of event hosting, brand representation, and
            talent documentation across Instagram Reels and TikTok.
          </p>

          {/* Stats pill row */}
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
            <span className="inline-flex items-center gap-2 font-sans text-xs tracking-wide bg-[#FAF8F5] border border-[#E5DDD3] text-[#2C2A29] px-4 py-2 rounded-full">
              <InstagramIcon />
              {instagramCount} Instagram Reels
            </span>
            <span className="inline-flex items-center gap-2 font-sans text-xs tracking-wide bg-[#FAF8F5] border border-[#E5DDD3] text-[#2C2A29] px-4 py-2 rounded-full">
              <TikTokIcon />
              {tiktokCount} TikTok Videos
            </span>
          </div>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.map((v, i) => (
            <VideoCard key={v.id} item={v} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://drive.google.com/drive/folders/1Cc1zyY4GXfyaH7rkdB0aaodpLgJjE18t?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-sans text-sm tracking-widest uppercase text-[#B5713A] border border-[#B5713A]/40 px-7 py-3 rounded-full hover:bg-[#B5713A] hover:text-[#FAF8F5] hover:border-[#B5713A] transition-all duration-300"
          >
            <svg
              width="14"
              height="14"
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
            View Full Photo Document
          </a>
        </motion.div>
      </div>
    </section>
  );
}
