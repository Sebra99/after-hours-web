import Link from "next/link";

export default function GorrasPage() {
  const images = [
    "ref1g.png",
    "ref2g.png",
    "ref3g.png",
    "ref4g.png",
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

              <span className="uppercase tracking-[0.25em]">Gorras</span>
            </div>

            <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
              Gorras personalizadas para marca, eventos y equipos
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/65">
              Una de las opciones más versátiles de merch. Ideal para visibilidad
              de marca, eventos y piezas que realmente se usan.
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
              ¿Cuándo usar gorras?
            </h2>

            <ul className="space-y-3 text-white/70">
              <li>• Eventos y campañas de alta visibilidad</li>
              <li>• Merch de marca o comunidad</li>
              <li>• Equipos o uniformidad ligera</li>
              <li>• Activaciones donde quieres presencia constante</li>
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
                  Bordado, DTF, parches o combinaciones según el resultado.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Materiales</h3>
                <p className="mt-2 text-white/65">
                  Diferentes estructuras y telas según uso y presupuesto.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Colores</h3>
                <p className="mt-2 text-white/65">
                  Amplia variedad o combinaciones según identidad de marca.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Detalles</h3>
                <p className="mt-2 text-white/65">
                  Visera, estructura, cierre y acabados personalizados.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">
              ¿Qué puedes personalizar?
            </h2>

            <ul className="space-y-3 text-white/70">
              <li>• Parte frontal (logo o diseño)</li>
              <li>• Laterales o parte trasera</li>
              <li>• Tipo de visera</li>
              <li>• Sistema de ajuste</li>
              <li>• Combinación de materiales y colores</li>
            </ul>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">
              Cantidades y tiempos
            </h2>

            <p className="text-white/70">
              Las gorras funcionan muy bien en volumen. Los tiempos dependen del
              tipo de personalización y la cantidad, pero se estructuran para
              proyectos comerciales y eventos.
            </p>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">Ideal para</h2>

            <ul className="space-y-3 text-white/70">
              <li>• Eventos masivos</li>
              <li>• Merch de marca</li>
              <li>• Equipos y dotación ligera</li>
              <li>• Campañas promocionales</li>
            </ul>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">
              Tipos de gorra
            </h2>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Dad cap</p>
                <p className="text-sm text-white/60">
                  Más relajada, versátil y fácil de usar.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Snapback</p>
                <p className="text-sm text-white/60">
                  Más estructurada, con mayor presencia visual.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Trucker</p>
                <p className="text-sm text-white/60">
                  Malla trasera, ligera y muy usada en eventos.
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
                  ¿Cuál es la mejor técnica para gorras?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  El bordado es el más usado por durabilidad y acabado, pero
                  también trabajamos parches y estampado según el diseño.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  ¿Se pueden hacer combinaciones de colores?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  Sí, puedes combinar visera, cuerpo y detalles según la identidad de tu marca.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  ¿Trabajan pedidos grandes?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  Sí, es uno de los productos que mejor escala en volumen.
                </p>
              </details>
            </div>
          </section>

          <section id="catalogo" className="border-t border-white/10 pt-10">
            <h2 className="mb-4 text-2xl font-semibold">Cotiza tu proyecto</h2>

            <p className="mb-6 text-white/65">
              Envíanos tu logo, referencias y cantidades para armar una propuesta.
            </p>

            <a
              href="/#contacto"
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Cotizar gorras
            </a>
          </section>
        </div>

        {/* Columna derecha */}
        <div className="relative h-full min-h-screen overflow-hidden">
          <div className="flex flex-col animate-vertical gap-0">
            {[...images, ...images].map((img, index) => (
              <div key={index} className="overflow-hidden">
                <img
                  src={`/gorras/${img}`}
                  alt="referencia gorras"
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