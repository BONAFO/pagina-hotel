"use client";

import Link from "next/link";

export default function About() {
  return (
    <main className="overflow-hidden bg-[#faf8f3] text-[#30271e]">
      

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-28">
        <div>
          <span className="text-xs tracking-[0.25em] text-[#a17d43]">
            NUESTRA ESENCIA
          </span>

          <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-5xl">
            Más que un lugar para quedarse, una experiencia para disfrutar.
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-7 text-[#74695d] sm:text-base sm:leading-8">
            <p>
              En ALTOS pensamos la hospitalidad como algo sencillo y
              significativo: recibirte bien, ofrecerte un espacio confortable
              y hacer que cada momento de tu visita valga la pena.
            </p>

            <p>
              Queremos que encuentres un ambiente donde descansar, compartir
              una buena comida y disfrutar de tu tiempo sin apuros.
            </p>

            <p>
              Por eso reunimos en un mismo lugar la comodidad del hotel y una
              propuesta gastronómica propia, para que puedas vivir una
              experiencia completa desde que llegás.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -bottom-5 -left-5 hidden h-2/3 w-2/3 border border-[#c8ad7c]/60 sm:block" />

          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=90"
            alt="Habitación acogedora del hotel"
            className="relative h-[400px] w-full object-cover sm:h-[540px]"
          />

          <div className="absolute bottom-0 left-0 max-w-xs bg-[#21170f]/90 p-6 text-[#faf5eb] sm:p-8">
            <span className="text-xs tracking-[0.22em] text-[#d3b77f]">
              NUESTRA FILOSOFÍA
            </span>
            <p className="mt-3 font-serif text-2xl leading-snug">
              Que te sientas a gusto, desde el primer momento.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eee7db]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[350px] sm:min-h-[470px]">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=90"
              alt="Mesa preparada en el restaurante de ALTOS"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <span className="text-xs tracking-[0.25em] text-[#a17d43]">
              NUESTRA PROPUESTA GASTRONÓMICA
            </span>

            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-5xl">
              El hotel y el restaurante, unidos en una misma experiencia.
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#74695d] sm:text-base sm:leading-8">
              Dentro de ALTOS también podés descubrir nuestro restaurante, un
              espacio pensado para disfrutar de buenos sabores, compartir la
              mesa y completar tu estadía con una experiencia gastronómica.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#74695d] sm:text-base sm:leading-8">
              Tanto si te alojás con nosotros como si venís especialmente a
              comer, queremos que encuentres un ambiente cálido y una carta
              para disfrutar a tu manera.
            </p>

            <Link
              href="/menu"
              className="mt-8 inline-flex w-fit items-center gap-4 border-b border-[#a17d43] pb-2 text-xs tracking-[0.16em] text-[#8c6936] transition-colors hover:text-[#30271e]"
            >
              DESCUBRIR LA CARTA
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs tracking-[0.25em] text-[#a17d43]">
            LO QUE NOS DEFINE
          </span>

          <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-5xl">
            Los detalles hacen la diferencia.
          </h2>

          <p className="mt-6 text-sm leading-7 text-[#74695d] sm:text-base sm:leading-8">
            Buscamos que cada espacio y cada momento transmitan la esencia de
            ALTOS: calidez, tranquilidad y el placer de disfrutar.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          <article className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center border border-[#c8ad7c] font-serif text-2xl text-[#a17d43]">
              I
            </span>
            <h3 className="mt-6 font-serif text-2xl">Calidez</h3>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-[#74695d]">
              Una atención cercana y un ambiente pensado para que te sientas
              bienvenido.
            </p>
          </article>

          <article className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center border border-[#c8ad7c] font-serif text-2xl text-[#a17d43]">
              II
            </span>
            <h3 className="mt-6 font-serif text-2xl">Tranquilidad</h3>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-[#74695d]">
              Espacios confortables para descansar, desconectar y disfrutar sin
              apuros.
            </p>
          </article>

          <article className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center border border-[#c8ad7c] font-serif text-2xl text-[#a17d43]">
              III
            </span>
            <h3 className="mt-6 font-serif text-2xl">Disfrute</h3>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-[#74695d]">
              La comodidad del hotel y el placer de compartir una buena mesa
              en un mismo lugar.
            </p>
          </article>
        </div>
      </section>


    </main>
  );
}