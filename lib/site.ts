export const SITE_URL = "https://mudanzasvallasciani.com"
export const SITE_NAME = "Mudanzas Vallasciani"
export const EMAIL = "wdvallasciani@gmail.com"
export const PHONE_E164 = "+5492932635701"
export const PHONE_DISPLAY = "+54 9 2932 635701"
export const PHONE_URL = `tel:${PHONE_E164}`
export const WHATSAPP_NUMBER = "5492932635701"
export const FACEBOOK_URL = "https://www.facebook.com/MudanzasVallasciani"
export const GOOGLE_MAPS_FEATURE_ID = "0x6a8b59b613d32701:0xaa4504dfe9490894"
export const GOOGLE_MAPS_CID = "141621716376653208900499497880927144084"
export const GOOGLE_MAPS_URL = `https://www.google.com/maps/place/Mudanzas+Vallasciani/data=!4m2!3m1!1s${GOOGLE_MAPS_FEATURE_ID}`
export const GOOGLE_MAPS_REVIEW_URL = `https://search.google.com/local/writereview?cid=${GOOGLE_MAPS_CID}`

export const GEO = {
  latitude: -38.718318,
  longitude: -62.266348,
  region: "AR-B",
  locality: "Bahía Blanca",
  postalCode: "B8000",
  country: "AR",
} as const

export const SERVICE_PAGES = [
  {
    name: "Mudanzas en Bahía Blanca",
    path: "/",
    description: "Mudanzas locales para hogares, departamentos, oficinas y comercios en Bahía Blanca.",
  },
  {
    name: "Mudanzas Bahía Blanca a Buenos Aires",
    path: "/mudanzas-bahia-blanca-buenos-aires",
    description: "Traslados puerta a puerta entre Bahía Blanca y Buenos Aires en ambos sentidos.",
  },
  {
    name: "Mudanzas de larga distancia desde Bahía Blanca",
    path: "/mudanzas-larga-distancia-bahia-blanca",
    description: "Mudanzas nacionales puerta a puerta desde Bahía Blanca a todo el país.",
  },
  {
    name: "Fletes en Bahía Blanca",
    path: "/fletes-bahia-blanca",
    description: "Fletes y traslados de cargas chicas y medianas en Bahía Blanca y zona.",
  },
  {
    name: "Guardamuebles en Punta Alta",
    path: "/guardamuebles-punta-alta",
    description: "Guardamuebles seguros y monitoreados en la zona de Punta Alta.",
  },
] as const

export function whatsappUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${SITE_URL}/#empresa`,
    name: SITE_NAME,
    url: SITE_URL,
    telephone: PHONE_E164,
    email: EMAIL,
    image: `${SITE_URL}/icon-512.png`,
    logo: `${SITE_URL}/vallasciani-logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: GEO.locality,
      addressRegion: "Buenos Aires",
      postalCode: GEO.postalCode,
      addressCountry: GEO.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    areaServed: [
      { "@type": "Place", name: "Bahía Blanca" },
      { "@type": "Place", name: "Punta Alta" },
      { "@type": "Place", name: "Buenos Aires" },
      { "@type": "Country", name: "Argentina" },
    ],
    description:
      "Empresa familiar con más de 35 años de experiencia en mudanzas, fletes y traslados nacionales en Bahía Blanca.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE_E164,
        contactType: "customer service",
        areaServed: "AR",
        availableLanguage: ["Spanish"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        url: whatsappUrl("Hola Vallasciani, quiero pedir un presupuesto."),
        areaServed: "AR",
        availableLanguage: ["Spanish"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de mudanzas y fletes",
      itemListElement: SERVICE_PAGES.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: `${SITE_URL}${service.path === "/" ? "/" : service.path}`,
          provider: { "@id": `${SITE_URL}/#empresa` },
        },
      })),
    },
    hasMap: GOOGLE_MAPS_URL,
    sameAs: [FACEBOOK_URL, GOOGLE_MAPS_URL],
  }
}
