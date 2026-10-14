"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f1e8] px-6 py-20 text-[#30271e]">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#d8c6a5]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#b49a6b]/15 blur-3xl" />

      <section className="relative mx-auto w-full max-w-2xl text-center">
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#b4945c]" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#987747] sm:text-xs">
            Altos · Hotel & Estancia
          </span>
          <span className="h-px w-10 bg-[#b4945c]" />
        </div>

        <div className="relative mx-auto mb-5">
          <p className="select-none font-serif text-[120px] leading-none tracking-[-0.08em] text-[#d9cbb3] sm:text-[180px]">
            404
          </p>

          <div className="absolute inset-0 flex items-center justify-center pt-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#b4945c]/50 bg-[#f5f1e8] text-[#987747] sm:h-20 sm:w-20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="h-8 w-8 sm:h-10 sm:w-10"
              >
                <path d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-7h6v7M3 9h18" />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="font-serif text-3xl leading-tight sm:text-5xl">
          Parece que te perdiste.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#776c5d] sm:text-base">
          Esta página no está disponible. No te preocupes, a veces hasta los
          mejores viajeros toman el camino equivocado.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#a17d43] px-7 text-xs tracking-[0.12em] text-white transition hover:bg-[#806132]"
          >
            <span aria-hidden="true">←</span>
            VOLVER AL INICIO
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-h-14 items-center justify-center border border-[#d5c7b0] px-7 text-xs tracking-[0.12em] text-[#5e4b32] transition hover:border-[#a17d43] hover:bg-white/50"
          >
            CONTACTAR AL HOTEL
          </Link>
        </div>

        <div className="mx-auto mt-14 flex max-w-xs items-center gap-4">
          <span className="h-px flex-1 bg-[#dfd4c2]" />
          <span className="text-lg text-[#b4945c]">✦</span>
          <span className="h-px flex-1 bg-[#dfd4c2]" />
        </div>

        <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-[#9b8b75]">
          Tu descanso te espera
        </p>
      </section>
    </main>
  );
}