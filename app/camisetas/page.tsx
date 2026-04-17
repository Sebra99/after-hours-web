import Link from "next/link";

export default function CamisetasPage() {
  const images = [
    "ref1c.png",
    "ref2c.png",
    "ref3c.png",
    "ref4c.png",
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

              <span className="uppercase tracking-[0.25em]">Camisetas</span>
            </div>

            <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
              Camisetas personalizadas para marcas, eventos y equipos
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/65">
              Una de las categorías más versátiles para merch. Funciona para
              marca, dotación ligera, campañas y proyectos donde el volumen y la
              presencia visual importan.
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
              ¿Cuándo usar camisetas?
            </h2>

            <ul className="space-y-3 text-white/70">
              <li>• Merch de marca o comunidad</li>
              <li>• Eventos, lanzamientos y activaciones</li>
              <li>• Uniformidad ligera para equipos</li>
              <li>• Campañas promocionales de alto volumen</li>
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
                  DTF, estampado, bordado o combinaciones según el look que
                  buscas.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Materiales</h3>
                <p className="mt-2 text-white/65">
                  Diferentes composiciones y gramajes según uso, presupuesto y
                  percepción de valor.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Colores</h3>
                <p className="mt-2 text-white/65">
                  Producción en tonos base o personalizados según identidad de
                  marca.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Ubicación</h3>
                <p className="mt-2 text-white/65">
                  Pecho, espalda, mangas o múltiples posiciones según el diseño.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">
              ¿Qué puedes personalizar?
            </h2>

            <ul className="space-y-3 text-white/70">
              <li>• Color base de la camiseta</li>
              <li>• Técnica de marcación</li>
              <li>• Ubicación del diseño</li>
              <li>• Tipo de fit o silueta</li>
              <li>• Tallas según necesidad del proyecto</li>
            </ul>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">
              Cantidades y tiempos
            </h2>

            <p className="text-white/70">
              Las camisetas funcionan muy bien para pedidos medianos y grandes.
              Los tiempos dependen del volumen, la técnica y el nivel de
              personalización, pero se estructuran para proyectos comerciales,
              corporativos y de evento.
            </p>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">Ideal para</h2>

            <ul className="space-y-3 text-white/70">
              <li>• Marcas y colecciones</li>
              <li>• Equipos o dotación ligera</li>
              <li>• Eventos y festivales</li>
              <li>• Merch promocional y comercial</li>
            </ul>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">
              Tipos de camiseta
            </h2>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Regular fit</p>
                <p className="text-sm text-white/60">
                  Clásica, funcional y fácil de adaptar a distintos proyectos.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Oversized</p>
                <p className="text-sm text-white/60">
                  Mayor presencia visual y una lectura más contemporánea.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Heavyweight</p>
                <p className="text-sm text-white/60">
                  Más estructura, mejor caída y mayor percepción de valor.
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
                  ¿Qué técnica recomiendan para camisetas?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  Depende del diseño y el uso. DTF sirve para artes más complejos,
                  bordado para detalles puntuales, y otras técnicas funcionan
                  mejor según el acabado que quieras lograr.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  ¿Pueden manejar varias tallas?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  Sí. Podemos estructurar pedidos con distribución por tallas
                  según el tipo de evento, equipo o proyecto.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  ¿Trabajan pedidos grandes?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  Sí. Es una de las categorías más eficientes para producción en
                  volumen.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  ¿Puedo cotizar con referencia visual?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  Sí. Puedes enviarnos tu logo, moodboard o referencias y
                  aterrizamos la mejor opción para tu proyecto.
                </p>
              </details>
            </div>
          </section>

          <section id="catalogo" className="border-t border-white/10 pt-10">
            <h2 className="mb-4 text-2xl font-semibold">Cotiza tu proyecto</h2>

            <p className="mb-6 text-white/65">
              Cuéntanos cantidades, tipo de camiseta, técnica deseada y contexto
              de uso para proponerte la mejor opción.
            </p>

            <a
              href="/#contacto"
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Cotizar camisetas
            </a>
          </section>
        </div>

        {/* Columna derecha */}
        <div className="relative h-full min-h-screen overflow-hidden">
          <div className="flex flex-col animate-vertical gap-0">
            {[...images, ...images].map((img, index) => (
              <div key={index} className="overflow-hidden">
                <img
                  src={`/camisetas/${img}`}
                  alt="referencia camisetas"
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