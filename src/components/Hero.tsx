"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/hero/hero-1.jpg",
  "/hero/hero-2.webp",
  "/hero/hero-3.webp",
  "/hero/hero-4.webp",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[current]})`,
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Luxury Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          <p className="mb-4 uppercase tracking-[6px] text-[#D4A373]">
            Premium Dining Experience
          </p>

          <h1 className="text-5xl font-bold text-white md:text-7xl">
            Welcome
            <br />
            to Opheem Recipes and Lounge
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Discover exquisite meals, handcrafted drinks,
            and an atmosphere designed for memorable experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#menu"
              className="rounded-lg bg-[#D4A373] px-6 py-3 font-semibold text-black transition hover:bg-[#c79360]"
            >
              View Menu
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Reserve Table
            </a>

          </div>

        </motion.div>

      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">

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

    </section>
  );
}