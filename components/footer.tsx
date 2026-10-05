import Link from "next/link"
import { Instagram, Mail, Facebook, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Liz Consuelo</h3>
            <p className="text-neutral-600 text-sm">Marca peruana de moda con prendas modernas, comodas y faciles de combinar.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Tienda</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-neutral-600 hover:text-black transition-colors">
                  Todos los productos
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-neutral-600 hover:text-black transition-colors">
                  Novedades
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-neutral-600 hover:text-black transition-colors">
                  Mas vendidos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Marca</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-black transition-colors">
                  Nuestra historia
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-black transition-colors">
                  Diseno responsable
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-black transition-colors">
                  Contactanos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://instagram.com" className="text-neutral-600 hover:text-black transition-colors flex items-center gap-2">
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://facebook.com" className="text-neutral-600 hover:text-black transition-colors flex items-center gap-2">
                  <Facebook size={16} />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="tel:+51912114592" className="text-neutral-600 hover:text-black transition-colors flex items-center gap-2">
                  <Phone size={16} />
                  <span>+51 912 114 592</span>
                </a>
              </li>
              <li>
                <a href="mailto:lizconsuelo@gmail.com" className="text-neutral-600 hover:text-black transition-colors flex items-center gap-2">
                  <Mail size={16} />
                  <span>lizconsuelo@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600">
          <p>
            &copy; {currentYear} Liz Consuelo. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-black transition-colors">
              Politica de privacidad
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              Terminos de servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
