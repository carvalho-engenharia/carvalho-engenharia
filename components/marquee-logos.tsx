"use client";

import React from "react";

const LOGOS = [
  { name: "AWS", src: "/logos/Amazon_Web_Services_Logo.svg" },
  { name: "Dell", src: "/logos/Dell_logo_2016.svg" },
  { name: "Fortinet", src: "/logos/Fortinet_logo.svg.png" },
  { name: "Google Cloud", src: "/logos/Google_Cloud_logo.svg" },
  { name: "Grafana", src: "/logos/Grafana_logo.svg" },
  { name: "Hyper-V", src: "/logos/Hyper-V_Logo.png" },
  { name: "Kali Linux", src: "/logos/Kali-dragon-icon.svg" },
  { name: "Linux", src: "/logos/linux-svgrepo-com.svg" },
  { name: "Proxmox", src: "/logos/Logo_Proxmox.svg.png" },
  { name: "Microsoft", src: "/logos/Microsoft_logo_(2012).svg.png" },
  { name: "SharePoint", src: "/logos/Microsoft_Office_SharePoint_(2025–present).svg" },
  { name: "MikroTik", src: "/logos/MikroTik_logo.svg" },
  { name: "OneDrive", src: "/logos/ms-onedrive-svgrepo-com.svg" },
  { name: "pfSense", src: "/logos/PfSense_logo.png" },
  { name: "SonicWall", src: "/logos/SonicWall_logo.svg" },
  { name: "Ubiquiti", src: "/logos/ubiquiti.svg" },
  { name: "Ubuntu", src: "/logos/ubuntu-2.svg" },
  { name: "Veeam", src: "/logos/Veeam_logo.svg" },
  { name: "VMware", src: "/logos/Vmware-by-broadcom.svg.png" },
  { name: "Windows Server", src: "/logos/Windows_Server_logo.svg.png" },
  { name: "Zabbix", src: "/logos/Zabbix_logo.svg" },
  { name: "Cisco", src: "/logos/cisco.svg" },
  { name: "Check Point", src: "/logos/checkpoint.svg" },
  { name: "Palo Alto Networks", src: "/logos/paloalto.svg" },
];

// Split logos into two rows
const mid = Math.ceil(LOGOS.length / 2);
const ROW1 = LOGOS.slice(0, mid);
const ROW2 = LOGOS.slice(mid);

// Duplicate for seamless loop
const ROW1_ITEMS = [...ROW1, ...ROW1];
const ROW2_ITEMS = [...ROW2, ...ROW2];

function LogoCard({ logo }: { logo: { name: string; src: string } }) {
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
        src={logo.src}
        alt={logo.name}
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
        {logo.name}
      </span>
    </div>
  );
}

export default function MarqueeLogos() {
  return (
    <section className="relative overflow-hidden py-12">
      {/* fade esquerdo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28"
        style={{
          background: "linear-gradient(to right, #0a0a0a 0%, transparent 100%)",
        }}
      />
      {/* fade direito */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28"
        style={{
          background: "linear-gradient(to left, #0a0a0a 0%, transparent 100%)",
        }}
      />

      {/* Linha 1 — da esquerda para a direita */}
      <div className="mb-6 overflow-hidden">
        <div
          className="marquee-track-fwd flex items-center"
          style={{
            animation: "marquee-fwd 60s linear infinite",
            width: "max-content",
          }}
        >
          {ROW1_ITEMS.map((logo, i) => (
            <LogoCard key={`row1-${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      </div>

      {/* Linha 2 — da direita para a esquerda */}
      <div className="overflow-hidden">
        <div
          className="marquee-track-bwd flex items-center"
          style={{
            animation: "marquee-bwd 60s linear infinite",
            width: "max-content",
          }}
        >
          {ROW2_ITEMS.map((logo, i) => (
            <LogoCard key={`row2-${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-fwd {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-bwd {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        section:hover .marquee-track-fwd,
        section:hover .marquee-track-bwd {
          animation-play-state: paused;
        }
        .marquee-track-fwd img,
        .marquee-track-bwd img {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
}
