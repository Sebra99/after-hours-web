import Link from "next/link";

export default function EsferosPage() {
  const images = [
    "ref1e.png",
    "ref2e.png",
    "ref3e.png",
    "ref4e.png",
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        {/* Columna izquierda */}
        <div>
          <div className="mb-24">
            <div className="mb-6 flex items-center gap-3 text-sm text-white/50">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-white/60 transition hover:border-white hover:text-white"
              >
                <span className="transition group-hover:-translate-x-1">←</span>
                Inicio
              </Link>

              <span className="text-white/20">/</span>

              <span className="uppercase tracking-[0.25em]">Esferos</span>
            </div>

            <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
              Personalizables de todo tipo para marcas y eventos
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/65">
              Una solución práctica para merchandising, perfecta para kits
              empresariales, eventos y campañas donde necesitas volumen sin
              perder presencia de marca.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#catalogo"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Ver catálogo
              </a>

              <a
                href="/#contacto"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-white"
              >
                Cotizar
              </a>
            </div>
          </div>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">
              ¿Cuándo usar esferos?
            </h2>

            <ul className="space-y-3 text-white/70">
              <li>• Eventos con alto volumen de asistentes</li>
              <li>• Kits empresariales o de onboarding</li>
              <li>• Activaciones de marca</li>
              <li>• Material promocional de bajo costo por unidad</li>
            </ul>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">
              Opciones de personalización
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Técnicas</h3>
                <p className="mt-2 text-white/65">
                  Tampografía, impresión directa y grabado según el material.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Materiales</h3>
                <p className="mt-2 text-white/65">
                  Plástico, metal y opciones premium según presupuesto.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Colores</h3>
                <p className="mt-2 text-white/65">
                  Adaptación a identidad de marca y combinaciones personalizadas.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Volumen</h3>
                <p className="mt-2 text-white/65">
                  Producción optimizada para pedidos grandes.
                </p>
              </div>
            </div>
          </section>

<section className="mb-25">
  <h2 className="mb-8 text-2xl font-semibold">
    Preguntas frecuentes
  </h2>

  <div className="space-y-4">

    {/* Item */}
    <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
        ¿Manejan pedidos grandes?
        <span className="transition group-open:rotate-45">+</span>
      </summary>
      <p className="mt-4 text-sm text-white/65">
        Sí, trabajamos principalmente con pedidos de volumen para eventos, kits empresariales y campañas.
      </p>
    </details>

    {/* Item */}
    <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
        ¿Se pueden hacer en varios colores?
        <span className="transition group-open:rotate-45">+</span>
      </summary>
      <p className="mt-4 text-sm text-white/65">
        Sí. Puedes elegir combinaciones de colores según tu marca o distribuir diferentes colores dentro del mismo pedido.
      </p>
    </details>

    {/* Item */}
    <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
        ¿Qué tipo de personalización manejan?
        <span className="transition group-open:rotate-45">+</span>
      </summary>
      <p className="mt-4 text-sm text-white/65">
        Dependiendo del modelo, manejamos tampografía, impresión directa o grabado. Te guiamos según el resultado que buscas.
      </p>
    </details>

    {/* Item */}
    <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
        ¿Cuál es el tiempo de producción?
        <span className="transition group-open:rotate-45">+</span>
      </summary>
      <p className="mt-4 text-sm text-white/65">
        Depende del volumen y la técnica, pero normalmente trabajamos con tiempos optimizados para proyectos empresariales y eventos.
      </p>
    </details>

    {/* Item */}
    <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
        ¿Puedo cotizar con mi logo?
        <span className="transition group-open:rotate-45">+</span>
      </summary>
      <p className="mt-4 text-sm text-white/65">
        Sí. Puedes enviarnos tu logo y referencias, y te ayudamos a definir la mejor opción según presupuesto y uso.
      </p>
    </details>

  </div>
</section>

<section className="mb-24">
  <h2 className="mb-6 text-2xl font-semibold">
    Tipos de esfero
  </h2>

  <div className="grid gap-4">
    <div className="rounded-2xl border border-white/10 p-5">
      <p className="font-medium">Plástico</p>
      <p className="text-sm text-white/60">
        Opción más económica, ideal para volumen.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 p-5">
      <p className="font-medium">Metálico</p>
      <p className="text-sm text-white/60">
        Mayor percepción de valor y mejor acabado.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 p-5">
      <p className="font-medium">Premium</p>
      <p className="text-sm text-white/60">
        Opciones más diferenciadas para clientes o equipos clave.
      </p>
    </div>
  </div>
</section>


          <section id="catalogo" className="border-t border-white/10 pt-10">
            <h2 className="mb-4 text-2xl font-semibold">Cotiza tu proyecto</h2>

            <p className="mb-6 text-white/65">
              Cuéntanos qué necesitas, cantidades aproximadas y contexto del
              uso.
            </p>

            <a
              href="/#contacto"
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Cotizar esferos
            </a>
          </section>
        </div>

        {/* Columna derecha */}
        <div className="relative h-full min-h-screen overflow-hidden">
          <div className="flex flex-col animate-vertical gap-0">
            {[...images, ...images].map((img, index) => (
              <div key={index} className="overflow-hidden">
                <img
                  src={`/esferos/${img}`}
                  alt="referencia esferos"
                  className="block w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}