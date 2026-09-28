"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const dishes = [
  {
    number: "01",
    name: "Peppered Chicken",
    desc: "Spicy grilled chicken served with signature Opheem sauce.",
    image: "/dishes/dish-1.png",
  },
  {
    number: "02",
    name: "Seafood Platter",
    desc: "Fresh seafood selection with prawns, fish, and calamari.",
    image: "/dishes/dish-2.png",
  },
  {
    number: "03",
    name: "Jollof Rice Special",
    desc: "Rich, smoky Nigerian jollof rice with grilled turkey.",
    image: "/dishes/dish-3.png",
  },
];

export default function SignatureDishes() {
  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-[#0B0B0B] py-28 text-white md:py-36"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#D4A373]/[0.04] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#D4A373]" />

              <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4A373]">
                From Our Kitchen
              </p>
            </div>

            <h2 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Signature
              <span className="block font-serif italic font-normal text-[#D4A373]">
                Flavours.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/40 md:pb-2">
            A selection of dishes that capture the spirit of Opheem —
            generous flavours, fresh ingredients and unforgettable
            combinations.
          </p>
        </motion.div>

        {/* Dish showcase */}
        <div className="grid gap-5 md:grid-cols-12 md:grid-rows-[260px_260px]">

          {dishes.map((dish, index) => {
            const isFeatured = index === 0;

            return (
              <motion.div
                key={dish.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden ${
                  isFeatured
                    ? "md:col-span-7 md:row-span-2"
                    : "md:col-span-5"
                }`}
              >
                {/* Image */}
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes={
                    isFeatured
                      ? "(max-width: 768px) 100vw, 58vw"
                      : "(max-width: 768px) 100vw, 42vw"
                  }
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 transition-opacity duration-700 group-hover:from-black/95" />

                {/* Subtle dark edge */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

                {/* Number */}
                <div className="absolute left-6 top-6 md:left-8 md:top-8">
                  <span className="text-[11px] tracking-[0.25em] text-[#D4A373]">
                    {dish.number}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 text-sm backdrop-blur-sm transition-all duration-500 group-hover:border-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-[#0B0B0B] md:right-8 md:top-8">
                  <span className="transition-transform duration-500 group-hover:-rotate-45">
                    ↗
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 ${
                    isFeatured ? "md:p-10" : ""
                  }`}
                >
                  <div className="max-w-xl">
                    <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-[#D4A373]">
                      Signature Selection
                    </p>

                    <h3
                      className={`font-medium tracking-[-0.03em] ${
                        isFeatured
                          ? "text-3xl md:text-5xl"
                          : "text-2xl md:text-3xl"
                      }`}
                    >
                      {dish.name}
                    </h3>

                    <div className="mt-4 max-w-md overflow-hidden">
                      <p className="translate-y-0 text-sm leading-6 text-white/60 transition-all duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                        {dish.desc}
                      </p>
                    </div>

                    <div className="mt-5 h-px w-12 bg-[#D4A373] transition-all duration-500 group-hover:w-20" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
            A taste of what awaits
          </p>

          <button className="group flex items-center gap-4 text-sm text-white/70 transition-colors hover:text-[#D4A373]">
            <span>Explore Full Menu</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-[#0B0B0B]">
              →
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}

