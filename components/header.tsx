"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { publicAssetPath } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="py-4 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-neutral-200 fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" aria-label="Liz Consuelo - Inicio" className="shrink-0">
          <Image
            src={publicAssetPath("/lizconsuelo-logo.png")}
            alt="Sello de Liz Consuelo"
            width={512}
            height={512}
            className="h-12 w-12 sm:h-14 sm:w-14"
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
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-20">
          <nav className="p-4">
            <ul className="space-y-6 text-center">
              <li>
                <Link href="/" className="text-xl text-neutral-900" onClick={() => setIsMenuOpen(false)}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-xl text-neutral-900" onClick={() => setIsMenuOpen(false)}>
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xl text-neutral-900" onClick={() => setIsMenuOpen(false)}>
                  Acerca
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xl text-neutral-900" onClick={() => setIsMenuOpen(false)}>
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
