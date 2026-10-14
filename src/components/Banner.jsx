"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const slides = [
  {
    eyebrow: "UNA EXPERIENCIA DIFERENTE",
    title: "Tu próximo destino,\nlejos de lo cotidiano.",
    description:
      "Descubrí un lugar pensado para descansar, disfrutar y reconectar con lo que realmente importa.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=85",
    primary: "Descubrir habitaciones",
    primaryHref: "/rooms",
    secondary: "Conocé el hotel",
    secondaryHref: "/about",
  },
  {
    eyebrow: "DESCANSO SIN PRISAS",
    title: "Un refugio para\nvolver a disfrutar.",
    description:
      "Habitaciones acogedoras, detalles cuidados y la tranquilidad que necesitás para desconectar.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=85",
    primary: "Ver habitaciones",
    primaryHref: "/rooms",
    secondary: "Nuestros servicios",
    secondaryHref: "/services",
  },
  {
    eyebrow: "MOMENTOS QUE QUEDAN",
    title: "Hay lugares que\nse sienten como hogar.",
    description:
      "Viví una estadía especial, con espacios únicos y una atención pensada para vos.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=85",
    primary: "Planear mi estadía",
    primaryHref: "/reservations",
    secondary: "Contactanos",
    secondaryHref: "/contact",
  },
];

export default function Banner() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const goTo = (index) => {
    setActive((index + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      goTo(active + (deltaX < 0 ? 1 : -1));
    }
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="relative isolate min-h-[680px] overflow-hidden bg-[#211b15] text-white sm:min-h-[740px] lg:min-h-[790px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carrusel"
      aria-label="Descubrí nuestro hotel"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.eyebrow}
          aria-hidden={active !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            active === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            draggable="false"
            className={`absolute inset-0 h-full w-full select-none object-cover transition-transform duration-[7000ms] ease-out ${
              active === index ? "scale-105" : "scale-100"
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#17130f]/85 via-[#17130f]/55 to-[#17130f]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17130f]/55 via-transparent to-[#17130f]/15" />
        </div>
      ))}

      <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 pb-24 pt-24 sm:min-h-[740px] sm:px-10 lg:min-h-[790px] lg:px-16">
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-[#d5b477]" />
            <p className="text-[10px] font-medium tracking-[0.32em] text-[#e3c58f] sm:text-xs">
              {slides[active].eyebrow}
            </p>
          </div>

          <h1
            key={`title-${active}`}
            className="whitespace-pre-line font-serif text-5xl leading-[1.08] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            {slides[active].title}
          </h1>

          <p
            key={`description-${active}`}
            className="mt-7 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
          >
            {slides[active].description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={slides[active].primaryHref}
              className="inline-flex min-h-14 items-center justify-center gap-4 bg-[#b4945c] px-7 text-xs tracking-[0.12em] text-white transition hover:bg-[#987747]"
            >
              {slides[active].primary}
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href={slides[active].secondaryHref}
              className="inline-flex min-h-14 items-center justify-center border border-white/45 px-7 text-xs tracking-[0.12em] text-white transition hover:border-white hover:bg-white/10"
            >
              {slides[active].secondary}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 pb-8 sm:px-10 lg:px-16">
          <div className="flex items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ir a la diapositiva ${index + 1}`}
                aria-current={active === index ? "true" : undefined}
                className={`h-1 transition-all duration-300 ${
                  active === index
                    ? "w-10 bg-[#d5b477]"
                    : "w-5 bg-white/45 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}