"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const dishes = [
  {
    name: "Peppered Chicken",
    desc: "Spicy grilled chicken served with signature Opheem sauce.",
    image: "/dishes/dish-1.png",
  },
  {
    name: "Seafood Platter",
    desc: "Fresh seafood selection with prawns, fish, and calamari.",
    image: "/dishes/dish-2.png",
  },
  {
    name: "Jollof Rice Special",
    desc: "Rich, smoky Nigerian jollof rice with grilled turkey.",
    image: "/dishes/dish-3.png",
  },
];

export default function SignatureDishes() {
  return (
    <section id="menu" className="bg-[#0B0B0B] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 uppercase tracking-[6px] text-[#D4A373]">
            Signature Dishes
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Crafted With Passion & Flavor
          </h2>

          <p className="mt-4 text-slate-300">
            Explore our most loved dishes, prepared with fresh ingredients
            and authentic recipes.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-[#161616]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {dish.name}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {dish.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}