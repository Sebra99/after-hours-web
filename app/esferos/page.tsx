import Link from "next/link";

export default function OficinaPage() {
  const productTypes = [
    {
      title: "Esferos",
      desc: "Clásicos, útiles y eficientes para volumen, eventos y kits.",
      image: "/esferos/esferos.jpg",
    },
    {
      title: "Pines y llaveros",
      desc: "Piezas pequeñas con buena recordación para marca, eventos y comunidad.",
      image: "/esferos/pines-llaveros.jpg",
    },
    {
      title: "Accesorios de oficina",
      desc: "Soportes para celular, libretas, antiestrés y piezas funcionales.",
      image: "/esferos/oficina.jpg",
    },
  ];

  const finishes = [
    {
      title: "Marcación",
      desc: "Impresión, tampografía, grabado o adhesivos según material y presupuesto.",
    },
    {
      title: "Volumen",
      desc: "Ideales para pedidos grandes, eventos, kits y activaciones.",
    },
    {
      title: "Variedad",
      desc: "Permiten armar combos útiles con distintos productos de bajo costo unitario.",
    },
    {
      title: "Uso diario",
      desc: "Piezas simples que permanecen en escritorios, oficinas y rutinas.",
    },
  ];

  const gallery = [
    "/esferos/ref1e.png",
    "/esferos/ref2e.png",
    "/esferos/ref3e.png",
    "/esferos/ref4e.png",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/esferos/hero-esferos.jpg"
            alt="Esferos y promocionales personalizados"
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
              Merch / Oficina & promocionales
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] md:text-7xl">
              Esferos y más piezas promocionales para tu marca
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Productos útiles, accesibles y fáciles de personalizar: esferos,
              pines, llaveros, antiestrés, soportes para celular y piezas de
              oficina para kits, eventos y activaciones.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#cotizar"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Cotizar promocionales
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
              Merch útil, simple y de alto alcance
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Esta categoría funciona cuando necesitas volumen, recordación y uso
            práctico. Son piezas pequeñas, pero bien escogidas pueden acompañar
            eventos, oficinas, kits comerciales y acciones promocionales sin
            elevar demasiado el presupuesto.
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
                Piezas promocionales y de oficina
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Podemos armar opciones individuales o combos para eventos, gifting,
              kits de bienvenida, ferias, clientes o equipos internos.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {productTypes.map((item) => (
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

      {/* PERSONALIZACIÓN */}
      <section className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                Personalización
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                Pequeñas piezas, mucha circulación
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
              Cuando necesitas presencia en volumen
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Ferias",
              "Kits empresariales",
              "Onboarding",
              "Eventos",
              "Activaciones",
              "Regalos promocionales",
              "Oficinas",
              "Campañas comerciales",
              "Punto de venta",
              "Clientes y aliados",
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
                Esferos, pines, llaveros y más
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Usa estas referencias como punto de partida. Podemos ajustar
              producto, técnica, cantidad y presupuesto según el objetivo del
              proyecto.
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
                  alt={`Referencia promocional ${index + 1}`}
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
              Así armamos tu kit promocional
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Brief",
                desc: "Entendemos evento, cantidad, presupuesto y objetivo.",
              },
              {
                title: "Selección",
                desc: "Proponemos productos útiles y alineados a la marca.",
              },
              {
                title: "Marcación",
                desc: "Definimos técnica, ubicación y acabado según material.",
              },
              {
                title: "Entrega",
                desc: "Organizamos cantidades, empaque y entrega final.",
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
                q: "¿Solo manejan esferos?",
                a: "No. Esta categoría incluye esferos, llaveros, pines, antiestrés, soportes para celular, libretas y otros promocionales de oficina.",
              },
              {
                q: "¿Se pueden armar kits?",
                a: "Sí. Podemos combinar varias piezas para eventos, onboarding, ferias o regalos corporativos.",
              },
              {
                q: "¿Qué técnica recomiendan?",
                a: "Depende del material. Podemos trabajar impresión, tampografía, grabado, adhesivos o marcación según el producto.",
              },
              {
                q: "¿Sirven para pedidos grandes?",
                a: "Sí. Son productos ideales para volumen por su costo unitario, utilidad y facilidad de distribución.",
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
              Cotiza tus promocionales
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
              Cuéntanos qué productos te interesan, cantidades, fecha, tipo de
              evento y presupuesto aproximado. Con eso aterrizamos una propuesta
              concreta.
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
              Puedes enviarnos una lista de productos, referencias visuales o el
              objetivo del evento para recomendar opciones.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}