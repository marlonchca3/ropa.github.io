import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Liz Consuelo",
    default: "Liz Consuelo - Marca peruana de moda",
  },
  description: "Moda peruana con prendas modernas, versatiles y hechas para el dia a dia.",
  keywords: ["ropa", "moda", "Peru", "Liz Consuelo", "prendas"],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-neutral-900 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
