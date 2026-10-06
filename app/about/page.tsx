import type { Metadata } from "next"
import Image from "next/image"
import { publicAssetPath } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Acerca",
  description: "Conoce la historia de Liz Consuelo, una marca peruana de moda moderna y versatil.",
}

export default function AboutPage() {
  return (
    <div className=" my-16 py-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-light mb-4 text-center">NUESTRA HISTORIA</h1>
      <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-8 md:mb-12">
        Liz Consuelo es una marca peruana creada para mujeres que buscan prendas modernas, comodas y con personalidad.
      </p>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
        <div>
          <Image src={publicAssetPath("/images/owner.png")} alt="Fundadora de Liz Consuelo" width={600} height={800} className="w-full h-auto" />
        </div>
        <div>
          <h2 className="text-2xl font-light mb-6">El comienzo</h2>
          <p className="text-neutral-600 mb-4">
            Liz Consuelo nacio en Peru como un proyecto de moda pensado para acompanar la vida real: trabajo, reuniones,
            salidas y momentos cotidianos donde una prenda bien elegida cambia como te sientes.
          </p>
          <p className="text-neutral-600 mb-4">
            Empezo como una pequena seleccion de basicos y piezas versatiles, y fue creciendo hasta convertirse en una
            propuesta de ropa femenina con estilo limpio, detalles cuidados y precios accesibles en soles.
          </p>
          <p className="text-neutral-600">
            Hoy, la marca busca representar una elegancia cercana: prendas que se sienten actuales, faciles de combinar y
            pensadas para mujeres peruanas con ritmo propio.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-light mb-6">Nuestros valores</h2>
          <p className="text-neutral-600 mb-4">
            En Liz Consuelo creemos que la moda debe sentirse bonita, practica y honesta. Por eso priorizamos siluetas
            favorecedoras, telas comodas y colores que se integran facilmente al guardarropa.
          </p>
          <p className="text-neutral-600 mb-4">
            Apostamos por prendas que puedas repetir sin aburrirte, combinarlas de muchas maneras y conservar por mas
            tiempo.
          </p>
          <p className="text-neutral-600">
            Cada coleccion se inspira en la vida urbana peruana, con una mirada moderna y femenina.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src={publicAssetPath("/images/workshop.png")}
            alt="Equipo de Liz Consuelo trabajando"
            width={600}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-light mb-6">Nuestra promesa</h2>
        <p className="text-neutral-600 mb-4">
          Queremos ofrecer ropa que te ayude a vestirte con seguridad y sencillez, sin perder tu estilo personal.
        </p>
        <p className="text-neutral-600">
          Gracias por ser parte de Liz Consuelo, una marca peruana hecha para acompanarte todos los dias.
        </p>
      </div>
    </div>
  )
}
