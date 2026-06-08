"use client"

import type { ReactNode } from "react"
import { ClipboardList, MessageCircle, Phone, Shield, Users } from "lucide-react"
import { PHONE_URL, WHATSAPP_URL } from "./constants"

const DEFAULT_TRUST = [
  { icon: Shield, label: "+35 años\nde experiencia" },
  { icon: Shield, label: "Servicio seguro\ny puntual" },
  { icon: Users, label: "Empresa\nfamiliar" },
] as const

type Props = {
  eyebrow: string
  title: string
  subtitle?: ReactNode
  lead: string
  whatsappUrl?: string
  showPhone?: boolean
  showTrust?: boolean
  heroImage?: string
  heroImageMobile?: string
  heroImageAlt?: string
  heroClassName?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  lead,
  whatsappUrl = WHATSAPP_URL,
  showPhone = false,
  showTrust = true,
  heroImage = "/vallasciani-truck-hero.png",
  heroImageMobile,
  heroImageAlt = "Camión de Mudanzas Vallasciani en Bahía Blanca",
  heroClassName,
  onPrimaryClick,
  onSecondaryClick,
}: Props) {
  return (
    <section className={heroClassName ? `lnd-hero ${heroClassName}` : "lnd-hero"}>
      <div className="lnd-hero__photo">
        {heroImageMobile ? (
          <picture>
            <source media="(max-width: 1023px)" srcSet={heroImageMobile} />
            <img src={heroImage} alt={heroImageAlt} />
          </picture>
        ) : (
          <img src={heroImage} alt={heroImageAlt} />
        )}
        <div className="lnd-hero__fade" />
      </div>

      <div className="lnd-wrap lnd-hero__body">
        <div className="lnd-hero__copy">
          <p className="lnd-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {subtitle ? <h2>{subtitle}</h2> : null}
          <p className="lnd-lead">{lead}</p>

          <div className="lnd-hero__actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="lnd-btn lnd-btn--red lnd-btn--lg"
              onClick={onPrimaryClick}
            >
              <ClipboardList size={19} strokeWidth={2} />
              Pedir presupuesto
            </a>
            {showPhone ? (
              <a href={PHONE_URL} className="lnd-btn lnd-btn--outline lnd-btn--lg" onClick={onSecondaryClick}>
                <Phone size={18} strokeWidth={2} />
                Llamar ahora
              </a>
            ) : (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="lnd-btn lnd-btn--outline lnd-btn--lg"
                onClick={onSecondaryClick}
              >
                <MessageCircle className="lnd-wa-icon" size={20} strokeWidth={2} />
                Hablar por WhatsApp
              </a>
            )}
          </div>

          {showTrust ? (
            <div className="lnd-hero__trust">
              {DEFAULT_TRUST.map(({ icon: Icon, label }) => (
                <div key={label} className="lnd-trust-item">
                  <Icon size={18} strokeWidth={1.75} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
