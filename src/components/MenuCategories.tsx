"use client";

import { motion } from "framer-motion";

const categories = [
  "Nigerian Dishes",
  "Grills & Barbecue",
  "Seafood Specials",
  "Continental Cuisine",
  "Desserts",
  "Cocktails & Mocktails",
];

export default function MenuCategories() {
  return (
    <section className="bg-[#111111] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 uppercase tracking-[6px] text-[#D4A373]">
            Menu Highlights
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Something For Every Taste
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-white/10 bg-[#161616] p-8 text-center transition hover:border-[#D4A373]"
            >
              <h3 className="text-xl font-semibold">
                {item}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}