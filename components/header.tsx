"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { publicAssetPath } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 bg-white/95 px-4 py-3 backdrop-blur-sm sm:px-6 sm:py-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" aria-label="Liz Consuelo - Inicio" className="shrink-0">
          <Image
            src={publicAssetPath("/lizconsuelo-logo.png")}
            alt="Sello de Liz Consuelo"
            width={512}
            height={512}
            className="h-10 w-10 sm:h-14 sm:w-14"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-neutral-700 hover:text-black transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-neutral-700 hover:text-black transition-colors">
                Productos
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-neutral-700 hover:text-black transition-colors">
                Acerca
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-neutral-700 hover:text-black transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-full border-b border-neutral-200 bg-white shadow-lg md:hidden"
        >
          <nav className="px-4 py-6">
            <ul className="mx-auto max-w-7xl space-y-4 text-center">
              <li>
                <Link href="/" className="block py-2 text-lg text-neutral-900" onClick={() => setIsMenuOpen(false)}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/products" className="block py-2 text-lg text-neutral-900" onClick={() => setIsMenuOpen(false)}>
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 text-lg text-neutral-900" onClick={() => setIsMenuOpen(false)}>
                  Acerca
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 text-lg text-neutral-900" onClick={() => setIsMenuOpen(false)}>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
