import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Aga od języków - AKademia Kreatywności",
  description: "Butikowa szkoła językowa oferująca kreatywne podejście do nauki języków obcych",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
