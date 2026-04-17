import Link from "next/link";

export default function TotebagsPage() {
  const images = [
    "ref1t.png",
    "ref2t.png",
    "ref3t.png",
    "ref4t.png",
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

              <span className="uppercase tracking-[0.25em]">Tote Bags</span>
            </div>

            <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
              Tote bags personalizadas para marca, eventos y kits
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/65">
              Una opción funcional y visible para merchandising. Ideal para
              eventos, kits empresariales, gifting y proyectos donde quieres una
              pieza útil que siga circulando después.
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
              ¿Cuándo usar tote bags?
            </h2>

            <ul className="space-y-3 text-white/70">
              <li>• Kits empresariales o de onboarding</li>
              <li>• Eventos, ferias y activaciones</li>
              <li>• Merch de marca con uso frecuente</li>
              <li>• Gifting para clientes o comunidad</li>
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
                  DTF, serigrafía, bordado o combinaciones según el acabado que
                  buscas.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Materiales</h3>
                <p className="mt-2 text-white/65">
                  Lona, algodón, dril y otros materiales según uso y presupuesto.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Colores</h3>
                <p className="mt-2 text-white/65">
                  Producción en tonos base o combinaciones adaptadas a la marca.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Formato</h3>
                <p className="mt-2 text-white/65">
                  Distintos tamaños, asas y estructuras según el contexto de uso.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">
              ¿Qué puedes personalizar?
            </h2>

            <ul className="space-y-3 text-white/70">
              <li>• Color base de la bolsa</li>
              <li>• Técnica de marcación</li>
              <li>• Tamaño y proporciones</li>
              <li>• Largo y tipo de asas</li>
              <li>• Ubicación del diseño</li>
            </ul>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">
              Cantidades y tiempos
            </h2>

            <p className="text-white/70">
              Las tote bags funcionan muy bien en volumen y son una categoría
              muy útil para kits, eventos y acciones promocionales. Los tiempos
              dependen del material, la técnica y la cantidad, pero se adaptan
              bien a proyectos empresariales y comerciales.
            </p>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">Ideal para</h2>

            <ul className="space-y-3 text-white/70">
              <li>• Kits de bienvenida</li>
              <li>• Eventos y ferias</li>
              <li>• Merch de marca con utilidad real</li>
              <li>• Regalos promocionales</li>
            </ul>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">
              Tipos de tote bag
            </h2>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Clásica</p>
                <p className="text-sm text-white/60">
                  Ligera, funcional y perfecta para alto volumen.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Heavyweight</p>
                <p className="text-sm text-white/60">
                  Mayor estructura y mejor percepción de valor.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Premium</p>
                <p className="text-sm text-white/60">
                  Mejor material, mejores acabados y una lectura más sólida.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="mb-8 text-2xl font-semibold">
              Preguntas frecuentes
            </h2>

            <div className="space-y-4">
              <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  ¿Qué técnica recomiendan para tote bags?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  Depende del material y del tipo de arte. Te guiamos según el
                  uso, el look y el presupuesto del proyecto.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  ¿Se pueden hacer en distintos tamaños?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  Sí. Se pueden trabajar distintos formatos según el objetivo del
                  proyecto y el tipo de uso esperado.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  ¿Sirven para kits empresariales?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  Sí, es una de las categorías más útiles para kits porque
                  además de verse bien, resuelve empaque y uso posterior.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  ¿Puedo cotizar con una referencia visual?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  Sí. Puedes compartir referencias, moodboard o artes previas y
                  te ayudamos a aterrizar la mejor opción.
                </p>
              </details>
            </div>
          </section>

          <section id="catalogo" className="border-t border-white/10 pt-10">
            <h2 className="mb-4 text-2xl font-semibold">Cotiza tu proyecto</h2>

            <p className="mb-6 text-white/65">
              Cuéntanos cantidades, material, técnica y contexto de uso para
              proponerte la mejor opción.
            </p>

            <a
              href="/#contacto"
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Cotizar tote bags
            </a>
          </section>
        </div>

        {/* Columna derecha */}
        <div className="relative h-full min-h-screen overflow-hidden">
          <div className="flex flex-col animate-vertical gap-0">
            {[...images, ...images].map((img, index) => (
              <div key={index} className="overflow-hidden">
                <img
                  src={`/totebags/${img}`}
                  alt="referencia tote bags"
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