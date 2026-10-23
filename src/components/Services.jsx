"use client";

import Link from "next/link";
import useServices from "@/src/hooks/main/Services";

export default function Services() {
  const { content, hotelServices, restaurantHighlights, routes } =
    useServices();

  return (
    <main className="overflow-hidden bg-[#faf8f3] text-[#30271e]">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs tracking-[0.25em] text-[#a17d43]">
            {content.header.eyebrow}
          </span>

          <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-5xl">
            {content.header.title}
          </h2>

          <p className="mt-6 text-sm leading-7 text-[#74695d] sm:text-base sm:leading-8">
            {content.header.description}
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {hotelServices.map((service) => (
            <div
              key={service.number}
              className="group overflow-hidden border border-[#e9e0d3] bg-white/70 transition-shadow hover:shadow-xl hover:shadow-[#30271e]/5"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#21170f]/50 to-transparent" />

                <span className="absolute bottom-5 left-6 font-serif text-3xl text-white/90">
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <span className="text-[10px] tracking-[0.22em] text-[#a17d43]">
                  {service.category}
                </span>

                <h3 className="mt-3 font-serif text-2xl leading-snug">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#74695d]">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-7 inline-flex items-center gap-3 text-xs tracking-[0.12em] text-[#8c6936] transition-colors hover:text-[#30271e]"
                >
                  {service.linkLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#eee7db]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[360px] sm:min-h-[460px]">
            <img
              src={content.restaurant.image}
              alt={content.restaurant.imageAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <span className="text-xs tracking-[0.25em] text-[#a17d43]">
              {content.restaurant.eyebrow}
            </span>

            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-5xl">
              {content.restaurant.title}
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#74695d] sm:text-base sm:leading-8">
              {content.restaurant.description}
            </p>

            <ul className="mt-7 space-y-4">
              {restaurantHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm leading-6 text-[#55493d]"
                >
                  <span className="mt-1 text-[#a17d43]" aria-hidden="true">
                    ✦
                  </span>

                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Link
                href={routes.menu}
                className="inline-flex items-center gap-4 bg-[#30271e] px-7 py-4 text-xs tracking-[0.16em] text-[#faf5eb] transition-colors hover:bg-[#49382a]"
              >
                {content.restaurant.buttonLabel}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}