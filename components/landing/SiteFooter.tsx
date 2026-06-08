import Link from "next/link"
import { Facebook, Mail, MapPin, Phone } from "lucide-react"
import {
  EMAIL,
  FACEBOOK_URL,
  GOOGLE_MAPS_URL,
  PHONE_DISPLAY,
  PHONE_URL,
} from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="lnd-footer">
      <div className="lnd-wrap lnd-footer__grid">
        <div>
          <h3 className="lnd-footer__title">Mudanzas Vallasciani</h3>
          <p className="lnd-footer__text">
            Empresa familiar con más de 35 años de experiencia en mudanzas nacionales e internacionales.
          </p>
          <div className="lnd-footer__social">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="lnd-footer__link"
            >
              <Facebook size={18} strokeWidth={1.75} />
              Síguenos en Facebook
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="lnd-footer__link"
            >
              <MapPin size={18} strokeWidth={1.75} />
              Ver en Google Maps
            </a>
          </div>
        </div>

        <div>
          <h4 className="lnd-footer__subtitle">Contacto</h4>
          <ul className="lnd-footer__list">
            <li>
              <Phone size={16} strokeWidth={1.75} />
              <a href={PHONE_URL}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <Mail size={16} strokeWidth={1.75} />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <MapPin size={16} strokeWidth={1.75} />
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer noopener">
                Bahía Blanca, Argentina
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="lnd-footer__subtitle">Servicios</h4>
          <ul className="lnd-footer__links">
            <li>
              <Link href="/">Mudanzas en Bahía Blanca</Link>
            </li>
            <li>
              <Link href="/fletes-bahia-blanca">Fletes en Bahía Blanca</Link>
            </li>
            <li>
              <Link href="/guardamuebles-punta-alta">Guardamuebles Punta Alta</Link>
            </li>
            <li>
              <Link href="/mudanzas-bahia-blanca-buenos-aires">Bahía Blanca — Buenos Aires</Link>
            </li>
            <li>
              <Link href="/mudanzas-larga-distancia-bahia-blanca">Mudanzas de larga distancia</Link>
            </li>
            <li>
              <Link href="/#cobertura">Todos los servicios</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="lnd-wrap lnd-footer__bottom">
        <p>© 2026 Mudanzas Vallasciani. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
