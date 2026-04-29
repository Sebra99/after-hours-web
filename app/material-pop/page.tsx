"use client";

import Link from "next/link";
import { useState } from "react";

const N8N_WEBHOOK_URL = "/api/contacto";

type FormStatus = "idle" | "loading" | "success" | "error";

type FormData = {
  nombre: string;
  empresa: string;
  contacto: string;
  mensaje: string;
};

export default function MaterialPopPage() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    empresa: "",
    contacto: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.nombre || !formData.contacto || !formData.mensaje) return;

    setStatus("loading");

    try {
      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          tipo: "Material POP y activaciones",
        }),
      });

      setStatus("success");
      setFormData({ nombre: "", empresa: "", contacto: "", mensaje: "" });
    } catch {
      setStatus("error");
    }
  };

  const piezas = [
    {
      title: "Kits de gifting",
      desc: "Cajas, bolsas y kits curados para lanzamientos, prensa, clientes y equipos internos.",
      image: "/pop/gifting.jpg",
    },
    {
      title: "Displays POP",
      desc: "Piezas para punto de venta que guían la mirada, ordenan el producto y refuerzan marca.",
      image: "/pop/displays.jpg",
    },
    {
      title: "Packaging",
      desc: "Cajas, empaques y soportes pensados para que el unboxing también comunique.",
      image: "/pop/packaging.jpg",
    },
    {
      title: "Material impreso",
      desc: "Tarjetas, catálogos, flyers y piezas impresas con buena ejecución y acabados.",
      image: "/pop/impresos.jpg",
    },
    {
      title: "Ferias y eventos",
      desc: "Piezas para presencia de marca en expos, lanzamientos, activaciones y stands.",
      image: "/pop/eventos.jpg",
    },
    {
      title: "Activaciones",
      desc: "Elementos físicos para experiencias de marca, muestras, dinámicas y momentos memorables.",
      image: "/pop/activaciones.jpg",
    },
  ];

  const process = [
    {
      title: "Brief",
      desc: "Entendemos el objetivo, audiencia, evento, fecha y contexto de uso.",
    },
    {
      title: "Concepto",
      desc: "Definimos qué piezas tienen sentido y cómo deben verse dentro de la experiencia.",
    },
    {
      title: "Producción",
      desc: "Fabricamos los elementos con materiales y acabados alineados al proyecto.",
    },
    {
      title: "Entrega",
      desc: "Coordinamos entrega, tiempos y cierre para que todo llegue listo para activar.",
    },
  ];

  const occasions = [
    "Lanzamientos",
    "Ferias",
    "Pop-up stores",
    "Eventos de marca",
    "Gifting corporativo",
    "Prensa y medios",
    "Activaciones BTL",
    "Onboarding",
    "Punto de venta",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/pop/hero-pop.png"
            alt="Material POP y activaciones"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/75" />
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
              Material POP y activaciones
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Producimos piezas físicas para lanzamientos, eventos, punto de
              venta y experiencias de marca. Desde el kit hasta el display.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#cotizar"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Cotizar activación
              </a>

              <a
                href="#piezas"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Ver piezas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ENFOQUE */}
      <section className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Enfoque
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              No es decoración. Es presencia de marca.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            El material POP bien hecho convierte un espacio, una entrega o un
            evento en una experiencia más clara, más recordable y más coherente
            con la marca.
          </p>
        </div>
      </section>

      {/* PIEZAS */}
      <section id="piezas" className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                Qué producimos
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                Piezas para activar tu marca
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Desde piezas individuales hasta sistemas completos para eventos,
              gifting, ferias, activaciones y punto de venta.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {piezas.map((item) => (
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

      {/* SERVICIOS */}
      <section className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                Capacidad
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                De la idea al montaje
              </h2>
            </div>

            <div className="border-t border-white/10">
              {[
                {
                  title: "Diseño y concepto",
                  desc: "Aterrizamos la idea en piezas físicas coherentes con la experiencia.",
                },
                {
                  title: "Producción",
                  desc: "Fabricamos kits, empaques, displays, impresos y piezas para activación.",
                },
                {
                  title: "Acabados",
                  desc: "Trabajamos materiales, detalles, impresión y terminaciones según el proyecto.",
                },
                {
                  title: "Entrega coordinada",
                  desc: "Organizamos tiempos, cantidades y entrega para que todo llegue listo.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="grid gap-3 border-b border-white/10 py-6 md:grid-cols-[0.7fr_1.3fr]"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-base leading-7 text-white/65">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OCASIONES */}
      <section className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Ocasiones
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Para cuándo sirve
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {occasions.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/75 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Proceso
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Así lo hacemos
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
              >
                <p className="text-sm text-white/40">0{index + 1}</p>

                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {step.desc}
                </p>
              </div>
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
              Cotiza tu activación
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
              Cuéntanos qué tipo de evento, lanzamiento o activación tienes en
              mente. Con eso podemos aterrizar una propuesta concreta.
            </p>
          </div>

          <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
            <input
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-white/30"
              placeholder="Nombre"
            />

            <input
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-white/30"
              placeholder="Empresa o marca"
            />

            <input
              name="contacto"
              value={formData.contacto}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-white/30"
              placeholder="Correo o WhatsApp"
            />

            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={6}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-white/30"
              placeholder="Cuéntanos el tipo de evento, cantidad de piezas, fecha, referencias o idea inicial."
            />

            {status === "success" && (
              <p className="text-sm text-green-400">
                ✓ Solicitud enviada. Te contactamos pronto.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-400">
                Hubo un error. Intenta de nuevo.
              </p>
            )}

            <button
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