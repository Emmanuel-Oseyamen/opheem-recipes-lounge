"use client";

const reviews = [
  {
    name: "Michael O.",
    review:
      "The food was exceptional and the atmosphere was perfect for a family dinner.",
  },
  {
    name: "Sarah E.",
    review:
      "One of the best dining experiences I've had in Delta State.",
  },
  {
    name: "David A.",
    review:
      "Excellent service, great meals, and a beautiful lounge environment.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0B0B0B] py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="mb-3 uppercase tracking-[6px] text-[#D4A373]">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            What Guests Say
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-3xl bg-[#161616] p-8"
            >
              <p className="text-slate-300">
                "{review.review}"
              </p>

              <h3 className="mt-6 font-semibold text-[#D4A373]">
                {review.name}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}