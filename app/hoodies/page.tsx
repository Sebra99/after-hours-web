import Link from "next/link";

export default function HoodiesPage() {
  const images = [
    "ref1h.png",
    "ref2h.png",
    "ref3h.png",
    "ref4h.png",
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

              <span className="uppercase tracking-[0.25em]">Hoodies</span>
            </div>

            <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
              Hoodies personalizables para marcas, equipos y eventos
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/65">
              Una opción de merch con mayor valor percibido, ideal para marcas,
              uniformidad de equipo, lanzamientos y proyectos que buscan una
              pieza más sólida y visible.
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
              ¿Cuándo usar hoodies?
            </h2>

            <ul className="space-y-3 text-white/70">
              <li>• Equipos internos o dotación con mejor presencia de marca</li>
              <li>• Colecciones, drops o lanzamientos</li>
              <li>• Merch premium para clientes o comunidad</li>
              <li>• Eventos donde se busca una pieza de mayor duración</li>
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
                  Bordado, DTF, estampado o combinaciones según el acabado que
                  buscas.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Materiales</h3>
                <p className="mt-2 text-white/65">
                  Diferentes gramajes y composiciones según clima, presupuesto y
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
                  Pecho, espalda, manga, capota o combinaciones según el diseño.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">
              ¿Qué puedes personalizar?
            </h2>

            <ul className="space-y-3 text-white/70">
              <li>• Color base de la prenda</li>
              <li>• Técnica de marcación</li>
              <li>• Ubicación del diseño</li>
              <li>• Tallas según necesidad del proyecto</li>
              <li>• Acabados y combinaciones visuales</li>
            </ul>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">
              Cantidades y tiempos
            </h2>

            <p className="text-white/70">
              Trabajamos hoodies para proyectos de marca, equipos y eventos.
              Los tiempos de producción dependen del volumen, la técnica y la
              complejidad del acabado, pero se estructuran para mantener
              consistencia en pedidos medianos y grandes.
            </p>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">Ideal para</h2>

            <ul className="space-y-3 text-white/70">
              <li>• Equipos creativos o corporativos</li>
              <li>• Lanzamientos de marca</li>
              <li>• Merch de comunidad</li>
              <li>• Regalos empresariales de mayor valor</li>
            </ul>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">Tipos de hoodie</h2>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Pullover</p>
                <p className="text-sm text-white/60">
                  Clásico, limpio y muy útil para colecciones o dotación.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Con cremallera</p>
                <p className="text-sm text-white/60">
                  Más funcional para equipos y uso diario.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Heavyweight</p>
                <p className="text-sm text-white/60">
                  Mayor percepción de valor y mejor presencia visual.
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
                  ¿Manejan varias tallas dentro del mismo pedido?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  Sí. Podemos distribuir el pedido por tallas según la necesidad
                  del equipo, evento o proyecto.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  ¿Qué técnica recomiendan para hoodies?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  Depende del look que buscas. Bordado funciona muy bien para un
                  acabado más premium; estampado y DTF sirven para gráficos más
                  complejos o grandes.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  ¿Pueden cotizar con referencia visual?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  Sí. Puedes enviar referencias, moodboard o piezas previas para
                  aterrizar mejor la propuesta.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  ¿Hay opciones más premium?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  Sí. Se pueden trabajar telas, gramajes y acabados con mayor
                  percepción de valor según el objetivo del proyecto.
                </p>
              </details>
            </div>
          </section>

          <section id="catalogo" className="border-t border-white/10 pt-10">
            <h2 className="mb-4 text-2xl font-semibold">Cotiza tu proyecto</h2>

            <p className="mb-6 text-white/65">
              Cuéntanos qué necesitas, cantidades aproximadas, técnica deseada y
              contexto de uso.
            </p>

            <a
              href="/#contacto"
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Cotizar hoodies
            </a>
          </section>
        </div>

        {/* Columna derecha */}
        <div className="relative h-full min-h-screen overflow-hidden">
          <div className="flex flex-col animate-vertical gap-0">
            {[...images, ...images].map((img, index) => (
              <div key={index} className="overflow-hidden">
                <img
                  src={`/hoodies/${img}`}
                  alt="referencia hoodies"
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