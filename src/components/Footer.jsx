"use client";

import Link from "next/link";
import { useState } from "react";
import ContactTestModal from "../layouts/ContactTestModal";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  const navigation = [
    { label: "Inicio", href: "/" },
    { label: "Habitaciones", href: "/rooms" },
    { label: "Servicios", href: "/services" },
    { label: "Experiencias", href: "/experiences" },
    { label: "Contacto", href: "/contact" },
  ];

  const contact = [
    {
      label: "Dirección",
      value: "Av. San Martín 456, Centro, Argentina",
      type: "address",
    },
    {
      label: "Teléfono",
      value: "+54 9 11 4567-8901",
      type: "phone",
    },
    {
      label: "Correo electrónico",
      value: "hola@altoshotel.com",
      type: "email",
    },
  ];

  return (
    <>
      <footer className="bg-[#21170f] text-[#f5efe5]">
        <section className="relative overflow-hidden bg-[#e9dfce] px-6 py-20 text-center text-[#302319] sm:px-10 sm:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(161,125,67,0.13),transparent_70%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#faf8f3] to-transparent" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex w-fit items-center gap-4 text-[#a17d43]/80">
              <span className="h-px w-10 bg-current sm:w-16" />
              <span className="text-xl" aria-hidden="true">
                ✦
              </span>
              <span className="h-px w-10 bg-current sm:w-16" />
            </div>

            <p className="text-xs tracking-[0.28em] text-[#8a693a]">
              TE ESPERAMOS
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#302319] sm:text-5xl">
              Tu próxima experiencia puede empezar acá.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#716052] sm:text-base sm:leading-8">
              Ya sea para descansar, conocer el hotel o disfrutar de nuestra
              propuesta gastronómica, nos encantará recibirte.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/reservations"
                className="inline-flex items-center justify-center bg-[#80603a] px-7 py-4 text-xs tracking-[0.16em] text-[#fffaf1] transition-colors hover:bg-[#6e502f]"
              >
                PLANEAR MI ESTADÍA
              </Link>

              <Link
                href="/menu"
                className="inline-flex items-center justify-center border border-[#a17d43]/60 px-7 py-4 text-xs tracking-[0.16em] text-[#76572f] transition-colors hover:bg-[#dcd0bb]"
              >
                CONOCE NUESTRO RESTAURANTE
              </Link>
            </div>
          </div>
        </section>

        <div className="h-10 bg-gradient-to-b from-[#e9dfce] to-[#d9c9b1]" />

        <div className="bg-[#21170f]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              <div>
                <Link href="/" className="group inline-flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#a17d43]/70 text-[#c7a66c]">
                    <svg
                      viewBox="0 0 40 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      className="h-8 w-8"
                      aria-hidden="true"
                    >
                      <path d="M5 33V15L20 5l15 10v18H5Z" />
                      <path d="M13 33V21h14v12M17 21v12M23 21v12M3 35h34" />
                    </svg>
                  </div>

                  <div>
                    <p className="font-serif text-2xl tracking-[0.2em]">
                      ALTOS
                    </p>
                    <p className="mt-1 text-[9px] tracking-[0.25em] text-[#c7a66c]">
                      HOTEL & ESTANCIA
                    </p>
                  </div>
                </Link>

                <p className="mt-6 max-w-xs text-sm leading-7 text-[#c7bdb0]">
                  Un lugar para descansar, disfrutar de los pequeños momentos y
                  vivir una estadía diferente.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#a17d43]" />
                  <span className="text-xs uppercase tracking-[0.2em] text-[#c7a66c]">
                    Tu descanso nos inspira
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl">Explorá</h3>

                <ul className="mt-6 space-y-4">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-[#c7bdb0] transition-colors hover:text-[#c7a66c]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-xl">Contacto</h3>

                <ul className="mt-6 space-y-5">
                  {contact.map((item) => (
                    <li key={item.type} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-[#c7a66c]">
                        {item.type === "address" && (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="h-5 w-5"
                            aria-hidden="true"
                          >
                            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                            <circle cx="12" cy="10" r="2.5" />
                          </svg>
                        )}

                        {item.type === "phone" && (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="h-5 w-5"
                            aria-hidden="true"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
                          </svg>
                        )}

                        {item.type === "email" && (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="h-5 w-5"
                            aria-hidden="true"
                          >
                            <rect
                              x="3"
                              y="5"
                              width="18"
                              height="14"
                              rx="2"
                            />
                            <path d="m3 7 9 6 9-6" />
                          </svg>
                        )}
                      </span>

                      <div>
                        <p className="text-xs uppercase tracking-[0.12em] text-[#a99b89]">
                          {item.label}
                        </p>

                        <button
                          type="button"
                          onClick={() => setModalOpen(true)}
                          className="mt-1 block text-left text-sm leading-6 text-[#e1d7ca] transition-colors hover:text-[#c7a66c]"
                        >
                          {item.value}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-xl">¿Planeamos tu estadía?</h3>

                <p className="mt-5 text-sm leading-7 text-[#c7bdb0]">
                  Consultanos por disponibilidad, habitaciones o cualquier
                  duda antes de tu llegada.
                </p>

                <Link
                  href="/reservations"
                  className="mt-7 inline-flex items-center justify-center gap-3 border border-[#a17d43] px-6 py-4 text-xs font-medium tracking-[0.16em] text-[#e7c990] transition-colors hover:bg-[#a17d43] hover:text-[#21170f]"
                >
                  RESERVAR ESTADÍA
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="mt-5 block text-sm text-[#c7bdb0] underline decoration-[#a17d43]/60 underline-offset-4 transition-colors hover:text-[#e7c990]"
                >
                  Hacer una consulta
                </button>
              </div>
            </div>

            <div className="mt-16 border-t border-white/10 pt-6">
              <div className="flex flex-col gap-4 text-xs text-[#a99b89] sm:flex-row sm:items-center sm:justify-between">
                <p>
                  © 2026 ALTOS HOTEL & ESTANCIA. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {modalOpen && (
        <ContactTestModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}