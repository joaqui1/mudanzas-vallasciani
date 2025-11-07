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

import { useEffect, useState } from "react"
import { MessageCircle, Package, Star, Phone, Mail, MapPin, CheckCircle, Truck, Shield, Users, Facebook } from "lucide-react"

// Componentes simples para reemplazar los de shadcn/ui que faltan
const Badge = ({ variant, className, children }: any) => (
  <span className={className}>{children}</span>
)

const Card = ({ className, children, ...props }: any) => (
  <div className={className} {...props}>{children}</div>
)

const CardContent = ({ className, children }: any) => (
  <div className={className}>{children}</div>
)

export default function HomePage() {
  const [showButton, setShowButton] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Función para scroll a contacto
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Manejo de links externos
  useEffect(() => {
    function openExternal(e: Event) {
      const target = e.currentTarget as HTMLAnchorElement
      const url = target.getAttribute("href")
      if (!url) return

      const w = window.open(url, "_blank", "noopener,noreferrer")
      if (!w) {
        try {
          window.top!.location.href = url
        } catch (_) {
          window.location.href = url
        }
      }
      e.preventDefault()
    }

    document.querySelectorAll("a[data-external]").forEach((a) => {
      a.addEventListener("click", openExternal)
    })

    return () => {
      document.querySelectorAll("a[data-external]").forEach((a) => {
        a.removeEventListener("click", openExternal)
      })
    }
  }, [])

  // Mostrar/ocultar botón después de hacer scroll con animación mejorada
  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 200
      if (shouldShow !== showButton) {
        setShowButton(shouldShow)
        // Pequeño retraso para permitir la transición CSS
        setTimeout(() => setIsButtonVisible(shouldShow), 10)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [showButton])

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-background" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Badge
              variant="secondary"
              className="text-sm px-4 py-2 bg-white/20 text-white border border-white/30 rounded-full font-semibold backdrop-blur-sm"
            >
              +35 años de experiencia
            </Badge>
          </div>

          {/* H1 principal con keywords locales */}
          <h1 className="font-geist text-5xl md:text-7xl font-bold text-white mb-4">
            Mudanzas Bahía Blanca y Mudanzas Bahía Blanca Buenos Aires
          </h1>

          {/* Subtítulo con branding */}
          <h2 className="font-manrope text-2xl md:text-4xl font-semibold text-white mb-6">
            Mudanzas Vallasciani – tu tranquilidad, nuestra prioridad
          </h2>

          {/* Párrafo de apoyo con keywords */}
          <p className="font-manrope text-base text-white/90 mb-6 max-w-[700px] mx-auto leading-relaxed">
            Empresa familiar con más de 35 años de experiencia en mudanzas en Bahía Blanca y traslados Bahía Blanca – Buenos Aires. 
            Servicio seguro, puntual y confiable para hogares y empresas.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
            <button
              onClick={() => {
                const servicesSection = document.querySelector("section:nth-of-type(2)")
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="w-full sm:w-56 h-12 inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/30 px-4 py-3 rounded-xl font-medium hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-sm text-sm"
              aria-label="Ir a nuestros servicios"
            >
              <Package className="h-4 w-4" />A qué nos dedicamos
            </button>
            <button
              onClick={scrollToContact}
              className="w-full sm:w-56 h-12 inline-flex items-center justify-center gap-2 bg-green-600 text-white border-none px-4 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors cursor-pointer shadow-lg text-sm"
              aria-label="Ir a la sección de contacto"
            >
              <MessageCircle className="h-4 w-4" />
              Contáctanos
            </button>
            <button
              onClick={() => {
                const testimonialsSection = document.querySelector("section:nth-of-type(4)")
                if (testimonialsSection) {
                  testimonialsSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="w-full sm:w-56 h-12 inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/30 px-4 py-3 rounded-xl font-medium hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-sm text-sm"
              aria-label="Ir a testimonios de clientes"
            >
              <Star className="h-4 w-4" />
              Lo que opinan quienes nos eligieron
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-geist text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mudanzas nacionales e internacionales
            </h2>

            <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
              Transporte nacional e internacional puerta a puerta, con la seguridad de siempre
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
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

            <Card className="group hover:shadow-lg transition-all duration-300">
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

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-geist text-xl font-semibold mb-4">Guardamuebles Punta Alta</h4>
                <p className="font-manrope text-muted-foreground">Espacios monitoreados y seguros en Punta Alta.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
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

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-geist text-xl font-semibold mb-4">Seguro de Mudanza</h4>
                <p className="font-manrope text-muted-foreground">Cobertura que brinda tranquilidad total.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="font-geist text-4xl md:text-5xl font-bold text-foreground mb-4">¿Por qué elegirnos?</h3>
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
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="font-geist text-4xl md:text-5xl font-bold text-foreground mb-4">
              Lo que dicen nuestros clientes
            </h3>
            <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
              Testimonios reales de familias que confiaron en nosotros
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="font-manrope text-muted-foreground mb-6 flex-grow">
                  "Me mudé de Bahía Blanca a Buenos Aires y todo 10 puntos. Puntuales y cuidadosos."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <img src="/mariana-photo.png" alt="Mariana López" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-geist font-semibold">Mariana López</p>
                    <p className="font-manrope text-sm text-muted-foreground">Bahía Blanca</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="font-manrope text-muted-foreground mb-6 flex-grow">
                  "Necesitaba un guardamuebles por unos meses y la atención fue excelente, muy recomendable."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <img src="/facundo-photo.png" alt="Facundo Pereyra" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-geist font-semibold">Facundo Pereyra</p>
                    <p className="font-manrope text-sm text-muted-foreground">Bahía Blanca</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="font-manrope text-muted-foreground mb-6 flex-grow">"Llegó todo muy bien."</p>
                <div className="flex items-center gap-3 mt-auto">
                  <img src="/laura-photo.png" alt="Laura Méndez" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-geist font-semibold">Laura Méndez</p>
                    <p className="font-manrope text-sm text-muted-foreground">Neuquén</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section id="contact-section" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-geist text-4xl md:text-5xl font-bold mb-6">
            Si te mudas, es con Mudanzas Vallasciani.
          </h1>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <a
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-4 rounded-xl shadow-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              href="tel:+542932635701"
              data-external
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
              href="https://wa.me/5492932635701?text=Hola%20Vallasciani%2C%20quiero%20pedir%20un%20presupuesto%20de%20mudanza."
              target="_blank"
              rel="noreferrer noopener"
              data-external
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
              href="mailto:wdvallasciani@gmail.com?subject=Presupuesto%20de%20mudanza&body=Hola%20Vallasciani%2C%0AQuisiera%20pedir%20un%20presupuesto.%0A"
              data-external
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

            {/* Botón de Facebook (sin conversión) */}
            <a
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-4 rounded-xl shadow-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              href="https://www.facebook.com/MudanzasVallasciani"
              target="_blank"
              rel="noreferrer noopener"
              data-external
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-geist text-2xl font-bold mb-4">Mudanzas Vallasciani</h3>
              <p className="font-manrope text-sm opacity-80 mb-4">
                Empresa familiar con más de 35 años de experiencia en mudanzas nacionales e internacionales.
              </p>
              {/* Enlace a Facebook en el footer */}
              <div className="flex items-center gap-2 mt-4">
                <a
                  href="https://www.facebook.com/MudanzasVallasciani"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-background/80 hover:text-background transition-colors"
                  data-external
                >
                  <Facebook className="h-5 w-5" />
                  <span>Síguenos en Facebook</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-geist font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+54 9 2932 635701</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>wdvallasciani@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Bahía Blanca, Argentina</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-geist font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Mudanzas Nacionales</li>
                <li>Mudanzas Internacionales</li>
                <li>Embalaje Profesional</li>
                <li>Guardamuebles</li>
                <li>Logística Integral</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center">
            <p className="font-manrope text-sm opacity-80">
              © 2025 Mudanzas Vallasciani. Empresa familiar con más de 35 años de experiencia. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}