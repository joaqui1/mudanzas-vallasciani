export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?hl=es-419&authuser=1&sxsrf=ANbL-n4rCq4Yl87Dr88TR9MrI5_dMZvEeA:1781023634618&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOazlpGv4k0xxkw_ID4bFOjkmQEbYNp7IBC1RP7DX5xsoAKE_OKdKXfvmUZyoWo9ct3pOxr98YDPEbny_3ICKcVm3cO-l5WTtUbjJmxppx4kcbufjHQ%3D%3D&q=Mudanzas+Vallasciani+Opiniones"

export type CustomerReview = {
  name: string
  rating: 5
  text: string
  source: "Google"
  avatar?: string
  avatarTone?: "orange" | "blue" | "green" | "purple" | "red"
}

export const customerReviews: CustomerReview[] = [
  {
    name: "Francisco Filippa",
    rating: 5,
    text: "Muy buen servicio, Walter muy amable y la mudanza llegó en excelentes condiciones.",
    source: "Google",
    avatar: "/francisco-filippa-review.png",
  },
  {
    name: "Carolina Hernandez",
    rating: 5,
    text: "Confianza 100%. Todo impecable. Muchas gracias.",
    source: "Google",
    avatarTone: "orange",
  },
  {
    name: "Luis Mayol",
    rating: 5,
    text: "Excelente servicio. Buen trato. Cien por cien recomendable.",
    source: "Google",
    avatarTone: "blue",
  },
  {
    name: "Davidrevale Davidrevale",
    rating: 5,
    text: "Excelente, muy puntual. Para recomendar.",
    source: "Google",
    avatarTone: "green",
  },
  {
    name: "Maria Ribes",
    rating: 5,
    text: "Excelente servicio. Muy prolijos y responsables.",
    source: "Google",
    avatarTone: "purple",
  },
  {
    name: "DE LA COSTA RADIO",
    rating: 5,
    text: "Excelente atención!! Muy cuidadosos y responsables, súper recomendable.",
    source: "Google",
    avatarTone: "red",
  },
]

export function getReviewInitial(name: string) {
  return name.trim().charAt(0).toUpperCase()
}
