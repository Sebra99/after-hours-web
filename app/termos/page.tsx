import Link from "next/link";

export default function TermosPage() {
  const images = [
    "ref1te.png",
    "ref2te.png",
    "ref3te.png",
    "ref4te.png",
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

              <span className="uppercase tracking-[0.25em]">Termos</span>
            </div>

            <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
              Termos personalizados para marca, equipos y regalos
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/65">
              Una opción de merch funcional altamente personalizable. Ideal
              para uso diario, kits empresariales y proyectos donde buscas una
              pieza duradera.
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
              ¿Cuándo usar termos?
            </h2>

            <ul className="space-y-3 text-white/70">
              <li>• Kits empresariales o de onboarding</li>
              <li>• Regalos corporativos</li>
              <li>• Merch de marca con uso diario</li>
              <li>• Equipos que requieren productos funcionales</li>
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
                  Grabado láser, impresión, DTF o combinaciones según el material.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Materiales</h3>
                <p className="mt-2 text-white/65">
                  Acero inoxidable, vidrio, plásticos premium y otras opciones según uso.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Colores</h3>
                <p className="mt-2 text-white/65">
                  Tonos base o personalizados según identidad de marca.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold">Capacidad</h3>
                <p className="mt-2 text-white/65">
                  Diferentes tamaños según el tipo de uso.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">
              ¿Qué puedes personalizar?
            </h2>

            <ul className="space-y-3 text-white/70">
              <li>• Color del termo</li>
              <li>• Técnica de marcación</li>
              <li>• Tamaño y capacidad</li>
              <li>• Ubicación del logo</li>
              <li>• Tipo de tapa o cierre</li>
            </ul>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">
              Cantidades y tiempos
            </h2>

            <p className="text-white/70">
              Los termos funcionan bien para pedidos medianos y grandes. Los
              tiempos dependen del material, la técnica y el volumen, pero se
              ajustan a proyectos corporativos y comerciales.
            </p>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">Ideal para</h2>

            <ul className="space-y-3 text-white/70">
              <li>• Regalos corporativos</li>
              <li>• Kits empresariales</li>
              <li>• Merch premium</li>
              <li>• Equipos internos</li>
            </ul>
          </section>

          <section className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">
              Tipos de termo
            </h2>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Clásico</p>
                <p className="text-sm text-white/60">
                  Funcional y adaptable a múltiples contextos.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Térmico</p>
                <p className="text-sm text-white/60">
                  Mantiene temperatura por más tiempo, mayor valor percibido.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="font-medium">Premium</p>
                <p className="text-sm text-white/60">
                  Mejor acabado, materiales y presencia de marca.
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
                  ¿Qué técnica recomiendan para termos?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  El grabado láser es el más usado por durabilidad, pero depende
                  del material y del acabado que busques.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  ¿Sirven para regalos corporativos?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  Sí, es una de las opciones más comunes para gifting por su uso
                  diario y percepción de valor.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 p-6 open:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  ¿Manejan diferentes capacidades?
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/65">
                  Sí, se pueden trabajar diferentes tamaños según el contexto de
                  uso.
                </p>
              </details>
            </div>
          </section>

          <section id="catalogo" className="border-t border-white/10 pt-10">
            <h2 className="mb-4 text-2xl font-semibold">Cotiza tu proyecto</h2>

            <p className="mb-6 text-white/65">
              Envíanos cantidades, tipo de termo y referencias para armar una
              propuesta.
            </p>

            <a
              href="/#contacto"
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Cotizar termos
            </a>
          </section>
        </div>

        {/* Columna derecha */}
        <div className="relative h-full min-h-screen overflow-hidden">
          <div className="flex flex-col animate-vertical gap-0">
            {[...images, ...images].map((img, index) => (
              <div key={index} className="overflow-hidden">
                <img
                  src={`/termos/${img}`}
                  alt="referencia termos"
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