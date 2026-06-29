"use client"

import { SiteHeader } from "./SiteHeader"
import { PageHero } from "./PageHero"
import { WHATSAPP_URL } from "./constants"

export { WHATSAPP_URL }

type Props = { onWhatsAppClick?: (label: string) => void }

export function LandingTop({ onWhatsAppClick }: Props) {
  const t = (label: string) => onWhatsAppClick?.(label)

  return (
    <>
      <SiteHeader active="inicio" />

      <PageHero
        heroImage="/vallasciani-truck-hero-home.png"
        heroImageMobile="/vallasciani-truck-hero-home-mobile.png"
        heroImageAlt="Camión de mudanzas Vallasciani en Bahía Blanca"
        heroClassName="lnd-hero--home"
        eyebrow="Bahía Blanca — Buenos Aires"
        title="Mudanzas en Bahía Blanca - Vallasciani"
        subtitle="Traslados seguros, puntuales y con atención personalizada"
        lead="Acompañamos hogares y empresas con servicio puerta a puerta y la seguridad de siempre."
        onPrimaryClick={() => t("Pedir presupuesto hero")}
        onSecondaryClick={() => t("WhatsApp hero")}
      />
    </>
  )
}
