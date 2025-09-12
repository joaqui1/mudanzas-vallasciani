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
  title: "Mudanzas Bahía Blanca y Buenos Aires | Vallasciani",
  description:
    "Servicio profesional de mudanzas en Bahía Blanca y traslados Bahía Blanca – Buenos Aires. Transporte seguro, puntual y con más de 35 años de experiencia.",
  keywords:
    "mudanzas bahia blanca, mudanzas buenos aires bahia blanca, mudanzas nacionales bahia blanca, transporte puerta a puerta bahia blanca",
  icons: {
    icon: "/vallasciani-logo.png",
    shortcut: "/vallasciani-logo.png",
    apple: "/vallasciani-logo.png",
  },
  openGraph: {
    title: "Mudanzas Bahía Blanca y Buenos Aires | Vallasciani",
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
    title: "Mudanzas Bahía Blanca y Buenos Aires | Vallasciani",
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17522815085"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17522815085');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
