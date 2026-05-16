"use client";

import React from "react";

// ─────────────────────────────────────────────
// Adicione aqui os seus clientes.
// Coloque os arquivos de logo em: public/logos/clientes/
// ─────────────────────────────────────────────
const CLIENTS = [
  { name: "Core TI Expert",     src: "/logos/clientes/core-ti-expert.png" },
  { name: "Tecno IT",           src: "/logos/clientes/tecnoit.png" },
  { name: "Grupo Pérola",       src: "/logos/clientes/grupo-perola.png" },
  { name: "Hiper VIP",          src: "/logos/clientes/hipervip.jpg" },
  { name: "Unimed Anápolis",    src: "/logos/clientes/unimed-anapolis.png" },
  { name: "Halexistar",         src: "/logos/clientes/halexistar.svg" },
  { name: "Ministério da Saúde",src: "/logos/clientes/ministerio-saude.png" },
  { name: "IBAMA",              src: "/logos/clientes/ibama.svg" },
  { name: "TCE-GO",             src: "/logos/clientes/tce-go.svg" },
  { name: "Água Nativa",           src: "/logos/clientes/agua-nativa.svg" },
  { name: "Missão Novas Tribos",   src: "/logos/clientes/missao-novas-tribos.png" },
];

// Duplica para loop contínuo sem corte
const ITEMS = [...CLIENTS, ...CLIENTS];

function ClientCard({ client }: { client: { name: string; src: string } }) {
  return (
    <div
      className="mx-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
      style={{
        width: 160,
        background: "#ffffff",
        borderRadius: 14,
        padding: "20px 16px 12px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.35)",
        flexShrink: 0,
      }}
    >
      <img
        src={client.src}
        alt={client.name}
        style={{
          height: 68,
          width: "auto",
          maxWidth: 130,
          objectFit: "contain",
          imageRendering: "-webkit-optimize-contrast",
        }}
        loading="eager"
        decoding="async"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: "#333333",
          textAlign: "center",
          letterSpacing: "0.01em",
        }}
      >
        {client.name}
      </span>
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section id="clientes" className="relative overflow-hidden py-16">
      {/* Cabeçalho da seção */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
          Quem confia na Nexus TI
        </p>
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Empresas que já atendemos
        </h2>
      </div>

      {/* Fade esquerdo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28"
        style={{
          background: "linear-gradient(to right, #0a0a0a 0%, transparent 100%)",
        }}
      />
      {/* Fade direito */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28"
        style={{
          background: "linear-gradient(to left, #0a0a0a 0%, transparent 100%)",
        }}
      />

      {/* Carrossel — esquerda para direita */}
      <div className="overflow-hidden">
        <div
          className="clients-track flex items-center"
          style={{
            animation: "clients-fwd 40s linear infinite",
            width: "max-content",
          }}
        >
          {ITEMS.map((client, i) => (
            <ClientCard key={`client-${client.name}-${i}`} client={client} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes clients-fwd {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        #clientes:hover .clients-track {
          animation-play-state: paused;
        }
        .clients-track img {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
}
