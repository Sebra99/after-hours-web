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

const extraServices = [
  {
    title: "Dotaciones empresariales",
    description:
      "Prendas y piezas funcionales para equipos, operación y uso corporativo.",
    image: "/catalogo/dotaciones.png",
    href: "/dotaciones-empresariales",
  },
  {
    title: "Publicidad exterior",
    description:
      "Vinilos, señalización, estructuras y formatos de exhibición para campañas y puntos de venta.",
    image: "/catalogo/publicidad_exterior.png",
    href: "/publicidad-exterior",
  },
  {
    title: "Material POP y activaciones",
    description:
      "Kits, displays y material promocional para lanzamientos, ferias y activaciones.",
    image: "/catalogo/material_pop.png",
    href: "/material-pop",
  },
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
    <main className="relative min-h-screen text-white">

      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <img src="hero2.png" alt="background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero */}
      <section className="border-b border-white/10 px-6 py-24 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 text-xs uppercase tracking-[0.25em] text-white/50">
            Insignia merch by After Hours
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] md:text-6xl xl:text-7xl">
            Creamos merch. Creamos identidad.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
            Diseñamos y producimos piezas a tu medida con criterio visual, buena ejecución
            y enfoque comercial. No se trata de imprimir logos: se trata de contar historias.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#productos" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90">
              Ver catálogo
            </a>
            <a href="#contacto" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:border-white">
              Cotizar proyecto
            </a>
          </div>
        </div>
      </section>



      {/* Clientes */}
      <section className="relative border-b border-white/10 py-10">
        <div className="absolute inset-0 -z-10 bg-black/10 backdrop-blur-sm" />
        <div className="mx-auto max-w-8xl px-6 md:px-10">
          <div className="text-xs uppercase tracking-[0.25em] text-white/50">Confianza</div>
          <h2 className="mt-2 text-2xl font-semibold md:text-4xl">
            Marcas que han trabajado con nosotros
          </h2>
          <p className="mt-3 max-w-xl text-sm text-white/70">
            Algunos clientes, marcas y proyectos con los que hemos trabajado.
          </p>

          <div className="relative mt-6 overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-black to-transparent" />
            <div className="flex w-max animate-marquee items-center gap-8">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div key={index} className="flex h-16 min-w-[120px] items-center justify-center overflow-hidden">
                 <img
  src={`/logos/${logo}`}
  alt={logo}
  style={{ height: "120px", width: "auto" }}
  className="object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Productos */}
<section id="productos" className="border-b border-white/10 px-6 py-14 md:px-10">
  <div className="mx-auto max-w-6xl">
    <div className="mb-8 grid gap-4 md:grid-cols-[0.9fr_1.1fr] md:items-end">
      <div>
        <div className="text-xs uppercase tracking-[0.25em] text-white/50">Productos</div>
        <h2 className="mt-2 text-2xl font-semibold md:text-4xl">Catálogo principal</h2>
      </div>
      <p className="text-sm text-white/70 md:text-base">
        Todo lo que necesitas en un solo lugar.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {[
        { name: "Gorras", slug: "gorras", image: "/catalogo/gorras.png" },
        { name: "Camisetas", slug: "camisetas", image: "/catalogo/camisetas.png" },
        { name: "Hoodies", slug: "hoodies", image: "/catalogo/hoodies.png" },
        { name: "Tote Bags", slug: "totebags", image: "/catalogo/totebags.png" },
        { name: "Termos", slug: "termos", image: "/catalogo/termos.png" },
        { name: "Esferos", slug: "esferos", image: "/catalogo/esferos.png" },
      ].map((item) => (
        <Link key={item.slug} href={`/${item.slug}`} className="group block">
         
          <div
  style={{ position: "relative", height: "450px", overflow: "hidden", borderRadius: "1rem" }}
  className="border border-white/10"
>
  <img
    src={item.image}
    alt={item.name}
    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
  />
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2) 50%, transparent)",
      zIndex: 5,
    }}
  />
  <h3
    style={{ position: "absolute", bottom: "16px", left: "16px", zIndex: 10 }}
    className="text-lg font-semibold text-white"
  >
    {item.name}
  </h3>
</div>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* Servicios */}
      <section className="border-b border-white/10 px-6 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 grid gap-4 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-white/50">Servicios</div>
              <h2 className="mt-2 text-2xl font-semibold md:text-4xl">Personalización</h2>
            </div>
            <p className="text-sm text-white/70 md:text-base">
              
            </p>
          </div>

          <div className="border-t border-white/10">
            {[
              { title: "Bordado", desc: "Ideal para una lectura más premium, limpia y duradera en prendas y accesorios." },
              { title: "DTF / Estampado", desc: "Perfecto para gráficos más complejos, mayor detalle y artes con más presencia visual." },
              { title: "Vinilo textil", desc: "Buena opción para acabados limpios, aplicaciones puntuales y personalización deportiva." },
              { title: "Desarrollo creativo", desc: "Aterrizamos conceptos, piezas y dirección visual para que el producto tenga sentido de marca." },
            ].map((item, i) => (
              <div key={i} className="grid gap-2 border-b border-white/10 py-5 md:grid-cols-[0.8fr_1.2fr]">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-white/65">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Maquila */}
      <section className="px-6 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl md:p-8">
            <div className="mb-8 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-white/50">Producción</div>
                <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-4xl">
                  La maquila que tu marca necesita
                </h2>
              </div>
              <p className="text-sm text-white/70 md:text-base">
                Convertimos ideas en producto real. Acompañamos a tu marca desde la
                planeación estratégica y el desarrollo, hasta la confección, el estampado,
                el bordado y el shoot final. Piezas con los más altos estándares de calidad,
                telas premium y asesoría personalizada.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="overflow-hidden rounded-xl">
                <img src="/maquila/maq1.JPG" alt="Producción Studio by After Hours" className="h-[380px] w-full object-cover" />
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-xl">
                  <img src="/maquila/maq2.jpg" alt="Proceso de producción" className="h-[182px] w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img src="/maquila/maq3.jpg" alt="Shoot y producto" className="h-[182px] w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 mx-auto max-w-6xl grid gap-3 md:grid-cols-5">
          {[
            { title: "Planeación", desc: "Definición de producto, materiales y enfoque de marca." },
            { title: "Diseño", desc: "Desarrollo de piezas, gráficos y dirección visual." },
            { title: "Producción", desc: "Confección y fabricación con control de calidad." },
            { title: "Personalización", desc: "Bordado, estampado y acabados según la marca." },
            { title: "Shoot & entrega", desc: "Contenido y entrega final lista para uso o venta." },
          ].map((step, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]">
              <div className="text-xs text-white/40">0{i + 1}</div>
              <h3 className="mt-2 text-sm font-semibold">{step.title}</h3>
              <p className="mt-1 text-xs text-white/70">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Más allá del merch */}
      <section className="border-t border-white/10 px-6 py-20 md:px-10">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/45">
          Otras soluciones
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Más allá del merch
        </h2>
      </div>

      <p className="max-w-xl text-sm leading-6 text-white/65 md:text-base">
        
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {extraServices.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="group relative block min-h-[380px] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]"
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 bg-black/30 transition-colors duration-500 ease-out group-hover:bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-end p-6">
            <h3 className="text-2xl font-semibold tracking-tight text-white transition-transform duration-500 ease-out group-hover:-translate-y-1">
              {item.title}
            </h3>

            <p className="mt-3 max-w-[34ch] text-sm leading-6 text-white/75 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:text-white/90">
              {item.description}
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/85 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:text-white">
              Ver más
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

      {/* Contacto */}
      <section id="contacto" className="border-t border-white/10 bg-white/[0.03] px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/50">Contacto</div>
            <h2 className="mt-2 text-2xl font-semibold md:text-4xl">
              Cotiza tu proyecto de merch.
            </h2>
            <p className="mt-3 max-w-md text-sm text-white/70 md:text-base">
              Cuéntanos qué quieres producir, para quién es y qué volumen
              estimas. Con eso ya se puede aterrizar una propuesta mejor.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-5">
            <input name="nombre" value={formData.nombre} onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-white/30"
              placeholder="Nombre" />
            <input name="empresa" value={formData.empresa} onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-white/30"
              placeholder="Empresa o marca" />
            <input name="contacto" value={formData.contacto} onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-white/30"
              placeholder="Correo o WhatsApp" />
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-white/30"
              placeholder="Cuéntanos qué necesitas" />

            {status === "success" && (
              <p className="text-sm text-green-400">✓ Solicitud enviada. Te contactamos pronto.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">Hubo un error. Intenta de nuevo.</p>
            )}

            <button type="button" onClick={handleSubmit} disabled={status === "loading"}
              className="w-full rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:opacity-90 disabled:opacity-50">
              {status === "loading" ? "Enviando..." : "Enviar solicitud"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}