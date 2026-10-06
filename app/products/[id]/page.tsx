import Link from "next/link"
import ImageCarousel from "@/components/image-carousel"
import SizeSelector from "@/components/size-selector"
import { getProductById, products } from "@/data/products"

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(Number(id))

  if (!product) {
    return <div className="py-12 px-4 text-center">Producto no encontrado</div>
  }

  // Stock status
  const stockStatus =
    product.stock > 10 ? "Disponible" : product.stock > 0 ? `Ultimas unidades (${product.stock})` : "Agotado"

  const stockStatusColor = product.stock > 10 ? "text-green-600" : product.stock > 0 ? "text-amber-600" : "text-red-600"

  return (
    <div className="mt-20 mb-12 py-8 px-4 sm:mt-24 sm:px-6 sm:py-12 md:my-16 md:px-8 md:py-16 lg:px-12 max-w-7xl mx-auto">
      <div className="mb-6">
        <Link href="/products" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
          ← Volver a productos
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div>
          <ImageCarousel images={product.images} alt={product.name} />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-light mb-2">{product.name}</h1>

          <div className="flex items-center gap-4 mb-4">
            <p className="text-xl font-medium">S/ {product.price.toLocaleString("es-PE")}</p>
          </div>

          <div className="flex flex-col gap-1 mb-6 sm:flex-row sm:items-center sm:gap-2">
            <span className={`text-sm font-medium ${stockStatusColor}`}>{stockStatus}</span>
            <span className="text-sm text-neutral-500">SKU: {product.sku}</span>
          </div>

          {/* Description - first paragraph */}
          <p className="text-neutral-700 mb-6">{product.description.split("\n")[0]}</p>

          {/* Size Selector */}
          <SizeSelector sizes={product.sizes} availableSizes={product.availableSizes} />

          {/* Material & Care */}
          <div className="mt-10 pt-6 border-t border-neutral-200">
            <h2 className="text-lg font-medium mb-4">Detalles</h2>
            <div className="grid gap-4">
              <div>
                <h3 className="text-sm font-medium">Material</h3>
                <p className="text-neutral-600">{product.material}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Cuidado</h3>
                <p className="text-neutral-600">{product.care}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Description */}
      <div className="mt-12 pt-8 border-t border-neutral-200">
        <h2 className="text-xl font-medium mb-6">Sobre este producto</h2>
        <div className="prose max-w-none text-neutral-700">
          {product.description.split("\n\n").map((paragraph: string, i: number) => (
            <p key={i} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Related Products would go here */}
    </div>
  )
}
