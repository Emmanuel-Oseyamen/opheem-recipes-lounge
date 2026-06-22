"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Fresh Ingredients",
    desc: "Every meal is prepared using carefully selected fresh ingredients.",
  },
  {
    title: "Expert Chefs",
    desc: "Our chefs bring creativity, experience, and passion to every plate.",
  },
  {
    title: "Premium Lounge",
    desc: "Enjoy a relaxing atmosphere perfect for dining and socializing.",
  },
  {
    title: "Exceptional Service",
    desc: "Friendly staff dedicated to delivering an outstanding experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0B0B0B] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 max-w-3xl">
          <p className="mb-3 uppercase tracking-[6px] text-[#D4A373]">
            Why Opheem
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            More Than A Restaurant
          </h2>

          <p className="mt-5 text-lg text-slate-300">
            We combine exceptional cuisine, premium hospitality,
            and a welcoming atmosphere to create unforgettable moments.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-[#161616] p-8"
            >
              <h3 className="text-2xl font-semibold text-[#D4A373]">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-300">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}