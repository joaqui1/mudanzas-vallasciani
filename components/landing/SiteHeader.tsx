"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, MessageCircle } from "lucide-react"
import { WHATSAPP_URL } from "./constants"

type Props = {
  active?: "inicio" | "opiniones" | "contacto"
}

export function SiteHeader({ active }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="lnd-header">
      <div className="lnd-header__inner">
        <Link href="/" className="lnd-logo">
          <img
            src="/vallasciani-logo.png"
            alt="Transporte y Mudanzas Vallasciani"
            width={1024}
            height={682}
            fetchPriority="high"
          />
        </Link>

        <nav className="lnd-nav" aria-label="Principal">
          <Link href="/" className={active === "inicio" ? "active" : undefined}>
            Inicio
          </Link>
          <Link href="/#cobertura">Servicios</Link>
          <Link href="/#nosotros">Nosotros</Link>
          <Link href="/opiniones" className={active === "opiniones" ? "active" : undefined}>
            Opiniones
          </Link>
          <Link href="/contacto" className={active === "contacto" ? "active" : undefined}>
            Contacto
          </Link>
        </nav>

        <div className="lnd-header__ctas lnd-desktop-only">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" className="lnd-btn lnd-btn--red">
            Pedir presupuesto
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="lnd-btn lnd-btn--outline"
            id="lnd-wa-header"
          >
            <MessageCircle className="lnd-wa-icon" size={18} strokeWidth={2} />
            WhatsApp
          </a>
        </div>

        <details
          className="lnd-mobile-menu lnd-mobile-only"
          open={mobileMenuOpen}
          onToggle={(event) => setMobileMenuOpen(event.currentTarget.open)}
        >
          <summary aria-label="Abrir menú de navegación">
            <Menu size={22} strokeWidth={2} />
            <span>Menú</span>
          </summary>
          <nav className="lnd-mobile-menu__panel" aria-label="Principal móvil">
            <Link href="/" className={active === "inicio" ? "active" : undefined} onClick={closeMobileMenu}>
              Inicio
            </Link>
            <Link href="/#cobertura" onClick={closeMobileMenu}>
              Servicios
            </Link>
            <Link href="/#nosotros" onClick={closeMobileMenu}>
              Nosotros
            </Link>
            <Link href="/opiniones" className={active === "opiniones" ? "active" : undefined} onClick={closeMobileMenu}>
              Opiniones
            </Link>
            <Link href="/contacto" className={active === "contacto" ? "active" : undefined} onClick={closeMobileMenu}>
              Contacto
            </Link>
          </nav>
        </details>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="lnd-mobile-wa-btn lnd-mobile-only"
          aria-label="WhatsApp"
        >
          <MessageCircle size={22} strokeWidth={2} />
        </a>
      </div>
    </header>
  )
}
