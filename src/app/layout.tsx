import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Law & Bar Academy",
  description: "Legal education and resources for aspiring lawyers",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col`}>
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  )
}
