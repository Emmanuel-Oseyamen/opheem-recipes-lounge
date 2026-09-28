"use client";

import { motion } from "framer-motion";

const categories = [
  {
    number: "01",
    title: "Nigerian Dishes",
    description: "Rich, authentic flavours rooted in tradition.",
  },
  {
    number: "02",
    title: "Grills & Barbecue",
    description: "Bold flavours, fire-kissed and beautifully prepared.",
  },
  {
    number: "03",
    title: "Seafood Specials",
    description: "Fresh selections crafted with a refined touch.",
  },
  {
    number: "04",
    title: "Continental Cuisine",
    description: "Familiar classics with an Opheem interpretation.",
  },
  {
    number: "05",
    title: "Desserts",
    description: "A sweet finish worth lingering over.",
  },
  {
    number: "06",
    title: "Cocktails & Mocktails",
    description: "Elegant pours, refreshing blends and good spirits.",
  },
];

export default function MenuCategories() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-28 text-white md:py-36">
      
      {/* Ambient light */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4A373]/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#D4A373]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#D4A373]">
              The Menu
            </p>

            <span className="h-px w-10 bg-[#D4A373]" />
          </div>

          <h2 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
            A Table Full of
            <span className="block font-serif italic font-normal text-[#D4A373]">
              Possibilities.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/40 md:text-base">
            From familiar Nigerian favourites to refined continental plates,
            discover flavours made for every mood, occasion and appetite.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="border-t border-white/10">
          {categories.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.06,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative border-b border-white/10"
            >
              <div className="relative flex min-h-[120px] items-center gap-6 overflow-hidden py-7 md:min-h-[145px] md:gap-10 md:py-8">

                {/* Hover background */}
                <div className="absolute inset-0 -translate-x-full bg-[#D4A373]/[0.035] transition-transform duration-700 ease-out group-hover:translate-x-0" />

                {/* Number */}
                <div className="relative z-10 w-12 shrink-0 md:w-20">
                  <span className="text-xs tracking-[0.25em] text-[#D4A373]/70">
                    {item.number}
                  </span>
                </div>

                {/* Main title */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-2xl font-medium tracking-[-0.02em] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#D4A373] md:text-4xl lg:text-5xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-6 text-white/30 transition-colors duration-500 group-hover:text-white/50 md:text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg text-white/30 transition-all duration-500 group-hover:border-[#D4A373]/60 group-hover:bg-[#D4A373] group-hover:text-[#111111] md:h-14 md:w-14">
                  <span className="transition-transform duration-500 group-hover:-rotate-45">
                    ↗
                  </span>
                </div>

                {/* Gold line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#D4A373] transition-all duration-700 group-hover:w-24" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-14 flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
            Crafted for every occasion
          </p>

          <div className="flex items-center gap-3 text-xs text-white/30">
            <span className="h-1 w-1 rounded-full bg-[#D4A373]" />
            Explore the flavours of Opheem
          </div>
        </motion.div>

      </div>
    </section>
  );
}

