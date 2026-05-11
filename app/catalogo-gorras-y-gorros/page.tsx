"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const categories = [
  "Todos",
  "Gorras clásicas",
  "Trucker",
  "Visores",
  "Gorros",
  "Premium",
];

const products = [
  {
    name: "Gorra malla frente blanco",
    ref: "G-001",
    category: "Trucker",
    tags: ["Malla", "Estampado", "Eventos", "Volumen"],
    image: "/catalogo-gorras/g001.png",
  },
  {
    name: "Gorra malla unicolor",
    ref: "G-002",
    category: "Trucker",
    tags: ["Malla", "Estampado", "Eventos", "Volumen"],
    image: "/catalogo-gorras/g002.png",
  },
  {
    name: "Acrilica unicolor",
    ref: "G-003",
    category: "Gorras clásicas",
    tags: ["Bordado", "Estampado", "Volumen"],
    image: "/catalogo-gorras/g003.png",
  },
  {
    name: "Acrilica tipo Sandwich",
    ref: "G-004",
    category: "Premium",
    tags: ["Bordado", "Premium", "Eventos"],
    image: "/catalogo-gorras/g004.png",
  },
  {
    name: "Gorra de Drill",
    ref: "G-005",
    category: "Gorras clásicas",
    tags: ["Bordado", "Algodon", "Clasica", "Eventos"],
    image: "/catalogo-gorras/g005.png",
  },
  {
    name: "Gorra Drill prelavada",
    ref: "G-006",
    category: "Premium",
    tags: ["Lavado", "Bordado", "Algodon", "Retail"],
    image: "/catalogo-gorras/g006.png",
  },
  {
    name: "Algodon Cepillado",
    ref: "G-007",
    category: "Premium",
    tags: ["Algodon", "Bordado", "Retail"],
    image: "/catalogo-gorras/g007.png",
  },
  {
    name: "Gorra impermable nacional",
    ref: "G-008",
    category: "Gorras clásicas",
    tags: ["Lavado", "impermeable", "Bordado"],
    image: "/catalogo-gorras/g008.png",
  },
  {
    name: "Gorra impermeable importada",
    ref: "G-009",
    category: "Gorras clásicas",
    tags: ["importada", "Bordado", "impermeable"],
    image: "/catalogo-gorras/g009.png",
  },
  {
    name: "Gorra Flex hebilla",
    ref: "G-010",
    category: "Premium",
    tags: ["premium", "Bordado", "Retail"],
    image: "/catalogo-gorras/g010.png",
  },
  {
    name: "Gorra Flex Malla",
    ref: "G-011",
    category: "Trucker",
    tags: ["premium", "Bordado", "malla"],
    image: "/catalogo-gorras/g011.png",
  },
];

export default function CatalogoGorrasYGorrosPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "Todos" || product.category === activeCategory;

      const searchText = `${product.name} ${product.ref} ${product.category} ${product.tags.join(
        " "
      )}`.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/catalogo-gorras/hero.png"
            alt="Catálogo gorras y gorros"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Link
            href="/gorras"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition hover:border-white hover:text-white"
          >
            ← Volver a gorras
          </Link>

          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Catálogo
          </p>

          <h1 className="mt-3 max-w-4xl text-5xl font-semibold leading-[0.95] md:text-7xl">
            Gorras y gorros
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Explora referencias base para gorras, visores y gorros. Puedes buscar
            por nombre, referencia, tipo o uso.
          </p>

          <div className="mt-10 max-w-2xl">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nombre, referencia o tipo..."
              className="w-full rounded-full border border-white/15 bg-white/10 px-6 py-4 text-base text-white outline-none backdrop-blur-md placeholder:text-white/40 focus:border-white/40"
            />
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="border-b border-white/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-sm transition ${
                  isActive
                    ? "border-white bg-white text-black"
                    : "border-white/15 bg-white/[0.03] text-white/70 hover:border-white hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* CATALOGO */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                Referencias
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                {filteredProducts.length} opciones disponibles
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/55">
              Usa estas referencias como punto de partida. Colores, técnicas y
              acabados pueden variar según disponibilidad.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <article
                key={product.ref}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
              >
                <div className="relative h-[320px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
                    {product.ref}
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/#contacto"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
                  >
                    Cotizar esta referencia
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-center">
              <h3 className="text-2xl font-semibold">
                No encontramos referencias
              </h3>
              <p className="mt-3 text-white/60">
                Prueba con otro nombre, categoría o palabra clave.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}