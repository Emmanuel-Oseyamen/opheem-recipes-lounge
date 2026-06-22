"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0B0B0B] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >

          <p className="mb-3 uppercase tracking-[6px] text-[#D4A373]">
            About Opheem
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Where Great Food Meets Great Company
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Opheem Recipes & Lounge offers a unique dining
            experience that combines exceptional cuisine,
            premium drinks, and a welcoming atmosphere.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Whether you're joining us for a casual meal,
            a special celebration, or an evening with friends,
            every visit is designed to leave a lasting impression.
          </p>

        </motion.div>

      </div>
    </section>
  );
}