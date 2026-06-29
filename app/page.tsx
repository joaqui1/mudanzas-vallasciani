"use client" // <-- DEBE IR PRIMERO

// Declarar gtag como global para que TypeScript no marque error
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
const gtag = (...args: any[]) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
};

import { useEffect } from "react"
import Link from "next/link"
import {
  Home,
  MessageCircle,
  Package,
  Star,
  Phone,
  Mail,
  CheckCircle,
  Truck,
  Shield,
  Users,
  Facebook,
} from "lucide-react"
import { LandingTop, WHATSAPP_URL } from "@/components/landing/LandingTop"
import { SiteFooter } from "@/components/landing/SiteFooter"
import { PHONE_URL } from "@/components/landing/constants"
import { EMAIL, FACEBOOK_URL } from "@/lib/site"
import { customerReviews, getReviewInitial } from "@/app/opiniones/reviews"

// Componentes simples para reemplazar los de shadcn/ui que faltan
const Card = ({ className, children, ...props }: any) => (
  <div className={className} {...props}>{children}</div>
)

const CardContent = ({ className, children }: any) => (
  <div className={className}>{children}</div>
)

const homeReviews = customerReviews.filter((review) =>
  ["Francisco Filippa", "Luis Mayol", "Maria Ribes"].includes(review.name)
)

export default function HomePage() {
  const trackConversion = (label: string) => {
    gtag("event", "conversion", {
      send_to: "AW-17679022717/Uo92CPX5trcbEP30ge5B",
      event_label: label,
    })
  }

  // Smooth scroll para anchors internos
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement
      const href = target.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const section = document.querySelector(href)
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach((a) => a.addEventListener("click", handleAnchorClick))

    return () => {
      anchors.forEach((a) => a.removeEventListener("click", handleAnchorClick))
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <LandingTop onWhatsAppClick={trackConversion} />

      {/* Más servicios */}
      <section id="cobertura" className="scroll-mt-24 border-t border-neutral-100 py-20 brand-section">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-accent">Cobertura completa</p>
            <h2 className="mt-3 font-geist text-3xl font-bold text-neutral-900 md:text-4xl">
              Mudanzas nacionales e internacionales
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-manrope text-lg text-muted-foreground">
              Transporte nacional e internacional puerta a puerta, con la seguridad de siempre
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group rounded-lg brand-card transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-geist text-xl font-semibold mb-4">Mudanzas Nacionales e Internacionales</h4>
                <p className="font-manrope text-lg text-muted-foreground">
                  Transporte puerta a puerta, con la profesionalidad que nos caracteriza
                </p>
              </CardContent>
            </Card>

            <Card className="group rounded-lg brand-card transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-geist text-xl font-semibold mb-4">Embalaje Profesional</h4>
                <p className="font-manrope text-muted-foreground">
                  Cajas resistentes y protección para objetos delicados.
                </p>
              </CardContent>
            </Card>

            <Card className="group rounded-lg brand-card transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-geist text-xl font-semibold mb-4">Guardamuebles Punta Alta</h4>
                <p className="font-manrope text-muted-foreground">Espacios monitoreados y seguros en Punta Alta.</p>
              </CardContent>
            </Card>

            <Card className="group rounded-lg brand-card transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-geist text-xl font-semibold mb-4">Logística Integral</h4>
                <p className="font-manrope text-muted-foreground">
                  Planificación completa y asesoramiento para mudanzas.
                </p>
              </CardContent>
            </Card>

            <Card className="group rounded-lg brand-card transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-geist text-xl font-semibold mb-4">Seguro de Mudanza</h4>
                <p className="font-manrope text-muted-foreground">Cobertura que brinda tranquilidad total.</p>
              </CardContent>
            </Card>

            <Card className="group rounded-lg brand-card transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-geist text-xl font-semibold mb-4">Mudanzas Residenciales</h4>
                <p className="font-manrope text-muted-foreground">
                  Hogares y departamentos con cuidado en cada detalle.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link
              href="/mudanzas-bahia-blanca-buenos-aires"
              className="group rounded-lg brand-card p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="font-manrope text-sm font-bold uppercase text-primary">Larga distancia</p>
              <h3 className="mt-3 font-geist text-2xl font-bold text-foreground">
                Mudanzas Bahía Blanca a Buenos Aires
              </h3>
              <p className="mt-3 font-manrope leading-7 text-muted-foreground">
                Traslados puerta a puerta entre Bahía Blanca, CABA, Gran Buenos Aires y provincia.
              </p>
              <span className="mt-5 inline-flex font-manrope font-bold text-primary group-hover:underline">
                Ver ruta
              </span>
            </Link>

            <Link
              href="/mudanzas-larga-distancia-bahia-blanca"
              className="group rounded-lg brand-card p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="font-manrope text-sm font-bold uppercase text-primary">Todo el país</p>
              <h3 className="mt-3 font-geist text-2xl font-bold text-foreground">
                Mudanzas de larga distancia desde Bahía Blanca
              </h3>
              <p className="mt-3 font-manrope leading-7 text-muted-foreground">
                Traslados nacionales puerta a puerta con más de 35 años recorriendo Argentina.
              </p>
              <span className="mt-5 inline-flex font-manrope font-bold text-primary group-hover:underline">
                Ver servicio
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="nosotros" className="py-20 route-strip scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-geist text-4xl md:text-5xl font-bold text-foreground mb-4">¿Por qué elegirnos?</h2>
            <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
              La confianza de nuestros clientes nos respalda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-geist font-semibold mb-2">Empresa familiar con más de 35 años de trayectoria</h4>
                <p className="font-manrope text-muted-foreground text-sm">
                  Generaciones de experiencia al servicio de tu mudanza
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-geist font-semibold mb-2">Equipo profesional y capacitado</h4>
                <p className="font-manrope text-muted-foreground text-sm">
                  Personal especializado en el manejo seguro de tus pertenencias
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-geist font-semibold mb-2">Cumplimiento estricto de los tiempos</h4>
                <p className="font-manrope text-muted-foreground text-sm">Puntualidad garantizada en cada servicio</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-geist font-semibold mb-2">Presupuesto transparente y sin sorpresas</h4>
                <p className="font-manrope text-muted-foreground text-sm">Costos claros desde el primer momento</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-geist font-semibold mb-2">Clientes satisfechos en Argentina y el exterior</h4>
                <p className="font-manrope text-muted-foreground text-sm">Referencias que avalan nuestro trabajo</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-geist font-semibold mb-2">Atención cercana y personalizada</h4>
                <p className="font-manrope text-muted-foreground text-sm">
                  Comunicación directa desde el primer contacto hasta la entrega
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mx-auto mb-5 brand-rule" />
            <h2 className="font-geist text-4xl md:text-5xl font-bold text-foreground mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
              Testimonios reales de familias que confiaron en nosotros
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeReviews.map((review) => (
              <Card key={review.name} className="flex flex-col h-full rounded-lg brand-card">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="font-manrope text-muted-foreground mb-6 flex-grow">"{review.text}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    {review.avatar ? (
                      <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                    ) : (
                      <span className={`lnd-review-avatar lnd-review-avatar--${review.avatarTone ?? "orange"}`}>
                        {getReviewInitial(review.name)}
                      </span>
                    )}
                    <div>
                      <p className="font-geist font-semibold">{review.name}</p>
                      <p className="font-manrope text-sm text-muted-foreground">Fuente: {review.source}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section id="contact-section" className="scroll-mt-20 py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-geist text-4xl md:text-5xl font-bold mb-6">
            Si te mudas, es con Mudanzas Vallasciani.
          </h2>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <a
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-4 rounded-xl shadow-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              href={PHONE_URL}
              onClick={() => {
                gtag('event', 'conversion', {
                  'send_to': 'AW-17679022717/Uo92CPX5trcbEP30ge5B',
                  'event_label': 'Llamada'
                });
              }}
            >
              <Phone className="h-5 w-5" />
              Llamar
            </a>

            <a
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-4 rounded-xl shadow-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => {
                gtag('event', 'conversion', {
                  'send_to': 'AW-17679022717/Uo92CPX5trcbEP30ge5B',
                  'event_label': 'WhatsApp'
                });
              }}
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>

            <a
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-4 rounded-xl shadow-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              href={`mailto:${EMAIL}?subject=Presupuesto%20de%20mudanza&body=Hola%20Vallasciani%2C%0AQuisiera%20pedir%20un%20presupuesto.%0A`}
              onClick={() => {
                gtag('event', 'conversion', {
                  'send_to': 'AW-17679022717/Uo92CPX5trcbEP30ge5B',
                  'event_label': 'Email'
                });
              }}
            >
              <Mail className="h-5 w-5" />
              Email
            </a>

            <a
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-4 rounded-xl shadow-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
