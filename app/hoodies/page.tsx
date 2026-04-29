import Link from "next/link";

export default function HoodiesPage() {
  const hoodieTypes = [
    {
      title: "Pullover",
      desc: "Clásico, limpio y muy útil para colecciones, equipos o dotación.",
      image: "/hoodies/pullover.png",
    },
    {
      title: "Con cremallera",
      desc: "Más funcional para uso diario, operación y equipos internos.",
      image: "/hoodies/zipper.png",
    },
    {
      title: "Heavyweight",
      desc: "Mayor percepción de valor, telas premium, mejor caída y presencia visual.",
      image: "/hoodies/heavyweight.png",
    },
  ];

  const finishes = [
    {
      title: "Bordado",
      desc: "Acabado premium para marca, iniciales, símbolos o detalles pequeños.",
    },
    {
      title: "DTF / estampado",
      desc: "Ideal para gráficos complejos, ilustraciones o piezas con más color.",
    },
    {
      title: "Fit y gramaje",
      desc: "Opciones según clima, presupuesto, caída y percepción de valor.",
    },
    {
      title: "Ubicación",
      desc: "Pecho, espalda, manga, capota o combinaciones según el diseño.",
    },
  ];

  const gallery = [
    "/hoodies/ref1h.png",
    "/hoodies/ref2h.png",
    "/hoodies/ref3h.png",
    "/hoodies/ref4h.png",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/hoodies/hero-hoodies.png"
            alt="Hoodies personalizados"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
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
              Merch / Hoodies
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] md:text-7xl">
              Hoodies para marcas, equipos y lanzamientos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Una pieza de mayor valor percibido para construir identidad,
              uniformar equipos o desarrollar merch que realmente se quiera usar.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#cotizar"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Cotizar hoodies
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
              Más que una prenda básica
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Un hoodie bien ejecutado puede ser uniforme, regalo, merch de
            comunidad o producto de lanzamiento. La diferencia está en el fit,
            la tela, la técnica y la forma en la que la marca se integra a la
            prenda.
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
                Tipos de hoodie
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Seleccionamos la base según el uso: equipo interno, lanzamiento,
              gifting, comunidad o producto con intención comercial.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {hoodieTypes.map((item) => (
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
                Acabados que elevan la pieza
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

<section className="border-b border-white/10 px-6 py-20 md:px-10">
  <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
    
    {/* TEXTO */}
    <div className="max-w-xl">
      <p className="text-sm uppercase tracking-[0.25em] text-white/50">
        Diseño
      </p>

      <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
        Diseños a tu medida
      </h2>

      <p className="mt-6 text-base leading-7 text-white/70 md:text-lg">
        Desarrollamos piezas gráficas desde cero o a partir de referencias.
        Ilustración, composición, adaptación de marca y exploración visual
        para lograr una prenda que realmente se sienta propia.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {[
          "Ilustración",
          "Adaptación de marca",
          "Composición gráfica",
          "Desarrollo visual",
          "Exploración creativa",
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/70 backdrop-blur-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="#cotizar"
          className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
        >
          Desarrollar diseño
        </a>
      </div>
    </div>

    {/* IMAGEN */}
    <div className="relative max-w-[440px] ml-auto">
      <div className="w-full object-cover scale-[1.13] relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
        
        <img
          src="/hoodies/ilustracion.png"
          alt="Hoodie con diseño personalizado"
          className="w-full object-cover"
        />

        {/* Overlay para integrarlo al look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

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
              Proyectos donde la prenda debe sentirse especial
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Equipos internos",
              "Lanzamientos de marca",
              "Drops",
              "Merch de comunidad",
              "Regalos corporativos",
              "Eventos",
              "Crew uniforms",
              "Colecciones cápsula",
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
                Bases, fits y acabados
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Usa estas referencias como punto de partida. Podemos aterrizar la
              prenda según presupuesto, cantidad, técnica y objetivo del proyecto.
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
                  alt={`Referencia hoodie ${index + 1}`}
                  className="h-[360px] w-full object-cover"
                />
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
                q: "¿Manejan varias tallas dentro del mismo pedido?",
                a: "Sí. Podemos distribuir el pedido por tallas según la necesidad del equipo, evento o proyecto.",
              },
              {
                q: "¿Qué técnica recomiendan para hoodies?",
                a: "Depende del look. Bordado funciona muy bien para acabados premium; estampado y DTF sirven para gráficos complejos o grandes.",
              },
              {
                q: "¿Pueden cotizar con referencia visual?",
                a: "Sí. Puedes enviar referencias, moodboard o piezas previas para aterrizar mejor la propuesta.",
              },
              {
                q: "¿Hay opciones más premium?",
                a: "Sí. Se pueden trabajar telas, gramajes y acabados con mayor percepción de valor según el objetivo del proyecto.",
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
              Cotiza tu hoodie
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