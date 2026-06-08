import type { Metadata } from "next"
import {
  CalendarCheck,
  CheckCircle,
  ClipboardList,
  MapPin,
  MessageCircle,
  Package,
  Shield,
  Truck,
  type LucideIcon,
} from "lucide-react"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { PageHero } from "@/components/landing/PageHero"
import { SiteFooter } from "@/components/landing/SiteFooter"
import { EMAIL, PHONE_E164, SITE_URL, whatsappUrl } from "@/lib/site"

const pageUrl = `${SITE_URL}/fletes-bahia-blanca`
const pageWhatsappUrl = whatsappUrl(
  "Hola Vallasciani, quiero pedir un presupuesto de flete en Bahía Blanca."
)

export const metadata: Metadata = {
  title: "Fletes en Bahía Blanca",
  description:
    "Fletes en Bahía Blanca para cargas chicas y medianas. Traslados puntuales, mudanzas parciales y logística local con más de 35 años de experiencia.",
  alternates: {
    canonical: "/fletes-bahia-blanca",
  },
  openGraph: {
    title: "Fletes en Bahía Blanca",
    description:
      "Fletes y traslados locales en Bahía Blanca con Mudanzas Vallasciani. Presupuesto por WhatsApp.",
    url: pageUrl,
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/vallasciani-truck-hero.png",
        width: 1200,
        height: 630,
        alt: "Camión de fletes Vallasciani en Bahía Blanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fletes en Bahía Blanca",
    description:
      "Fletes en Bahía Blanca para cargas chicas, medianas y traslados puntuales con atención directa.",
  },
}

const serviceHighlights: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Cargas chicas y medianas",
    text: "Trasladamos muebles sueltos, electrodomésticos, cajas y mercadería según volumen y accesos del lugar.",
    icon: Package,
  },
  {
    title: "Traslados puntuales",
    text: "Ideal cuando no necesitás una mudanza completa: un envío, una entrega o un traslado entre dos direcciones.",
    icon: Truck,
  },
  {
    title: "Cuidado y puntualidad",
    text: "Protegemos la carga y coordinamos horarios para que el flete llegue en el momento acordado.",
    icon: Shield,
  },
]

const routeCoverage = [
  "Bahía Blanca",
  "Punta Alta",
  "Ingeniero White",
  "General Cerri",
  "Zona sur bonaerense",
]

const planning: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Qué trasladar",
    text: "Lista de objetos, medidas aproximadas y si hay piezas frágiles o pesadas.",
    icon: ClipboardList,
  },
  {
    title: "Origen y destino",
    text: "Dirección o zona, pisos, ascensor, escalera y espacio para estacionar.",
    icon: MapPin,
  },
  {
    title: "Fecha y horario",
    text: "Día y franja horaria posible para carga y descarga.",
    icon: CalendarCheck,
  },
  {
    title: "Protección",
    text: "Si hace falta embalar o fijar la carga para el traslado.",
    icon: Shield,
  },
]

const quoteChecklist = [
  "Qué objetos o cajas hay que trasladar.",
  "Origen y destino en Bahía Blanca o zona.",
  "Fotos si hay muebles grandes o delicados.",
  "Pisos, ascensor y espacio para el camión.",
  "Fecha y horario preferidos.",
]

const faqs = [
  {
    question: "¿Qué diferencia hay entre un flete y una mudanza?",
    answer:
      "Un flete suele ser un traslado puntual de menor volumen: muebles sueltos, electrodomésticos o cajas. Una mudanza completa implica vaciar un hogar u oficina con más logística, embalaje y personal.",
  },
  {
    question: "¿Hacen fletes solo dentro de Bahía Blanca?",
    answer:
      "Trabajamos fletes en Bahía Blanca y zona, incluyendo Punta Alta, Ingeniero White y localidades cercanas. Consultá por WhatsApp tu origen y destino.",
  },
  {
    question: "¿Puedo pedir un flete para pocas cosas?",
    answer:
      "Sí. Cotizamos traslados chicos y medianos. Cuanto más clara sea la lista de objetos y los accesos, más rápido podemos responder.",
  },
  {
    question: "¿Cuánto tarda el presupuesto?",
    answer:
      "Con origen, destino, lista de objetos y fecha posible, solemos responder el mismo día por WhatsApp.",
  },
]

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#servicio`,
    name: "Fletes en Bahía Blanca",
    serviceType: "Flete y traslado local",
    url: pageUrl,
    provider: {
      "@id": `${SITE_URL}/#empresa`,
      "@type": "MovingCompany",
      name: "Mudanzas Vallasciani",
      telephone: PHONE_E164,
      email: EMAIL,
    },
    areaServed: [
      { "@type": "City", name: "Bahía Blanca" },
      { "@type": "City", name: "Punta Alta" },
      { "@type": "AdministrativeArea", name: "Provincia de Buenos Aires" },
    ],
    description:
      "Servicio de fletes en Bahía Blanca para cargas chicas, medianas y traslados puntuales.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Fletes en Bahía Blanca", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
]

export default function FletesBahiaBlancaPage() {
  return (
    <div className="lnd-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <PageHero
        eyebrow="Traslados locales"
        title="Fletes en Bahía Blanca"
        subtitle="Cargas chicas, medianas y traslados puntuales"
        lead="Coordinamos fletes en Bahía Blanca y zona con la misma atención y cuidado que nuestras mudanzas completas."
        heroImageAlt="Camión de fletes Vallasciani en Bahía Blanca"
        whatsappUrl={pageWhatsappUrl}
        showPhone
      />

      <section className="lnd-section">
        <div className="lnd-wrap">
          <div className="lnd-section__head lnd-section__head--center">
            <p className="lnd-section__label">Fletes Vallasciani</p>
            <h2>Cuando necesitás trasladar sin hacer una mudanza completa</h2>
            <p className="lnd-section__lead">
              Un flete bien coordinado ahorra tiempo y evita improvisaciones. Relevamos volumen, accesos y horarios
              para que la carga llegue segura a destino.
            </p>
          </div>

          <div className="lnd-info-grid">
            {serviceHighlights.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="lnd-card lnd-card--static">
                  <div className="lnd-card__icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="lnd-section lnd-section--soft">
        <div className="lnd-wrap lnd-split">
          <div>
            <p className="lnd-section__label">Zona de cobertura</p>
            <h2>Dónde hacemos fletes</h2>
            <ul className="lnd-checklist">
              {routeCoverage.map((item) => (
                <li key={item}>
                  <MapPin size={18} strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="lnd-section__lead" style={{ marginTop: "1.25rem" }}>
              Consultá origen, destino y volumen por WhatsApp para confirmar disponibilidad.
            </p>
          </div>

          <div>
            <p className="lnd-section__label">Coordinación</p>
            <h2>Qué necesitamos para cotizar tu flete</h2>
            <p className="lnd-section__lead">
              Un flete puede variar según cantidad de bultos, distancia y dificultad de acceso. Con una base clara
              cotizamos más rápido.
            </p>
            <div className="lnd-cards lnd-cards--4" style={{ marginTop: "1.25rem" }}>
              {planning.map((item) => {
                const Icon = item.icon
                return (
                  <article key={item.title} className="lnd-card lnd-card--static">
                    <div className="lnd-card__icon">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="lnd-section">
        <div className="lnd-wrap">
          <article className="lnd-card lnd-card--static lnd-quote-box">
            <div className="lnd-split">
              <div>
                <p className="lnd-section__label">Presupuesto</p>
                <h2>Información útil para pedir presupuesto</h2>
                <p className="lnd-section__lead">
                  Para cotizar un flete en Bahía Blanca no hace falta tener todo perfecto, pero sí conviene enviar una
                  base ordenada por WhatsApp.
                </p>
              </div>
              <ul className="lnd-checklist">
                {quoteChecklist.map((item) => (
                  <li key={item}>
                    <CheckCircle size={18} strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="lnd-section lnd-section--soft">
        <div className="lnd-wrap">
          <div className="lnd-section__head">
            <h2>Preguntas frecuentes</h2>
          </div>
          <div className="lnd-faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question} className="lnd-faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lnd-cta-band">
        <div className="lnd-wrap lnd-cta-band__inner">
          <div>
            <h2>Consultá tu flete en Bahía Blanca</h2>
            <p>Enviá origen, destino y qué necesitás trasladar para cotizar hoy.</p>
          </div>
          <a
            href={pageWhatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="lnd-btn lnd-btn--lg"
          >
            <MessageCircle className="lnd-wa-icon" size={20} strokeWidth={2} />
            Pedir presupuesto
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
