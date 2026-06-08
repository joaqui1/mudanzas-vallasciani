import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { WHATSAPP_URL } from "./constants"

type Props = {
  active?: "inicio"
}

export function SiteHeader({ active }: Props) {
  return (
    <header className="lnd-header">
      <div className="lnd-header__inner">
        <Link href="/" className="lnd-logo">
          <img
            src="/vallasciani-logo.png"
            alt="Transporte y Mudanzas Vallasciani"
            width={1024}
            height={306}
            fetchPriority="high"
          />
        </Link>

        <nav className="lnd-nav" aria-label="Principal">
          <Link href="/" className={active === "inicio" ? "active" : undefined}>
            Inicio
          </Link>
          <Link href="/#cobertura">Servicios</Link>
          <Link href="/#cobertura">Cobertura</Link>
          <Link href="/#nosotros">Nosotros</Link>
          <Link href="/#contact-section">Contacto</Link>
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
