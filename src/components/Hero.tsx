"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* ---------------- TYPEWRITER ---------------- */
function useTypewriter(text: string, speed = 60, onDone?: () => void) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
        onDone?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onDone]);

  return displayed;
}

/* ---------------- IMAGES ---------------- */
const images = [
  "/hero/hero-1.jpg",
  "/hero/hero-2.webp",
  "/hero/hero-3.webp",
  "/hero/hero-4.webp",
];

/* ---------------- MOBILE FOCAL POINTS ---------------- */
const imagePositions = [
  "center 30%",
  "center 40%",
  "center 50%",
  "center 35%",
];

/* ---------------- COMPONENT ---------------- */
export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);

  const subtitle = "Premium Dining Experience";
  const words = subtitle.split(" ");

  const wordColors = [
    "text-[#D4A373]",     // Premium
    "text-white",         // Dining
    "text-emerald-200",   // Experience
  ];

  const welcomeText = useTypewriter(
    "Welcome to Opheem Recipes and Lounge",
    60,
    () => {
      setTimeout(() => {
        setShowSubtitle(true);
      }, 1000);
    }
  );

  /* ---------------- SLIDESHOW ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- WORD ANIMATION ---------------- */
  const wordVariant: Variants = {
    hidden: {
      opacity: 0,
      y: -30,
      scale: 1.05,
    },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.22,
        type: "spring" as const,
        stiffness: 220,
        damping: 18,
      },
    }),
  };

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* ---------------- BACKGROUND ---------------- */}
      <div className="absolute inset-0 flex items-center justify-center bg-black">
        <AnimatePresence mode="sync">
          <motion.img
            key={current}
            src={images[current]}
            alt="hero"
            className="h-full w-full object-contain md:object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{
              duration: 1.6,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        </AnimatePresence>
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* ---------------- CONTENT ---------------- */}
      <div className="relative z-10 flex min-h-screen flex-col">

        {/* TOP TEXT */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 text-center uppercase tracking-[6px] text-[#D4A373] drop-shadow-[0_0_12px_rgba(212,163,115,0.8)]"
        >
          Premium Dining Experience
        </motion.p>

        {/* CENTER */}
        <div className="flex flex-1 flex-col items-center justify-center px-6">

          {/* TYPEWRITER */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-3xl md:text-6xl font-[300] tracking-wide text-white font-serif"
          >
            {welcomeText}
            <span className="ml-1 animate-pulse">|</span>
          </motion.h1>

          {/* SUBTITLE */}
          {showSubtitle && (
            <motion.p className="mt-6 flex flex-wrap justify-center gap-3 text-center uppercase tracking-[10px] font-light">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariant}
                  initial="hidden"
                  animate="show"
                  className={`text-xl md:text-2xl ${wordColors[i]}`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          )}

        </div>

        {/* ---------------- FOOTER (DOTS + BUTTON) ---------------- */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="flex flex-col items-center gap-6 pb-10">

            {/* DOTS */}
            <div className="flex gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 w-3 rounded-full transition ${
                    current === index
                      ? "bg-[#D4A373]"
                      : "bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* BUTTON */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="#menu"
              className="rounded-lg bg-[#D4A373] px-8 py-3 font-semibold text-black transition hover:bg-[#c79360]"
            >
              View Menu
            </motion.a>

          </div>
        </div>

      </div>
    </section>
  );
}