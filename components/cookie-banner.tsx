"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("nexusti_cookie_consent")
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem("nexusti_cookie_consent", "accepted")
    setVisible(false)
  }

  function decline() {
    localStorage.setItem("nexusti_cookie_consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-6 pointer-events-none flex justify-center"
    >
      <div className="pointer-events-auto max-w-4xl w-full bg-[#111111] border border-[#2a2a2a] rounded-xl shadow-2xl p-3 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
        <div className="flex-1 text-xs sm:text-sm text-[#aaaaaa] leading-snug sm:leading-relaxed">
          <p>
            <span className="text-[#fafafa] font-semibold">🍪 Cookies e privacidade</span>
          </p>
          <p className="mt-1 hidden sm:block">
            Utilizamos cookies essenciais e analíticos para melhorar sua experiência. Ao clicar em{" "}
            <strong className="text-[#dddddd]">Aceitar</strong>, você consente com o uso de todos os
            cookies conforme nossa{" "}
            <Link
              href="/politica-de-privacidade"
              className="text-[#33bbff] hover:underline underline-offset-2"
            >
              Política de Privacidade
            </Link>
            .
          </p>
          <p className="mt-1 sm:hidden">
            Usamos cookies para melhorar sua experiência.{" "}
            <Link
              href="/politica-de-privacidade"
              className="text-[#33bbff] hover:underline underline-offset-2"
            >
              Saiba mais
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-2 sm:gap-3 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={decline}
            className="flex-1 sm:flex-none px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg border border-[#2a2a2a] text-[#888888] hover:text-[#cccccc] hover:border-[#444444] transition-all"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="flex-1 sm:flex-none px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg bg-[#33bbff] text-[#080808] font-semibold hover:bg-[#33bbff]/90 transition-all"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}
