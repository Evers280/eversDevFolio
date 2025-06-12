import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Evers Darrell MBINI - Développeur Back-End | Portfolio",
  description:
    "Portfolio professionnel d'Evers Darrell MBINI, développeur back-end spécialisé en Django, Next.js et gestion de bases de données. Découvrez mes projets et compétences.",
  keywords: "développeur back-end, Django, Next.js, Python, API RESTful, bases de données, portfolio",
  authors: [{ name: "Evers Darrell MBINI" }],
  openGraph: {
    title: "Evers Darrell MBINI - Développeur Back-End",
    description: "Portfolio professionnel d'un développeur back-end passionné",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
