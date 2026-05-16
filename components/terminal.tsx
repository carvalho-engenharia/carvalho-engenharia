"use client"

import { useEffect, useState, useRef } from "react"

const commands = [
  { command: "ping 8.8.8.8", result: "OK 2ms", status: "success" },
  { command: "firewall status", result: "ACTIVE", status: "success" },
  { command: "vpn tunnel", result: "ESTABLISHED", status: "success" },
  { command: "last backup", result: "03:00 SUCCESS", status: "success" },
  { command: "uptime", result: "847 days", status: "info" },
]

export function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [showFinalMessage, setShowFinalMessage] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let currentLine = 0
          const interval = setInterval(() => {
            currentLine++
            setVisibleLines(currentLine)
            if (currentLine >= commands.length) {
              clearInterval(interval)
              setTimeout(() => setShowFinalMessage(true), 500)
            }
          }, 600)
          return () => clearInterval(interval)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section id="seguranca" className="py-24 sm:py-32 bg-[#080808]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#33bbff]/10 text-[#33bbff] text-sm font-mono mb-4">
            DIAGNÓSTICO
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] mb-4 text-balance">
            Sua rede em tempo real
          </h2>
          <p className="text-[#888888]">
            Monitoramento contínuo para garantir 99.9% de uptime
          </p>
        </div>

        {/* Terminal window */}
        <div ref={ref} className="rounded-xl overflow-hidden border border-[#1a1a1a] shadow-2xl">
          {/* Terminal header */}
          <div className="bg-[#151515] px-4 py-3 flex items-center gap-2 border-b border-[#1a1a1a]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            {/* ✅ Nome atualizado para Nexus TI */}
            <span className="ml-4 text-xs text-[#888888] font-mono">nexus-ti@network-monitor</span>
          </div>

          {/* Terminal body */}
          <div className="bg-[#0a0a0a] p-6 font-mono text-sm min-h-[300px]">
            {commands.slice(0, visibleLines).map((cmd, index) => (
              <div key={index} className="mb-3 animate-fade-in">
                <div className="flex items-center gap-2">
                  <span className="text-[#33bbff]">{">"}</span>
                  <span className="text-[#888888]">{cmd.command}</span>
                  <span className="text-[#444444]">—</span>
                  <span
                    className={
                      cmd.status === "success"
                        ? "text-[#33bbff]"
                        : "text-[#00aaff]"
                    }
                  >
                    {cmd.result}
                  </span>
                </div>
              </div>
            ))}

            {showFinalMessage && (
              <div className="mt-6 pt-4 border-t border-[#1a1a1a] animate-fade-in">
                <div className="flex items-center gap-2">
                  <span className="text-[#33bbff]">{">"}</span>
                  <span className="text-[#fafafa] font-semibold">
                    {'"Sua rede está em boas mãos."'}
                  </span>
                </div>
              </div>
            )}

            {/* Blinking cursor */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-[#33bbff]">{">"}</span>
              <span className="w-2 h-5 bg-[#33bbff] animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}