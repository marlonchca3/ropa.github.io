import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getNewArrivals } from "@/data/products"
import ProductImage from "@/components/product-image"
import { publicAssetPath } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Inicio",
  description: "Descubre la coleccion de Liz Consuelo, moda peruana moderna para el dia a dia.",
}

export default function Home() {
  // Get new arrivals from centralized data
  const newArrivals = getNewArrivals(3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row mt-[64px] mb-10 md:my-16 md:min-h-[90vh] md:py-16">
        {/* Left side - Image */}
        <div className="relative h-[55vh] min-h-[360px] md:h-auto md:min-h-0 md:w-1/2 order-2 md:order-1">
          <Image
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Coleccion de ropa Liz Consuelo"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          <div className="absolute bottom-5 right-5 z-10 h-24 w-24 overflow-hidden rounded-full bg-white shadow-lg ring-4 ring-white/80 sm:bottom-8 sm:right-8 sm:h-32 sm:w-32">
            <Image
              src={publicAssetPath("/lizconsuelo-logo.png")}
              alt="Sello de Liz Consuelo"
              width={512}
              height={512}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="md:w-1/2 flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-12 md:py-0 md:px-12 lg:px-16 bg-neutral-50 z-10 order-1 md:order-2">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 bg-neutral-200 text-neutral-700 text-xs tracking-wider mb-6 rounded-full">
              MODA PERUANA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-5 md:mb-6 leading-tight">
              <span className="block">Liz</span>
              <span className="block font-medium">Consuelo</span>
              <span className="block">Coleccion</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-700 mb-8 max-w-md">
              Prendas versatiles, modernas y comodas, creadas en Peru para acompanarte en cada momento del dia.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/products"
                className="px-8 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors duration-300 text-center"
              >
                Ver coleccion
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border border-neutral-300 text-neutral-700 hover:border-neutral-900 transition-colors duration-300 text-center"
              >
                Nuestra historia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light mb-6 text-center">COMPRA POR CATEGORIA</h2>
        <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-12">
          Explora prendas pensadas para combinar facil, sentirse bien y durar temporada tras temporada.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Tops Category */}
          <Link href="/products?category=tops" className="group relative overflow-hidden">
            <div className="aspect-square bg-neutral-100 relative">
              <Image
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Polos y blusas"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="font-medium text-base sm:text-lg">Polos y blusas</h3>
              <p className="text-sm text-white/80">Basicos y prendas casuales</p>
            </div>
          </Link>

          {/* Bottoms Category */}
          <Link href="/products?category=bottoms" className="group relative overflow-hidden">
            <div className="aspect-square bg-neutral-100 relative">
              <Image
                src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt="Pantalones"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="font-medium text-base sm:text-lg">Pantalones</h3>
              <p className="text-sm text-white/80">Jeans y chinos</p>
            </div>
          </Link>

          {/* Outerwear Category */}
          <Link href="/products?category=outerwear" className="group relative overflow-hidden">
            <div className="aspect-square bg-neutral-100 relative">
              <Image
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
                alt="Casacas y abrigos"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="font-medium text-base sm:text-lg">Abrigos</h3>
              <p className="text-sm text-white/80">Casacas y capas ligeras</p>
            </div>
          </Link>

          {/* Formal Category */}
          <Link href="/products?category=formal" className="group relative overflow-hidden">
            <div className="aspect-square bg-neutral-100 relative">
              <Image
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt="Ropa formal"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="font-medium text-base sm:text-lg">Formal</h3>
              <p className="text-sm text-white/80">Blazers y camisas</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light mb-8 md:mb-12 text-center">NUESTRA FILOSOFIA</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-4 sm:p-6 bg-white shadow-sm">
              <div className="w-16 h-16 flex items-center justify-center bg-neutral-100 rounded-full mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl mb-4 font-medium">Hecho con detalle</h3>
              <p className="text-neutral-600">
                Cada prenda se elige y disena cuidando el calce, la textura y los acabados.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white shadow-sm">
              <div className="w-16 h-16 flex items-center justify-center bg-neutral-100 rounded-full mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl mb-4 font-medium">Versatil</h3>
              <p className="text-neutral-600">
                Creamos piezas faciles de combinar para que puedas usarlas muchas veces y de distintas formas.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white shadow-sm">
              <div className="w-16 h-16 flex items-center justify-center bg-neutral-100 rounded-full mx-auto mb-6">
                <span className="text-2xl">🧵</span>
              </div>
              <h3 className="text-xl mb-4 font-medium">Autentica</h3>
              <p className="text-neutral-600">
                Liz Consuelo nace en Peru con una mirada femenina, moderna y cercana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Preview */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
            <div>
              <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-700 text-xs tracking-wider mb-4 rounded-full">
                RECIEN LLEGADO
              </span>
              <h2 className="text-2xl md:text-3xl font-light">Novedades</h2>
            </div>
            <Link
              href="/products"
              className="text-sm mt-4 md:mt-0 group flex items-center"
            >
              Ver toda la coleccion
              <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {newArrivals.map((product) => (
              <div key={product.id} className="group">
                <div className="mb-6 relative overflow-hidden bg-neutral-50">
                  <ProductImage
                    src={product.images}
                    alt={product.name}
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Link
                      href={`/products/${product.id}`}
                      className="w-full py-2 bg-white text-neutral-900 text-center text-sm block hover:bg-neutral-900 hover:text-white transition-colors"
                    >
                      Vista rapida
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-neutral-900 font-medium">S/ {product.price.toLocaleString("es-PE")}</p>
                </div>
                <p className="text-neutral-500 text-sm mb-3 line-clamp-1">
                  {product.description?.split('\n')[0]}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/products"
              className="inline-block px-10 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors duration-300"
            >
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>


    </div>
  )
}
