import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, ExternalLink, MessageCircle, Star } from "lucide-react"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { SiteFooter } from "@/components/landing/SiteFooter"
import { SITE_URL, whatsappUrl } from "@/lib/site"
import { GOOGLE_REVIEWS_URL, customerReviews, getReviewInitial } from "./reviews"

const pageUrl = `${SITE_URL}/opiniones`
const heroImage = "/vallasciani-opiniones-hero.png"
const heroImageMobile = heroImage
const pageWhatsappUrl = whatsappUrl(
  "Hola Vallasciani, quiero pedir un presupuesto de mudanza."
)

const recommendationPoints = [
  "Atención directa y personalizada",
  "Cuidado de muebles y pertenencias",
  "Servicio puerta a puerta",
  "Mudanzas locales y de larga distancia",
]

const serviceLinks = [
  {
    title: "Mudanzas en Bahía Blanca",
    text: "Mudanzas locales para hogares, departamentos, oficinas y comercios.",
    href: "/",
  },
  {
    title: "Bahía Blanca - Buenos Aires",
    text: "Traslados puerta a puerta entre Bahía Blanca, Buenos Aires y provincia.",
    href: "/mudanzas-bahia-blanca-buenos-aires",
  },
  {
    title: "Mudanzas de larga distancia",
    text: "Mudanzas nacionales desde Bahía Blanca hacia distintos puntos del país.",
    href: "/mudanzas-larga-distancia-bahia-blanca",
  },
]

const faqs = [
  {
    question: "¿El presupuesto tiene costo?",
    answer: "No. Podés consultar por WhatsApp sin compromiso.",
  },
  {
    question: "¿Hacen mudanzas de Bahía Blanca a Buenos Aires?",
    answer:
      "Sí. Realizamos mudanzas desde Bahía Blanca hacia Buenos Aires y otros destinos.",
  },
  {
    question: "¿Trabajan con mudanzas de larga distancia?",
    answer: "Sí. Hacemos mudanzas nacionales y traslados de larga distancia.",
  },
  {
    question: "¿Qué datos conviene enviar para pedir presupuesto?",
    answer:
      "Origen, destino, fecha aproximada y una descripción de lo que necesitás trasladar.",
  },
]

export const metadata: Metadata = {
  title: "Opiniones de clientes",
  description:
    "Opiniones de clientes de Mudanzas Vallasciani. Conocé experiencias de personas que confiaron su mudanza a la empresa.",
  alternates: {
    canonical: "/opiniones",
  },
  openGraph: {
    title: "Opiniones de clientes",
    description:
      "Conocé experiencias de personas que confiaron en Mudanzas Vallasciani para su mudanza.",
    url: pageUrl,
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: heroImage,
        width: 1200,
        height: 630,
        alt: "Camión de Mudanzas Vallasciani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opiniones de clientes",
    description:
      "Experiencias de clientes que confiaron en Mudanzas Vallasciani para su mudanza.",
  },
}

export default function OpinionesPage() {
  return (
    <div className="lnd-page">
      <SiteHeader active="opiniones" />

      <section className="lnd-hero">
        <div className="lnd-hero__photo">
          <picture>
            <source media="(max-width: 1023px)" srcSet={heroImageMobile} />
            <img src={heroImage} alt="Camión de Mudanzas Vallasciani" />
          </picture>
          <div className="lnd-hero__fade" />
        </div>

        <div className="lnd-wrap lnd-hero__body">
          <div className="lnd-hero__copy">
            <h1>Opiniones de clientes sobre Mudanzas Vallasciani</h1>
            <h2>Conocé algunas experiencias de personas que confiaron en nosotros para su mudanza.</h2>
          </div>
        </div>
      </section>

      <section className="lnd-section lnd-section--soft">
        <div className="lnd-wrap lnd-split">
          <div className="lnd-opiniones-trust-copy">
            <h2>Clientes que nos recomendaron</h2>
            <p className="lnd-section__lead">
              En Mudanzas Vallasciani trabajamos con atención personalizada, cuidado de las pertenencias y coordinación
              directa durante todo el traslado.
            </p>
          </div>

          <article className="lnd-card lnd-card--static lnd-quote-box">
            <h2>¿Por qué nos recomiendan?</h2>
            <p className="lnd-section__lead">
              Nuestros clientes suelen destacar la puntualidad, el buen trato, la responsabilidad y el cuidado durante
              la mudanza.
            </p>
            <ul className="lnd-checklist" style={{ marginTop: "1.25rem" }}>
              {recommendationPoints.map((point) => (
                <li key={point}>
                  <CheckCircle size={18} strokeWidth={2} />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="lnd-section">
        <div className="lnd-wrap">
          <div className="lnd-section__head lnd-section__head--center">
            <h2>Reseñas destacadas en Google</h2>
            <p className="lnd-section__lead">
              Seleccionamos algunas opiniones compartidas por clientes en nuestro Perfil de Empresa de Google.
            </p>
          </div>

          <div className="lnd-reviews-grid">
            {customerReviews.map((review) => (
              <article key={review.name} className="lnd-review-card">
                <div className="lnd-review-card__meta">
                  <div className="lnd-stars" aria-label={`${review.rating} estrellas`}>
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star key={index} size={18} strokeWidth={1.5} fill="currentColor" />
                    ))}
                  </div>
                  <span>{review.rating} estrellas</span>
                </div>
                <p className="lnd-review-card__text">"{review.text}"</p>
                <div className="lnd-review-card__footer">
                  <div className="lnd-review-card__author">
                    {review.avatar ? (
                      <img src={review.avatar} alt={review.name} />
                    ) : (
                      <span className={`lnd-review-avatar lnd-review-avatar--${review.avatarTone ?? "orange"}`}>
                        {getReviewInitial(review.name)}
                      </span>
                    )}
                    <strong>{review.name}</strong>
                  </div>
                  <span>Fuente: {review.source}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="lnd-reviews-more">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="lnd-btn lnd-btn--outline"
            >
              <ExternalLink size={17} strokeWidth={2} />
              Ver más opiniones en Google
            </a>
          </div>
        </div>
      </section>

      <section className="lnd-section lnd-section--soft">
        <div className="lnd-wrap">
          <div className="lnd-section__head lnd-section__head--center">
            <h2>Servicios de mudanza</h2>
            <p className="lnd-section__lead">
              Realizamos mudanzas en Bahía Blanca, traslados a Buenos Aires y mudanzas de larga distancia hacia
              distintos puntos del país.
            </p>
          </div>

          <div className="lnd-info-grid lnd-opiniones-services">
            {serviceLinks.map((service) => (
              <Link key={service.href} href={service.href} className="lnd-card">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="lnd-card__more">Ver servicio</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="lnd-cta-band lnd-cta-band--opiniones">
        <div className="lnd-wrap lnd-cta-band__inner">
          <div>
            <h2>¿Necesitás hacer una mudanza?</h2>
            <p>Pedí tu presupuesto por WhatsApp. Contanos origen, destino y fecha aproximada, y te asesoramos de forma directa.</p>
          </div>
          <a
            href={pageWhatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="lnd-btn lnd-btn--lg"
          >
            <MessageCircle className="lnd-wa-icon" size={20} strokeWidth={2} />
            Pedir presupuesto por WhatsApp
          </a>
        </div>
      </section>

      <section className="lnd-section lnd-section--soft">
        <div className="lnd-wrap">
          <div className="lnd-section__head">
            <p className="lnd-section__label">Preguntas frecuentes</p>
            <h2>Consultas habituales</h2>
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

      <SiteFooter />
    </div>
  )
}
