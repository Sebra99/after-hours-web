import Link from "next/link";

export default function CamisetasPage() {
  const tshirtTypes = [
    {
      title: "Regular fit",
      desc: "Clásica, funcional y fácil de adaptar a eventos, equipos o campañas.",
      image: "/camisetas/regular.jpg",
    },
    {
      title: "Oversized",
      desc: "Mayor presencia visual, mejor caída y una lectura más contemporánea.",
      image: "/camisetas/oversized.jpg",
    },
    {
      title: "Heavy cotton",
      desc: "Más estructura, mejor tacto y mayor percepción de valor.",
      image: "/camisetas/heavy.jpg",
    },
  ];

  const finishes = [
    {
      title: "DTF / estampado",
      desc: "Ideal para gráficos complejos, ilustraciones y diseños con más color.",
    },
    {
      title: "Bordado",
      desc: "Perfecto para detalles pequeños, símbolos, iniciales o acabados premium.",
    },
    {
      title: "Fit y gramaje",
      desc: "Ajustamos la base según presupuesto, caída, uso y percepción de valor.",
    },
    {
      title: "Ubicación",
      desc: "Pecho, espalda, manga o combinaciones según el diseño.",
    },
  ];

  const gallery = [
    "/camisetas/ref1c.png",
    "/camisetas/ref2c.png",
    "/camisetas/ref3c.png",
    "/camisetas/ref4c.png",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/camisetas/hero-camisetas.png"
            alt="Camisetas personalizadas"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/80" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <div className="max-w-4xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition hover:border-white hover:text-white"
            >
              ← Inicio
            </Link>

            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/60">
              Merch / Camisetas
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] md:text-7xl">
              Camisetas y polos personalizadas 
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Una de las piezas más versátiles para merch, campañas, dotación
              ligera y proyectos donde el volumen y la presencia visual importan.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#cotizar"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Cotizar camisetas
              </a>

              <a
                href="#tipos"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Ver opciones
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ENFOQUE */}
      <section className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Enfoque
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              La base más versátil del merch
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Uniformes, piezas promocionales, productos de
            lanzamiento o merch de comunidad. La diferencia está en la tela, el
            fit, la técnica y cómo se integra el diseño.
          </p>
        </div>
      </section>

      {/* TIPOS */}
      <section id="tipos" className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                Opciones
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                Tipos de camiseta
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Elegimos la base según el uso: evento, marca, dotación, campaña,
              comunidad o producto comercial.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {tshirtTypes.map((item) => (
              <article
                key={item.title}
                className="group relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACABADOS */}
      <section className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                Personalización
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                Acabados que hacen la diferencia
              </h2>
            </div>

            <div className="border-t border-white/10">
              {finishes.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-3 border-b border-white/10 py-6 md:grid-cols-[0.7fr_1.3fr]"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-base leading-7 text-white/65">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USOS */}
      <section className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Ideal para
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Proyectos donde necesitas presencia y volumen
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Eventos",
              "Lanzamientos",
              "Campañas promocionales",
              "Equipos internos",
              "Merch de comunidad",
              "Activaciones",
              "Festivales",
              "Dotación ligera",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/75 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="catalogo" className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                Referencias
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                Bases, gráficos y acabados
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Usa estas referencias como punto de partida. Podemos ajustar tela,
              fit, técnica y ubicación según el objetivo del proyecto.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {gallery.map((img, index) => (
              <div
                key={img}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
              >
                <img
                  src={img}
                  alt={`Referencia camiseta ${index + 1}`}
                  className="h-[360px] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Proceso
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Así trabajamos tus camisetas
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Brief",
                desc: "Entendemos marca, cantidad, uso, referencias y objetivo.",
              },
              {
                title: "Base",
                desc: "Definimos fit, gramaje, color, técnica y ubicación.",
              },
              {
                title: "Producción",
                desc: "Ejecutamos con foco en consistencia, calidad y tiempos.",
              },
              {
                title: "Entrega",
                desc: "Organizamos tallas, cantidades y entrega final del proyecto.",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
              >
                <p className="text-sm text-white/40">0{index + 1}</p>

                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Preguntas frecuentes
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Antes de cotizar
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "¿Qué técnica recomiendan para camisetas?",
                a: "Depende del diseño y del uso. DTF sirve para artes complejos, bordado para detalles puntuales y estampado para piezas más directas.",
              },
              {
                q: "¿Pueden manejar varias tallas?",
                a: "Sí. Podemos estructurar pedidos con distribución por tallas según el tipo de evento, equipo o proyecto.",
              },
              {
                q: "¿Pueden cotizar con referencia visual?",
                a: "Sí. Puedes enviar referencias, moodboard o piezas previas para aterrizar mejor la propuesta.",
              },
              {
                q: "¿Sirven para pedidos grandes?",
                a: "Sí. Las camisetas son una de las categorías más eficientes para volumen, eventos y campañas.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-semibold">
                  {item.q}
                  <span className="text-white/40 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-base leading-7 text-white/65">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* COTIZAR */}
      <section id="cotizar" className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Cotización
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Cotiza tus camisetas
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
              Cuéntanos cantidades, tallas, referencias, técnica deseada y
              contexto de uso. Con eso aterrizamos una propuesta concreta.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
            <a
              href="/#contacto"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Ir al formulario de contacto
            </a>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/60">
              También puedes enviarnos referencias visuales, moodboard o una
              prenda base para cotizar con mayor precisión.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}