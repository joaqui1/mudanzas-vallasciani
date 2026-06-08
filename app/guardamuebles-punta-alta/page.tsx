import type { Metadata } from "next"
import {
  CalendarCheck,
  CheckCircle,
  ClipboardList,
  Lock,
  MapPin,
  MessageCircle,
  Package,
  Shield,
  Warehouse,
  type LucideIcon,
} from "lucide-react"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { PageHero } from "@/components/landing/PageHero"
import { SiteFooter } from "@/components/landing/SiteFooter"
import { EMAIL, PHONE_E164, SITE_URL, whatsappUrl } from "@/lib/site"

const pageUrl = `${SITE_URL}/guardamuebles-punta-alta`
const pageWhatsappUrl = whatsappUrl(
  "Hola Vallasciani, quiero consultar por guardamuebles en Punta Alta."
)

export const metadata: Metadata = {
  title: "Guardamuebles en Punta Alta",
  description:
    "Guardamuebles en Punta Alta con espacios seguros y monitoreados. Ideal para mudanzas, reformas o almacenaje temporal desde Bahía Blanca y zona.",
  alternates: {
    canonical: "/guardamuebles-punta-alta",
  },
  openGraph: {
    title: "Guardamuebles en Punta Alta",
    description:
      "Guardamuebles seguros en Punta Alta con Mudanzas Vallasciani. Consultá disponibilidad por WhatsApp.",
    url: pageUrl,
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/vallasciani-truck-hero.png",
        width: 1200,
        height: 630,
        alt: "Guardamuebles Vallasciani en la zona de Punta Alta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guardamuebles en Punta Alta",
    description:
      "Guardamuebles monitoreados en Punta Alta para hogares y empresas de Bahía Blanca y zona.",
  },
}

const serviceHighlights: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Espacios seguros",
    text: "Depósito pensado para guardar muebles, cajas y pertenencias con control y orden.",
    icon: Warehouse,
  },
  {
    title: "Monitoreo",
    text: "Instalación con vigilancia para mayor tranquilidad durante el tiempo de guarda.",
    icon: Lock,
  },
  {
    title: "Vinculado a tu mudanza",
    text: "Podemos coordinar traslado desde Bahía Blanca, guarda temporal y nueva entrega cuando lo necesites.",
    icon: Package,
  },
]

const routeCoverage = [
  "Punta Alta",
  "Bahía Blanca",
  "Ingeniero White",
  "Villalonga",
  "Zona sur bonaerense",
]

const planning: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Qué guardar",
    text: "Lista de muebles, cajas y objetos para estimar el espacio necesario.",
    icon: ClipboardList,
  },
  {
    title: "Tiempo estimado",
    text: "Cuántos meses o semanas necesitás el guardamuebles.",
    icon: CalendarCheck,
  },
  {
    title: "Traslado",
    text: "Si necesitás que retiremos la carga desde Bahía Blanca u otra localidad.",
    icon: MapPin,
  },
  {
    title: "Cuidado",
    text: "Si conviene embalar o proteger piezas delicadas antes del ingreso.",
    icon: Shield,
  },
]

const quoteChecklist = [
  "Qué muebles o cajas querés guardar.",
  "Tiempo aproximado de almacenaje.",
  "Si necesitás retiro en Bahía Blanca o zona.",
  "Fotos si hay objetos grandes o frágiles.",
  "Fecha en la que necesitás iniciar el servicio.",
]

const faqs = [
  {
    question: "¿Dónde están los guardamuebles?",
    answer:
      "Operamos guardamuebles en la zona de Punta Alta, con instalación monitoreada. Consultá disponibilidad y espacio por WhatsApp.",
  },
  {
    question: "¿Pueden retirar los muebles desde Bahía Blanca?",
    answer:
      "Sí. Podemos coordinar el traslado desde Bahía Blanca u otras localidades cercanas hacia el guardamuebles, según volumen y fechas.",
  },
  {
    question: "¿Para qué situaciones sirve un guardamuebles?",
    answer:
      "Es útil en mudanzas con entrega diferida, reformas, viajes prolongados o cuando necesitás liberar espacio temporalmente sin desprenderte de tus pertenencias.",
  },
  {
    question: "¿Cómo se cotiza el guardamuebles?",
    answer:
      "Según volumen, tiempo de guarda y si incluye traslado. Con una lista de objetos y el plazo estimado solemos responder el mismo día por WhatsApp.",
  },
]

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#servicio`,
    name: "Guardamuebles en Punta Alta",
    serviceType: "Guardamuebles y almacenaje",
    url: pageUrl,
    provider: {
      "@id": `${SITE_URL}/#empresa`,
      "@type": "MovingCompany",
      name: "Mudanzas Vallasciani",
      telephone: PHONE_E164,
      email: EMAIL,
    },
    areaServed: [
      { "@type": "City", name: "Punta Alta" },
      { "@type": "City", name: "Bahía Blanca" },
      { "@type": "AdministrativeArea", name: "Provincia de Buenos Aires" },
    ],
    description:
      "Servicio de guardamuebles en Punta Alta con espacios seguros y monitoreados para hogares y empresas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Guardamuebles en Punta Alta", item: pageUrl },
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

export default function GuardamueblesPuntaAltaPage() {
  return (
    <div className="lnd-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <PageHero
        eyebrow="Almacenaje seguro"
        title="Guardamuebles en Punta Alta"
        subtitle="Espacios monitoreados para tus pertenencias"
        lead="Guardamos muebles y cajas en Punta Alta con la seguridad de una empresa con más de 35 años en mudanzas y logística."
        heroImageAlt="Guardamuebles Vallasciani en la zona de Punta Alta"
        whatsappUrl={pageWhatsappUrl}
        showPhone
      />

      <section className="lnd-section">
        <div className="lnd-wrap">
          <div className="lnd-section__head lnd-section__head--center">
            <p className="lnd-section__label">Guardamuebles Vallasciani</p>
            <h2>Espacio seguro cuando tu mudanza no entra todo junto</h2>
            <p className="lnd-section__lead">
              Reformas, esperas de llave, viajes o mudanzas en etapas: un guardamuebles bien elegido evita apuros y
              protege lo que más valorás.
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
            <p className="lnd-section__label">Cobertura</p>
            <h2>Desde Bahía Blanca y zona hacia Punta Alta</h2>
            <ul className="lnd-checklist">
              {routeCoverage.map((item) => (
                <li key={item}>
                  <MapPin size={18} strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="lnd-section__lead" style={{ marginTop: "1.25rem" }}>
              Consultá espacio disponible y plazos por WhatsApp antes de coordinar el ingreso.
            </p>
          </div>

          <div>
            <p className="lnd-section__label">Coordinación</p>
            <h2>Qué conviene aclarar antes de reservar</h2>
            <p className="lnd-section__lead">
              El valor del guardamuebles depende del volumen, el tiempo de guarda y si incluye traslado desde tu domicilio.
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
                <h2>Información útil para consultar guardamuebles</h2>
                <p className="lnd-section__lead">
                  Con una lista de objetos y el tiempo estimado de guarda podemos orientarte sobre espacio y costo.
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
            <h2>Consultá guardamuebles en Punta Alta</h2>
            <p>Enviá qué querés guardar y por cuánto tiempo para cotizar hoy.</p>
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
