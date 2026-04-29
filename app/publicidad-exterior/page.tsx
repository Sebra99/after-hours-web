"use client";

import { useState } from "react";
import Link from "next/link";

const productionItems = [
  {
    title: "Vinilos y señalización",
    short: "Señalética, vinilos, piezas adhesivas y gráfica para espacios.",
    description:
      "Desarrollamos vinilos adhesivos, señalización institucional, piezas para vitrinas, muros, puntos de venta y recorridos internos. Ideal para mejorar visibilidad, orientación y presencia de marca.",
    image: "/publicidad/vinilos.png",
  },
  {
    title: "Carpas y estructuras",
    short: "Montajes para eventos, activaciones y presencia de marca.",
    description:
      "Producimos carpas personalizadas, estructuras livianas y elementos de montaje para eventos, ferias y activaciones. Pensadas para visibilidad, practicidad y buen impacto visual.",
    image: "/publicidad/carpas.png",
  },
  {
    title: "Pendones y backdrops",
    short: "Formatos para fondos de evento, branding y activaciones.",
    description:
      "Creamos pendones, backing, fondos para fotografía y estructuras gráficas para eventos, lanzamientos y puntos de exhibición. Soluciones versátiles para destacar marca en el espacio.",
    image: "/publicidad/backdrops.png",
  },
  {
    title: "Lettering y rotulación",
    short: "Aplicaciones visuales para fachadas, muros y superficies.",
    description:
      "Realizamos rotulación para oficinas, locales, fachadas, interiores y puntos de contacto. Desde lettering decorativo hasta soluciones funcionales con gran claridad visual.",
    image: "/publicidad/lettering.png",
  },
  {
    title: "Exhibidores y stands",
    short: "Piezas para ferias, displays y presentación de producto.",
    description:
      "Diseñamos y producimos exhibidores, módulos y stands para mostrar productos y elevar la experiencia de marca en ferias, activaciones y espacios comerciales.",
    image: "/publicidad/stands.png",
  },
  {
    title: "Wrapping vehicular",
    short: "Aplicación de marca sobre vehículos y superficies móviles.",
    description:
      "Desarrollamos piezas para wrapping parcial o total, ideal para convertir vehículos en soportes de visibilidad de alto impacto con gran recordación.",
    image: "/publicidad/wrapping.png",
  },
];

function FlipCard({
  item,
  flipped,
  onToggle,
}: {
  item: (typeof productionItems)[number];
  flipped: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="group block w-full text-left [perspective:1400px]"
    >
      <div
        className={`relative h-[360px] w-full rounded-[24px] transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Frente */}
        <div className="absolute inset-0 overflow-hidden rounded-[24px] border border-white/10 bg-zinc-900 [backface-visibility:hidden]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-white/55">
              Toca para ver más
            </p>
            <h3 className="text-2xl font-semibold leading-tight text-white">
              {item.title}
            </h3>
            <p className="mt-2 max-w-[34ch] text-sm leading-6 text-white/75">
              {item.short}
            </p>
          </div>
        </div>

        {/* Reverso */}
        <div className="absolute inset-0 rounded-[24px] border border-white/10 bg-zinc-950 p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex h-full flex-col">
            <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-white/45">
              Descripción
            </p>

            <h3 className="text-2xl font-semibold leading-tight">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/75">
              {item.description}
            </p>

            <div className="mt-auto pt-6">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90">
                Volver
                <span aria-hidden="true">↺</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function PublicidadExteriorPage() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/publicidad/hero-publicidad-exterior.png"
            alt="Publicidad exterior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.22),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_60%_75%,rgba(236,72,153,0.12),transparent_26%)]" />
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/55" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <div className="max-w-3xl">
            <Link
  href="/"
  className="mb-6 inline-flex items-center gap-2 bg-black/0 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
>
  <span aria-hidden="true">←</span>
  Volver al inicio
</Link>
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/65">
              Otras soluciones
            </p>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Publicidad exterior
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 md:text-lg">
              Producimos piezas para visibilidad de marca en el espacio físico:
              desde vinilos y señalización hasta stands, estructuras y formatos
              para activaciones, eventos y puntos de venta.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
               href="#coti"
               className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
               >
                Cotizar proyecto
                </a>

              <a
                href="#que-producimos"
                className="rounded-full border border-white/20 bg-black/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Ver formatos
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* QUÉ PRODUCIMOS */}
     <section
  id="que-producimos"
  className="bg-white px-6 py-18 md:px-10"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-10">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-black/45">
        Formatos
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
        Qué producimos
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-black md:text-base">
        Explora los formatos más frecuentes. Toca cada card para ver una
        descripción más detallada.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {productionItems.map((item, index) => (
        <FlipCard
          key={item.title}
          item={item}
          flipped={flippedIndex === index}
          onToggle={() => toggleCard(index)}
        />
      ))}
    </div>
  </div>
</section>

         {/* ENFOQUE */}
      <section className="border-b border-white/10 px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/45">
              
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Has tu marca mas visible
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
              Producimos desde piezas puntuales hasta
              estructuras completas para eventos, ferias, puntos de venta y
              activaciones.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Diseño incluido",
              "Instalación",
              "Impresión a alta calidad",
              "Tiempos ágiles",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-sm font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CONTACTO */}
      
      <section id= "coti" className="px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/45">
              Contacto
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Cotiza tu proyecto
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/72 md:text-base">
              Cuéntanos qué necesitas, dónde va instalado y si tienes una fecha
              límite. Con eso armamos una propuesta más útil.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <div className="grid gap-3">
              <input
                className="h-12 rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-white/30"
                placeholder="Nombre"
              />
              <input
                className="h-12 rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-white/30"
                placeholder="Empresa o marca"
              />
              <input
                className="h-12 rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-white/30"
                placeholder="Correo o WhatsApp"
              />
              <textarea
                className="min-h-[140px] rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
                placeholder="Cuéntanos qué necesitas"
              />
              <button className="mt-2 h-12 rounded-full bg-white text-sm font-medium text-black transition hover:bg-white/90">
                Enviar solicitud
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}