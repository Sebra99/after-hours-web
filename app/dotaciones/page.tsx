"use client";

import Link from "next/link";
import { useState } from "react";

const N8N_WEBHOOK_URL = "/api/contacto";

export default function DotacionesPage() {
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
        body: JSON.stringify({ ...formData, tipo: "Dotaciones empresariales" }),
      });
      setStatus("success");
      setFormData({ nombre: "", empresa: "", contacto: "", mensaje: "" });
    } catch {
      setStatus("error");
    }
  };

  const productos = [
    { nombre: "Polos y camisas", desc: "Prendas de operación diaria con buena lectura de marca y comodidad real." },
    { nombre: "Chaquetas y cortavientos", desc: "Para equipos en campo, eventos o uso corporativo con mayor visibilidad." },
    { nombre: "Pantalones y bermudas", desc: "Piezas de trabajo con corte funcional, adaptadas al lenguaje de tu empresa." },
    { nombre: "Gorras y accesorios", desc: "Complementos de uniforme con personalización consistente al resto de la dotación." },
    { nombre: "Delantales y uniformes especiales", desc: "Soluciones para gastronomía, salud, logística y otros sectores específicos." },
    { nombre: "Kits completos", desc: "Planeación de dotación completa por área, temporada o evento de empresa." },
  ];

  return (
    <main className="relative min-h-screen text-white">

      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <img src="/hero2.png" alt="background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Nav de regreso */}
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
            Dotaciones empresariales
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-7 text-white/70">
            Desarrollamos prendas y piezas funcionales para equipos, operación y uso corporativo.
            Uniformes que comunican quiénes son, no solo quiénes trabajan.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#cotizar" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Cotizar dotación
            </a>
            <a href="#productos" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-white">
              Ver prendas
            </a>
          </div>
        </div>
      </section>

      {/* Por qué importa */}
      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/50">Enfoque</div>
              <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
                Dotación con criterio de marca
              </h2>
              <p className="mt-6 text-base leading-7 text-white/70">
                Una dotación bien ejecutada no es solo ropa de trabajo. Es presencia, consistencia y
                orgullo de equipo. Trabajamos cada pieza pensando en cómo se ve, cómo dura y qué
                comunica de tu empresa hacia adentro y hacia afuera.
              </p>
              <p className="mt-4 text-base leading-7 text-white/70">
                Desde una camisa polo hasta un kit completo por área, acompañamos el proceso desde
                la selección de materiales hasta la entrega final.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["Calidad duradera", "Telas y acabados pensados para uso intensivo."],
                ["Personalización real", "Bordado, estampado y vinilo según la pieza."],
                ["Volúmenes flexibles", "Desde 12 unidades hasta pedidos corporativos grandes."],
                ["Asesoría incluida", "Te ayudamos a definir qué prender tiene más sentido."],
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

      {/* Productos */}
      <section id="productos" className="border-t border-white/10 bg-white/[0.03] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-12">
            <div className="text-sm uppercase tracking-[0.25em] text-white/50">Prendas</div>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Qué producimos</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {productos.map((p, i) => (
              <div key={i} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-7">
                <div className="text-xs text-white/30">0{i + 1}</div>
                <h3 className="mt-3 text-xl font-semibold">{p.nombre}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-10">
            <div className="text-sm uppercase tracking-[0.25em] text-white/50">Sectores</div>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Para quién trabajamos</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Retail y moda", "Gastronomía", "Logística y operaciones", "Salud y bienestar",
              "Tecnología", "Eventos y hospitalidad", "Construcción", "Educación", "Corporativo general"].map((s, i) => (
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
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
              Cotiza tu dotación
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/70">
              Cuéntanos cuántas personas, qué áreas, qué tipo de prenda y si tienes una
              referencia visual. Con eso armamos una propuesta concreta.
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
              placeholder="¿Cuántas personas? ¿Qué prendas necesitas? ¿Tienes referencia de diseño?" />
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