import Link from "next/link";

export default function TermosPage() {
  const productTypes = [
    {
      title: "Termos metálicos",
      desc: "Alta percepción de valor, durabilidad y uso diario.",
      image: "/termos/termos-metal.jpg",
    },
    {
      title: "Vasos térmicos",
      desc: "Prácticos para oficina, movilidad y consumo frecuente.",
      image: "/termos/vasos.jpg",
    },
    {
      title: "Botellas deportivas",
      desc: "Ligeras, funcionales y útiles para equipos, eventos o actividad física.",
      image: "/termos/botellas.jpg",
    },
  ];

  const finishes = [
    {
      title: "Grabado láser",
      desc: "Acabado limpio, sobrio y duradero para una lectura más premium.",
    },
    {
      title: "Impresión",
      desc: "Ideal para gráficos, logos a color o piezas con mayor visibilidad.",
    },
    {
      title: "Color base",
      desc: "Seleccionamos tonos que se alineen con la identidad visual de la marca.",
    },
    {
      title: "Packaging",
      desc: "Podemos complementar con cajas, empaques o kits para elevar la entrega.",
    },
  ];

  const gallery = [
    "/termos/ref1te.png",
    "/termos/ref2te.png",
    "/termos/ref3te.png",
    "/termos/ref4te.png",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/termos/hero-termos1.png"
            alt="Termos y vasos personalizados"
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
              Merch / Termos & vasos
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] md:text-7xl">
              Termos y vasos personalizados para uso diario
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Piezas de alto uso, buena percepción de valor y larga vida útil.
              Ideales para equipos, regalos corporativos, clientes y kits premium.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#cotizar"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Cotizar termos y vasos
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

{/* IMAGEN FULL */}
<section className="relative isolate overflow-hidden border-b border-white/10">
  <div className="absolute inset-0">
    <img
      src="/termos/placa.png"
      alt="placa de metal"
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



      {/* TIPOS */}
      <section
        id="tipos"
        className="border-b border-white/10 bg-zinc-900 px-6 py-20 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                Opciones
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                Termos, vasos y botellas
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Seleccionamos el formato según el uso: oficina, movilidad,
              deporte, kits de bienvenida, eventos o regalos corporativos.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {productTypes.map((item) => (
              <article
                key={item.title}
                className="group relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05]"
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
<section className="relative isolate overflow-hidden border-b border-white/10 px-6 py-20 md:px-10">
  {/* FONDO */}
  <div className="absolute inset-0 -z-10">
    <img
      src="/termos/laser.png"
      alt="Acabados para termos y vasos"
      className="h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-black/35" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
  </div>

  {/* CONTENIDO */}
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Personalización
        </p>

        <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
          Acabados duraderos
        </h2>
      </div>

      <div className="border-t border-white/10 backdrop-blur-sm">
        {finishes.map((item) => (
          <div
            key={item.title}
            className="grid gap-3 border-b border-white/10 py-6 md:grid-cols-[0.7fr_1.3fr]"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-base leading-7 text-white/70">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    

      {/* GALERÍA */}
      <section
        id="catalogo"
        className="border-b border-white/10 bg-zinc-900 px-6 py-20 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                Referencias
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                Formatos y acabados
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Usa estas referencias como punto de partida. Ajustamos material,
              capacidad, color y técnica según el objetivo del proyecto.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {gallery.map((img, index) => (
              <div
                key={img}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05]"
              >
                <img
                  src={img}
                  alt={`Referencia termo ${index + 1}`}
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
                q: "¿Qué acabado recomiendan para termos?",
                a: "El grabado láser suele verse más premium y durar más. La impresión funciona mejor si necesitas color o gráficos más visibles.",
              },
              {
                q: "¿También manejan vasos?",
                a: "Sí. Podemos cotizar vasos térmicos, vasos para oficina, botellas y otros formatos según disponibilidad.",
              },
              {
                q: "¿Sirven para kits empresariales?",
                a: "Sí. Son una de las mejores piezas para kits premium, onboarding y regalos corporativos.",
              },
              {
                q: "¿Pueden incluir empaque?",
                a: "Sí. Podemos contemplar cajas, empaques o presentación especial según el proyecto.",
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
              Cotiza termos y vasos
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
              Cuéntanos cantidades, tipo de producto, referencias, técnica
              deseada y presupuesto. Con eso aterrizamos una propuesta concreta.
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
              También puedes enviarnos referencias visuales, colores deseados o
              una idea de kit para cotizar con mayor precisión.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}