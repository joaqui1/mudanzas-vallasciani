import type { Metadata } from "next"
import {
  CalendarCheck,
  CheckCircle,
  ClipboardList,
  Globe,
  MapPin,
  MessageCircle,
  PackageCheck,
  Route,
  Shield,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { PageHero } from "@/components/landing/PageHero"
import { SiteFooter } from "@/components/landing/SiteFooter"
import { EMAIL, PHONE_E164, SITE_URL, whatsappUrl } from "@/lib/site"

const pageUrl = `${SITE_URL}/mudanzas-larga-distancia-bahia-blanca`
const pageWhatsappUrl = whatsappUrl(
  "Hola Vallasciani, quiero pedir un presupuesto para una mudanza de larga distancia desde Bahía Blanca."
)

export const metadata: Metadata = {
  title: "Mudanzas de larga distancia desde Bahía Blanca",
  description:
    "Mudanzas de larga distancia desde Bahía Blanca a todo el país. Traslado puerta a puerta, embalaje, coordinación y presupuesto por WhatsApp.",
  alternates: {
    canonical: "/mudanzas-larga-distancia-bahia-blanca",
  },
  openGraph: {
    title: "Mudanzas de larga distancia desde Bahía Blanca",
    description:
      "Traslados puerta a puerta desde Bahía Blanca a destinos nacionales con Mudanzas Vallasciani.",
    url: pageUrl,
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/vallasciani-truck-larga-distancia.png",
        width: 1200,
        height: 630,
        alt: "Camión de Mudanzas Vallasciani en ruta nacional para mudanzas de larga distancia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudanzas de larga distancia desde Bahía Blanca",
    description:
      "Mudanzas puerta a puerta de larga distancia desde Bahía Blanca con embalaje, logística y atención directa.",
  },
}

const experiencePoints: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Route,
    title: "Rutas por todo el país",
    text: "Bahía Blanca, Buenos Aires, Patagonia y otras provincias con logística coordinada.",
  },
  {
    icon: Users,
    title: "Empresa familiar",
    text: "Atención directa y trato personalizado en cada mudanza.",
  },
  {
    icon: Shield,
    title: "Traslados cuidados",
    text: "Hogares y oficinas con el mismo nivel de protección en cada viaje.",
  },
]

const serviceHighlights: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Cobertura nacional",
    text: "Coordinamos mudanzas desde Bahía Blanca hacia distintas provincias y ciudades del país, según destino, volumen y disponibilidad.",
    icon: Globe,
  },
  {
    title: "Puerta a puerta",
    text: "Organizamos carga, traslado y descarga para que el viaje largo quede resuelto de punta a punta, sin improvisaciones.",
    icon: Truck,
  },
  {
    title: "Embalaje y protección",
    text: "Cuidamos muebles, objetos frágiles y electrodomésticos antes y durante el viaje, según lo acordado en el presupuesto.",
    icon: PackageCheck,
  },
]

const routeCoverage = [
  "Bahía Blanca y zona",
  "Buenos Aires y Gran Buenos Aires",
  "Patagonia y ciudades del sur",
  "Centro y resto del país",
]

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
  "Ciudad o provincia de origen y destino.",
  "Lista aproximada de muebles, cajas y objetos grandes.",
  "Fotos o video breve si hay muebles delicados.",
  "Pisos, ascensor, escalera y espacio para estacionar.",
  "Fechas posibles para carga y descarga.",
]

const faqs = [
  {
    question: "¿Hacen mudanzas de larga distancia desde Bahía Blanca?",
    answer:
      "Sí. Coordinamos traslados puerta a puerta desde Bahía Blanca hacia distintos destinos nacionales, con carga, traslado y descarga según origen, volumen y disponibilidad.",
  },
  {
    question: "¿A qué destinos pueden trasladar?",
    answer:
      "Trabajamos rutas nacionales frecuentes como Buenos Aires, Gran Buenos Aires, Patagonia y otras provincias. Consultá por WhatsApp tu destino para confirmar cobertura y fechas.",
  },
  {
    question: "¿Sirve para pocas cosas o solo mudanzas completas?",
    answer:
      "Cotizamos mudanzas completas y traslados de menor volumen. Para una estimación precisa, enviá origen, destino, lista de objetos y fechas posibles.",
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
    name: "Mudanzas de larga distancia desde Bahía Blanca",
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
      { "@type": "Country", name: "Argentina" },
    ],
    description:
      "Servicio de mudanzas puerta a puerta de larga distancia desde Bahía Blanca para hogares, oficinas y traslados nacionales.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Mudanzas de larga distancia", item: pageUrl },
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

export default function MudanzasLargaDistanciaBahiaBlancaPage() {
  return (
    <div className="lnd-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <PageHero
        heroImage="/vallasciani-truck-larga-distancia.png"
        heroImageMobile="/vallasciani-truck-larga-distancia-mobile-focus.png"
        heroClassName="lnd-hero--larga-distancia"
        eyebrow="Traslados nacionales"
        title="Mudanzas de larga distancia desde Bahía Blanca"
        subtitle="Puerta a puerta, con planificación y cuidado"
        lead="Coordinamos traslados de larga distancia desde Bahía Blanca con embalaje, carga, traslado y descarga organizados de punta a punta."
        heroImageAlt="Camión de Mudanzas Vallasciani en ruta nacional para mudanzas de larga distancia"
        whatsappUrl={pageWhatsappUrl}
        showPhone
      />

      <section className="lnd-experience">
        <div className="lnd-wrap">
          <div className="lnd-section__head lnd-section__head--center">
            <p className="lnd-section__label">Trayectoria Vallasciani</p>
            <h2>Más de 35 años recorriendo todo el país</h2>
            <p className="lnd-section__lead">
              Desde Bahía Blanca llevamos hogares y empresas a distintos puntos de Argentina. Conocemos las rutas,
              los tiempos y lo que hace falta para que una mudanza larga llegue bien planificada a destino.
            </p>
          </div>

          <div className="lnd-experience__highlights">
            {experiencePoints.map(({ icon: Icon, title, text }) => (
              <div key={title} className="lnd-experience__item">
                <Icon size={20} strokeWidth={1.75} />
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lnd-section">
        <div className="lnd-wrap">
          <div className="lnd-section__head lnd-section__head--center">
            <p className="lnd-section__label">Desde Bahía Blanca al resto del país</p>
            <h2>Una mudanza larga necesita planificación, no sólo un camión</h2>
            <p className="lnd-section__lead">
              Cuanto más lejos viajan tus pertenencias, más importa preparar bien la carga, acordar horarios,
              cuidar accesos y ordenar la descarga en destino.
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
            <p className="lnd-section__label">Destinos frecuentes</p>
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
                  Cuanto más claro llegue el pedido, más rápido se puede cotizar una mudanza de larga distancia.
                  No hace falta tener todo perfecto, pero sí conviene enviar una base ordenada.
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
