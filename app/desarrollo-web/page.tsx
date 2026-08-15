import type { Metadata } from "next"
import { SiteFooter } from "@/components/landing/SiteFooter"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { SITE_URL } from "@/lib/site"

const pageUrl = `${SITE_URL}/desarrollo-web`
const alturaProjectUrl = "https://www.alturadev.com/proyectos/mudanzas-vallasciani"

export const metadata: Metadata = {
  title: "Desarrollo web",
  description:
    "El sitio web de Mudanzas Vallasciani fue desarrollado por Altura Software, con foco en diseño, rendimiento y experiencia de usuario.",
  alternates: {
    canonical: "/desarrollo-web",
  },
  openGraph: {
    title: "Desarrollo web | Mudanzas Vallasciani",
    description:
      "El sitio web de Mudanzas Vallasciani fue desarrollado por Altura Software.",
    url: pageUrl,
    type: "website",
    locale: "es_AR",
  },
}

export default function DesarrolloWebPage() {
  return (
    <div className="lnd-page">
      <SiteHeader />

      <main>
        <section className="lnd-section lnd-section--soft">
          <div className="lnd-wrap">
            <div className="mx-auto max-w-4xl py-6 md:py-12">
              <p className="lnd-section__label">Desarrollo web</p>
              <h1 className="font-manrope text-4xl font-extrabold leading-tight tracking-tight text-neutral-950 md:text-6xl">
                Sitio web desarrollado por Altura Software
              </h1>
              <p className="mt-6 max-w-3xl font-manrope text-lg leading-8 text-neutral-600">
                La presencia digital de Mudanzas Vallasciani fue desarrollada por Altura Software, combinando una experiencia clara, buen rendimiento y una estética alineada con la identidad de la empresa.
              </p>

              <article className="lnd-card lnd-card--static lnd-quote-box mt-10 md:mt-14">
                <p className="lnd-section__label">Proyecto digital</p>
                <h2 className="font-manrope text-2xl font-bold text-neutral-950 md:text-3xl">
                  Mudanzas Vallasciani × Altura Software
                </h2>
                <p className="mt-4 font-manrope text-base leading-7 text-neutral-600">
                  El proyecto abarcó el desarrollo del sitio web de Mudanzas Vallasciani y su adaptación para ofrecer una navegación simple, rápida y pensada para conectar a los clientes con los servicios de la empresa.
                </p>
                <p className="mt-5 font-manrope text-base leading-7 text-neutral-600">
                  Conocé el proyecto realizado por{" "}
                  <a
                    href={alturaProjectUrl}
                    className="font-bold text-[#c41e24] underline decoration-1 underline-offset-4 transition-opacity hover:opacity-75"
                  >
                    Altura Software
                  </a>
                  .
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
