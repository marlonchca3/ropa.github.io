import type { Metadata } from "next"
import { Mail, Clock, Phone, MessageCircle, ShoppingBag, Truck, RefreshCcw } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contacto | Liz Consuelo",
  description: "Contacta a Liz Consuelo para consultas sobre pedidos, tallas, productos y cambios.",
}

export default function ContactPage() {
  return (
    <div className="my-16 py-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-light mb-4 text-center">CONTACTO</h1>
      <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-8 md:mb-12">
        Estamos aqui para ayudarte con consultas sobre pedidos, productos, tallas o cambios.
      </p>

      {/* Customer Service Boxes */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="bg-neutral-50 p-6 flex flex-col items-center text-center">
          <div className="bg-white p-3 rounded-full mb-4">
            <MessageCircle className="w-6 h-6 text-neutral-700" />
          </div>
          <h3 className="font-medium mb-2">Consultas generales</h3>
          <p className="text-neutral-600 text-sm mb-3">Preguntas sobre la marca o productos</p>
          <Link href="#contact-form" className="text-sm underline underline-offset-4 mt-auto">
            Enviar mensaje
          </Link>
        </div>

        <div className="bg-neutral-50 p-6 flex flex-col items-center text-center">
          <div className="bg-white p-3 rounded-full mb-4">
            <ShoppingBag className="w-6 h-6 text-neutral-700" />
          </div>
          <h3 className="font-medium mb-2">Pedidos</h3>
          <p className="text-neutral-600 text-sm mb-3">Ayuda con compras o pagos</p>
          <Link href="#contact-form" className="text-sm underline underline-offset-4 mt-auto">
            Ayuda con pedido
          </Link>
        </div>

        <div className="bg-neutral-50 p-6 flex flex-col items-center text-center">
          <div className="bg-white p-3 rounded-full mb-4">
            <Truck className="w-6 h-6 text-neutral-700" />
          </div>
          <h3 className="font-medium mb-2">Envios</h3>
          <p className="text-neutral-600 text-sm mb-3">Tiempos de entrega y seguimiento</p>
          <Link href="#shipping-info" className="text-sm underline underline-offset-4 mt-auto">
            Detalles de envio
          </Link>
        </div>

        <div className="bg-neutral-50 p-6 flex flex-col items-center text-center">
          <div className="bg-white p-3 rounded-full mb-4">
            <RefreshCcw className="w-6 h-6 text-neutral-700" />
          </div>
          <h3 className="font-medium mb-2">Cambios</h3>
          <p className="text-neutral-600 text-sm mb-3">Politicas y proceso</p>
          <Link href="#returns-policy" className="text-sm underline underline-offset-4 mt-auto">
            Politica de cambios
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div id="contact-form">
          <h2 className="text-2xl font-light mb-6">Escribenos</h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                Correo
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
                placeholder="tu.correo@ejemplo.com"
              />
            </div>

            <div>
              <label htmlFor="order" className="block text-sm font-medium text-neutral-700 mb-1">
                Numero de pedido (si aplica)
              </label>
              <input
                type="text"
                id="order"
                name="order"
                className="w-full px-4 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
                placeholder="Ej. LC12345"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                Asunto
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
              >
                <option value="">Selecciona un tema</option>
                <option value="order">Estado del pedido</option>
                <option value="returns">Cambios o devoluciones</option>
                <option value="product">Informacion de producto</option>
                <option value="sizing">Consulta de tallas</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
                placeholder="Como podemos ayudarte?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>

        {/* Contact Information and Policies */}
        <div>
          <div className="space-y-6 mb-10">
            <div className="flex items-start">
              <Mail className="w-5 h-5 mt-1 mr-4 text-neutral-700" />
              <div>
                <h3 className="font-medium mb-1">Correo</h3>
                <p className="text-neutral-600">
                  <a href="mailto:lizconsuelo@gmail.com" className="hover:underline">lizconsuelo@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-5 h-5 mt-1 mr-4 text-neutral-700" />
              <div>
                <h3 className="font-medium mb-1">Telefono</h3>
                <p className="text-neutral-600">
                  <a href="tel:+51912114592" className="hover:underline">+51 912 114 592</a>
                </p>
                <p className="text-neutral-600 text-sm">Disponible de lunes a sabado, 10 a.m. - 6 p.m.</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-5 h-5 mt-1 mr-4 text-neutral-700" />
              <div>
                <h3 className="font-medium mb-1">Horario de atencion</h3>
                <p className="text-neutral-600">
                  Lunes - sabado: 10 a.m. - 6 p.m.
                  <br />
                  Domingo: cerrado
                </p>
                <p className="text-neutral-600 text-sm mt-1">
                  Respondemos la mayoria de consultas dentro de las siguientes 24 horas.
                </p>
              </div>
            </div>
          </div>

          <div id="shipping-info" className="mb-10">
            <h2 className="text-2xl font-light mb-4">Informacion de envios</h2>
            <div className="bg-neutral-50 p-6">
              <p className="text-neutral-600 mb-3">
                <strong>Lima Metropolitana:</strong> 2-3 dias habiles
              </p>
              <p className="text-neutral-600 mb-3">
                <strong>Provincias:</strong> 4-7 dias habiles
              </p>
              <p className="text-neutral-600">
                Todos los pedidos se procesan dentro de 1-2 dias habiles despues de confirmar el pago.
                Te enviaremos la informacion de seguimiento por correo o WhatsApp.
              </p>
            </div>
          </div>

          <div id="returns-policy">
            <h2 className="text-2xl font-light mb-4">Cambios y devoluciones</h2>
            <div className="bg-neutral-50 p-6">
              <p className="text-neutral-600 mb-3">
                Aceptamos cambios dentro de los 7 dias posteriores a la entrega para prendas sin uso y con empaque original.
              </p>
              <p className="text-neutral-600 mb-3">
                Los cambios por talla estan sujetos a disponibilidad. Contactanos para coordinar el proceso.
              </p>
              <p className="text-neutral-600">
                <Link href="/returns" className="underline underline-offset-4">
                  Ver politica completa
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-light mb-6">Sigue nuestra historia</h2>
        <div className="flex justify-center space-x-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-12 h-12 flex items-center justify-center border border-neutral-300 rounded-full group-hover:border-neutral-900 transition-colors mb-2">
              <span className="text-xl">📸</span>
            </div>
            <span className="text-sm text-neutral-700">Instagram</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-12 h-12 flex items-center justify-center border border-neutral-300 rounded-full group-hover:border-neutral-900 transition-colors mb-2">
              <span className="text-xl">👍</span>
            </div>
            <span className="text-sm text-neutral-700">Facebook</span>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-12 h-12 flex items-center justify-center border border-neutral-300 rounded-full group-hover:border-neutral-900 transition-colors mb-2">
              <span className="text-xl">🎵</span>
            </div>
            <span className="text-sm text-neutral-700">TikTok</span>
          </a>
        </div>
        <p className="text-neutral-600 mt-6 max-w-xl mx-auto">
          Siguenos en redes para ver ideas de outfits, novedades, promociones y contenido detras de la marca.
        </p>
      </div>
    </div>
  )
}
