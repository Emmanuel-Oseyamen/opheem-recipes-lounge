"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/gallery/gallery-1.webp",
  "/gallery/gallery-2.webp",
  "/gallery/gallery-3.png",
  "/gallery/gallery-4.webp",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#111111] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="mb-3 uppercase tracking-[6px] text-[#D4A373]">
            Gallery
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            The Opheem Experience
          </h2>

          <p className="mt-4 text-slate-400">
            Food, ambience, and unforgettable moments.
          </p>

        </div>

        <div className="grid gap-4 md:grid-cols-4">

          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative h-[280px] overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt="Opheem Gallery"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}