import type { Metadata } from "next"
import Link from "next/link"
import {
  CalendarCheck,
  CheckCircle,
  ClipboardList,
  MapPin,
  MessageCircle,
  PackageCheck,
  Route,
  Shield,
  Truck,
  type LucideIcon,
} from "lucide-react"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { PageHero } from "@/components/landing/PageHero"
import { SiteFooter } from "@/components/landing/SiteFooter"
import { EMAIL, PHONE_E164, SITE_URL, whatsappUrl } from "@/lib/site"

const pageUrl = `${SITE_URL}/mudanzas-bahia-blanca-buenos-aires`
const pageWhatsappUrl = whatsappUrl(
  "Hola Vallasciani, quiero pedir un presupuesto para una mudanza Bahía Blanca Buenos Aires."
)

export const metadata: Metadata = {
  title: "Mudanzas Bahía Blanca a Buenos Aires",
  description:
    "Mudanzas Bahía Blanca a Buenos Aires y Buenos Aires a Bahía Blanca. Traslado puerta a puerta, embalaje, coordinación y presupuesto por WhatsApp.",
  alternates: {
    canonical: "/mudanzas-bahia-blanca-buenos-aires",
  },
  openGraph: {
    title: "Mudanzas Bahía Blanca a Buenos Aires",
    description:
      "Traslados puerta a puerta entre Bahía Blanca y Buenos Aires con Mudanzas Vallasciani.",
    url: pageUrl,
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/vallasciani-truck-hero.png",
        width: 1200,
        height: 630,
        alt: "Camión de Mudanzas Vallasciani para mudanzas Bahía Blanca Buenos Aires",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudanzas Bahía Blanca a Buenos Aires",
    description:
      "Mudanzas puerta a puerta entre Bahía Blanca y Buenos Aires con embalaje, logística y atención directa.",
  },
}

const routeHighlights: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Ida y vuelta",
    text: "Coordinamos mudanzas en ambos sentidos: desde Bahía Blanca hacia CABA, Gran Buenos Aires y la provincia, y desde Buenos Aires de regreso a Bahía Blanca. Ideal para familias, estudiantes, oficinas y cambios laborales.",
    icon: Route,
  },
  {
    title: "Puerta a puerta",
    text: "Organizamos carga, traslado y descarga para reducir tiempos, movimientos innecesarios y riesgos en el camino.",
    icon: Truck,
  },
  {
    title: "Embalaje y protección",
    text: "Cuidamos muebles, objetos frágiles y electrodomésticos antes y durante el viaje, según lo acordado en el presupuesto.",
    icon: PackageCheck,
  },
]

const routeCoverage = ["Bahía Blanca", "CABA", "Gran Buenos Aires", "Provincia de Buenos Aires"]

const planning: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Relevamiento",
    text: "Origen, destino, volumen, pisos, ascensor, necesidad de embalaje y fechas posibles.",
    icon: ClipboardList,
  },
  {
    title: "Preparación",
    text: "Protección de muebles, objetos delicados, electrodomésticos y cajas antes de subir al camión.",
    icon: PackageCheck,
  },
  {
    title: "Coordinación",
    text: "Día y horario de carga, recorrido, llegada y descarga según lo acordado en el presupuesto.",
    icon: CalendarCheck,
  },
  {
    title: "Cuidado",
    text: "Equipo con experiencia en mudanzas de larga distancia y traslado de pertenencias familiares.",
    icon: Shield,
  },
]

const quoteChecklist = [
  "Dirección o zona de origen y destino.",
  "Lista aproximada de muebles, cajas y objetos grandes.",
  "Fotos o video breve si hay muebles delicados.",
  "Pisos, ascensor, escalera y espacio para estacionar.",
  "Fechas posibles para carga y descarga.",
]

const faqs = [
  {
    question: "¿Hacen mudanzas entre Bahía Blanca y Buenos Aires?",
    answer:
      "Sí. Realizamos traslados puerta a puerta en ambos sentidos, con carga, traslado y descarga. Cubrimos Bahía Blanca, CABA, Gran Buenos Aires y otras localidades de la provincia según disponibilidad y volumen.",
  },
  {
    question: "¿Sirve para pocas cosas o solo mudanzas completas?",
    answer:
      "Cotizamos mudanzas completas y traslados de menor volumen. Para una estimación precisa, enviá por WhatsApp origen, destino, lista de objetos y fechas posibles.",
  },
  {
    question: "¿Cómo preparan una mudanza de larga distancia?",
    answer:
      "Relevamos volumen, accesos y objetos delicados; definimos embalaje, personal, vehículo y horarios de carga y descarga. Así el traslado queda ordenado de punta a punta.",
  },
  {
    question: "¿Cuánto tarda el presupuesto?",
    answer:
      "Con origen, destino, volumen aproximado y fechas posibles, solemos responder el mismo día por WhatsApp. Si hay muebles delicados, sumar fotos o un video breve ayuda a cotizar más rápido.",
  },
]

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#servicio`,
    name: "Mudanzas Bahía Blanca a Buenos Aires",
    serviceType: "Mudanza de larga distancia puerta a puerta",
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
      { "@type": "City", name: "Buenos Aires" },
      { "@type": "AdministrativeArea", name: "Provincia de Buenos Aires" },
    ],
    description:
      "Servicio de mudanzas puerta a puerta entre Bahía Blanca y Buenos Aires para hogares, oficinas y traslados de larga distancia.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Mudanzas Bahía Blanca a Buenos Aires", item: pageUrl },
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

export default function MudanzasBahiaBlancaBuenosAiresPage() {
  return (
    <div className="lnd-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <PageHero
        eyebrow="Traslados de larga distancia"
        title="Mudanzas Bahia Blanca - Buenos Aires"
        subtitle="Puerta a puerta en ambos sentidos"
        lead="Mudanzas puerta a puerta entre Bahía Blanca y Buenos Aires, con embalaje, carga, traslado y descarga, con la seguridad de siempre."
        heroImageAlt="Camión de Mudanzas Vallasciani para mudanzas Bahía Blanca Buenos Aires"
        whatsappUrl={pageWhatsappUrl}
        showPhone
      />

      <section className="lnd-section">
        <div className="lnd-wrap">
          <div className="lnd-section__head lnd-section__head--center">
            <p className="lnd-section__label">Corredor Bahía Blanca — Buenos Aires</p>
            <h2>Entre Bahía Blanca y Buenos Aires, la planificación marca la diferencia</h2>
            <p className="lnd-section__lead">
              Para un traslado entre Bahía Blanca y Buenos Aires, la diferencia está en preparar bien la carga,
              acordar horarios posibles, cuidar accesos y ordenar la descarga.
            </p>
          </div>

          <div className="lnd-info-grid">
            {routeHighlights.map((item) => {
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
            <p className="lnd-section__label">Ruta cubierta</p>
            <h2>Zonas que conectamos</h2>
            <ul className="lnd-checklist">
              {routeCoverage.map((item) => (
                <li key={item}>
                  <MapPin size={18} strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="lnd-section__lead" style={{ marginTop: "1.25rem" }}>
              Consultá disponibilidad y volumen por WhatsApp antes de coordinar fechas.
            </p>
          </div>

          <div>
            <p className="lnd-section__label">Preparación</p>
            <h2>Qué miramos antes de cotizar la mudanza</h2>
            <p className="lnd-section__lead">
              La misma distancia puede tener presupuestos distintos según volumen, tipo de objetos, pisos, ascensores
              y nivel de embalaje.
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
                  Cuanto más claro llegue el pedido, más rápido se puede cotizar una mudanza Bahía Blanca — Buenos
                  Aires. No hace falta tener todo perfecto, pero sí conviene enviar una base ordenada.
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
            <h2>Consultá disponibilidad para tu traslado</h2>
            <p>Enviá origen, destino y volumen aproximado para cotizar tu mudanza.</p>
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
