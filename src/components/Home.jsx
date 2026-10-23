"use client";

import Link from "next/link";
import useHome from "../hooks/main/Home";

export default function Home() {
  const { t, highlights, routes } = useHome();

  return (
    <main className="overflow-hidden bg-[#f0e7d7] text-[#302319]">
      {/* HERO */}

      {/* PRESENTACIÓN */}
      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-20">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#967344]">
              {t.presentation.eyebrow}
            </span>

            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {t.presentation.title}
            </h2>
          </div>

          <div>
            <p className="text-sm leading-8 text-[#786858] sm:text-base sm:leading-9">
              {t.presentation.paragraphs[0]}
            </p>

            <p className="mt-5 text-sm leading-8 text-[#786858] sm:text-base sm:leading-9">
              {t.presentation.paragraphs[1]}
            </p>

            <Link
              href={routes.about}
              className="mt-7 inline-flex items-center gap-4 border-b border-[#a17d43]/60 pb-2 text-[10px] tracking-[0.15em] text-[#76572f] transition-colors hover:border-[#76572f]"
            >
              {t.presentation.link}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DESTACADOS */}
      <section className="px-6 pb-20 sm:px-10 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#967344]">
                {t.highlightsTitle.eyebrow}
              </span>

              <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                {t.highlightsTitle.title}
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#786858]">
              {t.highlightsTitle.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.number}
                className="group flex flex-col border border-[#d9c9b1] bg-[#f7f1e7]"
              >
                <div className="relative aspect-[5/4] overflow-hidden bg-[#e5d8c4]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
           
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <span className="text-[9px] tracking-[0.25em] text-[#967344]">
                    {item.eyebrow}
                  </span>

                  <h3 className="mt-4 font-serif text-2xl leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[#786858]">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="mt-7 inline-flex w-fit items-center gap-4 border-b border-[#a17d43]/50 pb-2 text-[10px] tracking-[0.14em] text-[#76572f] transition-colors hover:border-[#76572f]"
                  >
                    {item.link}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="bg-[#e5d8c4] px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center md:gap-20">
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 h-2/3 w-2/3 border border-[#b29463]/60 sm:-bottom-6 sm:-left-6" />

            <img
              src={t.experience.image}
              alt={t.experience.alt}
              loading="lazy"
              className="relative aspect-[4/5] max-h-[620px] w-full object-cover"
            />

            <div className="absolute bottom-5 left-5 bg-[#21170f]/85 px-5 py-4 text-[#fffaf0] sm:bottom-8 sm:left-8">
              <span className="block text-[9px] tracking-[0.22em] text-[#d3b77f]">
                {t.experience.label}
              </span>
              <span className="mt-2 block font-serif text-xl">
                {t.experience.subtitle}
              </span>
            </div>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#967344]">
              {t.experience.eyebrow}
            </span>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {t.experience.title}
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#786858] sm:text-base">
              {t.experience.description}
            </p>

            <div className="mt-8 space-y-5">
              {t.experience.items.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a17d43]" />

                  <div>
                    <h3 className="font-serif text-xl">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-[#786858]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={routes.experiences}
              className="mt-9 inline-flex items-center gap-4 bg-[#80603a] px-7 py-4 text-[10px] tracking-[0.15em] text-[#fffaf1] transition-colors hover:bg-[#6e502f]"
            >
              {t.experience.link}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* RESTAURANTE */}
      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden bg-[#21170f] md:grid-cols-2">
          <div className="relative min-h-[330px] md:min-h-[560px]">
            <img
              src={t.restaurant.image}
              alt={t.restaurant.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
            <span className="text-[10px] tracking-[0.3em] text-[#c7a66c]">
              {t.restaurant.eyebrow}
            </span>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#faf5eb] sm:text-5xl">
              {t.restaurant.title}
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#d0c1af]">
              {t.restaurant.description}
            </p>

            <Link
              href={routes.menu}
              className="mt-8 inline-flex w-fit items-center gap-4 border border-[#c7a66c]/60 px-6 py-4 text-[10px] tracking-[0.16em] text-[#e7c990] transition-colors hover:bg-white/5"
            >
              {t.restaurant.link}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
