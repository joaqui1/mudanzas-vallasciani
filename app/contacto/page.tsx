import type { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle,
  Facebook,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  type LucideIcon,
} from "lucide-react"
import { PageHero } from "@/components/landing/PageHero"
import { SiteFooter } from "@/components/landing/SiteFooter"
import { SiteHeader } from "@/components/landing/SiteHeader"
import {
  EMAIL,
  FACEBOOK_URL,
  GOOGLE_MAPS_URL,
  PHONE_DISPLAY,
  PHONE_URL,
  SITE_URL,
  whatsappUrl,
} from "@/lib/site"
import { customerReviews, getReviewInitial } from "../opiniones/reviews"

const pageUrl = `${SITE_URL}/contacto`
const heroImage = "/vallasciani-opiniones-hero.png"
const heroImageMobile = heroImage
const pageWhatsappUrl = whatsappUrl(
  "Hola Vallasciani, quiero pedir un presupuesto de mudanza."
)

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá a Mudanzas Vallasciani por WhatsApp, teléfono o email para pedir presupuesto de mudanzas y fletes.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto",
    description:
      "Pedí tu presupuesto de mudanza por WhatsApp, teléfono o email con Mudanzas Vallasciani.",
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
    title: "Contacto",
    description:
      "Comunicate con Mudanzas Vallasciani para pedir presupuesto de mudanza.",
  },
}

const contactOptions: {
  title: string
  text: string
  action: string
  href: string
  icon: LucideIcon
  external?: boolean
}[] = [
  {
    title: "WhatsApp",
    text: "La forma más rápida de enviar origen, destino, fotos y fecha estimada.",
    action: "Escribir por WhatsApp",
    href: pageWhatsappUrl,
    icon: MessageCircle,
    external: true,
  },
  {
    title: "Teléfono",
    text: `Llamanos al ${PHONE_DISPLAY} para consultar disponibilidad o coordinar detalles.`,
    action: "Llamar ahora",
    href: PHONE_URL,
    icon: Phone,
  },
  {
    title: "Email",
    text: "También podés mandar los datos de tu mudanza por correo electrónico.",
    action: "Enviar email",
    href: `mailto:${EMAIL}?subject=Presupuesto%20de%20mudanza&body=Hola%20Vallasciani%2C%0AQuisiera%20pedir%20un%20presupuesto.%0A`,
    icon: Mail,
  },
]

const quoteChecklist = [
  "Origen y destino de la mudanza.",
  "Fecha tentativa o rango de días posible.",
  "Lista aproximada de muebles, cajas y objetos grandes.",
  "Fotos o video breve si hay piezas delicadas.",
  "Pisos, ascensor o escalera.",
]

const trustBullets = [
  "Empresa familiar con más de 35 años de experiencia.",
  "Atención directa y personalizada.",
  "Mudanzas locales y de larga distancia.",
  "Servicio puerta a puerta desde Bahía Blanca.",
  "Clientes que nos recomiendan en Google.",
]

const featuredReviews = customerReviews.filter((review) =>
  ["Carolina Hernandez", "Luis Mayol", "Maria Ribes"].includes(review.name)
)

const faqs = [
  {
    question: "¿El presupuesto tiene costo?",
    answer:
      "No. Podés consultar por WhatsApp y te orientamos sin compromiso.",
  },
  {
    question: "¿Hacen mudanzas de Bahía Blanca a Buenos Aires?",
    answer:
      "Sí. Realizamos mudanzas desde Bahía Blanca hacia Buenos Aires y otros destinos.",
  },
  {
    question: "¿Trabajan con mudanzas de larga distancia?",
    answer:
      "Sí. Podés consultar por mudanzas nacionales y traslados de larga distancia desde Bahía Blanca.",
  },
  {
    question: "¿Qué datos conviene enviar para pedir presupuesto?",
    answer:
      "Origen, destino, fecha aproximada, tipo de vivienda y una descripción general de lo que necesitás trasladar.",
  },
]

export default function ContactoPage() {
  return (
    <div className="lnd-page">
      <SiteHeader active="contacto" />

      <PageHero
        eyebrow="Contacto"
        title="Pedí presupuesto para tu mudanza"
        subtitle="Atención directa por WhatsApp, teléfono o email"
        lead="Contanos qué necesitás trasladar, desde dónde y hacia dónde. Te asesoramos por WhatsApp, teléfono o email."
        heroImage={heroImage}
        heroImageMobile={heroImageMobile}
        heroImageAlt="Camión de Mudanzas Vallasciani al atardecer"
        heroClassName="lnd-hero--contacto"
        whatsappUrl={pageWhatsappUrl}
        showPhone
      />

      <section className="lnd-section lnd-section--soft">
        <div className="lnd-wrap lnd-split">
          <div>
            <p className="lnd-section__label">Confianza</p>
            <h2>Por qué elegir Mudanzas Vallasciani</h2>
            <p className="lnd-section__lead">
              Acompañamos cada mudanza con planificación, trato directo y experiencia en traslados locales y nacionales.
            </p>
          </div>

          <article className="lnd-card lnd-card--static lnd-quote-box">
            <ul className="lnd-checklist">
              {trustBullets.map((item) => (
                <li key={item}>
                  <CheckCircle size={18} strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="lnd-section">
        <div className="lnd-wrap">
          <div className="lnd-section__head lnd-section__head--center">
            <p className="lnd-section__label">Canales de contacto</p>
            <h2>Elegí cómo comunicarte</h2>
          </div>

          <div className="lnd-cards lnd-contact-grid">
            {contactOptions.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer noopener" : undefined}
                  className="lnd-card lnd-contact-card"
                >
                  <div className="lnd-card__icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="lnd-card__more">{item.action}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="lnd-section">
        <div className="lnd-wrap">
          <div className="lnd-section__head lnd-section__head--center">
            <p className="lnd-section__label">Opiniones</p>
            <h2>Clientes que confiaron en Vallasciani</h2>
            <p className="lnd-section__lead">
              Algunas reseñas compartidas por clientes en Google.
            </p>
          </div>

          <div className="lnd-reviews-grid">
            {featuredReviews.map((review) => (
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
            <Link href="/opiniones" className="lnd-btn lnd-btn--outline">
              Ver opiniones de clientes
            </Link>
          </div>
        </div>
      </section>

      <section className="lnd-section lnd-section--soft">
        <div className="lnd-wrap lnd-split">
          <div>
            <p className="lnd-section__label">Presupuesto</p>
            <h2>Qué datos conviene enviar</h2>
            <p className="lnd-section__lead">
              Con algunos datos básicos ya podemos darte una primera orientación. Si falta algo, lo vamos ajustando por WhatsApp.
            </p>
          </div>

          <article className="lnd-card lnd-card--static lnd-quote-box">
            <ul className="lnd-checklist">
              {quoteChecklist.map((item) => (
                <li key={item}>
                  <CheckCircle size={18} strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="lnd-section">
        <div className="lnd-wrap">
          <article className="lnd-card lnd-card--static lnd-quote-box">
            <div className="lnd-split">
              <div>
                <p className="lnd-section__label">Redes y ubicación</p>
                <h2>También podés encontrarnos en Facebook y Google</h2>
                <p className="lnd-section__lead">
                  Revisá el perfil de la empresa o escribinos por el canal que te resulte más cómodo.
                </p>
              </div>
              <div className="lnd-contact-actions">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="lnd-btn lnd-btn--outline"
                >
                  <Facebook size={18} strokeWidth={1.75} />
                  Facebook
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="lnd-btn lnd-btn--outline"
                >
                  <MapPin size={18} strokeWidth={1.75} />
                  Google Maps
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="lnd-section lnd-section--soft">
        <div className="lnd-wrap">
          <div className="lnd-section__head">
            <p className="lnd-section__label">Preguntas frecuentes</p>
            <h2>Consultas habituales antes de pedir presupuesto</h2>
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

      <section className="lnd-cta-band lnd-cta-band--contacto">
        <div className="lnd-wrap lnd-cta-band__inner">
          <div>
            <h2>¿Querés consultar tu mudanza?</h2>
            <p>Escribinos por WhatsApp con origen, destino y fecha aproximada.</p>
          </div>
          <a
            href={pageWhatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="lnd-btn lnd-btn--lg"
          >
            <MessageCircle className="lnd-wa-icon" size={20} strokeWidth={2} />
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
