"use client";

import Link from "next/link";
import useBanner from "@/src/hooks/main/Banner";

export default function Banner() {
  const {
    active,
    setPaused,
    slides,
    route,
    goTo,
    handleTouchStart,
    handleTouchEnd,
    ariaLabel,
    slideLabel,
  } = useBanner();

  return (
    <section
      className="relative isolate min-h-[680px] overflow-hidden bg-[#211b15] text-white sm:min-h-[740px] lg:min-h-[790px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carrusel"
      aria-label={ariaLabel}
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

          <div className="mt-9">
            <Link
              href={route}
              className="inline-flex min-h-14 items-center justify-center gap-4 bg-[#b4945c] px-7 text-xs tracking-[0.12em] text-white transition hover:bg-[#987747]"
            >
              {slides[active].button}
              <span aria-hidden="true">↗</span>
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
                aria-label={`${slideLabel} ${index + 1}`}
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