import Link from "next/link";

export default function Experiences() {
  const experiences = [
    {
      number: "01",
      category: "DESCANSO",
      title: "Una pausa para vos",
      description:
        "Desconectá de la rutina, disfrutá de la tranquilidad del entorno y regalate unos días para descansar.",
      href: "/rooms",
      link: "Descubrir habitaciones",
    },
    {
      number: "02",
      category: "GASTRONOMÍA",
      title: "Sabores para compartir",
      description:
        "Viví una experiencia gastronómica donde cada encuentro invita a disfrutar de buenos sabores y momentos especiales.",
      href: "/menu",
      link: "Conocer el restaurante",
    },
    {
      number: "03",
      category: "ESTADÍA",
      title: "Momentos que quedan",
      description:
        "Un lugar para celebrar, compartir y disfrutar de una estadía pensada para salir de lo cotidiano.",
      href: "/reservations",
      link: "Planear una estadía",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5efe5] text-[#302319]">
      <section className="relative overflow-hidden bg-[#2b1d13] px-6 py-24 text-center sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(161,125,67,0.2),transparent_65%)]" />

        <div className="relative mx-auto max-w-3xl">
          <span className="text-sm tracking-[0.35em] text-[#c7a66c]">
            ALTOS · HOTEL & ESTANCIA
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-tight text-[#faf5eb] sm:text-6xl">
            Experiencias para disfrutar sin apuro
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#d0c1af] sm:text-base sm:leading-8">
            Hay momentos que merecen otro ritmo. Descubrí todo lo que hace
            especial una visita a Altos, desde el descanso hasta la buena mesa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs tracking-[0.25em] text-[#967344]">
            VIVÍ ALTOS
          </p>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Cada visita tiene su encanto
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#786858]">
            Ya sea que vengas a descansar, compartir una comida o disfrutar de
            unos días diferentes, queremos que te sientas a gusto.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className="group flex flex-col border border-[#dfd2bd] bg-[#eee5d6] p-7 transition-colors duration-300 hover:bg-[#e8dcc9] sm:p-9"
            >
              <span className="font-serif text-3xl text-[#b29463]">
                {experience.number}
              </span>

              <p className="mt-8 text-[10px] tracking-[0.25em] text-[#967344]">
                {experience.category}
              </p>

              <h3 className="mt-3 font-serif text-2xl">
                {experience.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-[#786858]">
                {experience.description}
              </p>

              <Link
                href={experience.href}
                className="mt-8 inline-flex w-fit items-center gap-3 border-b border-[#a17d43]/50 pb-2 text-xs tracking-[0.12em] text-[#76572f] transition-colors hover:border-[#76572f]"
              >
                {experience.link}
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20 text-center sm:pb-28">
        <p className="font-serif text-2xl leading-relaxed text-[#5c4531] sm:text-3xl">
          A veces, lo mejor de una escapada es simplemente disfrutar el momento.
        </p>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#786858]">
          Te esperamos para que descubras Altos a tu manera.
        </p>
      </section>
    </main>
  );
}