import Link from "next/link";

export default function ToteBagsPage() {
  const toteTypes = [
    {
      title: "Algodón estándar",
      desc: "Ligera, funcional y eficiente para volumen, eventos y activaciones.",
      image: "/totebags/algodon.jpg",
    },
    {
      title: "Canvas grueso",
      desc: "Mayor estructura, mejor caída y mayor percepción de valor.",
      image: "/totebags/canvas.jpg",
    },
    {
      title: "Con fuelle / estructurada",
      desc: "Más capacidad y utilidad real para uso diario o kits.",
      image: "/totebags/estructura.jpg",
    },
  ];

  const finishes = [
    {
      title: "Estampado",
      desc: "Ideal para gráficos grandes, ilustraciones o piezas con color.",
    },
    {
      title: "Bordado",
      desc: "Perfecto para detalles pequeños o marcas más sobrias.",
    },
    {
      title: "Tamaño y proporción",
      desc: "Ajustamos medidas según uso: evento, retail o kits.",
    },
    {
      title: "Ubicación",
      desc: "Centro, lateral o repetición según el diseño.",
    },
  ];

  const gallery = [
    "/totebags/ref1t.png",
    "/totebags/ref2t.png",
    "/totebags/ref3t.png",
    "/totebags/ref4t.png",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/totebags/hero-totebags.png"
            alt="Tote bags personalizadas"
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
              Merch / Tote Bags
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] md:text-7xl">
              Tote bags personalizadas para marcas y eventos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Una pieza simple, útil y altamente visible. Ideal para eventos,
              activaciones, kits y merch que sigue circulando.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#cotizar"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Cotizar tote bags
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

<section className="relative isolate overflow-hidden border-b border-white/10">

  {/* IMAGEN FULL */}
  <div className="absolute inset-0">
    <img
      src="/totebags/telas1.png"
      alt="Telas de colores"
      className="h-full w-full object-cover"
    />

    {/* oscurece para legibilidad */}
    <div className="absolute inset-0 bg-black/60" />

    {/* textura / depth (opcional pero recomendado) */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
  </div>

  {/* CONTENIDO */}
  <div className="relative mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40">
    <div className="max-w-2xl">

      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/60">
        
      </p>

      <h2 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
      </h2>

      <p className="mt-6 text-base leading-7 text-white/75 md:text-lg">
      </p>

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
              Utilidad + visibilidad
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Una tote bag funciona porque se usa. Si tiene buena proporción,
            material y diseño, se convierte en una pieza que la gente lleva,
            repite y expone.
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
                Tipos de tote bag
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Elegimos material y estructura según el uso: evento, retail,
              kits o producto con mayor valor percibido.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {toteTypes.map((item) => (
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
                Simplicidad bien ejecutada
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
              Proyectos donde necesitas volumen y utilidad
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Eventos",
              "Activaciones",
              "Kits empresariales",
              "Ferias",
              "Retail básico",
              "Merch de comunidad",
              "Campañas promocionales",
              "Regalos corporativos",
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
                Formatos y aplicaciones
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Usa estas referencias como punto de partida. Ajustamos tamaño,
              material y técnica según el objetivo del proyecto.
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
                  alt={`Referencia tote ${index + 1}`}
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
              Así trabajamos tus tote bags
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Brief",
                desc: "Entendemos marca, cantidad, uso y referencias.",
              },
              {
                title: "Base",
                desc: "Definimos tamaño, material, técnica y proporción.",
              },
              {
                title: "Producción",
                desc: "Ejecutamos con foco en consistencia y acabado.",
              },
              {
                title: "Entrega",
                desc: "Organizamos cantidades y entrega final.",
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

      {/* COTIZAR */}
      <section id="cotizar" className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Cotización
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Cotiza tus tote bags
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
              Cuéntanos cantidades, referencias, técnica deseada y contexto de uso.
              Con eso aterrizamos una propuesta concreta.
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
              Puedes enviarnos referencias visuales, logos o ideas para cotizar con mayor precisión.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}