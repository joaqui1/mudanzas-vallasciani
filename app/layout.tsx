import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import { getOrganizationSchema, SITE_URL } from "@/lib/site"
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mudanzas Vallasciani | Mudanzas y fletes en Bahía Blanca",
    template: "%s | Mudanzas Vallasciani",
  },
  description:
    "Empresa familiar de mudanzas y fletes en Bahía Blanca. Traslados locales y nacionales con más de 35 años de experiencia para hogares y empresas.",
  keywords:
    "mudanzas bahía blanca, fletes bahía blanca, mudanzas nacionales bahía blanca, guardamuebles punta alta, mudanzas vallasciani",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Mudanzas Vallasciani | Mudanzas y fletes en Bahía Blanca",
    description:
      "Mudanzas Vallasciani: empresa familiar con más de 35 años de experiencia en mudanzas, fletes y traslados nacionales.",
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
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
    title: "Mudanzas Vallasciani | Mudanzas y fletes en Bahía Blanca",
    description:
      "Empresa familiar de mudanzas y fletes en Bahía Blanca. Traslados locales y nacionales con más de 35 años de experiencia.",
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
    canonical: "/",
  },
  manifest: "/site.webmanifest",
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

        {/* Preconnect para mejorar tiempos de carga */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-48.png" type="image/png" sizes="48x48" />

        <link rel="preload" as="image" href="/vallasciani-logo.png" fetchPriority="high" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MWN2524N');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Ads Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17679022717"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17679022717');
            `,
          }}
        />
        {/* End Google Ads Tag */}

        {/* Meta de geolocalización */}
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="Bahía Blanca" />
        <meta name="geo.position" content="-38.718318;-62.266348" />
        <meta name="ICBM" content="-38.718318, -62.266348" />

        {/* Datos estructurados Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
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
