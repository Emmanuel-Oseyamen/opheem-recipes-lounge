"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B0B0B] py-28 text-white md:py-36"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#D4A373]/[0.05] blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D4A373]/[0.04] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-center gap-5"
        >
          <span className="h-px w-12 bg-[#D4A373]" />

          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#D4A373]">
            The Opheem Experience
          </p>

          <span className="hidden h-px w-20 bg-white/10 sm:block" />
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">

          {/* LEFT — Editorial text */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              More Than
              <span className="block font-serif italic font-normal text-[#D4A373]">
                a Meal.
              </span>
              <span className="block">A Moment.</span>
            </h2>

            <div className="mt-10 max-w-xl space-y-6">
              <p className="text-lg leading-8 text-white/70 md:text-xl">
                Opheem Recipes & Lounge brings together exceptional food,
                carefully crafted drinks, and an atmosphere designed for
                good conversations and unforgettable evenings.
              </p>

              <p className="text-base leading-8 text-white/45">
                From relaxed afternoons to celebrations that deserve to be
                remembered, every detail is thoughtfully created to make
                your time with us feel special.
              </p>
            </div>

            {/* Signature divider */}
            <div className="mt-12 flex items-center gap-5">
              <div className="h-px w-16 bg-[#D4A373]" />

              <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                Taste · Atmosphere · Connection
              </span>
            </div>
          </motion.div>

          {/* RIGHT — Image composition */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -right-4 -top-4 h-full w-full border border-[#D4A373]/20 md:-right-6 md:-top-6" />

            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#151515]">
              <Image
                src="/about.jpg"
                alt="Opheem Recipes & Lounge"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

              {/* Image caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4A373]">
                    Opheem
                  </p>

                  <p className="mt-1 text-sm text-white/80">
                    Recipes & Lounge
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-sm text-white backdrop-blur-sm">
                  ↗
                </span>
              </div>
            </div>

            {/* Floating accent */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 -left-7 hidden h-24 w-24 items-center justify-center rounded-full border border-[#D4A373]/30 bg-[#0B0B0B] md:flex"
            >
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4A373]">
                Est.
                <br />
                Opheem
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom experience cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 grid border-y border-white/10 md:grid-cols-3"
        >
          {[
            {
              number: "01",
              title: "Exceptional Cuisine",
              text: "Thoughtfully prepared dishes made for memorable dining.",
            },
            {
              number: "02",
              title: "Premium Atmosphere",
              text: "A setting designed for relaxed moments and great company.",
            },
            {
              number: "03",
              title: "Made to Remember",
              text: "Every visit is an opportunity to create something special.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="group border-white/10 px-2 py-8 md:border-r md:px-8 md:py-10 md:first:border-l"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-xs tracking-[0.2em] text-[#D4A373]">
                  {item.number}
                </span>

                <span className="text-lg text-white/20 transition-colors duration-300 group-hover:text-[#D4A373]">
                  ↗
                </span>
              </div>

              <h3 className="mt-8 text-xl font-medium tracking-tight">
                {item.title}
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-white/40">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
