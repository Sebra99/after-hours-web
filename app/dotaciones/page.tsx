import Link from "next/link";

export default function DotacionesPage() {
  const products = [
    {
      title: "Uniformes escolares",
      desc: "Polos, camisas, camisetas, sueteres y demas prendas institucionales.",
      image: "/dotaciones/uniformes.png",
    },
    {
      title: "Gastronomía",
      desc: "Delantales, gorras, camisetas y prendas funcionales para operación.",
      image: "/dotaciones/gastronomia.png",
    },
    {
      title: "Logística y operación",
      desc: "Prendas resistentes, overoles, botas, cascos, y demás pensadas para uso diario.",
      image: "/dotaciones/logistica.png",
    },
    {
      title: "Salud y bienestar",
      desc: "Scrubs, chaquetas, lanyards, gorros y todo lo que puedas necesitar.",
      image: "/dotaciones/salud1.png",
    },
    {
      title: "Retail y atención",
      desc: "Prendas que ayudan a identificar al equipo sin perder presencia de marca.",
      image: "/dotaciones/retail.png",
    },
    {
      title: "Servicios generales y aseo",
      desc: "Uniformes, insumos, delantales y más .",
      image: "/dotaciones/generales.png",
    },
  ];

  const sectors = [
    "Gastronomía",
    "Salud",
    "Logística",
    "Retail",
    "Eventos",
    "Corporativo",
  ];

  const process = [
    {
      title: "Brief",
      desc: "Entendemos el tipo de equipo, uso, cantidades y necesidades reales.",
    },
    {
      title: "Propuesta",
      desc: "Definimos prendas, materiales, técnicas y acabados según presupuesto.",
    },
    {
      title: "Producción",
      desc: "Ejecutamos la dotación con foco en consistencia, tallaje y tiempos.",
    },
    {
      title: "Entrega",
      desc: "Consolidamos el pedido y organizamos la entrega según el proyecto.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/dotaciones/hero-dotaciones1.png"
            alt="Dotaciones empresariales"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/1 via-black/20 to-black/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <div className="max-w-4xl">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 bg-black/0 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              ← Volver al inicio
            </Link>

            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/60">
              Otras soluciones
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] md:text-7xl">
              Dotaciones empresariales
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Diseñamos y producimos uniformes, prendas corporativas y kits de
              dotación para equipos que necesitan presencia, comodidad y
              consistencia en el día a día.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#cotizar"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Cotizar proyecto
              </a>

              <a
                href="#productos"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Ver opciones
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Enfoque
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Uniformes que se ajustan a tus necesidades
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Una buena dotación debe funcionar en operación, pero también debe
            verse coherente con la marca. Trabajamos cuidadosamente para combinar comodidad y utilidad.
          </p>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="border-b border-white/10 px-6 py-20 md:px-10 bg-[#6c6967]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                Qué producimos
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                Prendas y kits para operación
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Desde piezas básicas hasta dotaciones completas, adaptamos cada
              solución al tipo de equipo, presupuesto y contexto de uso.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {products.map((item) => (
              <article
                key={item.title}
                className="group relative h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

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

      

      {/* COTIZAR */}
      <section id="cotizar" className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Cotización
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Cuéntanos qué necesita tu equipo
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
              Envíanos cantidades, tipo de equipo, prendas deseadas y referencias
              visuales. Con eso podemos aterrizar una propuesta más clara.
            </p>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Empresa / marca
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
                  placeholder="Nombre de la empresa"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Correo
                </label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
                  placeholder="tu@correo.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Teléfono
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
                  placeholder="Tu número"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-white/60">
                  ¿Qué necesitas?
                </label>
                <textarea
                  rows={6}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
                  placeholder="Cuéntanos tipo de dotación, cantidades aproximadas, tallas, tiempos y referencias."
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                >
                  Enviar cotización
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}