"use client";

import { useState } from "react";
import ContactTestModal from "../layouts/ContactTestModal";

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  const contactInfo = [
    {
      number: "01",
      label: "Dirección",
      value: "Av. San Martín 456, Centro, Argentina",
      description: "Encontranos en el corazón de la ciudad.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
    },
    {
      number: "02",
      label: "Teléfono",
      value: "+54 9 11 4567-8901",
      description: "Consultas sobre habitaciones y estadías.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      ),
    },
    {
      number: "03",
      label: "Correo electrónico",
      value: "hola@altoshotel.com",
      description: "Dejanos tu consulta y te ayudaremos.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <main className="overflow-hidden bg-[#faf8f3] text-[#30271e]">

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs tracking-[0.25em] text-[#a17d43]">
              PONETE EN CONTACTO
            </span>

            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-5xl">
              Nos encantará saber de vos.
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#74695d] sm:text-base sm:leading-8">
              Elegí el medio que te resulte más cómodo. Estamos para ayudarte
              a organizar tu visita y responder tus preguntas.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {contactInfo.map((item) => (
              <button
                key={item.number}
                type="button"
                onClick={() => setModalOpen(true)}
                className="group border border-[#e9e0d3] bg-white/70 p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#c8ad7c] hover:shadow-lg hover:shadow-[#30271e]/5 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center border border-[#c8ad7c]/70 text-[#a17d43] transition-colors group-hover:bg-[#a17d43] group-hover:text-white">
                    {item.icon}
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
                  REALIZAR CONSULTA
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
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=90"
                alt="Ambiente del restaurante de ALTOS"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
              <span className="text-xs tracking-[0.25em] text-[#a17d43]">
                HOTEL & GASTRONOMÍA
              </span>

              <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-5xl">
                ¿Tu consulta es por el restaurante?
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#74695d] sm:text-base sm:leading-8">
                ALTOS también cuenta con su propio restaurante. Si querés
                conocer nuestra propuesta gastronómica, consultar sobre la
                carta o planificar una visita, estamos para ayudarte.
              </p>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="mt-8 inline-flex w-fit items-center gap-4 border-b border-[#a17d43] pb-2 text-xs tracking-[0.16em] text-[#8c6936] transition-colors hover:text-[#30271e]"
              >
                CONSULTAR POR EL RESTAURANTE
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </section>


      </main>

      {modalOpen && (
        <ContactTestModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}