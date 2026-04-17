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
  const [formData, setFormData] = useState<FormData>({ nombre: "", empresa: "", contacto: "", mensaje: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

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
        body: JSON.stringify({ ...formData, tipo: "Material POP y activaciones" }),
      });
      setStatus("success");
      setFormData({ nombre: "", empresa: "", contacto: "", mensaje: "" });
    } catch {
      setStatus("error");
    }
  };

  const piezas = [
    { nombre: "Kits de gifting", desc: "Cajas, bolsas y kits curados para lanzamientos, prensa, clientes y equipos internos." },
    { nombre: "Displays y exhibidores POP", desc: "Piezas de comunicación en punto de venta que guían la compra y refuerzan la marca." },
    { nombre: "Material impreso premium", desc: "Tarjetas, catálogos, flyers y piezas impresas con acabados que se sienten diferentes." },
    { nombre: "Piezas para ferias y expos", desc: "Todo lo necesario para tener una presencia sólida en eventos del sector." },
    { nombre: "Activaciones experienciales", desc: "Piezas y estructuras para crear experiencias de marca memorables en eventos." },
    { nombre: "Packaging y unboxing", desc: "Cajas, envoltorios y soportes diseñados para que el momento de apertura comunique." },
  ];

  return (
    <main className="relative min-h-screen text-white">

      <div className="absolute inset-0 -z-10">
        <img src="/hero2.png" alt="background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="border-b border-white/10 px-6 py-5 md:px-10">
        <Link href="/" className="text-sm text-white/50 transition hover:text-white">
          ← Studio by After Hours
        </Link>
      </div>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">Otras soluciones</div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] md:text-7xl">
            Material POP y activaciones
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-7 text-white/70">
            Producimos las piezas que hacen que un lanzamiento, una feria o una activación
            de marca se sienta completa. Desde el kit hasta el display.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#cotizar" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Cotizar activación
            </a>
            <a href="#piezas" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-white">
              Ver piezas
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/50">Enfoque</div>
              <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Cada pieza cuenta una historia</h2>
              <p className="mt-6 text-base leading-7 text-white/70">
                El material POP bien hecho no es decoración. Es comunicación. Un kit de gifting
                que se abre bien, un display que guía la mirada o una pieza de activación que
                se vuelve foto — eso es lo que construye recordación real.
              </p>
              <p className="mt-4 text-base leading-7 text-white/70">
                Trabajamos con marcas que quieren que cada touchpoint físico sea coherente con
                su identidad y esté pensado para impactar.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Gifting estratégico", "Kits que generan impacto en quien los recibe."],
                ["Punto de venta", "Piezas que venden sin que nadie tenga que hablar."],
                ["Eventos y ferias", "Presencia de marca que destaca en el espacio compartido."],
                ["Producción integral", "Diseño, producción y entrega en un solo lugar."],
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

      <section id="piezas" className="border-t border-white/10 bg-white/[0.03] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-12">
            <div className="text-sm uppercase tracking-[0.25em] text-white/50">Piezas</div>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Qué producimos</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {piezas.map((p, i) => (
              <div key={i} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-7">
                <div className="text-xs text-white/30">0{i + 1}</div>
                <h3 className="mt-3 text-xl font-semibold">{p.nombre}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-12">
            <div className="text-sm uppercase tracking-[0.25em] text-white/50">Proceso</div>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Cómo lo hacemos</h2>
          </div>
          <div className="border-t border-white/10">
            {[
              ["Brief de activación", "Entendemos el objetivo, el contexto, la audiencia y la fecha del proyecto."],
              ["Concepto y piezas", "Proponemos qué producir, cómo se ve y cómo encaja todo en la experiencia."],
              ["Producción y control", "Fabricamos cada pieza con los materiales y acabados definidos."],
              ["Entrega coordinada", "Cerramos con entrega a tiempo y seguimiento post-activación si es necesario."],
            ].map(([title, desc], i) => (
              <div key={i} className="grid gap-3 border-b border-white/10 py-6 md:grid-cols-[0.5fr_1.5fr]">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-base text-white/65">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.03] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-10">
            <div className="text-sm uppercase tracking-[0.25em] text-white/50">Ocasiones</div>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Para cuándo sirve</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Lanzamiento de producto", "Ferias y expos", "Gifting corporativo", "Prensa y medios",
              "Eventos de marca", "Pop-up stores", "Aniversarios", "Activaciones BTL", "Onboarding de empleados"].map((s, i) => (
              <span key={i} className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-sm text-white/70">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="cotizar" className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-white/50">Contacto</div>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Cotiza tu activación</h2>
            <p className="mt-4 max-w-xl text-base text-white/70">
              Cuéntanos qué tipo de evento o activación es, cuándo es y qué tipo de piezas
              estás pensando. Con eso ya podemos proponer algo concreto.
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
              placeholder="¿Qué evento es? ¿Cuándo? ¿Qué piezas tienes en mente?" />
            {status === "success" && (
              <p className="text-sm text-green-400">✓ Solicitud enviada. Te contactamos pronto.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">Hubo un error. Intenta de nuevo.</p>
            )}
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