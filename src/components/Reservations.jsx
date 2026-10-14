"use client";

import Link from "next/link";
import { useState } from "react";
import ContactTestModal from "../layouts/ContactTestModal";

export default function Reservations() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    room: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const inputClass =
    "mt-2 w-full border border-[#d8cbb8] bg-[#faf8f3] px-4 py-3.5 text-sm text-[#30271e] outline-none transition-colors placeholder:text-[#a39788] focus:border-[#a17d43]";

  const labelClass =
    "text-xs uppercase tracking-[0.12em] text-[#74695d]";

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
                  RESERVAS · ALTOS HOTEL & ESTANCIA
                </span>
              </div>

              <h1 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Tu descanso empieza con una buena elección.
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#716052] sm:text-base sm:leading-8">
                Contanos cómo imaginás tu estadía. Estamos para ayudarte a
                encontrar la habitación ideal y preparar una experiencia a tu
                medida.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#formulario-reserva"
                  className="inline-flex items-center justify-center bg-[#80603a] px-7 py-4 text-xs tracking-[0.16em] text-[#fffaf1] transition-colors hover:bg-[#6e502f]"
                >
                  CONSULTAR DISPONIBILIDAD
                </a>

                <Link
                  href="/rooms"
                  className="inline-flex items-center justify-center border border-[#a17d43]/50 px-7 py-4 text-xs tracking-[0.16em] text-[#76572f] transition-colors hover:bg-[#dcd0bb]"
                >
                  VER HABITACIONES
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -bottom-4 -left-4 right-4 top-4 border border-[#a17d43]/40" />
              <div className="relative aspect-[4/5] overflow-hidden bg-[#d9c9b1] sm:aspect-[5/4] lg:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85"
                  alt="Habitación cálida y elegante de ALTOS Hotel"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#21170f]/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <p className="text-[10px] tracking-[0.25em] text-[#e7c990]">
                    UN LUGAR PARA DESACELERAR
                  </p>
                  <p className="mt-3 max-w-sm font-serif text-2xl text-[#faf5eb] sm:text-3xl">
                    Cada detalle, pensado para vos.
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
                  TU ESTADÍA
                </span>
              </div>

              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                Planifiquemos juntos tu visita.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#74695d]">
                Completá tus datos y las fechas que tenés en mente. Nuestro
                equipo podrá orientarte sobre las opciones disponibles.
              </p>

              <div className="mt-8 border-l-2 border-[#a17d43]/60 pl-5">
                <p className="font-serif text-lg">¿Tenés alguna duda?</p>
                <p className="mt-2 text-sm leading-7 text-[#74695d]">
                  Si preferís conversar antes de reservar, podemos ayudarte
                  con los detalles de tu estadía.
                </p>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="mt-4 text-xs tracking-[0.12em] text-[#8a693a] underline decoration-[#a17d43]/50 underline-offset-4 transition-colors hover:text-[#5f4528]"
                >
                  HACER UNA CONSULTA
                </button>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="border border-[#e5dac9] bg-[#f2ece1] p-4">
                  <span className="text-xl text-[#a17d43]">✦</span>
                  <p className="mt-3 font-serif text-base">Descanso</p>
                  <p className="mt-1 text-xs leading-5 text-[#74695d]">
                    Espacios para bajar el ritmo.
                  </p>
                </div>

                <div className="border border-[#e5dac9] bg-[#f2ece1] p-4">
                  <span className="text-xl text-[#a17d43]">✧</span>
                  <p className="mt-3 font-serif text-base">Bienestar</p>
                  <p className="mt-1 text-xs leading-5 text-[#74695d]">
                    Una experiencia a tu medida.
                  </p>
                </div>
              </div>
            </div>

            <div
              id="formulario-reserva"
              className="border border-[#e5dac9] bg-[#f3eee5] p-5 sm:p-8 lg:p-10"
            >
              <div className="mb-8 border-b border-[#d8cbb8] pb-6">
                <p className="text-[10px] tracking-[0.25em] text-[#8a693a]">
                  EMPECEMOS POR LO ESENCIAL
                </p>
                <h2 className="mt-3 font-serif text-2xl sm:text-3xl">
                  Consulta de reserva
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#74695d]">
                  Los datos nos ayudan a conocer mejor lo que necesitás.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className={labelClass}>
                    Nombre y apellido
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      autoComplete="name"
                      className={inputClass}
                    />
                  </label>

                  <label className={labelClass}>
                    Correo electrónico
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      autoComplete="email"
                      className={inputClass}
                    />
                  </label>

                  <label className={labelClass}>
                    Teléfono
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+54 9 ..."
                      autoComplete="tel"
                      className={inputClass}
                    />
                  </label>

                  <label className={labelClass}>
                    Cantidad de huéspedes
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="1">1 huésped</option>
                      <option value="2">2 huéspedes</option>
                      <option value="3">3 huéspedes</option>
                      <option value="4">4 huéspedes</option>
                      <option value="5+">5 o más huéspedes</option>
                    </select>
                  </label>

                  <label className={labelClass}>
                    Fecha de ingreso
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
                    Fecha de salida
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
                  Habitación de preferencia
                  <select
                    name="room"
                    value={form.room}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Quiero recibir recomendaciones</option>
                    <option value="Habitación Clásica">
                      Habitación Clásica
                    </option>
                    <option value="Habitación Superior">
                      Habitación Superior
                    </option>
                    <option value="Suite Especial">Suite Especial</option>
                  </select>
                </label>

                <label className={labelClass}>
                  Comentarios adicionales
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Contanos si tenés algún pedido especial..."
                    className={`${inputClass} resize-y`}
                  />
                </label>

                <div className="border-t border-[#d8cbb8] pt-6">
                  <p className="mb-5 text-xs leading-6 text-[#817466]">
                    Esta solicitud es una consulta inicial y no confirma una
                    reserva. Nos pondremos en contacto para conversar sobre
                    disponibilidad y detalles.
                  </p>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 bg-[#80603a] px-7 py-4 text-xs tracking-[0.16em] text-[#fffaf1] transition-colors hover:bg-[#6e502f]"
                  >
                    ENVIAR CONSULTA
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </form>
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