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
  title: "Mudanzas Bahía Blanca | Transporte Buenos Aires | Vallasciani",
  description:
    "Mudanzas Bahía Blanca y Buenos Aires. Empresa familiar con +35 años de experiencia. Guardamuebles Punta Alta. Transporte seguro.",
  keywords:
    "mudanzas bahia blanca, mudanzas bahia blanca buenos aires, mudanzas punta alta, guardamuebles punta alta, guardamuebles bahia blanca, transporte buenos aires, empresa familiar, mudanzas nacionales, mudanzas internacionales, transporte Vallasciani",
  icons: {
    icon: "/vallasciani-logo.png",
    shortcut: "/vallasciani-logo.png",
    apple: "/vallasciani-logo.png",
  },
  openGraph: {
    title: "Mudanzas Bahía Blanca | Transporte Buenos Aires | Vallasciani",
    description:
      "Mudanzas Bahía Blanca y Buenos Aires. Empresa familiar con más de 35 años de experiencia en mudanzas y guardamuebles.",
    type: "website",
    locale: "es_AR",
    siteName: "Mudanzas Vallasciani",
    images: [
      {
        url: "/vallasciani-truck-hero.png",
        width: 1200,
        height: 630,
        alt: "Mudanzas Vallasciani - Empresa Familiar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudanzas Bahía Blanca | Transporte Buenos Aires",
    description: "Mudanzas Bahía Blanca y Buenos Aires. Empresa familiar con +35 años de experiencia.",
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
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
