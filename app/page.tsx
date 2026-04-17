"use client";

import Link from "next/link";
import { useState } from "react";

const N8N_WEBHOOK_URL = "/api/contacto";

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    contacto: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.nombre || !formData.contacto || !formData.mensaje) return;
    setStatus("loading");
    try {
      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus("success");
      setFormData({ nombre: "", empresa: "", contacto: "", mensaje: "" });
    } catch {
      setStatus("error");
    }
  };

  const products = [
    {
      name: "Gorras",
      slug: "gorras",
      desc: "Bordado, estampado y combinaciones premium para marcas, equipos y eventos.",
    },
    {
      name: "Camisetas",
      slug: "camisetas",
      desc: "Oversized, regular o heavy cotton con acabados pensados para verse bien de verdad.",
    },
    {
      name: "Hoodies",
      slug: "hoodies",
      desc: "Piezas de mayor valor percibido para drops, equipos internos y lanzamientos.",
    },
    {
      name: "Tote Bags",
      slug: "totebags",
      desc: "Útiles, visibles y fáciles de personalizar para activaciones y gifting.",
    },
    {
      name: "Termos",
      slug: "termos",
      desc: "Merch funcional con buena presencia de marca y valor de uso real.",
    },
    {
      name: "Esferos",
      slug: "esferos",
      desc: "Opción accesible para volumen, kits empresariales y eventos.",
    },
  ];

  const clientLogos = [
    "P.Conservador.png",
    "SignGra.png",
    "I+D.png",
    "Agybo.png",
    "ZoeF.png",
    "Inchcape.png",
    "Frontera.png",
    "Rappi1.png",
    "Perspektiva.png",
  ];

  const solutions = [
    {
      slug: "dotaciones",
      title: "Dotaciones empresariales",
      desc: "Prendas y piezas funcionales para equipos, operación y uso corporativo con mejor lectura de marca.",
    },
    {
      slug: "publicidad-exterior",
      title: "Publicidad exterior",
      desc: "Vinilos, señalización, estructuras y formatos de exhibición para campañas y puntos de venta.",
    },
    {
      slug: "material-pop",
      title: "Material POP y activaciones",
      desc: "Kits, displays y material promocional para lanzamientos, ferias y activaciones de marca.",
    },
  ];

  return (
    <main className="relative min-h-screen text-white px-6 py-20 md:px-10">

      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <img
          src="hero2.png"
          alt="background"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero */}
      <section className="border-b border-white/10 px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-8xl">
          <div className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
            Studio by After Hours
          </div>

          <h1 className="max-w-7xl text-4xl font-semibold leading-[0.95] md:text-5xl xl:text-[6rem] 2xl:text-[7rem]">
            Creamos merch. Creamos identidad.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-7 text-white/70">
            Diseñamos y producimos piezas a tu medida con criterio visual, buena ejecución
            y enfoque comercial. No se trata de imprimir logos: se trata de contar historias.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#productos"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Ver catálogo
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-white"
            >
              Cotizar proyecto
            </a>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="relative border-t border-white/10 border-b border-white/10 py-14">
        <div className="absolute inset-0 -z-10 bg-black/10 backdrop-blur-sm" />
        <div className="mx-auto max-w-8xl px-6 md:px-10">
          <div className="text-sm uppercase tracking-[0.25em] text-white/50">Confianza</div>
          <h2 className="mt-3 text-4xl font-semibold md:text-6xl">
            Marcas que han trabajado con nosotros
          </h2>
          <p className="mt-4 max-w-2xl text-white/70">
            Algunos clientes, marcas y proyectos con los que hemos trabajado.
          </p>

          <div className="relative mt-8 overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />
            <div className="flex w-max animate-marquee items-center gap-10">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div key={index} className="flex min-w-[180px] items-center justify-center">
                  <img
                    src={`/logos/${logo}`}
                    alt={logo}
                    className="h-40 w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/50">Productos</div>
              <h2 className="mt-3 text-4xl font-semibold md:text-6xl">Catálogo principal</h2>
            </div>
            <p className="max-w-2xl text-base md:text-lg lg:text-xl text-white/70">
              Una amplia selección de cada producto para que encuentres justo lo que tu marca necesita.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <Link key={product.slug} href={`/${product.slug}`}>
                <article className="cursor-pointer rounded-2xl border border-white/10 p-8 min-h-[200px]">
                  <h3 className="text-3xl font-semibold">{product.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{product.desc}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/50">Servicios</div>
              <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Personalización</h2>
            </div>
            <p className="max-w-2xl text-base md:text-lg text-white/70">
              Adaptamos cada producto al lenguaje de tu marca con técnicas y acabados
              pensados para verse bien, durar y comunicar mejor.
            </p>
          </div>

          <div className="border-t border-white/10">
            {[
              { title: "Bordado", desc: "Ideal para una lectura más premium, limpia y duradera en prendas y accesorios." },
              { title: "DTF / Estampado", desc: "Perfecto para gráficos más complejos, mayor detalle y artes con más presencia visual." },
              { title: "Vinilo textil", desc: "Buena opción para acabados limpios, aplicaciones puntuales y personalización deportiva." },
              { title: "Desarrollo creativo", desc: "Aterrizamos conceptos, piezas y dirección visual para que el producto tenga sentido de marca." },
            ].map((item, i) => (
              <div key={i} className="grid gap-3 border-b border-white/10 py-6 md:grid-cols-[0.8fr_1.2fr]">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="max-w-2xl text-base text-white/65">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-12">
            <div className="text-sm uppercase tracking-[0.25em] text-white/50">Proceso</div>
            <h2 className="mt-3 text-4xl font-semibold md:text-6xl">Así trabajamos</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["01", "Brief", "Entendemos la idea, el contexto y el objetivo del proyecto."],
              ["02", "Propuesta", "Bajamos el concepto a productos, técnicas y dirección visual."],
              ["03", "Producción", "Ejecutamos con foco en acabados, consistencia y tiempos."],
              ["04", "Entrega", "Coordinamos la salida del proyecto y cerramos con seguimiento."],
            ].map(([num, title, text]) => (
              <div key={num} className="rounded-[2rem] border border-white/10 bg-black/30 p-6">
                <div className="text-sm text-white/40">{num}</div>
                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maquila */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl md:p-10">
            <div className="mb-12 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-white/50">Producción</div>
                <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-[0.95] md:text-6xl">
                  La maquila que tu marca necesita
                </h2>
              </div>
              <div>
                <p className="max-w-2xl text-base text-white/70 md:text-lg">
                  Convertimos ideas en producto real. Acompañamos a tu marca desde la
                  planeación estratégica y el desarrollo, hasta la confección, el estampado,
                  el bordado y el shoot final. Piezas con los más altos estándares de calidad,
                  telas premium y asesoría personalizada.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="overflow-hidden rounded-[2rem]">
                <img src="/maquila/maq1.JPG" alt="Producción Studio by After Hours" className="h-[520px] w-full object-cover" />
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[2rem]">
                  <img src="/maquila/maq2.jpg" alt="Proceso de producción" className="h-[252px] w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-[2rem]">
                  <img src="/maquila/maq3.jpg" alt="Shoot y producto" className="h-[252px] w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 mx-auto max-w-[1300px] grid gap-4 md:grid-cols-5">
          {[
            { title: "Planeación", desc: "Definición de producto, materiales y enfoque de marca." },
            { title: "Diseño", desc: "Desarrollo de piezas, gráficos y dirección visual." },
            { title: "Producción", desc: "Confección y fabricación con control de calidad." },
            { title: "Personalización", desc: "Bordado, estampado y acabados según la marca." },
            { title: "Shoot & entrega", desc: "Contenido y entrega final lista para uso o venta." },
          ].map((step, i) => (
            <div key={i} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:bg-white/[0.08]">
              <div className="text-xs text-white/40">0{i + 1}</div>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-white/70">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Más allá del merch — ahora con botones/cards */}
      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-12">
            <div className="text-sm uppercase tracking-[0.25em] text-white/50">Otras soluciones</div>
            <h2 className="mt-3 text-4xl font-semibold md:text-6xl">Más allá del merch</h2>
            <p className="mt-6 max-w-2xl text-white/70">
              Además del merch, también desarrollamos soluciones para operación,
              visibilidad y presencia de marca.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {solutions.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`}>
                <article className="group cursor-pointer rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:bg-white/[0.07] hover:border-white/20 min-h-[220px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{s.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/70">{s.desc}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white/50 transition group-hover:text-white">
                    Ver más
                    <span className="transition group-hover:translate-x-1">→</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto con N8N */}
      <section id="contacto" className="border-t border-white/10 bg-white/[0.03] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-white/50">Contacto</div>
            <h2 className="mt-3 text-4xl font-semibold md:text-6xl">
              Cotiza tu proyecto de merch.
            </h2>
            <p className="max-w-xl text-base md:text-xl text-white/70">
              Cuéntanos qué quieres producir, para quién es y qué volumen
              estimas. Con eso ya se puede aterrizar una propuesta mejor.
            </p>
          </div>

          <div className="space-y-4 rounded-[2rem] border border-white/10 bg-black/30 p-6">
            <input
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/30"
              placeholder="Nombre"
            />
            <input
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/30"
              placeholder="Empresa o marca"
            />
            <input
              name="contacto"
              value={formData.contacto}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/30"
              placeholder="Correo o WhatsApp"
            />
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/30"
              placeholder="Cuéntanos qué necesitas"
            />

            {status === "success" && (
              <p className="text-sm text-green-400">✓ Solicitud enviada. Te contactamos pronto.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">Hubo un error. Intenta de nuevo o escríbenos directo.</p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:opacity-50"
            >
              {status === "loading" ? "Enviando..." : "Enviar solicitud"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}