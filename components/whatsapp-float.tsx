'use client'

import { useState } from "react"

const WA_URL = "https://wa.me/5562998062169?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20da%20Nexus%20Ti%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os"

export function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      style={{ textDecoration: "none" }}
    >
      {/* Tooltip label */}
      <span
        className={`
          bg-[#111111] text-[#fafafa] text-sm font-semibold px-4 py-2 rounded-xl
          border border-[#1a1a1a] shadow-lg whitespace-nowrap
          transition-all duration-300 origin-right
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}
        `}
      >
        Falar no WhatsApp
      </span>

      {/* Button circle */}
      <div
        className="
          relative w-14 h-14 rounded-full flex items-center justify-center
          bg-[#25D366] shadow-[0_4px_24px_rgba(37,211,102,0.45)]
          transition-transform duration-200 group-hover:scale-110
        "
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

        {/* WhatsApp SVG icon inline (no external file dependency) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="white"
          className="w-7 h-7 relative z-10"
          aria-hidden="true"
        >
          <path d="M24 4C12.97 4 4 12.97 4 24c0 3.67.99 7.1 2.71 10.06L4 44l10.23-2.68A19.93 19.93 0 0 0 24 44c11.03 0 20-8.97 20-20S35.03 4 24 4zm0 36a15.94 15.94 0 0 1-8.15-2.23l-.58-.35-6.07 1.59 1.62-5.9-.38-.6A15.94 15.94 0 0 1 8 24c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16zm8.77-11.84c-.48-.24-2.84-1.4-3.28-1.56-.44-.16-.76-.24-1.08.24-.32.48-1.24 1.56-1.52 1.88-.28.32-.56.36-1.04.12-.48-.24-2.04-.75-3.88-2.39-1.43-1.28-2.4-2.86-2.68-3.34-.28-.48-.03-.74.21-.98.22-.21.48-.56.72-.84.24-.28.32-.48.48-.8.16-.32.08-.6-.04-.84-.12-.24-1.08-2.6-1.48-3.56-.39-.93-.78-.8-1.08-.82-.28-.01-.6-.01-.92-.01-.32 0-.84.12-1.28.6-.44.48-1.68 1.64-1.68 4s1.72 4.64 1.96 4.96c.24.32 3.38 5.16 8.2 7.24 1.14.49 2.03.79 2.72 1.01 1.14.36 2.18.31 3 .19.92-.14 2.84-1.16 3.24-2.28.4-1.12.4-2.08.28-2.28-.12-.2-.44-.32-.92-.56z" />
        </svg>
      </div>
    </a>
  )
}
