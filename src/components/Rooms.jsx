"use client";

import Link from "next/link";

const rooms = [
  {
    id: 1,
    name: "Habitación Clásica",
    category: "CONFORT & DESCANSO",
    description:
      "Un espacio cálido y acogedor, ideal para disfrutar de una escapada y descansar sin preocupaciones.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85",
    guests: "2 huéspedes",
    bed: "Cama matrimonial",
    size: "24 m²",
  },
  {
    id: 2,
    name: "Habitación Superior",
    category: "ESPACIO & BIENESTAR",
    description:
      "Más amplitud, detalles cuidados y un ambiente sereno para convertir tu estadía en una experiencia especial.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85",
    guests: "2 huéspedes",
    bed: "Cama queen",
    size: "32 m²",
  },
  {
    id: 3,
    name: "Suite Especial",
    category: "UNA ESTADÍA ÚNICA",
    description:
      "Un refugio exclusivo con ambientes amplios, diseño elegante y espacio para disfrutar cada momento.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85",
    guests: "2–3 huéspedes",
    bed: "Cama king",
    size: "42 m²",
  },
];

export default function Rooms() {
  return (
    <main className="min-h-screen bg-[#faf8f3] text-[#30271e]">
      {/* Encabezado */}
      <section className="px-6 pb-16 pt-20 text-center sm:px-10 sm:pb-20 sm:pt-28">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#b4945c]" />
          <p className="text-[10px] font-medium tracking-[0.3em] text-[#987747] sm:text-xs">
            DESCANSO A TU MANERA
          </p>
          <span className="h-px w-10 bg-[#b4945c]" />
        </div>

        <h1 className="mx-auto max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Un lugar para sentirte
          <span className="block italic text-[#a17d43]">como en casa.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#776c5d] sm:text-base sm:leading-8">
          Cada habitación está pensada para ofrecerte tranquilidad, comodidad y
          pequeños detalles que hacen especial cada estadía.
        </p>
      </section>

      {/* Imagen principal */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative h-[300px] overflow-hidden sm:h-[420px] lg:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=85"
            alt="Habitación elegante y acogedora del hotel"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#17130f]/70 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 max-w-xl p-6 sm:p-10 lg:p-12">
            <p className="mb-3 text-[10px] tracking-[0.25em] text-[#e3c58f] sm:text-xs">
              TU ESPACIO, TU MOMENTO
            </p>
            <h2 className="font-serif text-3xl text-white sm:text-4xl">
              El placer de bajar el ritmo.
            </h2>
          </div>
        </div>
      </section>

      {/* Listado de habitaciones */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] tracking-[0.25em] text-[#987747]">
              ENCONTRÁ TU LUGAR
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl">
              Nuestras habitaciones
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#776c5d]">
            Diferentes espacios, una misma idea: que disfrutes cada instante de
            tu visita.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <article
              key={room.id}
              className="group overflow-hidden border border-[#e9e0d3] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#49351d]/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute bottom-4 left-4 bg-[#faf8f3]/95 px-3 py-2 text-[9px] tracking-[0.18em] text-[#806132]">
                  {room.category}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="font-serif text-2xl">{room.name}</h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#776c5d]">
                  {room.description}
                </p>

                <div className="my-6 grid grid-cols-2 gap-y-4 border-y border-[#eee6da] py-5">
                  <div className="flex items-center gap-2 text-xs text-[#6f6455]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      className="h-4 w-4 text-[#a17d43]"
                    >
                      <circle cx="12" cy="7" r="4" />
                      <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
                    </svg>
                    {room.guests}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#6f6455]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      className="h-4 w-4 text-[#a17d43]"
                    >
                      <path d="M3 12V5h18v14H3zM3 16h18M7 12v4M17 12v4" />
                    </svg>
                    {room.bed}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#6f6455]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      className="h-4 w-4 text-[#a17d43]"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="1" />
                      <path d="M4 10h6V4M14 20v-6h6" />
                    </svg>
                    {room.size}
                  </div>
                </div>

                <Link
                  href={`/reservations?room=${room.id}`}
                  className="flex min-h-12 items-center justify-between border border-[#b4945c] px-4 text-xs tracking-[0.1em] text-[#806132] transition hover:bg-[#a17d43] hover:text-white"
                >
                  CONSULTAR DISPONIBILIDAD
                  <span aria-hidden="true" className="text-lg">
                    ↗
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>


    </main>
  );
}