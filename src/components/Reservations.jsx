"use client";

import Link from "next/link";
import ContactTestModal from "../layouts/ContactTestModal";
import useReservations from "@/src/hooks/main/Reservations";

export default function Reservations() {
  const {
    content,
    routes,
    form,
    handleChange,
    handleSubmit,
    inputClass,
    labelClass,
    modalOpen,
    openModal,
    closeModal,
  } = useReservations();

  return (
    <>
      <main className="min-h-screen bg-[#faf8f3] text-[#30271e]">
        <section className="relative overflow-hidden bg-[#e9dfce] px-6 pb-16 pt-16 sm:px-10 sm:pb-20 sm:pt-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(161,125,67,0.13),transparent_55%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.75fr] lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-3 text-[#a17d43]">
                <span className="h-px w-10 bg-current" />
                <span className="text-[10px] tracking-[0.28em] sm:text-xs">
                  {content.hero.eyebrow}
                </span>
              </div>

              <h1 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                {content.hero.title}
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#716052] sm:text-base sm:leading-8">
                {content.hero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#formulario-reserva"
                  className="inline-flex items-center justify-center bg-[#80603a] px-7 py-4 text-xs tracking-[0.16em] text-[#fffaf1] transition-colors hover:bg-[#6e502f]"
                >
                  {content.hero.availabilityButton}
                </a>

                <Link
                  href={routes.rooms}
                  className="inline-flex items-center justify-center border border-[#a17d43]/50 px-7 py-4 text-xs tracking-[0.16em] text-[#76572f] transition-colors hover:bg-[#dcd0bb]"
                >
                  {content.hero.roomsButton}
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -bottom-4 -left-4 right-4 top-4 border border-[#a17d43]/40" />

              <div className="relative aspect-[4/5] overflow-hidden bg-[#d9c9b1] sm:aspect-[5/4] lg:aspect-[4/5]">
                <img
                  src={content.hero.image.src}
                  alt={content.hero.image.alt}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#21170f]/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <p className="text-[10px] tracking-[0.25em] text-[#e7c990]">
                    {content.hero.image.eyebrow}
                  </p>

                  <p className="mt-3 max-w-sm font-serif text-2xl text-[#faf5eb] sm:text-3xl">
                    {content.hero.image.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#faf8f3] px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="lg:pt-4">
              <div className="mb-5 flex items-center gap-3 text-[#a17d43]">
                <span className="h-px w-8 bg-current" />
                <span className="text-[10px] tracking-[0.25em]">
                  {content.stay.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                {content.stay.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#74695d]">
                {content.stay.description}
              </p>

              <div className="mt-8 border-l-2 border-[#a17d43]/60 pl-5">
                <p className="font-serif text-lg">
                  {content.stay.question}
                </p>

                <p className="mt-2 text-sm leading-7 text-[#74695d]">
                  {content.stay.questionDescription}
                </p>

                <button
                  type="button"
                  onClick={openModal}
                  className="mt-4 text-xs tracking-[0.12em] text-[#8a693a] underline decoration-[#a17d43]/50 underline-offset-4 transition-colors hover:text-[#5f4528]"
                >
                  {content.stay.contactButton}
                </button>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {content.stay.highlights.map((item) => (
                  <div
                    key={item.title}
                    className="border border-[#e5dac9] bg-[#f2ece1] p-4"
                  >
                    <span className="text-xl text-[#a17d43]">
                      {item.icon}
                    </span>

                    <p className="mt-3 font-serif text-base">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#74695d]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="formulario-reserva"
              className="border border-[#e5dac9] bg-[#f3eee5] p-5 sm:p-8 lg:p-10"
            >
              <div className="mb-8 border-b border-[#d8cbb8] pb-6">
                <p className="text-[10px] tracking-[0.25em] text-[#8a693a]">
                  {content.form.eyebrow}
                </p>

                <h2 className="mt-3 font-serif text-2xl sm:text-3xl">
                  {content.form.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#74695d]">
                  {content.form.description}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className={labelClass}>
                    {content.form.fields.name.label}
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={content.form.fields.name.placeholder}
                      autoComplete="name"
                      className={inputClass}
                    />
                  </label>

                  <label className={labelClass}>
                    {content.form.fields.email.label}
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={content.form.fields.email.placeholder}
                      autoComplete="email"
                      className={inputClass}
                    />
                  </label>

                  <label className={labelClass}>
                    {content.form.fields.phone.label}
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={content.form.fields.phone.placeholder}
                      autoComplete="tel"
                      className={inputClass}
                    />
                  </label>

                  <label className={labelClass}>
                    {content.form.fields.guests.label}
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {content.form.fields.guests.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className={labelClass}>
                    {content.form.fields.checkIn.label}
                    <input
                      required
                      type="date"
                      name="checkIn"
                      value={form.checkIn}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </label>

                  <label className={labelClass}>
                    {content.form.fields.checkOut.label}
                    <input
                      required
                      type="date"
                      name="checkOut"
                      value={form.checkOut}
                      min={form.checkIn}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </label>
                </div>

                <label className={labelClass}>
                  {content.form.fields.room.label}
                  <select
                    name="room"
                    value={form.room}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {content.form.fields.room.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className={labelClass}>
                  {content.form.fields.message.label}
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={content.form.fields.message.placeholder}
                    className={`${inputClass} resize-y`}
                  />
                </label>

                <div className="border-t border-[#d8cbb8] pt-6">
                  <p className="mb-5 text-xs leading-6 text-[#817466]">
                    {content.form.notice}
                  </p>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 bg-[#80603a] px-7 py-4 text-xs tracking-[0.16em] text-[#fffaf1] transition-colors hover:bg-[#6e502f]"
                  >
                    {content.form.submit}
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </form>
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