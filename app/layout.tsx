import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Mudanzas Bahía Blanca y Bahía Blanca Buenos Aires",
  description:
    "Mudanzas en Bahía Blanca y traslados Bahía Blanca – Buenos Aires. Servicio seguro, puntual y con más de 35 años de experiencia para hogares y empresas.",
  keywords:
    "mudanzas bahia blanca, mudanzas bahia blanca buenos aires, mudanzas nacionales bahia blanca, transporte puerta a puerta bahia blanca",
  icons: {
    icon: "/vallasciani-logo.png",
    shortcut: "/vallasciani-logo.png",
    apple: "/vallasciani-logo.png",
  },
  openGraph: {
    title: "Mudanzas Bahía Blanca y Bahía Blanca Buenos Aires",
    description:
      "Mudanzas Vallasciani: especialistas en mudanzas Bahía Blanca y Bahía Blanca – Buenos Aires. Transporte seguro y confiable para hogares y empresas.",
    type: "website",
    locale: "es_AR",
    siteName: "Mudanzas Vallasciani",
    images: [
      {
        url: "/vallasciani-truck-hero.png",
        width: 1200,
        height: 630,
        alt: "Camión de Mudanzas Vallasciani en Bahía Blanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudanzas Bahía Blanca y Bahía Blanca Buenos Aires",
    description:
      "Mudanzas Vallasciani: especialistas en mudanzas Bahía Blanca y Bahía Blanca – Buenos Aires. Transporte seguro y confiable para hogares y empresas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://mudanzasvallasciani.com",
  },
  category: "business",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        {/* Viewport para compatibilidad móvil */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Preconnect para mejorar tiempos de carga de fuentes y scripts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preload de imágenes críticas */}
        <link rel="preload" as="image" href="/vallasciani-logo.png" fetchpriority="high" />
        <link rel="preload" as="image" href="/vallasciani-truck-hero.png" fetchpriority="high" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-MWN2524N'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MWN2524N');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Meta de geolocalización para SEO local */}
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="Bahía Blanca" />
        <meta name="geo.position" content="-38.718318;-62.266348" />
        <meta name="ICBM" content="-38.718318, -62.266348" />

        {/* Datos estructurados Schema.org para negocio local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              "name": "Mudanzas Vallasciani",
              "url": "https://mudanzasvallasciani.com",
              "telephone": "+542932635701",
              "image": "https://mudanzasvallasciani.com/vallasciani-logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bahía Blanca",
                "addressRegion": "Buenos Aires",
                "addressCountry": "AR"
              },
              "areaServed": [
                { "@type": "Place", "name": "Bahía Blanca" },
                { "@type": "Place", "name": "Buenos Aires" },
                { "@type": "Country", "name": "Argentina" }
              ],
              "description": "Empresa familiar con más de 35 años de experiencia en mudanzas locales y nacionales.",
              "sameAs": []
            }),
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWN2524N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  )
}
