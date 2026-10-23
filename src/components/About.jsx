"use client"

import Link from "next/link";
import useAboutHook from "@/src/hooks/main/About";

export default function About() {
  const {
    essence,
    gastronomy,
    values,
    routes,
  } = useAboutHook();

  return (
    <main className="overflow-hidden bg-[#faf8f3] text-[#30271e]">
      {/* ESENCIA */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#a17d43]">
              {essence.eyebrow}
            </p>

            <h1 className="font-serif text-3xl leading-tight tracking-tight text-[#30271e] sm:text-4xl lg:text-5xl">
              {essence.title}
            </h1>

            <div className="mt-7 space-y-4">
              {essence.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-7 text-[#71665a] sm:text-base sm:leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 border-l-2 border-[#c7a66c] py-2 pl-5 sm:mt-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#a17d43]">
                {essence.philosophy.eyebrow}
              </p>

              <p className="font-serif text-xl leading-relaxed text-[#30271e] sm:text-2xl">
                {essence.philosophy.text}
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_55px_rgba(48,39,30,0.12)]">
            <img
              src={essence.image.src}
              alt={essence.image.alt}
              loading="lazy"
              className="h-[320px] w-full object-cover sm:h-[440px] lg:h-[540px]"
            />
          </div>
        </div>
      </section>

      {/* GASTRONOMÍA */}
      <section className="bg-[#eee7db]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={gastronomy.image.src}
                alt={gastronomy.image.alt}
                loading="lazy"
                className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[500px]"
              />
            </div>

            <div className="flex flex-col items-start justify-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#a17d43]">
                {gastronomy.eyebrow}
              </p>

              <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#30271e] sm:text-4xl lg:text-5xl">
                {gastronomy.title}
              </h2>

              <div className="mt-7 space-y-4">
                {gastronomy.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm leading-7 text-[#71665a] sm:text-base sm:leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <Link
                href={routes.restaurant}
                className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#2b1d13] px-7 py-4 text-xs font-semibold tracking-[0.16em] text-[#faf5eb] transition duration-300 hover:bg-[#493321]"
              >
                {gastronomy.buttonText}

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#a17d43]">
            {values.eyebrow}
          </p>

          <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#30271e] sm:text-4xl lg:text-5xl">
            {values.title}
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#71665a] sm:text-base sm:leading-8">
            {values.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {values.items.map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-[#e5dac8] bg-[#faf8f3] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(48,39,30,0.07)] sm:p-8"
            >
              <p className="mb-6 text-2xl">{item.emoji}</p>

              <p className="text-xs font-semibold tracking-[0.2em] text-[#a17d43]">
                {item.number}
              </p>

              <h3 className="mb-3 font-serif text-2xl text-[#30271e]">
                {item.title}
              </h3>

              <p className="text-sm leading-7 text-[#71665a]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}