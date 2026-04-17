"use client";

import Link from "next/link";
import { useState } from "react";

const N8N_WEBHOOK_URL = "/api/contacto";

export default function PublicidadExteriorPage() {
  const [formData, setFormData] = useState({ nombre: "", empresa: "", contacto: "", mensaje: "" });
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
        body: JSON.stringify({ ...formData, tipo: "Publicidad exterior" }),
      });
      setStatus("success");
      setFormData({ nombre: "", empresa: "", contacto: "", mensaje: "" });
    } catch {
      setStatus("error");
    }
  };

  const formatos = [
    { nombre: "Vinilos y señalización", desc: "Aplicaciones en vidrieras, paredes, pisos y superficies de locales o espacios de trabajo." },
    { nombre: "Carpas y estructuras", desc: "Soluciones para eventos, ferias y activaciones al aire libre con buena presencia de marca." },
    { nombre: "Pendones y backdrops", desc: "Formatos verticales y horizontales para puntos de venta, ruedas de prensa y eventos." },
    { nombre: "Lettering y rótulos", desc: "Identidad física para fachadas, locales y espacios comerciales con acabado limpio." },
    { nombre: "Exhibidores y stands", desc: "Estructuras de exhibición personalizadas para retail, ferias y showrooms." },
    { nombre: "Wrapping vehicular", desc: "Comunicación de marca en flota de vehículos con diseño e impresión de alta resolución." },
  ];

  return (
    <main className="relative min-h-screen text-white">

      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <img src="/hero2.png" alt="background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Nav */}
      <div className="border-b border-white/10 px-6 py-5 md:px-10">
        <Link href="/" className="text-sm text-white/50 transition hover:text-white">
          ← Studio by After Hours
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
            Otras soluciones
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] md:text-7xl">
            Publicidad exterior
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-7 text-white/70">
            Producimos piezas para visibilidad de marca en espacio físico. De la calle al local,
            del evento al punto de venta. Presencia que se ve y se recuerda.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#cotizar" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Cotizar proyecto
            </a>
            <a href="#formatos" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-white">
              Ver formatos
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/50">Enfoque</div>
              <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
                Marca visible en el espacio físico
              </h2>
              <p className="mt-6 text-base leading-7 text-white/70">
                El espacio físico sigue siendo uno de los medios más poderosos para una marca.
                Un vinilo bien aplicado, una carpa bien diseñada o un stand con criterio visual
                pueden cambiar completamente cómo te percibe alguien en persona.
              </p>
              <p className="mt-4 text-base leading-7 text-white/70">
                Producimos desde piezas pequeñas de señalización hasta estructuras completas para
                eventos, con el mismo enfoque de diseño que aplicamos al merch.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["Impresión de alta resolución", "Materiales y tintas para exteriores e interiores."],
                ["Diseño incluido", "Desarrollo creativo si no tienes los artes listos."],
                ["Instalación", "Coordinamos la instalación según el formato y espacio."],
                ["Tiempos ágiles", "Producción rápida para campañas y eventos con fecha."],
              ].map(([title, desc], i) => (
                <div key={i} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-white/60">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formatos */}
      <section id="formatos" className="border-t border-white/10 bg-white/[0.03] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-12">
            <div className="text-sm uppercase tracking-[0.25em] text-white/50">Formatos</div>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Qué producimos</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {formatos.map((f, i) => (
              <div key={i} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-7">
                <div className="text-xs text-white/30">0{i + 1}</div>
                <h3 className="mt-3 text-xl font-semibold">{f.nombre}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usos */}
      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-10">
            <div className="text-sm uppercase tracking-[0.25em] text-white/50">Aplicaciones</div>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Dónde aplica</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Locales y tiendas", "Ferias y expos", "Eventos corporativos", "Lanzamientos",
              "Puntos de venta", "Oficinas y sedes", "Campañas en vía pública", "Conciertos y festivales"].map((s, i) => (
              <span key={i} className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-sm text-white/70">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cotizar */}
      <section id="cotizar" className="border-t border-white/10 bg-white/[0.03] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-white/50">Contacto</div>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Cotiza tu proyecto</h2>
            <p className="mt-4 max-w-xl text-base text-white/70">
              Dinos qué formato necesitas, dónde va instalado y si tienes una fecha límite.
              Con eso armamos una propuesta ajustada.
            </p>
          </div>

          <div className="space-y-4 rounded-[2rem] border border-white/10 bg-black/30 p-6">
            <input name="nombre" value={formData.nombre} onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/30"
              placeholder="Nombre" />
            <input name="empresa" value={formData.empresa} onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/30"
              placeholder="Empresa o marca" />
            <input name="contacto" value={formData.contacto} onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/30"
              placeholder="Correo o WhatsApp" />
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows={5}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/30"
              placeholder="¿Qué formato necesitas? ¿Dónde va? ¿Tienes fecha de entrega?" />
            {status === "success" && <p className="text-sm text-green-400">✓ Solicitud enviada. Te contactamos pronto.</p>}
            {status === "error" && <p className="text-sm text-red-400">Hubo un error. Intenta de nuevo.</p>}
            <button onClick={handleSubmit} disabled={status === "loading"}
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:opacity-50">
              {status === "loading" ? "Enviando..." : "Enviar solicitud"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}