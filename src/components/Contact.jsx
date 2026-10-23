"use client";

import Link from "next/link";
import ContactTestModal from "../layouts/ContactTestModal";
import useContact from "@/src/hooks/main/Contact";

export default function Contact() {
  const { content, routes, modalOpen, icons, openModal, closeModal } =
    useContact();

  return (
    <>
      <main className="overflow-hidden bg-[#faf8f3] text-[#30271e]">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs tracking-[0.25em] text-[#a17d43]">
              {content.hero.eyebrow}
            </span>

            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-5xl">
              {content.hero.title}
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#74695d] sm:text-base sm:leading-8">
              {content.hero.description}
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {content.contactInfo.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={openModal}
                className="group border border-[#e9e0d3] bg-white/70 p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#c8ad7c] hover:shadow-lg hover:shadow-[#30271e]/5 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center border border-[#c8ad7c]/70 text-[#a17d43] transition-colors group-hover:bg-[#a17d43] group-hover:text-white">
                    {icons[index]}
                  </span>

                  <span className="font-serif text-2xl text-[#c8ad7c]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-xl">{item.label}</h3>

                <p className="mt-3 break-words text-sm leading-6 text-[#8c6936]">
                  {item.value}
                </p>

                <p className="mt-3 text-sm leading-6 text-[#74695d]">
                  {item.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-[#8c6936] transition-colors group-hover:text-[#30271e]">
                  {item.action}
                  <span aria-hidden="true">→</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="bg-[#eee7db]">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="relative min-h-[340px] sm:min-h-[440px]">
              <img
                src={content.restaurant.image}
                alt={content.restaurant.imageAlt}
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

              <Link
                href={routes.restaurant}
                className="mt-8 inline-flex w-fit items-center gap-4 border-b border-[#a17d43] pb-2 text-xs tracking-[0.16em] text-[#8c6936] transition-colors hover:text-[#30271e]"
              >
                {content.restaurant.action}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {modalOpen && (
        <ContactTestModal isOpen={modalOpen} onClose={closeModal} />
      )}
    </>
  );
}
