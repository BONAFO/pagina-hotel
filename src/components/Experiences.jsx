"use client";

import Link from "next/link";
import {
  useExperiences,
  useExperienceCard,
} from "@/src/hooks/main/Experiences";

function ExperienceCard({ experience }) {
  const { activeImage } = useExperienceCard(experience.images.length);

  return (
    <article
      className={`group relative isolate flex min-h-[430px] flex-col justify-end overflow-hidden bg-[#302319] sm:min-h-[500px] ${
        experience.layout === "wide" ? "md:col-span-2 md:min-h-[470px]" : ""
      }`}
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {experience.images.map((image, index) => (
          <img
            key={`${experience.category}-${index}`}
            src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=1400&q=85`}
            alt={experience.imageAlt}
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1600ms] ease-in-out ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#21170f]/85 via-[#21170f]/30 to-transparent" />

      <div
        className={`relative p-7 sm:p-10 ${
          experience.layout === "wide" ? "md:max-w-3xl md:p-14" : ""
        }`}
      >
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-[#d8b878]" />

          <span className="text-[9px] tracking-[0.25em] text-[#efd5a0] sm:text-[10px]">
            {experience.category}
          </span>
        </div>

        <p className="mb-3 text-xs tracking-widest text-white/75">
          {experience.label}
        </p>

        <h3 className="max-w-2xl font-serif text-3xl leading-tight text-[#fffaf0] sm:text-4xl">
          {experience.title}
        </h3>

        <p className="mt-5 max-w-xl text-sm leading-7 text-white/85">
          {experience.description}
        </p>

        {experience.href && (
          <Link
            href={experience.href}
            className="mt-7 inline-flex items-center gap-4 border-b border-[#e3c38b]/60 pb-2 text-[10px] tracking-[0.15em] text-[#f1d7a4] transition-colors hover:border-[#fffaf0] hover:text-white"
          >
            {experience.link}
            <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
    </article>
  );
}

export default function ExperiencesSection() {
  const { content, experiences } = useExperiences();

  return (
    <section
      id="experiencias"
      className="scroll-mt-16 bg-[#f0e7d7] px-6 pb-20 pt-20 text-[#302319] sm:px-10 sm:pb-28 sm:pt-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#967344]">
              {content.header.eyebrow}
            </span>

            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              {content.header.title}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#786858]">
            {content.header.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.category}-${index}`}
              experience={experience}
            />
          ))}
        </div>

        <p className="mt-6 text-xs leading-6 text-[#8b7b68]">
          {content.disclaimer}
        </p>
      </div>
    </section>
  );
}