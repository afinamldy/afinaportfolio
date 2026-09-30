"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const marqueeText =
  "AFINA MAULIDYA FARAHDILA · AVIATION PROFESSIONAL · FRONTLINER · MARKETING SUPPORT · ";

export default function Hero() {
  // Duplicate text so the seamless loop works
  const repeated = marqueeText.repeat(6);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAF8F5] pt-20 pb-32"
    >
      {/* Decorative top-left grain texture circle */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#F2EDE6] opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#EDE5D8] opacity-40 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Marquee text layer */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none overflow-hidden">
        {[0, 1, 2].map((row) => (
          <div
            key={row}
            className={`whitespace-nowrap flex ${row === 1 ? "opacity-[0.07]" : "opacity-[0.04]"}`}
          >
            <div
              className="animate-marquee inline-flex"
              style={{ animationDelay: `${row * -10}s` }}
            >
              <span className="text-[clamp(2.5rem,8vw,7rem)] font-serif font-bold text-[#2C2A29] tracking-wider uppercase">
                {repeated}
              </span>
              <span className="text-[clamp(2.5rem,8vw,7rem)] font-serif font-bold text-[#2C2A29] tracking-wider uppercase">
                {repeated}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Profile Photo — prominent, centered, overlaying marquee */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Photo frame */}
        <div
          className="relative"
          style={{
            filter: "drop-shadow(0 20px 60px rgba(44,42,41,0.18)) drop-shadow(0 4px 16px rgba(181,113,58,0.12))",
          }}
        >
          {/* Outer decorative ring */}
          <div className="absolute inset-0 rounded-full border-2 border-[#D4956A]/30 scale-[1.04] pointer-events-none" />
          {/* Inner border */}
          <div className="absolute inset-0 rounded-full border border-[#E5DDD3] pointer-events-none z-10" />

          <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden relative">
            <Image
              src="/profile-photo.png"
              alt="Afina Maulidya Farahdila"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Name + tagline below photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 text-center"
        >
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#B5713A] mb-2">
            Professional Portfolio
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C2A29] tracking-wide">
            Afina Maulidya Farahdila
          </h1>
          <p className="font-sans text-sm text-[#7A7570] mt-2 tracking-widest uppercase">
            Aviation · Frontliner · Communication
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#7A7570]">
          Scroll Down
        </span>
        <div className="animate-bounce-slow flex flex-col items-center">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#B5713A]" />
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            className="mt-0.5"
          >
            <path
              d="M1 1L6 6L11 1"
              stroke="#B5713A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
